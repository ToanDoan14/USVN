const selectBtn = document.querySelector('.select-btn');
const options = document.querySelector('.select-menu .options');

selectBtn.addEventListener('click', () => {
    const menu = selectBtn.closest('.select-menu');
    menu.classList.toggle('active');
});
