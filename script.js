const textsToType = ["Mathews Thomas", "Software Developer", "UI/UX Designer","Web Developer"];
    let textIndex = 0;
    let index = 0;
    const speed = 150; // Typing speed in milliseconds
    const changingTextElement = document.getElementById("changingText");

    function typeText(text) {
      if (index < text.length) {
        changingTextElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(() => typeText(text), speed);
      } else {
        // Change the text after typing
        setTimeout(changeText, 1000); // Wait for 1 second before changing the text
      }
    }

    function changeText() {
      changingTextElement.innerHTML = ""; // Clear the current text
      index = 0;
      textIndex = (textIndex + 1) % textsToType.length; // Move to the next text in the array
      const newText = textsToType[textIndex];
      typeText(newText);
    }

    // Start typing when the page loads
    typeText(textsToType[textIndex]);


    document.addEventListener("DOMContentLoaded", function() {
        const loadingTextElement = document.getElementById("loadingText");
        loadingTextElement.style.animationDelay = "1s"; // Adjust the delay as needed
        loadingTextElement.style.animationDuration = "2s"; // Adjust the duration as needed
      });
 
