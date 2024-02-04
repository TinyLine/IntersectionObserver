
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
  

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      lazyLoadImage(entry, observer);
    });
    
  }, );

  const loadButton = document.getElementById('loadButton');
  const closeButton = document.getElementById('closeButton');
  
  loadButton.addEventListener('click', () => {
    lazyImages.forEach(image => {
      if (!image.src && image.dataset.src) {
        image.src = image.dataset.src;
        image.classList.add('loaded');
      }
    });
  });
  
  closeButton.addEventListener('click', () => {
    lazyImages.forEach(image => {
      image.src = ''; // Очищаємо атрибут src, щоб зображення зникли
      image.classList.remove('loaded');
    });
  });
  
  // Функція, яка перевіряє стан зображень і відповідно виконує відкриття або закриття
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
  
  // Викликаємо toggleImages після кожного кліку на будь-яку з кнопок
  loadButton.addEventListener('click', toggleImages);
  closeButton.addEventListener('click', toggleImages);