// Obtener todos los elementos figure
const figures = document.querySelectorAll('figure');

// Agregar evento click a cada figura
figures.forEach((figure) => {
  figure.addEventListener('click', () => {

    // Obtener la imagen, precio y descripción de la figura seleccionada
    const img = figure.querySelector('img');
    const price = figure.querySelector('figcaption').textContent;
    const description = figure.querySelector('.description').textContent;

    // Mostrar la ventana emergente
    const modal = document.querySelector('.modal');
    modal.style.display = 'block';

    // Rellenar la ventana emergente con la imagen, precio y descripción
    const modalContent = modal.querySelector('.modal-content');
    modalContent.querySelector('img').src = img.src;
    modalContent.querySelector('h2').textContent = price;
    modalContent.querySelector('.description').textContent = description;
    modalContent.querySelector('.description').style.display = 'block';
  });
});

// Agregar evento click al botón de cierre de la ventana emergente
document.querySelector('.close').addEventListener('click', () => {
  document.querySelector('.modal').style.display = 'none';
});

// Agregar evento click al botón de contacto
