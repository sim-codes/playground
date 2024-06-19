const btn = document.querySelector('button');
const gradient = document.querySelector('.bg-gradient');

btn.addEventListener('mouseover', () => {
    gradient.style.opacity = 0.8;
});

btn.addEventListener('mouseout', () => {
    gradient.style.opacity = 0;
});