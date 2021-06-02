const btnCompra = document.getElementById('btn-compra');
const btnExit = document.getElementById('btn-exit');

function toggleModal() {
  if (event.type === 'touchstart') event.preventDefault();
  const modal = document.getElementById('modal');
  modal.classList.toggle('active');
}

btnCompra.addEventListener('click', toggleMenu);
btnExit.addEventListener('touchstart', toggleMenu);
