const icon = document.querySelector(".bx");
const toggle = document.querySelector(".toggle");
let btn = document.getElementsByTagName("a");

toggle.addEventListener("click", (e) => {
  document.body.classList.toggle("dark-mode");
  toggle.classList.toggle("dark-mode");
  icon.classList.toggle("bxs-moon");
  btn.style.color = "white";
});
