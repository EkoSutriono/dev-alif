const observers = new WeakMap();

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("animate", {
    mounted(el, binding) {
      const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("animate-in");
            el.classList.remove("animate-out");

            if (binding.modifiers.stagger) {
              const items = el.querySelectorAll(".animate-item");
              items.forEach((item, index) => {
                item.style.transitionDelay = `${index * 0.1}s`;
                item.classList.add("animate-in");
                item.classList.remove("animate-out");
              });
            }

            if (binding.modifiers.once) {
              observer.unobserve(el);
            }
          } else {
            if (!binding.modifiers.once) {
              el.classList.add("animate-out");
              el.classList.remove("animate-in");

              if (binding.modifiers.stagger) {
                const items = el.querySelectorAll(".animate-item");
                items.forEach((item) => {
                  item.classList.add("animate-out");
                  item.classList.remove("animate-in");
                });
              }
            }
          }
        });
      }, options);

      observer.observe(el);
      observers.set(el, observer);
    },
    unmounted(el) {
      const observer = observers.get(el);
      if (observer) {
        observer.disconnect();
        observers.delete(el);
      }
    },
  });
});
