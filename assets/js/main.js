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
let timelineItems = document.querySelectorAll('.timeline-item');

timelineItems.forEach(item => {
  let content = item.querySelector('.timeline-content');
  let pTags = content.querySelectorAll('p');

  const showContent = () => {
    pTags.forEach(p => {
      p.classList.remove('hide-content');
    });
    content.classList.remove('hide-box-shadow'); // Agregamos esta línea para mostrar el box-shadow
  };

  const hideContent = () => {
    pTags.forEach(p => {
      p.classList.add('hide-content');
    });
    content.classList.add('hide-box-shadow'); // Agregamos esta línea para ocultar el box-shadow
  };

  item.addEventListener('mouseover', showContent);
  item.addEventListener('mouseout', hideContent);
});
