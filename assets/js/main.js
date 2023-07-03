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


//TIMELINE
// Selecciona todos los elementos .timeline-content
let timelineContents = document.querySelectorAll('.timeline-content');

timelineContents.forEach(content => {
  // Selecciona el h2 y las etiquetas p dentro de .timeline-content
  let h2 = content.querySelector('h2');
  let pTags = content.querySelectorAll('p');

  h2.addEventListener('mouseover', () => {
    // Cuando el mouse pasa por encima del h2, remueve la clase hide-content de las etiquetas p
    pTags.forEach(p => {
      p.classList.remove('hide-content');
    });
  });

  h2.addEventListener('mouseout', () => {
    // Cuando el mouse sale del h2, agrega la clase hide-content a las etiquetas p
    pTags.forEach(p => {
      p.classList.add('hide-content');
    });
  });
});

