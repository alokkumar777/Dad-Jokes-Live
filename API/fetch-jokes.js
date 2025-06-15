export const jokeDisplay = document.getElementById("joke-display");
export const getJokeButton = document.getElementById("get-joke");
// fetch jokes and display
export const fetchRandomJoke = async () => {
  try {
    const config = {
      headers: { Accept: "application/json" },
    };
    const response = await axios.get("https://icanhazdadjoke.com/", config);
    jokeDisplay.innerHTML = `<p>${response.data.joke}</p>`;
  } catch (error) {
    jokeDisplay.innerHTML = `<p class="text-danger">Failed to fetch joke. Try again!</p>`;
  }
};

getJokeButton.addEventListener("click", fetchRandomJoke);
