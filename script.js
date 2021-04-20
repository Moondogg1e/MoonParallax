let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains_behind = document.getElementById('mountains_behind');
let mountains_front = document.getElementById('mountains_front');
let moon_text = document.getElementById('moon_text');
let btn = document.getElementById('btn');
let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    stars.style.left = value * 0.25 + 'px';
    moon.style.top = value * 1.05 + 'px';
    mountains_behind.style.top = value * 0.5 + 'px';
    // mountains_front.style.top = value * 0.5 + 'px';
    moon_text.style.marginRight = value * 3 + 'px';
    moon_text.style.marginTop = value * 1 + 'px';
    btn.style.marginTop = value * 1 + 'px';
    header.style.marginTop = value * 0.5 + 'px';
})

let nav_links = document.querySelector('.nav-links');
let burger = document.querySelector('.burger');

burger.addEventListener('click', ()=>{
    burger.classList.toggle('toggle');
    nav_links.classList.toggle('nav-active');
});