document.getElementById('noButton').addEventListener('click', function() {
    // Button animation
    this.style.left = '0';
    this.style.transition = 'none';

    // Change page content
    document.body.style.backgroundColor = '#ffcccb';
    document.querySelector('h1').innerText = 'I love you more';
});
