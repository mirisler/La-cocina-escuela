// FETCH COMPONENTES
    // header
    fetch('componentes/header.html')
    .then(response => response.text())
    .then ( data => {
        document.querySelector('header').innerHTML = data
    })
    .catch

        // menu hamburguesa
        fetch('componentes/menu_hamburguesa.html')
        .then(response => response.text())
        .then ( data => {
            document.querySelector('#menu__hamburguesa').innerHTML = data
        })
        .catch

    // footer
    fetch('componentes/footer.html')
    .then(response => response.text())
    .then( data => {
        document.querySelector('footer').innerHTML = data;
    })
    .catch

        // FETCH: carpeta entradas blog
        // header
        fetch('../componentes/header_blog.html')
        .then(response => response.text())
        .then ( data => {
            document.querySelector('.header__blog--articulo').innerHTML = data;
        })
        .catch

        // footer
        fetch('../componentes/footer_blog.html')
        .then(response => response.text())
        .then( data => {
            document.querySelector('.footer__blog--articulo').innerHTML = data;
        })
        .catch

        // menu hamburguesa
        fetch('../componentes/menu_hamburguesa_blog.html')
        .then(response => response.text())
        .then ( data => {
        document.querySelector('#menu__hamburguesa--blog').innerHTML = data;
        })
        .catch

    // POP UP MENU HAMBURGUESA
        // variables 
            let popup = document.querySelector("#menu__hamburguesa"); // variable para button 
            let popupBlog = document.querySelector("#menu__hamburguesa--blog"); // variable para button (versión entradas de blog)
            
        // funciones 
            function abrirMenu() { // declaración de función
                popup.classList.toggle(".active"); // acceso a la clase active
            }
                
            function abrirMenuBlog() {
                popupBlog.classList.toggle(".active");
            }


    // formulario de newsletter abreviada
    fetch('componentes/abreviada_newsletter.html')
    .then(response => response.text())
    .then( data => {
        document.querySelector('.section__newsletter--abreviada').innerHTML = data;
    })
    .catch

    // formulario de newsletter con ilustraciones
    fetch('componentes/ilustraciones_newsletter.html')
    .then(response => response.text())
    .then( data => {
        document.querySelector('.section__newsletter').innerHTML = data;
    })
    .catch

    // formulario de contacto
    fetch('componentes/formulario.html')
    .then(response => response.text())
    .then( data => {
        document.querySelector('.formulario').innerHTML = data;
    })
    .catch

// SLIDER BANNER INICIO
    // Variables
        let imagenes = document.querySelectorAll(".slider__img"); // variable para las imagenes que componen la array
        let contenedor = document.querySelector(".section__slider"); // variable del contenedor de las imágenes para moverlo posteriormente.
        let sliderActual = 0; // variable del contador del slider

    // Función 
        setInterval(() => { // intervalo con una función arrow
            if (sliderActual < imagenes.length -1) { // condición
                sliderActual ++; // aumento del valor del slider actual
                let calculo = sliderActual * -100 // variable para hacer un cálculo que multiplique el slider actual por el número de posición
                contenedor.style.transform = (`translateX(${calculo}vw)`) // animación del contenedor con el atributo style
            } else if (sliderActual == imagenes.length -1) { // condición
                sliderActual = 0; // el valor de slider actual se actualiza a 0
                let calculo = sliderActual * -100 // variable para hacer un cálculo que multiplique el slider actual por el número de posición
                contenedor.style.transform = (`translateX(${calculo}vw)`) // animación del contenedor con el atributo style
            }
        }, 7000); // tiempo de ejecución 

// SLIDER ACADEMIA INICIO
    // Variables
        let imagenes2 = document.querySelectorAll(".block__item--img"); 
        let contededor2 = document.querySelector(".block__item--slider"); 
        let sliderActual2 = 0; 

    // Función 
        setInterval( () => { 
            if (sliderActual2 < imagenes2.length -1) {
                sliderActual2 ++;
                let calculo = sliderActual2 * -27
                contededor2.style.transform = (`translateX(${calculo}vw)`)
            } else if (sliderActual2 == imagenes2.length -1) {
                sliderActual2 = 0;
                let calculo = sliderActual2 * -27
                contededor2.style.transform = (`translateX(${calculo}vw)`)
            }
        }, 5000);

