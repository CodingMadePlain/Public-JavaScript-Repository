# JavaScript functions

In programming, we often need to perform the same task over and over. Instead of writing the same code again and again, we can wrap it up in a reusable package called a function.

```javascript
// 1. DECLARE the function (writing the recipe)
function sayHello() {
  console.log("Hello, world!");
}
// call the function
sayHello();
```

**Course Setup:**
Before you start, create an HTML file with the following content. We will use this simple webpage for all our lessons.

**`index.html`**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JS Functions Course</title>
  <style>
    body { font-family: sans-serif; max-width: 600px; margin: 2rem auto; }
    button { font-size: 1rem; padding: 0.5rem 1rem; margin-top: 0.5rem; }
    input { font-size: 1rem; padding: 0.5rem; }
    p { background-color: #f0f0f0; padding: 1rem; border-radius: 5px; }
  </style>
</head>
<body>
  <h1>Lesson 1: Named Functions</h1>
  <button id="actionButton">Run Code</button>
  <p>Result: <strong id="output">...</strong></p>

  <hr>

  <h1>Lesson 2: Parameters, Arguments & Returning Values</h1>
  <input type="text" id="nameInput" placeholder="Enter your name">
  <button id="greetButton">Greet Me</button>
  <p>Greeting: <strong id="greetingOutput">...</strong></p>

  <script src="app.js"></script>
</body>
</html>
```
Now, create an empty `app.js` file in the same folder. You will write all your JavaScript code in this file.

---

### **Lesson 1: Named Functions - The Classic Recipe**

**Concept:**
A named function is the most fundamental way to create a reusable block of code. We give it a name and can "call" that name whenever we want to run the code inside. We will make our first function interactive by connecting it to a button click.

**Let's Code (`app.js`):**

```javascript
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
```

**How It Works:**
1.  We grab the button and the `<strong>` element from our HTML page.
2.  We define a function named `showMessage`. Its job is to update the text on the page and log a message to the console.
3.  `addEventListener` tells the button: "Hey, listen for a 'click' event. When it happens, run the `showMessage` function."

**Mini-Challenge:**
Modify the `message` variable inside the `showMessage` function to say "Functions are awesome!". Save the file and click the button on your webpage to see the change.

---

### **Lesson 2: Parameters, Arguments & Return Values**

**Concept:**
Functions become truly powerful when they can accept input (**parameters**) and produce output (**return values**).

*   **Parameter:** The placeholder for data in the function definition (e.g., `name`).
*   **Argument:** The actual data you pass in when you call the function (e.g., the name from the input box).
*   **Return Value:** The data a function sends *back* after it's done running.

We will create a function that takes a name and *returns* a personalized greeting. Another piece of our code will then take that greeting and display it.

**Let's Code (`app.js` - add this to the bottom):**

```javascript
// 1. Select the new HTML elements
const nameInput = document.querySelector("#nameInput");
const greetButton = document.querySelector("#greetButton");
const greetingOutput = document.querySelector("#greetingOutput");

// 2. DECLARE a function that takes one PARAMETER and RETURNS a value
function createGreeting(userName) {
  // This function's only job is to create the string.
  // It doesn't know about the webpage.
  return `Hello, ${userName}! Welcome!`;
}

// 3. DECLARE a function to handle the button click
function displayGreeting() {
  // Get the current value from the input field
  const usersNameFromInput = nameInput.value;
  
  // Call our other function, passing the input value as an ARGUMENT
  const greeting = createGreeting(usersNameFromInput);
  
  // Use the RETURNED value to update the page
  console.log(greeting);
  greetingOutput.textContent = greeting;
}

// 4. Set up the event listener for the greet button
greetButton.addEventListener("click", displayGreeting);
```

**How It Works:**
1.  The `createGreeting` function is specialized. It takes one parameter, `userName`, and its only job is to `return` a new string.
2.  When the "Greet Me" button is clicked, `displayGreeting` runs.
3.  It gets the text from the input box. This text becomes the **argument** we pass to `createGreeting`.
4.  `createGreeting` runs, returns the finished string, and we store it in the `greeting` constant.
5.  Finally, we display that `greeting` on the page.

**Mini-Challenge:**
Modify the `createGreeting` function to also check if the `userName` is empty. If it is, return the string "Please enter a name!".

---

### **Lesson 3: Anonymous Functions - Quick, Unnamed Helpers**

**Concept:**
Sometimes, you only need a function for one specific task, like an event listener. It doesn't need a name. An **anonymous function** is a function without a name. We can place it directly where it's needed.

Let's rewrite our first example using an anonymous function.

**Let's Code (`app.js` - you can comment out Lesson 1's code to avoid confusion):**

```javascript
const actionButton = document.querySelector("#actionButton");
const outputElement = document.querySelector("#output");

// We pass the function DIRECTLY into the event listener
actionButton.addEventListener("click", function () {
  const message = "This came from an Anonymous Function!";
  
  console.log(message);
  outputElement.textContent = message;
});
```

**How It Works:**
Compare this to Lesson 1. Instead of passing the *name* `showMessage` to `addEventListener`, we wrote the entire `function () { ... }` body right inside the parentheses. This is extremely common in JavaScript for code that you won't need to reuse anywhere else.

---

### **Lesson 4: Arrow Functions - The Modern Shorthand**

**Concept:**
**Arrow functions** are a modern, more concise way to write anonymous functions. They are preferred in modern ES6+ code for their brevity and clarity.

**The Analogy:** If an anonymous function is a quick note, an arrow function is a text message abbreviation—it's shorter and does the same job.

Let's convert our anonymous function from Lesson 3 into an arrow function.

**Let's Code (`app.js` - you can comment out Lesson 3's code):**
```javascript
const actionButton = document.querySelector("#actionButton");
const outputElement = document.querySelector("#output");

// Replace `function ()` with `() =>`
actionButton.addEventListener("click", () => {
  const message = "This is from a modern Arrow Function! 🚀";
  
  console.log(message);
  outputElement.textContent = message;
});
```

**How It Works:**
The syntax is simple:
*   We remove the `function` keyword.
*   We add a "fat arrow" `=>` after the parentheses `()`.

This code does the *exact same thing* as the anonymous function in Lesson 3, but it's cleaner and faster to write. Arrow functions are now the standard for this kind of task.

**Mini-Challenge:**
Go back to the code from Lesson 2. Can you rewrite the `displayGreeting` function and its event listener to use an arrow function instead?

``` html
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Set Attribute Click Example</title>
        <style>
            /* Just a little CSS to make it obvious the image is clickable */
            img {
                cursor: pointer; /* Changes the mouse pointer to a hand when hovering over the image */
                border: 2px solid lightgray; /* Adds a subtle border */
                transition: border-color 0.3s ease; /* Smooth transition for border color change */
            }
            img:hover {
                border-color: dodgerblue; /* Changes border color on hover */
            }
        </style>
    </head>
    <body>
        <!-- Our image element. It starts with one image. -->
        <img src="https://via.placeholder.com/150/0000FF/FFFFFF?text=Click+Me" id="mySwappingImage" alt="A blue placeholder image. Click to change.">

        <script>
            // --- JavaScript for Image Swapping ---

            // 1. Get a reference to our image element
            //    We use document.getElementById() to find the HTML element with the ID "mySwappingImage".
            //    We store this element in a constant variable called 'imageElement' so we can easily refer to it later.
            const imageElement = document.getElementById("mySwappingImage");

            // 2. Create an array of image sources
            //    An array is like a list. Here, it holds the paths to different images.
            //    We'll cycle through these images each time the user clicks.
            //    Using placeholder.com for example images that are easy to see change.
            const imageSources = [
                "https://via.placeholder.com/150/0000FF/FFFFFF?text=Image+One",  // Blue image
                "https://via.placeholder.com/150/FF0000/FFFFFF?text=Image+Two",  // Red image
                "https://via.placeholder.com/150/00FF00/FFFFFF?text=Image+Three" // Green image
            ];

            // 3. Keep track of which image is currently displayed
            //    This variable will store the index (position) of the current image in our 'imageSources' array.
            //    We start at 0, because arrays are "zero-indexed" (the first item is at position 0).
            let currentImageIndex = 0;

            // 4. Define our function to swap the image
            //    A function is a block of code designed to perform a particular task.
            //    We name it 'swapImage' to describe what it does.
            function swapImage() {
                // First, increment our index.
                // This moves us to the next image in the 'imageSources' array.
                currentImageIndex++;

                // What if we've gone past the last image?
                // The '%' (modulo) operator helps us loop back to the beginning.
                // If currentImageIndex is 3 and imageSources.length is 3, then 3 % 3 = 0.
                // This effectively resets currentImageIndex to 0 if it goes beyond the last item.
                currentImageIndex = currentImageIndex % imageSources.length;

                // Now, get the new image source from our array using the updated index.
                const newSrc = imageSources[currentImageIndex];

                // 5. Use setAttribute() to change the image's 'src'
                //    'setAttribute()' is a method that allows us to change the value of an HTML attribute.
                //    It takes two arguments: the name of the attribute ("src") and the new value (newSrc).
                imageElement.setAttribute("src", newSrc);

                // 6. Optionally, update the 'alt' attribute too for accessibility
                //    It's good practice to update the 'alt' text to describe the new image.
                //    This helps users who can't see the image (e.g., using screen readers).
                imageElement.setAttribute("alt", `A placeholder image showing Image ${currentImageIndex + 1}.`);

                // We can also log to the console to see what's happening behind the scenes.
                console.log(`Image swapped to: ${newSrc}`);
            }

            // 7. Add an event listener to the image
            //    An event listener "listens" for a specific event to happen on an HTML element.
            //    Here, we're listening for a "click" event on our 'imageElement'.
            //    When the image is clicked, our 'swapImage' function will automatically run.
            imageElement.addEventListener("click", swapImage);

            // That's it! Now, every time you click the image, it will swap to the next one in the list.
        </script>
    </body>
</html>
```