const navMobile = document.querySelector('.nav-mobile');
const navBtn = document.querySelector('.hamburger');
const footerYear = document.querySelector('.footer-year');
const allNavItems = document.querySelectorAll(".nav__link");

const handleNav = () => {
    navBtn.classList.toggle('is-active');
    navMobile.classList.toggle('nav-mobile--active');

    allNavItems.forEach(item=>{
        item.addEventListener('click', ()=>{
            navBtn.classList.remove('is-active');
            navMobile.classList.remove('nav-mobile--active');
        });
    })
}

const hideNav = () => {
    navBtn.classList.remove('is-active');
    navMobile.classList.remove('nav-mobile--active');
}

window.addEventListener('scroll', hideNav);
navBtn.addEventListener('click', handleNav);


const handleCurrentYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerText = year;
}

handleCurrentYear();