const overlay = document.querySelector('.overlay');
const show = document.querySelector('.open-icon');
const hide = document.querySelector('.close-icon');

show.onclick = () => {
    overlay.classList.toggle('hidden');
};
hide.onclick = () => {
    overlay.classList.toggle('hidden');
};