const toggleButton = document.getElementById("menu-toggle");
const navbar = document.getElementById("menu-links");

toggleButton.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent the default behavior of the link
  navbar.classList.toggle("active");
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});
const sections = document.querySelectorAll(".hidden");
sections.forEach((section) => {
  observer.observe(section);
});
