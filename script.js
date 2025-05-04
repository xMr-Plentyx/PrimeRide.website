// Scroll-to-top button behavior
const scrollTopBtn = document.getElementById("scrollTopBtn");
window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
};
scrollTopBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// FAQ toggle functionality
const faqItems = document.querySelectorAll(".faq-item");
faqItems.forEach((item) => {
  item.querySelector(".faq-question").addEventListener("click", () => {
    item.classList.toggle("open");
  });
});

// Fade-in animation on scroll
const faders = document.querySelectorAll(".fade-in");
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });
faders.forEach((el) => observer.observe(el));

// Image slider functionality for each service
const sliders = document.querySelectorAll(".image-slider");
sliders.forEach((slider) => {
  const images = slider.querySelectorAll("img");
  let currentIndex = 0;

  function showImage(index) {
    images.forEach((img, i) => {
      img.style.display = i === index ? "block" : "none";
    });
  }

  showImage(currentIndex);

  slider.querySelector(".next").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  });

  slider.querySelector(".prev").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  });
});

// Booking form validation
document.getElementById("booking-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const service = document.getElementById("service").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;

  if (!name || !phone || !service || !date || !time) {
    alert("Please fill out all required fields.");
    return;
  }

  // Optional: handle submission to backend here

  alert("Thank you for booking with PrimeRide!");
  document.getElementById("booking-form").reset();
});
