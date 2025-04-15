function toggleMenu() {
    const mobileMenu = document.querySelector(".mobile-menu");
    const hamburgerIcon = document.querySelector(".hamburger-icon");

    mobileMenu.classList.toggle("active");
    hamburgerIcon.classList.toggle("active");
}

const themeToggle = document.getElementById("theme-toggle");
const body = document.body;
const icon = themeToggle.querySelector("i");

if (body.classList.contains("dark-mode")) {
    icon.classList.replace("ri-moon-fill", "ri-sun-fill");
}

themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        icon.classList.replace("ri-moon-fill", "ri-sun-fill");
    } else {
        icon.classList.replace("ri-sun-fill", "ri-moon-fill");
    }
});

// Videos
const videos = document.querySelectorAll('video');

videos.forEach(video => {
  video.addEventListener('play', () => {
    videos.forEach(otherVideo => {
      if (otherVideo != video) {
        otherVideo.pause();
      }
    })
      
    video.volume=0.5
    document.body.classList.add('video-playing');
    });

    video.addEventListener('pause', () => {
      document.body.classList.remove('video-playing');
    });
  });

// Splash Screen
window.addEventListener('load', function() {
    const splashScreen = document.getElementById('splash-screen');
    
    setTimeout(function() {
      splashScreen.style.animation = 'fadeOut 1s ease-out forwards';
      
      setTimeout(function() {
        splashScreen.remove();
      }, 1000);
    }, 4500);
  });

document.addEventListener("DOMContentLoaded", function () {
  const user = "nextplayskillsacademy";
  const domain = "gmail.com";
  const emailLink = document.createElement("a");
  emailLink.href = `mailto:${user}@${domain}`;
  emailLink.innerHTML = '<i class="ri-mail-line"></i>';
  document.getElementById("email-icon").replaceWith(emailLink);
  
  const phoneNumber = "+19565371414";
  const phoneLink = document.createElement("a");
  phoneLink.href = `tel:${phoneNumber}`;
  phoneLink.innerHTML = '<i class="ri-phone-line"></i>';
  document.getElementById("phone-icon").replaceWith(phoneLink);
});