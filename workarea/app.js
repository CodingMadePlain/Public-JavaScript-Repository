// 1. DECLARE the function (writing the recipe)
function showMessage() {
  const message = "Hello from a Named Function!";
  
  // Log to the developer console
  console.log(message);
  
  // Write the message to our webpage
  document.querySelector("#output").textContent = message;
}

// 2. Set up an event listener to CALL the function when the button is clicked
document.querySelector("#actionButton").addEventListener("click", showMessage);
