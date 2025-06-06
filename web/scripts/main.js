import { initAccordion } from './animations/accordion.js';
import { initNavbarToggle } from './animations/nav.js';
import { initGallerySlideshows } from './animations/slideShow.js';

document.addEventListener("DOMContentLoaded", () => {
  initAccordion();
  initNavbarToggle();
  initGallerySlideshows();
});

