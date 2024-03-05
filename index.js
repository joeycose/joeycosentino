// Get the button element in the Contact Me section
const copyButton = document.querySelector("#Contact_Me .btn-outline-primary");

// Add a click event listener to the button
copyButton.addEventListener("click", () => {
  // Get the text content of the button
  const textToCopy = copyButton.textContent;

  // Create a new element to hold the text
  const textElement = document.createElement("textarea");

  // Set the value of the element to the text to copy
  textElement.value = textToCopy;

  // Add the element to the body
  document.body.appendChild(textElement);

  // Select the text
  textElement.select();

  // Copy the text
  document.execCommand("copy");

  // Remove the element from the body
  document.body.removeChild(textElement);

  // Alert the user that the text has been copied
  alert("Text copied to clipboard!");
});
