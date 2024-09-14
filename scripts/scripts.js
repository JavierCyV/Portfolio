//splash

function hideSplashScreen() {
    document.getElementById('splash-screen').classList.add('hidden');
    setTimeout(function() {
        document.getElementById('splash-screen').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    }, 1000);
}

document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('keydown', hideSplashScreen);
    document.addEventListener('click', hideSplashScreen);
});




document.addEventListener('DOMContentLoaded', () => {
    
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
 
    if ($navbarBurgers.length > 0) {
  
      
      $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {
  
       
          const target = el.dataset.target;
          const $target = document.getElementById(target);
  
     
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
        });
      });
    }
});
  

//Autowriter

const codeText = "print('Hello World')";
let index = 0;


function typeCode() {
    if (index < codeText.length) {
        document.getElementById("code").innerHTML += codeText.charAt(index);
        index++;
        setTimeout(typeCode, 100);
    } else {
        setTimeout(resetCode, 1000); 
    }
}

function resetCode() {
    document.getElementById("code").innerHTML = ""; 
    index = 0; 
    typeCode(); 
}

window.onload = typeCode;

//Slideshow

let slideIndex = 1;

function showSlides(n) {
    let slides = document.getElementsByClassName("slides");
    
    if (n > slides.length) { 
        slideIndex = 1;
    }  
    
    if (n < 1) {
        slideIndex = slides.length;
    }
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slides[slideIndex - 1].style.display = "block";
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}
showSlides(slideIndex);
setInterval(function() {
    plusSlides(1);
}, 15000);

