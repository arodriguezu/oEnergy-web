const slideElements = document.querySelectorAll(".slide");

slideElements.forEach((slide) => {
  slide.addEventListener("click", () => {
    slideElements.forEach((s) => s.classList.remove("active"));
    slide.classList.add("active");
  });
});

const counters = document.querySelectorAll('.counter');

const animateNumbers = () => {
  counters.forEach((counter) => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.querySelector('.counter-number').innerText;
    const increment = target / 100;

    if (count < target) {
      counter.querySelector('.counter-number').innerText = Math.ceil(count + increment);
      setTimeout(animateNumbers, 300);
    }
  });
};

const checkScroll = () => {
  const triggers = document.querySelectorAll('.counter');
  const windowHeight = window.innerHeight;

  triggers.forEach((trigger) => {
    const triggerTop = trigger.getBoundingClientRect().top;

    if (triggerTop < windowHeight) {
      animateNumbers();
    }
  });
};

window.addEventListener('scroll', checkScroll);

ScrollReveal().reveal('.container-year', {
  delay: 200,
  distance: '50px',
  interval: 200,
  reset: true
});

const panels = document.querySelectorAll('.director-panel');

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        // Remover la clase active de todas las tarjetas
        panels.forEach(otherPanel => {
            if (otherPanel !== panel) {
                otherPanel.classList.remove('active');
            }
        });

        // Toggle la clase active en la tarjeta clickeada
        panel.classList.toggle('active');
    });
});


function expandPanel(panel) {
  panel.classList.toggle('active');
}


// Efecto de parallax al hacer scroll
window.addEventListener("scroll", function() {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  var parallaxSections = document.getElementsByClassName("parallax-section");

  for (var i = 0; i < parallaxSections.length; i++) {
    var section = parallaxSections[i];
    var sectionOffset = section.offsetTop;
    var yPos = (scrollTop - sectionOffset) / 2;

    section.style.backgroundPositionY = yPos + "px";
  }
});


console.log("script loaded")
//TIMELINE 
let circleItems = document.querySelectorAll('.circle');

circleItems.forEach(circle => {
  let content = circle.parentNode;
  let pTags = content.querySelectorAll('p');
  let imageContainer = content.querySelector('.timeline-image-container'); // Selecciona el contenedor de la imagen
  let icon = circle.querySelector('.fa'); // Selecciona el icono dentro del círculo

  const showContent = () => {
    pTags.forEach(p => {
      p.classList.remove('hide-content');
    });
    if (imageContainer) {
      imageContainer.classList.remove('hide-content'); // Muestra el contenedor de la imagen
      let imageContainerPTags = imageContainer.querySelectorAll('p');
      imageContainerPTags.forEach(p => p.classList.remove('hide-content')); // Muestra los párrafos dentro del contenedor de la imagen
    }
    content.classList.remove('hide-box-shadow'); 
    circle.style.borderColor = "#4674b6";  // Cambia el color del borde del círculo
    if (icon) icon.style.color = "#4674b6";  // Cambia el color del icono
  };

  const hideContent = () => {
    pTags.forEach(p => {
      p.classList.add('hide-content');
    });
    if (imageContainer) {
      imageContainer.classList.add('hide-content'); // Oculta el contenedor de la imagen
      let imageContainerPTags = imageContainer.querySelectorAll('p');
      imageContainerPTags.forEach(p => p.classList.add('hide-content')); // Oculta los párrafos dentro del contenedor de la imagen
    }
    content.classList.add('hide-box-shadow');
    circle.style.borderColor = "grey";  // Cambia el color del borde del círculo a gris
    if (icon) icon.style.color = "grey";  // Cambia el color del icono a gris
  };

  circle.addEventListener('mouseover', showContent);
  circle.addEventListener('mouseout', hideContent);
});




  // Función para verificar si un elemento está visible en la ventana
  function isElementVisible(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Función para agregar la clase de animación cuando el elemento está visible
  function addAnimationClass() {
    var elements = document.querySelectorAll('.fadeInLeft');

    elements.forEach(function (element) {
      if (isElementVisible(element)) {
        element.classList.add('animate');
      }
    });
  }

  // Detectar cuando se hace scroll y llamar a la función para agregar la clase de animación
  window.addEventListener('scroll', addAnimationClass);


  //SLIDER
  var swiper = new Swiper(".slide-content", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });