const carrusel = document.querySelector('.carrusel');
let sliders = [];

let slideIndex = 0;

const peliculas = [
    { image: 'imagenes/1.jpg' },
    { image: 'imagenes/2.jpg' },
    { image: 'imagenes/3.jpg' },
    { image: 'imagenes/4.jpg' },
];

const crearSlide = () => {
  if (slideIndex >= peliculas.length) {
    slideIndex = 0;
  }

  let slide = document.createElement('div');
  let imgElement = document.createElement('img');
  let content = document.createElement('div');
  let h1 = document.createElement('h1');
  let p = document.createElement('p');

  imgElement.src = peliculas[slideIndex].image;
  imgElement.alt = peliculas[slideIndex].name;
  h1.textContent = peliculas[slideIndex].name;
  p.textContent = peliculas[slideIndex].des;

  content.appendChild(h1);
  content.appendChild(p);
  slide.appendChild(imgElement);
  slide.appendChild(content);
  carrusel.appendChild(slide);

  slide.className = 'slider';
  content.className = 'contenido-slider';
  h1.className = 'titulo-pelicula';
  p.className = 'descripcion';
  sliders.push(slide);

  if (sliders.length > 2) {
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length - 2)}px)`;
  }

  slideIndex++;
};

for (let i = 0; i < 3; i++) {
  crearSlide();
}



setInterval(() => {
  crearSlide();
}, 3000);


//Video de empresas

const videoCards = document.querySelectorAll('.video-card');

videoCards.forEach(item => {
  const video = item.querySelector('video');

  item.addEventListener('mouseover', () => {
    video.play();
  });

  item.addEventListener('mouseleave', () => {
    video.pause();
  });
});