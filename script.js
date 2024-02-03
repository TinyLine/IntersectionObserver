
// Загрузка зображення як тільки воно стає видимим на екрані

   const lazyLoadImage = (entry, observer) => {
     if (entry.isIntersecting) {
      const image = entry.target;
     image.src = image.dataset.src;
    image.classList.add('loaded'); 
     observer.unobserve(image);
    }
   };

  const lazyImages = document.querySelectorAll('.lazy-load');
  const loadButton = document.getElementById('loadButton'); 

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      lazyLoadImage(entry, observer);
    });
    
  }, );

//   Загрузка зображення при натискання на кнопку
loadButton.addEventListener('click', () => {
  lazyImages.forEach(image => {
    if (!image.src && image.dataset.src) {
      image.src = image.dataset.src;
      image.classList.add('loaded');
    }
  });
  loadButton.style.display = 'none';
});

