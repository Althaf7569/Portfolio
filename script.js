// Scroll animation
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.2
});

sections.forEach(section => {
  observer.observe(section);
});

// Form submission handler
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }

  // For now, just log the data
  console.log({ name, email, message });

  alert("Thank you! Your message has been sent.");

  this.reset();
});