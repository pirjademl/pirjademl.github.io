const toggleButton = document.getElementById("menu-toggle");
const navbar = document.getElementById("menu-links");
console.log(navbar);

toggleButton.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent the default behavior of the link
  navbar.classList.toggle("active");
});
function sendEmail() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const data = {
    name: name,
    email: email,
    message: message,
  };

  fetch("https://formspree.io/pirjademl7@gmail.com", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        alert("Message sent successfully!");
      } else {
        alert("Message failed to send. Please try again later.");
      }
    });
}

document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission

    sendEmail();
  });
