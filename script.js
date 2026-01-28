// Theme Toggle
const toggle = document.getElementById("themeToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  toggle.textContent = document.body.classList.contains("light") ? "☀️" : "🌙";
});

// Custom Cursor
const dot = document.querySelector(".cursor-dot");
const ring = document.querySelector(".cursor-ring");

document.addEventListener("mousemove", e => {
  dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  ring.style.transform = `translate(${e.clientX - 18}px, ${e.clientY - 18}px)`;
});
