// fetch componentes
    // header
    fetch('componentes/header.html')
    .then(response => response.text())
    .then ( data => {
        document.querySelector('header').innerHTML = data;
    })
    .catch

    // footer
    fetch('componentes/footer.html')
    .then(response => response.text())
    .then( data => {
        document.querySelector('footer').innerHTML = data;
    })
    .catch


    // newsletter

    // newsletter ilustraciones
    fetch('componentes/ilustraciones_newsletter.html')
    .then(response => response.text())
    .then( data => {
        document.querySelector('.section__newsletter').innerHTML = data;
    })
    .catch

    // cards blog


// slider banner inicio
    let imagenes = document.querySelector(".slider__img");
    let contenedor = document.querySelector(".section__slider");
    let sliderActual = 0;

    setInterval(() => {
        if (sliderActual < imagenes.length -1) {
            sliderActual ++;
            let calculo = sliderActual * -100
            contenedor.style.transform = (`translateX(${calculo}vw)`)
        } else if (sliderActual == imagenes.length -1) {
            sliderActual = 0;
            let calculo = sliderActual * -100
            contenedor.style.transform = (`translateX(${calculo}vw)`)
        }
    }, 500);


// slider block academia
    let imagenes2 = document.querySelector(".block__item--img");
    let contededor2 = document.querySelector(".block__item--slider");
    let sliderActual2 = 0;

    setInterval( () => {
        if (sliderActual2 < imagenes2.length -1) {
            sliderActual2 ++;
            let calculo = sliderActual2 * -100
            contededor2.style.transform = (`translateX(${calculo}vw)`)
        } else if (sliderActual2 == imagenes2.length -1) {
            sliderActual2 = 0;
            let calculo = sliderActual2 * -100
            contededor2.style.transform = (`translateX(${calculo}vw)`)
        }
    }, 600);