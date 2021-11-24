var input = document.querySelector(".input");
var text = document.querySelectorAll(".text");
// var h = document.getElementsByTagName("h3");
// var clear = document.querySelector(".clear");
// var button = document.querySelector(".button");

//Hide function
let hideFunc = function () {
  let st = input.value;
  let lowerCase = st.toLowerCase();
  let upperCase = st.toUpperCase();

  for (let i = 0; i < text.length; i++) {
    let textLower = text[i].textContent.toLowerCase();
    let textUpper = text[i].textContent.toUpperCase();

    if (text[i].textContent.includes(input.value)) {
      text[i].classList.remove("hidden");
    } else if (textLower.includes(lowerCase)) {
      text[i].classList.remove("hidden");
    } else if (textUpper.includes(upperCase)) {
      text[i].classList.remove("hidden");
    } else {
      text[i].classList.add("hidden");
    }
  }
};

// Hide using enter (Removed because of onkey func in html)
// document.addEventListener("keydown", function (x) {
//   if (x.key == "Enter") {
//     hideFunc();
//   }
// });

//Clear the hiddens
//Not using refresh because
// clear.addEventListener("click", function () {
//   for (let i = 0; i < text.length; i++) {
//     text[i].classList.remove("hidden");
//     input.value = "";
//   }
// });

//Mark the searched text
function search(e) {
  let searched = document.getElementById("search").value.trim();
  let para = document.querySelectorAll(".para");
  for (let i = 0; i < text.length; i++) {
    let re = new RegExp(searched, "g");
    let newText = para[i].textContent.replace(re, `<mark>${searched}</mark>`);
    document.querySelectorAll(".para")[i].innerHTML = newText;
  }
}

/*FILTER*/
var filterBlogs = document.getElementById("filter-blog");
var filterProjects = document.getElementById("filter-Projects");
var projects = document.querySelector(".project");
var blog = document.querySelector(".blogs");
var filter = document.querySelector(".filter");
var closeModal = document.querySelector(".close-modal");
var openModal = document.querySelector(".open-modal");
var overlay = document.querySelector(".overlay");
var clearFilter = document.getElementById("clear-filter");

clearFilter.addEventListener("click", function () {
  filter.classList.add("hidden");
  blog.classList.remove("hidden");
  projects.classList.remove("hidden");
  overlay.classList.add("hidden");
});

filterBlogs.addEventListener("click", function () {
  filter.classList.add("hidden");
  blog.classList.remove("hidden");
  projects.classList.add("hidden");
  overlay.classList.add("hidden");
});

filterProjects.addEventListener("click", function () {
  filter.classList.add("hidden");
  projects.classList.remove("hidden");
  blog.classList.add("hidden");
  overlay.classList.add("hidden");
});

closeModal.addEventListener("click", function () {
  filter.classList.add("hidden");
  overlay.classList.add("hidden");
});

overlay.addEventListener("click", function () {
  filter.classList.add("hidden");
  overlay.classList.add("hidden");
});

openModal.addEventListener("click", function () {
  filter.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

//Dark mode
//jquery because !!
$(".change").on("click", function () {
  if ($("body").hasClass("dark")) {
    $("body").removeClass("dark");
    $("h3").css("color", "");
    $(".change").removeClass("dark");
    $(".filter").removeClass("dark-box");
    localStorage.setItem("name", "1");
    $(".box").removeClass("dark-box");
    $("input").removeClass("dark-box-i");
    $(".text-mode").text("Light");
  } else {
    $("body").addClass("dark");
    $("h3").css("color", "#fff");
    // $(".change").addClass("dark");
    $(".box").addClass("dark-box");
    $(".filter").addClass("dark-box");
    localStorage.setItem("name", "0");
    $("input").addClass("dark-box-i");
    $(".text-mode").text("Dark");
  }
});

//Check for dark mode
let y = localStorage.getItem("name");

if (y == 1) {
  $("body").removeClass("dark");
  $("h3").css("color", "");
  $(".change").removeClass("dark");
  $(".filter").removeClass("dark-box");
  $(".box").removeClass("dark-box");
  $("input").removeClass("dark-box-i");
  $(".text-mode").text("Light");
} else {
  $("body").addClass("dark");
  $("h3").css("color", "#fff");
  // $(".change").addClass("dark");
  $(".box").addClass("dark-box");
  $(".filter").addClass("dark-box");
  $("input").addClass("dark-box-i");
  $(".text-mode").text("Dark");
}
