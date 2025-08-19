// Highlight active nav item on scroll
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  let fromTop = window.scrollY + 100;
  sections.forEach(sec => {
    if (sec.offsetTop <= fromTop && sec.offsetTop + sec.offsetHeight > fromTop) {
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + sec.id);
      });
    }
  });
});

// typewriter
const texts = [
    "FRONT END DEVELOPER",
    "PROGRAMMER",
    "GRAPHIC DESIGNER",
    "YOUTUBER"
];

let speed = 100;

const textElements = document.querySelector('.typewriter-text');

let textIndex = 0;
let characterIndex = 0;

function typeWriter(){
    if(characterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(characterIndex);
        characterIndex++;
        setTimeout(typeWriter, speed);
    }
    else{
        setTimeout(eraseText, 1000);
    }
}

function eraseText(){
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0, -1);
        setTimeout(eraseText, 50);
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        characterIndex = 0;
        setTimeout(typeWriter, 500);
    }
}

window.onload = typeWriter;
// Simple card hover glow animation
document.querySelectorAll(".about-cards .card").forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "scale(1.05)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "scale(1)";
  });
});


// Animate progress bars when they come into view
document.addEventListener("DOMContentLoaded", () => {
  const progressBars = document.querySelectorAll(".progress-bar");

  function showProgress() {
    progressBars.forEach(bar => {
      const value = bar.getAttribute("data-width");
      const barPosition = bar.getBoundingClientRect().top;
      const screenHeight = window.innerHeight;

      if (barPosition < screenHeight - 100) {
        bar.style.width = value;
      }
    });
  }

  window.addEventListener("scroll", showProgress);
  showProgress();
});
