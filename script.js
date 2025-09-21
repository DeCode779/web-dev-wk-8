// Dark Mode Toggle
const button = document.getElementById("theme-toggle");
button?.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

const style = document.createElement("style");
style.textContent = `
  .dark-mode {
    background: #222;
    color: #f9f9f9;
  }
  .dark-mode nav {
    background: #111;
  }
`;
document.head.appendChild(style);

// Contact Form Submission (simple client-side simulation)
const form = document.getElementById("contact-form");
const response = document.getElementById("form-response");

form?.addEventListener("submit", (e) => {
  e.preventDefault();
  response.textContent = "Thank you! Your message has been sent.";
  form.reset();
});