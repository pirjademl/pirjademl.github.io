const toggleButton = document.getElementById("menu-toggle");
const navbar = document.getElementById("menu-links");

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});

toggleButton.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent the default behavior of the link
  navbar.classList.toggle("active");
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});
const sections = document.querySelectorAll(".hidden");
sections.forEach((section) => {
  observer.observe(section);
});
