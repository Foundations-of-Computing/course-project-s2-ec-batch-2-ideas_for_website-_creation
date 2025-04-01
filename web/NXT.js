/*Intro animation*/
document.getElementById('intro').addEventListener('click', function() {
  const intro = document.getElementById('intro');
  intro.style.opacity = '0'; 

  setTimeout(() => {
    intro.style.display = 'none'; 
    document.getElementById('main-content').style.display = 'block';
    document.body.style.overflow = 'auto'; 
  }, 1000); 
});

/*darkmode*/
const toggleBtn = document.getElementById('toggle-btn');
const moonIcon = `<svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
  <path d="M21 12.79A9 9 0 0111.21 3 7 7 0 0012 17a7 7 0 009-4.21z"/>
</svg>`;
const sunIcon = '&#x1F506;'; // High brightness sun

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggleBtn.innerHTML = document.body.classList.contains('dark') ? moonIcon : sunIcon;
});


/*backtotop*/
document.addEventListener("DOMContentLoaded", function () {
  const backToTopBtn = document.getElementById("backToTop");

  backToTopBtn.style.display = "none";

  window.addEventListener("scroll", function () {
      if (window.scrollY > 300) {
          backToTopBtn.style.display = "block";
      } else {
          backToTopBtn.style.display = "none";
      }
  });

  backToTopBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
  });
});