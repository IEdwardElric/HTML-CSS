document.addEventListener('DOMContentLoaded', () => {

    const linhas = document.querySelector('.linhas');

    const nav = document.querySelector('.nav-links');

    linhas.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });
});