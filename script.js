/*Toggle projects hide show
let buttonShow = document.querySelector(".hide");
let toggleItem = document.querySelectorAll(".toggle-item");
let hidden = document.querySelector(".hidden");
for (let i = 0; i < toggleItem.length; i++) {
  buttonShow.addEventListener("click", function () {
    toggleItem[i].classList.toggle("hidden");
    if (toggleItem[i].classList.contains("hidden")) {
      buttonShow.text = "show";
    } else {
      buttonShow.text = "hide";
    }
  });
}*/

/*Dark mode*/
$(".change").on("click", function () {
  if ($("body").hasClass("dark")) {
    $("body").removeClass("dark");
    $(".change").removeClass("dark");
    $(".toggle-item").removeClass("darkItem");
    $(".toggle-itemBlog").removeClass("dark-item11");
    $(".toggle-itemBlog").removeClass("darkItem");
    $(".toggle-itemBlog").addClass("white-item");
    localStorage.setItem("name", "1");
    document.querySelector(
      ".change"
    ).innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sun-fill" viewBox="0 0 16 16">
    <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
  </svg>`;
  } else {
    $("body").addClass("dark");
    $(".toggle-itemBlog").removeClass("white-item");
    $(".change").addClass("dark");
    $(".toggle-item").addClass("darkItem");
    $(".toggle-itemBlog").addClass("darkItem");
    $(".toggle-itemBlog").addClass("dark-item11");
    localStorage.setItem("name", "0");
    document.querySelector(
      ".change"
    ).innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon-fill" viewBox="0 0 16 16">
    <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>
  </svg>`;
  }
});

//Check for dark or light mode
let x = localStorage.getItem("name");

if (x == 1) {
  $("body").removeClass("dark");
  $(".change").removeClass("dark");
  $(".toggle-item").removeClass("darkItem");
  $(".toggle-itemBlog").removeClass("dark-item11");
  $(".toggle-itemBlog").removeClass("darkItem");
  $(".toggle-itemBlog").addClass("white-item");
  document.querySelector(
    ".change"
  ).innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sun-fill" viewBox="0 0 16 16">
<path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
</svg>`;
} else {
  $("body").addClass("dark");
  $(".toggle-itemBlog").removeClass("white-item");
  $(".change").addClass("dark");
  $(".toggle-item").addClass("darkItem");
  $(".toggle-itemBlog").addClass("darkItem");
  $(".toggle-itemBlog").addClass("dark-item11");
  document.querySelector(
    ".change"
  ).innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon-fill" viewBox="0 0 16 16">
  <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>
</svg>`;
}

/*Toggle blog hide*/
let buttonShowBlog = document.querySelector(".hide-blog");
let toggleItem1 = document.querySelectorAll(".toggle-itemBlog");

for (let i = 0; i < toggleItem1.length; i++) {
  buttonShowBlog.addEventListener("click", function () {
    toggleItem1[i].classList.toggle("hidden");
    if (toggleItem1[i].classList.contains("hidden")) {
      buttonShowBlog.text = "show";
    } else {
      buttonShowBlog.text = "hide";
    }
  });
}

/*Show All*/

//To do: fix show all toggle when site is refreshed after clicking a link (Completed)
var checkedToggle = document.querySelector(".dot");

let dot = document.querySelector(".dot");
let toggleItem = document.querySelectorAll(".toggle-item");

dot.addEventListener("click", function () {
  if ($("#switch").prop("checked")) {
    for (let i = 0; i < toggleItem.length - 2; i++) {
      toggleItem[i].classList.add("hidden");
    }
  } else {
    for (let i = 0; i < toggleItem.length - 1; i++) {
      toggleItem[i].classList.remove("hidden");
    }
  }
});
