const icon = document.querySelector(".bx");
const toggle = document.querySelector(".toggle");
const backBtn = document.querySelector(".back-btn");
const btn = document.getElementsByTagName("btn");
console.log(btn);

toggle.addEventListener("click", (e) => {
  document.body.classList.toggle("dark-mode");
  toggle.classList.toggle("dark-mode");
  icon.classList.toggle("bxs-moon");
  backBtn.style.color = "white";
  btn.style.color = "white";
});
