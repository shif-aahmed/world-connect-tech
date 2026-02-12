document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector(".liveSportsSection");

  if (!section) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          section.classList.add("in-view");
        }
      });
    },
    { threshold: 0.3 }
  );

  observer.observe(section);
});
