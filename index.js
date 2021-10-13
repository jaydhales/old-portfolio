let toggler = document.querySelector('.nav-toggle');
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