const observer = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        obs.unobserve(entry.target); // Prevents re-animating after it has appeared
      }
    });
  },
  {
    threshold: 0.15, // Triggers when 15% of the element is visible
    rootMargin: "0px 0px -50px 0px", // Starts slightly before reaching bottom of viewport
  },
);

// Observe all elements with the .reveal class
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
