const accordions = document.querySelectorAll('.accordion');
accordions.forEach(acc => {
  acc.querySelector('.accordion-header').addEventListener('click', () => {
    acc.classList.toggle('active');
  });
});
