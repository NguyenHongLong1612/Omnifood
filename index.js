'use strict';

const header = document.querySelector('.header');
const btnMenuMobileNav = document.querySelector('.btn-mobile-nav');
btnMenuMobileNav.addEventListener('click', () => {
    header.classList.add('open-mobile-nav');
});

const btnCloseMobileNav = document.querySelector('.btn-close-mobile-nav');
btnCloseMobileNav.addEventListener('click', () => {
    header.classList.remove('open-mobile-nav');
});

const observer = new IntersectionObserver(
    function (entries) {
        const ent = entries[0];
        if (!ent.isIntersecting) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    },
    {
        root: null,
        threshold: 0,
    }
);
observer.observe(document.querySelector('.hero--section'));

document.querySelector('.nav--list').addEventListener('click', (event) => {
    const btn = event.target.closest('.nav--item');
    if (btn) {
        header.classList.remove('open-mobile-nav');
    }
});
