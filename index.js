const toggleButton = document.getElementById("menu-toggle");
const navbar = document.getElementById("menu-links");
console.log(navbar);

toggleButton.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent the default behavior of the link
  navbar.classList.toggle("active");
});
