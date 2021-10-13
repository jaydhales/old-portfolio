const toggler = document.querySelector('.nav-toggle');
const navBar = document.querySelector('.nav-links');

function reseter () {
    document.querySelector("form").submit();
    document.querySelector("form").reset();
}

toggler.addEventListener('click', (e) => {
    navBar.classList.toggle('show-nav');
    toggler.classList.toggle('rotate');

    const ham = toggler.firstElementChild.classList;

    setInterval(() => {
        if (ham.contains("fa-bars")) {
            ham.replace('fa-bars','fa-times')
        } else {
            ham.replace('fa-times','fa-bars')
        }
    }, 300);
})

window.addEventListener('scroll' , (e) => {
    if (navBar.getBoundingClientRect().y < -120) {
        toggler.firstElementChild.classList.replace('fa-times','fa-bars');
        navBar.classList.remove('show-nav');
        toggler.classList.remove('rotate');
    }
})
