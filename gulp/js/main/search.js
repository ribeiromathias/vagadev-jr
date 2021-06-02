const btnSearch = document.getElementById('btn-search');

function toggleSearch() {
  if (event.type === 'touchstart') event.preventDefault();
  const search = document.getElementById('search');
  search.classList.toggle('active');
}

btnSearch.addEventListener('click', toggleSearch);
btnSearch.addEventListener('touchstart', toggleSearch);
