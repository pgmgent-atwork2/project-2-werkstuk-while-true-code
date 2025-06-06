export function initNavbarToggle(toggleSelector = '#navbar-toggle', menuSelector = '#navbar-menu') {
    const toggleButton = document.querySelector(toggleSelector);
    const menu = document.querySelector(menuSelector);

    if (!toggleButton || !menu) {
        console.warn('Navbar toggle or menu not found!');
        return;
    }

    toggleButton.addEventListener('click', () => {
        menu.classList.toggle('open');
    });
}
