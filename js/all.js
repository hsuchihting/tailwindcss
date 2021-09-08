let light = document.getElementById("light");
let dark = document.getElementById("dark");

light.addEventListener("click", function () {
  document.documentElement.classList.remove("dark");
});

dark.addEventListener("click", function () {
  document.documentElement.classList.add("dark");
});
