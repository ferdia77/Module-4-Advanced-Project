// template_07f5fro
// service_hwrqlyh
// X-z20cWkCBgFiAgPj

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('modal__overlay--loading');
    const success = document.querySelector('modal__overlay--success');
    loading.classList.add("modal__overlay--visible")

    emailjs
        .sendForm(
            'service_hwrqlyh',
            'template_07f5fro', 
            event.target, 
            'X-z20cWkCBgFiAgPj'  
    ).then(() => { 
        
        loading.classList.remove("modal__overlay--visible");
        success.classList.add("modal__overlay--visible");
    }).catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
            "The email service is currently unavailable. Please contact me direclty at kingqueensuited22@gmail.com"
        );
    }) 
}

function toggleModal() {
    document.body.classList += " modal--open"
}