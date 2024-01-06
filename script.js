function moveNoButton() {
    const maxX = window.innerWidth - 150;
    const maxY = window.innerHeight - 40;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    const noBtn = document.querySelector('.no-btn');
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
}

function showLoveMessage() {
    document.body.style.backgroundColor = '#ffd1dc'; /* Pastel pink */
    document.querySelector('.question').innerText = 'Cool cool cool, I love you paopao';
    const btnGroup = document.querySelector('.btn-group');
    btnGroup.style.display = 'none';
    btnGroup.classList.add('hide');
}
