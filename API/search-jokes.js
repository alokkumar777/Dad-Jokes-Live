export const searchButton = document.getElementById("search-joke");
export const searchTermInput = document.getElementById("search-term");
import { jokeDisplay } from "./fetch-jokes.js";

// get jokes by the search term
export const searchJokes = async () => {
  const term = searchTermInput.value;
  if (!term) {
    jokeDisplay.innerHTML =
      '<p class="text-warning">Please enter a search term.</p>';
    return;
  }
  try {
    const config = {
      headers: { Accept: "application/json" },
    };
    const response = await axios.get(
      `https://icanhazdadjoke.com/search?term=${term}`,
      config
    );
    const data = response.data;
    if (data.results.length > 0) {
      jokeDisplay.innerHTML = data.results
        .map((joke) => `<p>${joke.joke}</p>`)
        .join("");
    } else {
      jokeDisplay.innerHTML = `<p class="text-info">No jokes found for "${term}".</p>`;
    }
  } catch (error) {
    jokeDisplay.innerHTML = `<p class="text-danger">Failed to fetch jokes. Try again!</p>`;
  }
};

searchButton.addEventListener("click", searchJokes);
