const removeActiveClasses = () => {
    slideElement.forEach((slide) => {
      slide.classList.remove("active");
    });
  };
  
const slideElement = document.querySelectorAll(".slide");
slideElement.forEach((slide) => {
  slide.addEventListener("click", () => {
    removeActiveClasses();
    slide.classList.add("active");
  });
});

/* counter */
function startCounters() {
  var counters = document.querySelectorAll('.counter-number');
  
  counters.forEach(function(counter) {
    var target = parseInt(counter.parentElement.getAttribute('data-target'));
    
    if (isNaN(target)) {
      return; // si no hay un target definido, no hacemos nada
    }
    
    var count = 0;
    var duration = 3000; // 3 segundos
    
    var interval = setInterval(function() {
      var increment = Math.ceil(target / (duration / 40));
      count += increment;
      counter.innerHTML = count;
      
      if (count >= target) {
        counter.innerHTML = target;
        clearInterval(interval);
      }
    }, 10);
  });
}

// Cuando se carga la página, se inician los contadores
window.addEventListener('scroll', startCounters);


// ajusta la posición de desplazamiento para compensar el navbar pegajoso
function adjustScrollPosition() {
  const navbarHeight = document.querySelector('.navbar').offsetHeight;
  window.scrollTo(window.scrollX, window.scrollY - navbarHeight);
}

// activa el ajuste de posición de desplazamiento para todos los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', () => {
    // desplaza la página hacia la sección de destino
    const section = document.querySelector(anchor.getAttribute('href'));
    section.scrollIntoView({ behavior: 'smooth' });
    // ajusta la posición de desplazamiento después de un breve retraso
    setTimeout(adjustScrollPosition, 100);
  });
});


