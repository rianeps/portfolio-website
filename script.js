document.querySelectorAll('.skill-button').forEach(button => {
    button.addEventListener('click', () => {
    button.classList.toggle('active');
    });
});

const icons = document.querySelectorAll('.icon-link');

icons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
    icon.style.transform = 'translateY(-5px)';
    });
    
    icon.addEventListener('mouseleave', () => {
    icon.style.transform = 'translateY(0)';
    });
});

//preloader
document.addEventListener("DOMContentLoaded", function() {
    // Ensure the preloader is visible and main content is hidden
    document.getElementById("preloader").style.display = "block";
    document.getElementById("main-content").style.display = "none";

    // Simulate loading delay (2 seconds)
    setTimeout(function() {
        document.getElementById("preloader").style.display = "none";
        document.getElementById("main-content").style.display = "block";
    }, 3000); // 2000 milliseconds = 2 seconds
});

//scrollbar
document.addEventListener('DOMContentLoaded', function() {
    const scrollbar = document.getElementById('custom-scrollbar');
    const scrollbarThumb = document.getElementById('custom-scrollbar-thumb');
    
    function updateScrollbar() {
      const scrollPercentage = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      const thumbHeight = scrollbarThumb.offsetHeight;
      const maxTop = scrollbar.offsetHeight - thumbHeight;
      const thumbPosition = scrollPercentage * maxTop;
      
      scrollbarThumb.style.top = `${thumbPosition}px`;
    }
  
    window.addEventListener('scroll', updateScrollbar);
    window.addEventListener('resize', updateScrollbar);
    
    updateScrollbar(); // Initial call
  });
  
// scrolling down animation
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.15,
  rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver(function(
  entries,
  appearOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('appear');
      appearOnScroll.unobserve(entry.target);
    }
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

