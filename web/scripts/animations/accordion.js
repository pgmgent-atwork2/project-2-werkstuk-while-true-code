export function initAccordion() {
  const items = document.querySelectorAll('.accordion__item');

  items.forEach(item => {
    const header = item.querySelector('.accordion__header');

    header.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      items.forEach(i => i.classList.remove('active'));

      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}
