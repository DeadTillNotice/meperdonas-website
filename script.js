function moveNoButton() {
    document.getElementById('noButton').style.transform = `translateX(${randomMovement()}px) translateY(${randomMovement()}px)`;
}

function randomMovement() {
    return Math.random() * 50 - 25;
}

function showLoveMessage() {
    document.body.style.backgroundColor = '#ffcccb';
    document.querySelector('h1').innerText = 'I love you more';
    document.querySelector('.buttons').style.display = 'none';
}
