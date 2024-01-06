function moveNoButton() {
    document.querySelector('.no-btn').style.setProperty('--randomX', '0');
    document.querySelector('.no-btn').style.setProperty('--randomY', '0');
}

function showLoveMessage() {
    document.body.style.backgroundColor = '#ffcccb';
    document.querySelector('.question').innerText = 'Cool cool cool, I love you paopao';
    document.querySelector('.btn-group').style.display = 'none';
}
