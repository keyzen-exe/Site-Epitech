AOS.init();

var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "3",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});




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

