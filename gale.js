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
    const imgModal = modalContent.querySelector('img');
    imgModal.src = img.src;
    imgModal.classList.add('selected'); // agregar clase selected a la imagen
    
    modalContent.querySelector('.description-1').textContent = description;
    modalContent.querySelector('.description').style.display = 'block';

    // Agregar clase selected a la figura seleccionada
    figure.classList.add('selected');
  });
});

// Agregar evento click al botón de cierre de la ventana emergente
document.querySelector('.close').addEventListener('click', () => {
  document.querySelector('.modal').style.display = 'none';
});

// Agregar evento click al documento para cerrar la ventana emergente cuando se hace clic fuera de la imagen seleccionada
document.addEventListener('click', (e) => {
  if (!e.target.closest('.modal-content') &&!e.target.closest('figure')) {
    document.querySelector('.modal').style.display = 'none';
  }
});