document.addEventListener('DOMContentLoaded', function() {
    // Splash Screen
    function hideSplashScreen() {
        const splashScreen = document.getElementById('splash-screen');
        const content = document.getElementById('content');
        if (splashScreen) {
            splashScreen.classList.add('hidden');
            setTimeout(function() {
                splashScreen.style.display = 'none';
                if (content) content.style.display = 'block';
            }, 1000);
        }
    }

    // Event listeners for splash screen
    document.addEventListener('keydown', hideSplashScreen);
    document.addEventListener('click', hideSplashScreen);

    // Navbar burger toggle
    const $navbarBurgers = Array.from(document.querySelectorAll('.navbar-burger'));
    $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {
            const target = el.dataset.target;
            const $target = document.getElementById(target);
            if ($target) {
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');
            }
        });
    });

    // Autowriter
    const codeText = "print('Hello World')";
    let index = 0;
    function typeCode() {
        const codeElement = document.getElementById("code");
        if (codeElement && index < codeText.length) {
            codeElement.innerHTML += codeText.charAt(index);
            index++;
            setTimeout(typeCode, 100);
        } else {
            setTimeout(resetCode, 1000);
        }
    }
    function resetCode() {
        const codeElement = document.getElementById("code");
        if (codeElement) {
            codeElement.innerHTML = "";
            index = 0;
            typeCode();
        }
    }
    typeCode();


    // Popup contacto
    const openModalButton = document.getElementById('openModal');
    const contactModal = document.getElementById('contactModal');
    const closeModalButton = document.getElementById('closeModal');
    const closeModalFooterButton = document.getElementById('closeModalFooter');
    const modalBackground = document.querySelector('.modal-background');

    if (openModalButton && contactModal && closeModalButton && closeModalFooterButton && modalBackground) {
        openModalButton.addEventListener('click', function() {
            contactModal.classList.add('is-active');
        });

        closeModalButton.addEventListener('click', function() {
            contactModal.classList.remove('is-active');
        });

        closeModalFooterButton.addEventListener('click', function() {
            contactModal.classList.remove('is-active');
        });

        modalBackground.addEventListener('click', function() {
            contactModal.classList.remove('is-active');
        });
    } else {
        console.error('Algunos elementos del modal no se encontraron en el DOM.');
    }
});


slideIndex = 0

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