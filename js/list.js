window.addEventListener("load", () => {
  const preload = document.querySelector(".preload");
  preload.classList.add("preload-finish");
});
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

$(".txtb").on("keyup", function (e) {
  if (e.keyCode == 13 && $(".txtb").val() != "") {
    var task = $("<div class='task'></div>").text($(".txtb").val());
    var del = $("<i class='fas fa-trash-alt'></i>").click(function () {
      var p = $(this).parent();
      p.fadeOut(function () {
        p.remove;
      });
    });

    var check = $("<i class='fas fa-check'></i>").click(function () {
      var p = $(this).parent();
      p.fadeOut(function () {
        $(".comp").append(p);
        p.fadeIn();
      });
      $(this).remove;
    });

    task.append(del, check);
    $(".notcomp").append(task);

    $(".txtb").val("");
  }
});
