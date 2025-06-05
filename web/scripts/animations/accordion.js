export function initAccordion() {
  const items = document.querySelectorAll('.accordion__item');

  items.forEach(item => {
    const header = item.querySelector('.accordion__header');
    const content = item.querySelector('.accordion__content');

    header.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      items.forEach(i => {
        i.classList.remove('active');
        const c = i.querySelector('.accordion__content');
        if (c) c.style.maxHeight = null;
      });

      if (!isActive) {
        item.classList.add('active');
        if (content) {
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      }
    });
  });
}