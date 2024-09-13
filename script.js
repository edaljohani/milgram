// Start the game by navigating to the Twine HTML file
document.getElementById("start-game").addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "story.html";  // Make sure the Twine file path is correct
});

// Options button logic
document.getElementById("options").addEventListener("click", function (event) {
    event.preventDefault();
    alert("Options menu coming soon!");
    // Add actual options menu code later
});

// Instructions button logic
document.getElementById("instructions").addEventListener("click", function (event) {
    event.preventDefault();
    alert("Instructions menu coming soon!");
    // Add actual instructions menu code later
});

// Exit button logic
document.getElementById("exit").addEventListener("click", function (event) {
    event.preventDefault();
    alert("Exiting the game...");
    // Add code to handle game exit if necessary
});
