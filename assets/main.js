AOS.init({
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 900, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});
function togglePopup(message) {
  document.getElementById("body").classList.toggle("overflow-hidden")
  document.getElementById("popup-1").classList.toggle("active");
  let title = document.getElementById("titlePopup")
  let content = document.getElementById("contentPopup")
  switch (message) {
    case 1:
      title.innerHTML = 'Diseño página sign in - 2024 (Google)';
      content.innerHTML = 'Colaboramos estrechamente con Google para llevar a cabo una renovación total del diseño de la página de registro y acceso. Nuestro enfoque se centró en mejorar la usabilidad, la accesibilidad y la estética, dando a los usuarios una experiencia más intuitiva y satisfactoria al interactuar con la plataforma.';
      /* console.log("case1"); */
      break;
    case 2:
      title.innerHTML = 'Montaje CPD Azure - 2022 (Microsoft)';
      content.innerHTML = 'Nos encargamos de la planificación, instalación y configuración completa de los equipos informáticos necesarios para un nuevo centro de procesamiento de datos en la nube de Microsoft Azure. Nuestro equipo técnico trabajó de manera eficiente y meticulosa para garantizar un buen rendimiento y seguridad en esta infraestructura.';
      /* console.log("case2"); */
      break;
    case 3:
      title.innerHTML = 'Face ID - 2017';
      content.innerHTML = 'Como parte de un equipo colaborativo, contribuimos al diseño, desarrollo y posterior implementación del innovador sistema de reconocimiento facial, Face ID, para dispositivos de Apple. Nuestra participación abarcó desde la fase conceptual hasta la entrega final, demostrando nuestra capacidad para innovar y adaptarnos a las nuevas tecnologías.';
      /* console.log("case3"); */
      break;
    default:
      break;
  }
}