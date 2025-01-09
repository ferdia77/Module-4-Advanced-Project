// template_07f5fro
// service_hwrqlyh
// X-z20cWkCBgFiAgPj

let isModalOpen = false;
let contrastToggle = false
const scaleFactorr = 1/20


function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX;
    const y = event.clientY;
    
    for (let i = 0; i < shapes.length; ++i) {
        const isOdd = i % 2 !== 0;
        const boolInt = isOdd ? -1 : 1 ;
        shapes[i].computedStyleMap.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`
    }
}


function toggleContrast() {
    contrastToggle = !contrastToggle;
    if(contrastToggle) {
        document.body.classList += " dark-theme"
    }
    else {
        document.body.classList.remove("dark-theme")
    }
}


function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible";

    emailjs
        .sendForm(
            'service_hwrqlyh',
            'template_07f5fro', 
            event.target, 
            'X-z20cWkCBgFiAgPj'  
    ).then(() => { 
        
        loading.classList.remove("modal__overlay--visible");
        success.classList += "modal__overly--visible";
    }).catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
            "The email service is currently unavailable. Please contact me direclty at kingqueensuited22@gmail.com"
        );
    }) 
}


function toggleModal() {
    if(isModalOpen) {
        isModalOpen = false;
        return document.body.classList.removal("modal--open");
    }
    isModalOpen = true;
    document.body.classList.add("modal--open");
}