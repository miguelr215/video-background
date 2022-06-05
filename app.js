const toggle = document.querySelector(".toggle");
const showcase = document.querySelector(".showcase");

toggle.addEventListener("click", () => {
  if (!toggle.classList.contains("active")) {
    // toggle.classList.add("active");
    // showcase.classList.add("active");
    toggle.innerHTML = `<i class="fas fa-times"></i>`;
  } else {
    // toggle.classList.remove("active");
    // showcase.classList.remove("active");
    toggle.innerHTML = `<i class="fas fa-bars"></i>`;
  }
  toggle.classList.toggle("active");
  showcase.classList.toggle("active");
});
