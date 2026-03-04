// Gestion menu et bouton burger.
const burger = document.getElementById("burger");
const liens = document.getElementById("liens");

burger.addEventListener("click", () => {
  liens.classList.toggle("active");
});
