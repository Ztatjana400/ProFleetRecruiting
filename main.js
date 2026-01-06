
// Scroll-trigger animations
const faders = document.querySelectorAll('.section3, .image-text-block2-coverage');

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});


const img = document.querySelector('.zoom-image');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.5 }); // triggers when 50% of image is visible

observer.observe(img);


const header = document.getElementById("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});


document.querySelector('form').addEventListener('submit', function(e){
    e.preventDefault(); // prevent default alert
    // Submit form via SilentForms automatically
    alert("Thank you! Your message has been sent."); // optional, or remove
    const form = e.target;
    const thanks = document.createElement('p');
    thanks.textContent = "Thank you! We received your message.";
    thanks.style.color = "#1C1F26";
    thanks.style.fontWeight = "600";
    form.appendChild(thanks);
    form.reset();
});


let latestScrollY = 0;
window.addEventListener('scroll', () => {
  latestScrollY = window.scrollY;
  requestAnimationFrame(() => {
    const video = document.querySelector('.hero-media');
    if(video) video.style.transform = `translateY(${latestScrollY * 0.3}px)`;
  });
});

document.querySelector('form').addEventListener('submit', function(e){
  alert("Thank you! Your message has been sent.");
  // Do not prevent default unless you handle submission via JS
});


