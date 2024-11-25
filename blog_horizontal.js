function filterCards() {
  let input = document.getElementById('search-input').value.toLowerCase();
  let cards = document.querySelectorAll('.card');

  cards.forEach(function(card) {
    let tags = card.getAttribute('data-tags').toLowerCase();
    if (tags.includes(input)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}
