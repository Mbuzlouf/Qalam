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
function calc() {
  all = 0;

  let total =
    parseInt(document.getElementById("oral1").value) +
    parseInt(document.getElementById("hand1").value) +
    parseInt(document.getElementById("exam1").value) +
    parseInt(document.getElementById("exam2").value) +
    parseInt(document.getElementById("oral2").value) +
    parseInt(document.getElementById("hand2").value) +
    parseInt(document.getElementById("presen1").value) +
    parseInt(document.getElementById("exam3").value) +
    parseInt(document.getElementById("exam4").value);

  localStorage.setItem("totalmarks1", parseInt(total));
  localStorage.setItem(
    "oral1",
    parseInt(document.getElementById("oral1").value)
  );
  localStorage.setItem(
    "hand1",
    parseInt(document.getElementById("hand1").value)
  );
  localStorage.setItem(
    "exam1",
    parseInt(document.getElementById("exam1").value)
  );
  localStorage.setItem(
    "exam2",
    parseInt(document.getElementById("exam2").value)
  );
  localStorage.setItem(
    "oral2",
    parseInt(document.getElementById("oral2").value)
  );
  localStorage.setItem(
    "hand2",
    parseInt(document.getElementById("hand2").value)
  );
  localStorage.setItem(
    "presen1",
    parseInt(document.getElementById("presen1").value)
  );
  localStorage.setItem(
    "exam3",
    parseInt(document.getElementById("exam3").value)
  );
  localStorage.setItem(
    "exam4",
    parseInt(document.getElementById("exam4").value)
  );
}
