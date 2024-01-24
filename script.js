const arr = document.querySelectorAll('img')

const isIntersectingWatcher = () =>{
    if (entry.isIntersecting) {
        entry.target.src = entry.target.dataset.src
        observer.unobserve(entry.target)
    
}}

const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.src = entry.target.dataset.src
            observer.unobserve(entry.target)
        }
    })
}, { threshold: 0.1 })


    arr.forEach((evt) => {
        imageObserver.observe(evt);
    })



