const arr = document.querySelectorAll('img');

const imageObserver = new IntersectionObserver((entries) => { entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const lazyImage = entry.target
                lazyImage.src = lazyImage.dataset.src
            }
        })
    });
    
    arr.forEach((evt) => {
        imageObserver.observe(evt);
    })



