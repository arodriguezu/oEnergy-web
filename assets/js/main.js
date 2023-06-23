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

