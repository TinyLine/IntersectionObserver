
// Завантаження зображення як тільки воно стає видимим на екрані

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
  const closeButton = document.getElementById('closeButton');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      lazyLoadImage(entry, observer);
    });
    
  }, );


  
  // Завантаження зображення коли натиснута кнопка
  loadButton.addEventListener('click', () => {
    lazyImages.forEach(image => {
      if (!image.src) {
        image.src = image.dataset.src;
        image.classList.add('loaded');
      }
    });
  });
  // Кнопка яка закриває зображення
  closeButton.addEventListener('click', () => {
    lazyImages.forEach(image => {
      image.src = ''; 
      image.classList.remove('loaded');
    });
  });
  
  const toggleImages = () => {
    const allLoaded = Array.from(lazyImages).every(image => image.classList.contains('loaded'));
  
    if (allLoaded) {
      loadButton.style.display = 'none';
      closeButton.style.display = 'inline-block';
    } else {
      loadButton.style.display = 'inline-block';
      closeButton.style.display = 'none';
    }
  };
  
  loadButton.addEventListener('click', toggleImages);
  closeButton.addEventListener('click', toggleImages);