const slides = [
    { id: 'slide1', delay: 0 },
    { id: 'slide2', delay: 4000 },
    { id: 'slide3', delay: 8000 },
    { id: 'slide4', delay: 12000 }
  ];
  
  const emojis = ['😘', '💋', '❤️'];
  
  function showSlide(id) {
    const slide = document.getElementById(id);
    slide.classList.add('visible');
  
    // Add emoji rain effect for certain slides
    if (id === 'slide3' || id === 'slide4') {
      const container = document.getElementById('slideshow');
      for (let i = 0; i < 30; i++) {
        const emoji = document.createElement('div');
        emoji.className = 'emoji';
        emoji.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.style.left = Math.random() * 100 + 'vw';
        emoji.style.top = Math.random() * 100 + 'vh'; // Spread emojis all over the screen
        emoji.style.animationDelay = Math.random() * 4 + 's';
        container.appendChild(emoji);
  
        // Remove emojis after animation
        setTimeout(() => container.removeChild(emoji), 4000);
      }
    }
  }
  
  function startSlideshow() {
    slides.forEach(({ id, delay }, index) => {
      setTimeout(() => {
        if (index > 0) {
          const prevSlide = document.getElementById(slides[index - 1].id);
          prevSlide.classList.remove('visible');
        }
        showSlide(id);
      }, delay);
    });
  }
  
  // Start the slideshow
  startSlideshow();