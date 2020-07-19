// Ham Bar
const hambar = document.querySelector(".hambar");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hambar.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });
});
// ---
document.getElementById("total3").innerHTML = localStorage.getItem(
  "totalmarks1"
);
document.getElementById("oral1").innerHTML = localStorage.getItem("oral1");
document.getElementById("hand1").innerHTML = localStorage.getItem("hand1");
document.getElementById("exam1").innerHTML = localStorage.getItem("exam1");
document.getElementById("exam2").innerHTML = localStorage.getItem("exam2");
document.getElementById("oral2").innerHTML = localStorage.getItem("oral2");
document.getElementById("hand2").innerHTML = localStorage.getItem("hand2");
document.getElementById("presen1").innerHTML = localStorage.getItem("presen1");
document.getElementById("exam3").innerHTML = localStorage.getItem("exam3");
document.getElementById("exam4").innerHTML = localStorage.getItem("exam4");
window.addEventListener("load", () => {
  const preload = document.querySelector(".preload");
  preload.classList.add("preload-finish");
});
