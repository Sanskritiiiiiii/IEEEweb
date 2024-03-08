const slides = document.querySelectorAll('.slide');
        let currentIndex = 0;

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.style.display = i === index ? 'block' : 'none';
            });
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex);
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            showSlide(currentIndex);
        }

        document.querySelector('.prev-btn').addEventListener('click', prevSlide);
        document.querySelector('.next-btn').addEventListener('click', nextSlide);

        // Start automatic slide change
        setInterval(nextSlide, 5000);

        // Show first slide initially
        showSlide(currentIndex);