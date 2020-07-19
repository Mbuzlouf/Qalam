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
  "totalmarks10"
);
document.getElementById("oral10").innerHTML = localStorage.getItem("oral10");
document.getElementById("hand10").innerHTML = localStorage.getItem("hand10");
document.getElementById("exam10").innerHTML = localStorage.getItem("exam10");
document.getElementById("exam20").innerHTML = localStorage.getItem("exam20");
document.getElementById("oral20").innerHTML = localStorage.getItem("oral20");
document.getElementById("hand20").innerHTML = localStorage.getItem("hand20");
document.getElementById("presen10").innerHTML = localStorage.getItem(
  "presen10"
);
document.getElementById("exam30").innerHTML = localStorage.getItem("exam30");
document.getElementById("exam40").innerHTML = localStorage.getItem("exam40");
window.addEventListener("load", () => {
  const preload = document.querySelector(".preload");
  preload.classList.add("preload-finish");
});
