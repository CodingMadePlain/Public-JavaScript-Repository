# The JavaScript BOM (Browser Object Model)

The **BOM** stands for **Browser Object Model**. It's a collection of objects that JavaScript provides to interact with the web browser itself, rather than the content of the web page. This is the key difference between the BOM and the DOM (Document Object Model), which represents the HTML document's structure.

Think of it this way:
*   **DOM**: Lets you manipulate the content of the page (e.g., change text, add an element).
*   **BOM**: Lets you manipulate the browser window (e.g., get the screen size, redirect to a new URL, show an alert).

The main object in the BOM is the `window` object, which represents the browser window. All global JavaScript objects, functions, and variables automatically become members of the `window` object.

Here are the key objects within the BOM:

*   **`window`**: The top-level object. It contains properties and methods related to the browser window, such as `window.innerHeight`, `window.open()`, and `window.alert()`.
*   **`navigator`**: Contains information about the visitor's browser, such as the user agent, platform, and language.
*   **`screen`**: Contains information about the user's screen, like screen width, height, and color depth.
*   **`history`**: Allows you to work with the browser's session history (the pages visited in the window). You can use `history.back()` or `history.forward()`.
*   **`location`**: Contains information about the current URL. You can use it to get the current URL (`location.href`) or to redirect the browser to a new page (`location.href = '...'`).

---

## Working Example

Here is a simple HTML file that demonstrates how to access information from the `navigator` and `screen` objects and display it on the page.

You can save this code as an `.html` file and open it in any web browser to see it work.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>JavaScript BOM Example</title>
    <style>
        body {
            font-family: sans-serif;
            padding: 20px;
        }
        p {
            font-size: 1.2em;
        }
    </style>
</head>
<body>
    <h1>Browser & Screen Information</h1>
    <p id="browser-info"></p>
    <p id="screen-info"></p>

    <script>
        // 1. Get the element where we will display browser info
        const browserInfoElem = document.getElementById('browser-info');

        // 2. Access the BOM's navigator object
        const userAgent = window.navigator.userAgent;
        const platform = window.navigator.platform;
        
        // 3. Display the information on the page
        browserInfoElem.textContent = `Your browser's User Agent is: ${userAgent}. You are running on: ${platform}.`;

        // ---

        // 4. Get the element for screen info
        const screenInfoElem = document.getElementById('screen-info');

        // 5. Access the BOM's screen object
        const screenWidth = window.screen.width;
        const screenHeight = window.screen.height;

        // 6. Display the screen information
        screenInfoElem.textContent = `Your screen resolution is: ${screenWidth}px x ${screenHeight}px.`;
    </script>
</body>
</html>
```

### How it Works:

1.  We have two `<p>` tags in our HTML to act as placeholders for the information.
2.  In the `<script>` tag, we use `document.getElementById()` to get references to these placeholders.
3.  We access `window.navigator.userAgent` and `window.navigator.platform` to get details about the browser and operating system.
4.  We then access `window.screen.width` and `window.screen.height` to get the screen resolution.
5.  Finally, we set the `textContent` of our placeholder elements to display this information on the page.

