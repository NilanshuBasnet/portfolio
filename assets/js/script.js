
  document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("zoom-in");
            observer.unobserve(entry.target); // Trigger only once
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".scroll-zoom").forEach((el) => {
      observer.observe(el);
    });
  });

