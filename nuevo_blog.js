// Filtrar tarjetas dinámicamente
const searchInput = document.getElementById('search');
const cards = document.querySelectorAll('.card');

searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  cards.forEach(card => {
    const tags = card.dataset.tags.toLowerCase();
    card.style.display = tags.includes(query) ? 'block' : 'none';
  });
});
