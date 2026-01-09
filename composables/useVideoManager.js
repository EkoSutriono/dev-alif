import { ref } from "vue";

const currentlyPlayingId = ref(null);
const players = new Map();

export const useVideoManager = () => {
  const registerPlayer = (id, player) => {
    players.set(id, player);
  };

  const unregisterPlayer = (id) => {
    players.delete(id);
    if (currentlyPlayingId.value === id) {
      currentlyPlayingId.value = null;
    }
  };

  const onPlay = (id) => {
    if (currentlyPlayingId.value && currentlyPlayingId.value !== id) {
      const prevPlayer = players.get(currentlyPlayingId.value);
      if (prevPlayer && typeof prevPlayer.pauseVideo === "function") {
        prevPlayer.pauseVideo();
      } else if (prevPlayer && typeof prevPlayer.pause === "function") {
        prevPlayer.pause();
      }
    }
    currentlyPlayingId.value = id;
  };

  return {
    registerPlayer,
    unregisterPlayer,
    onPlay,
    currentlyPlayingId,
  };
};
