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
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = " المزيد";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = " القليل";
    moreText.style.display = "inline";
  }
}
window.addEventListener("load", () => {
  const preload = document.querySelector(".preload");
  preload.classList.add("preload-finish");
});
