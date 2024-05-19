document.addEventListener("DOMContentLoaded", function() {
    //alert("La resolución de tu pantalla es: " + screen.width + " x " + screen.height)
    
    // --------------------MENU DE HAMBURGUESA------------------------
    const mediaQuery = window.matchMedia('(max-width: 900px)');

    const menuBtn = document.querySelector(".logoimg");
    const menu = document.querySelector(".menu-hamburgueso");
    const links = document.querySelectorAll(".menu-hamburgueso a");
    const arrowBack = document.querySelector(".arrow_back");

    if (mediaQuery.matches) {
        console.log('HAMBURGUESO NORMAL.');

        menu.classList.toggle("disabled")
        const openButton = document.querySelector('.nav__menu');
        const menu = document.querySelector('.nav__link');
        const closeMenu = document.querySelector('.nav__close');

        openButton.addEventListener('click', ()=>{
            menu.classList.add("nav__link--show");
        })

        closeMenu.addEventListener('click', ()=>{
            menu.classList.remove("nav__link--show");
        })

    } else {
        console.log('HAMBURGUESO DESPLEGABLE.');

        menuBtn.addEventListener("click", function () {
            menu.classList.toggle("active");
        });

        links.forEach(function (link) {
            link.addEventListener("click", function () {
                menu.classList.remove("active");
            });
        });

        arrowBack.addEventListener("click", function () {
            menu.classList.remove("active");
        });

        document.addEventListener("click", function (event) {
            if (!menu.contains(event.target) && !menuBtn.contains(event.target)) {
                menu.classList.remove("active");
            }
        });
    }

    //------------Piano Desplegable-------------------------
    const pianoBtn = document.querySelector(".pianoBtn")
    const piano = document.querySelector(".piano__section")

    pianoBtn.addEventListener("click", function() {
        piano.classList.toggle("active");
    });
    
    // -----------Referencias href modificadas--------------
    const enlaces = document.querySelectorAll(".enlace");

    enlaces.forEach(function (enlace) {
        enlace.addEventListener("click", function (e) {
            e.preventDefault();

            const destinoId = enlace.getAttribute("href").substring(1);
            const destino = document.getElementById(destinoId);
            const offset = 150;

            if (destino) {
                const destinoY = destino.offsetTop - offset;
                window.scrollTo({
                    top: destinoY,
                    behavior: "smooth"
                });
            }
        });
    });

    // --------------Unidades de estudio--------------------
    const unitTitle = [...document.querySelectorAll('.unit-title')];

    unitTitle.forEach(unit => {
        unit.addEventListener('click', ()=>{
            let unitheight = 0;
            let content = unit.nextElementSibling;
            let clraddPadding = unit.parentElement.parentElement;

            clraddPadding.classList.toggle('clr__video-item-container--add');
            unit.children[0].classList.toggle('clr__questions__arrow--rotate');

            if(content.clientHeight === 0){
                unitheight = unit.scrollHeight;
            }

            unit.style.height = `${unitheight}px`;
        });
    });
});