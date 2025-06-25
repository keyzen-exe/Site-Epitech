AOS.init();


function toggleCheck(el) {
    el.classList.toggle('selected');
  }


  var map = L.map('map').setView([45.74188, 4.84179], 16);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([45.74188, 4.84179]).addTo(map)
    .bindPopup('Eden Agence Lyon 7ème <br>2 Rue du Professeur Charles Appleton, 69007 Lyon')
    .openPopup();