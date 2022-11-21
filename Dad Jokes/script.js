const jokeEl = document.getElementById('joke');
const jokeButton = document.getElementById('button-joke');

jokeButton.addEventListener('click', generateJoke);

generateJoke();

function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };

  fetch('https://icanhazdadjoke.com', config)
    .then((response) => response.json())
    .then((data) => {
      jokeEl.innerHTML = data.joke;
    });
}
