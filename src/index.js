//Fetch and Display Character Names
document.addEventListener("DOMContentLoaded", () => {
  const characterBar = document.getElementById("character-bar");
  const baseUrl = "http://localhost:3000/characters";

  // Fetch all characters and display their names
  fetch(baseUrl)
    .then((response) => response.json())
    .then((characters) => {
      characters.forEach((character) => {
        const span = document.createElement("span");
        span.textContent = character.name;
        // Store character id in dataset
        span.dataset.id = character.id;
        characterBar.appendChild(span);

        // Add click event to show character details when clicked
        span.addEventListener("click", () =>
          displayCharacterDetails(character)
        );
      });
    });
});

// Display character details
function displayCharacterDetails(character) {
  document.getElementById("name").textContent = character.name;
  document.getElementById("image").src = character.image;
  document.getElementById("vote-count").textContent = character.votes;
}
document.addEventListener("DOMContentLoaded", () => {
  const voteForm = document.getElementById("votes-form");

  voteForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const voteInput = document.getElementById("votes");
    const newVotes = parseInt(voteInput.value);
    const voteCountElement = document.getElementById("vote-count");
    let currentVotes = parseInt(voteCountElement.textContent);

    // Add new votes to the current votes
    currentVotes += newVotes;
    voteCountElement.textContent = currentVotes;

    // Clear the input field
    voteInput.value = "";
  });
});
document.getElementById("reset-btn").addEventListener("click", () => {
  document.getElementById("vote-count").textContent = 0;
});
document
  .getElementById("character-form")
  .addEventListener("submit", (event) => {
    event.preventDefault();

    const newName = document.getElementById("name").value;
    const newImageUrl = document.getElementById("image-url").value;

    // Create new character object
    const newCharacter = {
      name: newName,
      image: newImageUrl,
      votes: 0,
    };

    // Add new character to the character bar
    const span = document.createElement("span");
    span.textContent = newCharacter.name;
    span.addEventListener("click", () => displayCharacterDetails(newCharacter));
    document.getElementById("character-bar").appendChild(span);

    // Show character details immediately
    displayCharacterDetails(newCharacter);

    // Clear the form fields
    document.getElementById("name").value = "";
    document.getElementById("image-url").value = "";
  });
