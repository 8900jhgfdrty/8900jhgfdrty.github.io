document.addEventListener('DOMContentLoaded', function () {
  const flipButtons = document.querySelectorAll('.flip-button');

  flipButtons.forEach(button => {
    button.addEventListener('click', function (e) {
      e.preventDefault();
      const cardInner = this.closest('.card-inner');

      if (cardInner) {
        cardInner.classList.toggle('flipped');
      }
    });
  });
});