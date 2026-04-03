/* ---------------------------------------
         Gestion du menu burger
----------------------------------------*/
const burger = document.getElementById("burger");
const liens = document.getElementById("liens");

burger.addEventListener("click", () => {
  // Active et désactive la classe 'active' pour montrer ou masquer le menu.
  liens.classList.toggle("active");
});

/* ---------------------------------------
         Gestion des carousels
--------------------------------------- */
document.querySelectorAll(".carousel").forEach((carrousel) => {
  const piste = carrousel.querySelector(".carousel-piste");
  const image = carrousel.querySelectorAll(".image");
  const boutonSuivant = carrousel.querySelector(".suivant");
  const boutonPrecedent = carrousel.querySelector(".precedent");

  let indice = 0; // Index de la diapositive actuelle.

  // Fonction pour déplacer la piste et afficher la bonne diapositive.
  function mettreAJourCarrousel() {
    piste.style.transform = `translateX(-${indice * 100}%)`;
  }

  // Bouton suivant.
  boutonSuivant.addEventListener("click", () => {
    indice = (indice + 1) % image.length; // boucle à zéro si fin.
    mettreAJourCarrousel();
  });

  // Bouton précédent.
  boutonPrecedent.addEventListener("click", () => {
    indice = (indice - 1 + image.length) % image.length; // boucle à la fin si début.
    mettreAJourCarrousel();
  });
});
