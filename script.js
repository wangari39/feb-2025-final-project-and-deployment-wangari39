// Image slider
let images = ["images/slide1.jpg", "images/slide2.jpg", "images/slide3.jpg"];
let index = 0;

function changeSlide() {
  const img = document.getElementById("sliderImage");
  if (img) {
    index = (index + 1) % images.length;
    img.src = images[index];
  }
}
setInterval(changeSlide, 3000);

// Contact form validation
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const message = document.getElementById("formMessage");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const msg = document.getElementById("message").value.trim();

      if (name && email && msg) {
        message.textContent = "Thank you for your message!";
        form.reset();
      } else {
        message.textContent = "Please fill in all fields.";
      }
    });
  }
});
