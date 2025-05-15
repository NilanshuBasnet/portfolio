const progressBar = document.getElementById("progress-bar");
  const loader = document.getElementById("loader");
  const mainContent = document.getElementById("main-content");

  // Simulate incremental loading progress
  let progress = 0;
  const interval = setInterval(() => {
    if (progress < 90) {
      progress += Math.random() * 10;
      progressBar.style.width = `${Math.min(progress, 90)}%`;
    }
  }, 100);

  // On full page load
  window.addEventListener("load", () => {
    clearInterval(interval);
    progressBar.style.width = "100%";

    setTimeout(() => {
      loader.style.display = "none";
      mainContent.classList.remove("hidden");
    }, 500); // Wait a bit for progress bar to reach 100%
  });


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

