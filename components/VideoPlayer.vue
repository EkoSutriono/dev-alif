<template>
  <div
    class="relative overflow-hidden bg-black group/player"
    :class="[isBackground ? 'absolute inset-0 pointer-events-none' : 'w-full h-full']"
  >
    <template v-if="autoplay">
      <iframe
        v-if="type === 'youtube' && videoId"
        class="w-full h-full"
        :class="{ 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2': aspectCover }"
        :style="
          aspectCover
            ? { minWidth: '100%', minHeight: '100%', width: '177.77vh', height: '56.25vw' }
            : {}
        "
        :src="directEmbedUrl"
        frameborder="0"
        allow="autoplay; encrypted-media; fullscreen; compute-pressure"
        allowfullscreen
      ></iframe>
      <video
        v-else-if="type === 'native'"
        autoplay
        muted
        loop
        playsinline
        class="w-full h-full object-cover"
        :class="{ 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2': aspectCover }"
      >
        <source :src="url" type="video/mp4" />
      </video>
    </template>

    <template v-else>
      <div v-if="isActive" class="w-full h-full">
        <div v-if="type === 'youtube'" :id="playerId" class="w-full h-full"></div>
        <iframe
          v-else-if="type === 'instagram'"
          class="w-full h-full"
          :src="embedUrl"
          frameborder="0"
          allow="autoplay; encrypted-media; fullscreen; compute-pressure"
          allowfullscreen
        ></iframe>
        <video
          v-else-if="type === 'native'"
          :id="playerId"
          ref="player"
          class="w-full h-full"
          :class="[orientation === 'portrait' ? 'object-contain' : 'object-cover']"
          controls
          autoplay
          playsinline
          @play="onPlay(playerId)"
          @pause="onStop(playerId)"
          @ended="onStop(playerId)"
        >
          <source :src="url" type="video/mp4" />
        </video>
      </div>

      <div v-else-if="type" class="w-full h-full cursor-pointer relative" @click="handleStartVideo">
        <img
          v-if="thumbnailUrl"
          :src="thumbnailUrl"
          class="w-full h-full object-cover brightness-75 group-hover/player:brightness-90 transition-all duration-500 scale-105 group-hover/player:scale-100"
          alt="Video Preview"
          @error="handleThumbnailError"
        />
        <video
          v-else-if="type === 'native' && !isActive"
          class="w-full h-full object-cover brightness-75 group-hover/player:brightness-90 transition-all duration-500 scale-105 group-hover/player:scale-100"
          preload="metadata"
          muted
          playsinline
        >
          <source :src="url" type="video/mp4" />
        </video>
        <div v-else class="w-full h-full bg-black"></div>

        <div class="absolute inset-0 flex items-center justify-center">
          <div
            class="w-16 h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover/player:scale-110 group-hover/player:bg-white/30 transition-all duration-300"
          >
            <svg
              viewBox="0 0 24 24"
              class="w-8 h-8 md:w-10 md:h-10 text-white fill-current translate-x-0.5"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
        <div
          class="absolute bottom-6 left-6 right-6 opacity-0 group-hover/player:opacity-100 transition-opacity duration-300"
        >
          <div class="h-1 w-full bg-white/20 rounded-full overflow-hidden">
            <div class="h-full w-0 bg-white"></div>
          </div>
        </div>
      </div>
    </template>

    <div v-if="!type" class="flex items-center justify-center w-full h-full text-white text-xs">
      URL Video Tidak Valid
    </div>
  </div>
</template>

<script setup>
import { ref, onUnmounted, computed, nextTick, useId } from "vue";
import { useVideoManager } from "~/composables/useVideoManager";

const props = defineProps({
  url: {
    type: String,
    required: true,
  },
  autoplay: {
    type: Boolean,
    default: false,
  },
  mute: {
    type: Boolean,
    default: false,
  },
  isBackground: {
    type: Boolean,
    default: false,
  },
  aspectCover: {
    type: Boolean,
    default: false,
  },
  thumbnail: {
    type: String,
    default: null,
  },
  orientation: {
    type: String,
    default: "landscape",
  },
});

const { registerPlayer, unregisterPlayer, onPlay, onStop } = useVideoManager();
const playerId = useId();
const player = ref(null);
const isActive = ref(false);

const type = computed(() => {
  if (!props.url) return null;
  const u = props.url.toLowerCase();

  if (u.includes("youtube.com") || u.includes("youtu.be")) return "youtube";
  if (u.includes("instagram.com")) return "instagram";

  if (
    u.includes(".mp4") ||
    u.includes("cdn.qiblat.my.id") ||
    u.startsWith("/") ||
    (u.startsWith("http") && !u.includes("youtube") && !u.includes("instagram"))
  ) {
    return "native";
  }
  return null;
});

const videoId = computed(() => {
  if (!props.url) return null;
  const url = props.url;

  if (type.value === "youtube") {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=|shorts\/)([^#&?]*).*/;
    const match = url.match(regExp);
    if (match && match[2].length === 11) return match[2];
  }

  if (type.value === "instagram") {
    const match = url.match(/instagram.com\/(p|reel|reels)\/([^/?#&]+)/);
    return match ? match[2] : null;
  }

  return null;
});

const thumbnailUrl = computed(() => {
  if (props.thumbnail) return props.thumbnail;
  if (type.value === "youtube" && videoId.value) {
    return `https://i.ytimg.com/vi/${videoId.value}/hqdefault.jpg`;
  }
  return null;
});

const mqThumbnailUrl = computed(() => {
  if (type.value === "youtube" && videoId.value) {
    return `https://i.ytimg.com/vi/${videoId.value}/mqdefault.jpg`;
  }
  return null;
});

const handleThumbnailError = (e) => {
  const currentSrc = e.target.src;
  if (currentSrc.includes("hqdefault")) {
    e.target.src = mqThumbnailUrl.value;
  }
};

const directEmbedUrl = computed(() => {
  if (type.value === "youtube" && videoId.value) {
    return `https://www.youtube.com/embed/${videoId.value}?rel=0&autoplay=1&mute=${props.mute ? 1 : 0}&controls=0&loop=1&playlist=${videoId.value}&modestbranding=1&playsinline=1&iv_load_policy=3&enablejsapi=1`;
  }
  return "";
});

const embedUrl = computed(() => {
  if (type.value === "youtube" && videoId.value) {
    return `https://www.youtube.com/embed/${videoId.value}?rel=0&autoplay=1&enablejsapi=1&modestbranding=1&iv_load_policy=3&controls=1&showinfo=0`;
  }
  if (type.value === "instagram" && videoId.value) {
    return `https://www.instagram.com/p/${videoId.value}/embed/captioned=0`;
  }
  return props.url;
});

const handleStartVideo = () => {
  isActive.value = true;
  if (type.value === "youtube") {
    nextTick(() => {
      initYoutube();
    });
  } else if (type.value === "native") {
    nextTick(() => {
      if (player.value) {
        registerPlayer(playerId, player.value);
      }
    });
  } else if (type.value === "instagram") {
    onPlay(playerId);
  }
};

const initYoutube = () => {
  if (window.YT && window.YT.Player) {
    createPlayer();
    return;
  }

  if (!window.loadingYTAPI) {
    window.loadingYTAPI = true;
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }

  let attempts = 0;
  const maxAttempts = 50;
  const checkYT = setInterval(() => {
    attempts++;
    if (window.YT && window.YT.Player) {
      clearInterval(checkYT);
      window.loadingYTAPI = false;
      createPlayer();
    } else if (attempts >= maxAttempts) {
      clearInterval(checkYT);
      window.loadingYTAPI = false;
      console.warn("YouTube API failed to load");
    }
  }, 100);
};

const createPlayer = () => {
  if (!videoId.value || !isActive.value) return;

  player.value = new window.YT.Player(playerId, {
    videoId: videoId.value,
    playerVars: {
      autoplay: 1,
      mute: props.mute ? 1 : 0,
      controls: 1,
      modestbranding: 1,
      rel: 0,
      showinfo: 0,
      iv_load_policy: 3,
      playsinline: 1,
    },
    events: {
      onReady: (event) => {
        registerPlayer(playerId, event.target);
      },
      onStateChange: (event) => {
        if (event.data === window.YT.PlayerState.PLAYING) {
          onPlay(playerId);
        } else if (
          event.data === window.YT.PlayerState.PAUSED ||
          event.data === window.YT.PlayerState.ENDED
        ) {
          onStop(playerId);
        }
      },
    },
  });
};

const handleFullscreenChange = () => {
  if (props.orientation !== "portrait") return;

  if (document.fullscreenElement || document.webkitFullscreenElement) {
    if (window.screen && window.screen.orientation && window.screen.orientation.lock) {
      window.screen.orientation.lock("portrait").catch((err) => {
        console.warn("Screen orientation lock failed:", err);
      });
    }
  } else {
    if (window.screen && window.screen.orientation && window.screen.orientation.unlock) {
      window.screen.orientation.unlock();
    }
  }
};

onMounted(() => {
  document.addEventListener("fullscreenchange", handleFullscreenChange);
  document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
});

onUnmounted(() => {
  document.removeEventListener("fullscreenchange", handleFullscreenChange);
  document.removeEventListener("webkitfullscreenchange", handleFullscreenChange);
  if (player.value) {
    try {
      if (typeof player.value.destroy === "function") {
        player.value.destroy();
      }
    } catch (e) {
      console.error("Error destroying player:", e);
    }
    unregisterPlayer(playerId);
    player.value = null;
  }
  isActive.value = false;
});
</script>
