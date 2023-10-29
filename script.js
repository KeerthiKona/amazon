
    const items = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    function nextItem() {
        items[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % items.length;
        items[currentIndex].classList.add('active');
    }

    function startCarousel() {
        setInterval(nextItem, 5000); // Change the image every 5 seconds
    }

    startCarousel();

