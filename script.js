const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      lazyLoadImage(entry, observer);
    });
    
  }, { rootMargin: '0px 0px 50px 0px' });

const lazyImages = document.querySelectorAll('.lazy-load');
const loadButton = document.getElementById('loadButton');

loadButton.addEventListener('click', () => {
  lazyImages.forEach(image => {
    if (!image.src && image.dataset.src) {
      image.src = image.dataset.src;
      image.classList.add('loaded');
    }
  });
  loadButton.style.display = 'none';
});