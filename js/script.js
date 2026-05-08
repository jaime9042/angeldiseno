// Menú responsive
const menuToggle = document.getElementById("menuToggle");
const navPrincipal = document.getElementById("navPrincipal");

menuToggle.addEventListener("click", () => {
  navPrincipal.classList.toggle("activo");
});

// Cerrar menú al hacer clic en un enlace
const enlacesMenu = document.querySelectorAll(".nav a");

enlacesMenu.forEach((enlace) => {
  enlace.addEventListener("click", () => {
    navPrincipal.classList.remove("activo");
  });
});