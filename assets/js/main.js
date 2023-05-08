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


const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveclasses();
    panel.classList.add("active");
  });
});

function removeActiveclasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}


/* MAPA */
var map = new ol.Map({
  target: 'map',
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    })
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat([-0.13, 51.5]),
    zoom: 10
  })
});

var places = [
  {
    name: 'Big Ben',
    lat: 51.5007,
    lon: -0.1246,
    type: 'monument'
  },
  {
    name: 'Buckingham Palace',
    lat: 51.5014,
    lon: -0.1419,
    type: 'monument'
  },
  {
    name: 'London Eye',
    lat: 51.5033,
    lon: -0.1195,
    type: 'attraction'
  },
  {
    name: 'Tower Bridge',
    lat: 51.5055,
    lon: -0.0754,
    type: 'monument'
  },
  {
    name: 'British Museum',
    lat: 51.5194,
    lon: -0.1269,
    type: 'attraction'
  }
];

var vectorSource = new ol.source.Vector();

for (var i = 0; i < places.length; i++) {
  var iconFeature = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([places[i].lon, places[i].lat])),
    name: places[i].name,
    type: places[i].type
  });
  vectorSource.addFeature(iconFeature);
}

var iconStyle = new ol.style.Style({
  image: new ol.style.Icon({
    anchor: [0.5, 1],
    src: 'https://openlayers.org/en/v6.5.0/examples/data/icon.png'
  })
});

var vectorLayer = new ol.layer.Vector({
  source: vectorSource,
  style: function(feature) {
    if (feature.get('type') === 'monument') {
      return iconStyle;
    }
  }
});

map.addLayer(vectorLayer);

var checkbox = document.getElementById('monument-checkbox');
checkbox.addEventListener('change', function() {
  if (checkbox.checked) {
    vectorLayer.setStyle(function(feature) {
      if (feature.get('type') === 'monument') {
        return iconStyle;
      }
    });
  } else {
    vectorLayer.setStyle(null);
  }
});

var resetButton = document.getElementById('reset-button');
resetButton.addEventListener('click', function() {
  checkbox.checked = false;
  vectorLayer.setStyle(null);
});
