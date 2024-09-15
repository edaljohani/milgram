// Typewriter effect logic
const text = "Switch Case";
const element = document.getElementById("typewriter");
let index = 0;
const typingSpeed = 200;
const deletingSpeed = 100; // Speed of deleting
const delayBeforeDelete = 1100; // Delay before starting to delete (in ms)
const delayBeforeTyping = 800; // Delay before restarting the typing effect (in ms)

let isDeleting = false; // Keep track of whether we're typing or deleting

function typeWriter() {
    if (isDeleting) {
      // Deleting phase
      element.innerHTML = text.substring(0, index);
      if (index > 0) {
        index--;
        setTimeout(typeWriter, deletingSpeed);
      } else {
        // Finished deleting, switch to typing mode after a delay
        isDeleting = false;
        setTimeout(typeWriter, delayBeforeTyping);
      }
    } else {
      // Typing phase
      element.innerHTML = text.substring(0, index);
      if (index < text.length) {
        index++;
        setTimeout(typeWriter, typingSpeed);
      } else {
        // Finished typing, switch to deleting mode after a delay
        isDeleting = true;
        setTimeout(typeWriter, delayBeforeDelete);
      }
    }
  }

  window.onload = function() {
    typeWriter();
  };

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
