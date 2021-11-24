/*Toggle color box
let buttonShow = document.querySelector(".show");
let toggleItem = document.querySelectorAll(".color-box");
let toggleItem1 = document.querySelector(".color-box1");
let show2 = document.querySelector(".show2");
let hidden = document.querySelector(".hidden");

for (let i = 0; i < toggleItem.length; i++) {
  buttonShow.addEventListener("click", function () {
    toggleItem[i].classList.add("hidden");
    toggleItem1.classList.toggle("hidden");
  });
}

for (let i = 0; i < toggleItem.length; i++) {
  show2.addEventListener("click", function () {
    toggleItem[i].classList.remove("hidden");
    toggleItem1.classList.add("hidden");
  });
}*/

/*Font color change
let blue = document.querySelector(".blue");
let black = document.querySelector(".black");
let green = document.querySelector(".green");
let color = document.querySelector(".color");

blue.addEventListener("click", function () {
  color.classList.remove("green-color");
  color.classList.add("blue-color");
});

green.addEventListener("click", function () {
  color.classList.remove("blue-color");
  color.classList.add("green-color");
});

black.addEventListener("click", function () {
  color.classList.remove("blue-color");
  color.classList.remove("green-color");
});*/

/*Dark mode*/
$(".change").on("click", function () {
  if ($("body").hasClass("dark")) {
    $("body").removeClass("dark");
    $(".change").removeClass("dark");
    $(".bw").removeClass("white");
    $(".bw").addClass("black");
    $(".color-box1").removeClass("darkItem");
    localStorage.setItem("name", "1");
    $(".color-box").removeClass("darkItem");
    $(".change").text("Light");
  } else {
    $("body").addClass("dark");
    $(".change").addClass("dark");
    $(".bw").addClass("white");
    localStorage.setItem("name", "0");
    $(".bw").removeClass("black");
    $(".color-box1").addClass("darkItem");
    $(".color-box").addClass("darkItem");
    $(".change").text("Dark");
  }
});

//Check for dark mode
let y = localStorage.getItem("name");

if (y == 1) {
  $("body").removeClass("dark");
  $(".change").removeClass("dark");
  $(".bw").removeClass("white");
  $(".bw").addClass("black");
  $(".color-box1").removeClass("darkItem");
  // localStorage.setItem("name", "1");
  $(".color-box").removeClass("darkItem");
  $(".change").text("Light");
} else {
  $("body").addClass("dark");
  $(".change").addClass("dark");
  $(".bw").addClass("white");
  // localStorage.setItem("name", "0");
  $(".bw").removeClass("black");
  $(".color-box1").addClass("darkItem");
  $(".color-box").addClass("darkItem");
  $(".change").text("Dark");
}
