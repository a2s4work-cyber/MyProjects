let numbers = Array.from(document.querySelectorAll(".number"));
let ops = Array.from(document.querySelectorAll(".op"));
let clear = document.querySelector(".clear");
let conf = document.querySelector(".confirm");
let del = document.querySelector(".del");
let view = document.getElementById("view");

numbers.forEach(function (elem) {
  elem.addEventListener("click", function (e) {
    let NumberContent = e.target.textContent;
    view.value += NumberContent;
  });
});

ops.forEach(function (elem) {
  elem.addEventListener("click", function (e) {
    let OpContent = e.target.textContent;
    view.value += OpContent;
  });
});

del.addEventListener("click", function () {
  view.value = view.value.slice(0, -1);
});

clear.addEventListener("click", function () {
  document.getElementById("view").value = "";
});

conf.addEventListener("click", function () {
  try {
    view.value = eval(view.value);
  } catch {
    view.value = "Error";
  }
});
