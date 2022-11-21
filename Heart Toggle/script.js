const button = document.querySelector('button');
const heart = document.getElementById('heart');

button.addEventListener('click', () => {
  heart.classList.toggle('active');
});
