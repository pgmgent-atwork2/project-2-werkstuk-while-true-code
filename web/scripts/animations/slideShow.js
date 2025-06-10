export function initGallerySlideshows() {
  document.querySelectorAll(".gallerij-slideshow").forEach((slideshow) => {
    let slideIndex = 1;
    const slides = slideshow.querySelectorAll(".gallerij-slide");
    const prev = slideshow.querySelector(".prev");
    const next = slideshow.querySelector(".next");

    showSlides(slideIndex);

    function showSlides(n) {
      if (n > slides.length) slideIndex = 1;
      if (n < 1) slideIndex = slides.length;

      slides.forEach((slide) => (slide.style.display = "none"));
      slides[slideIndex - 1].style.display = "block";
    }

    prev?.addEventListener("click", () => showSlides(--slideIndex));
    next?.addEventListener("click", () => showSlides(++slideIndex));
  });
}
