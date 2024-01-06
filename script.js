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
    document.body.style.backgroundColor = '#ffcccb';
    document.querySelector('.question').innerText = 'Cool cool cool, I love you paopao';
    document.querySelector('.btn-group').style.display = 'none';
}
