# DOM - Document Object Model

The **DOM (Document Object Model)** is a programming interface for web documents. It represents the structure of an HTML or XML document as a tree of objects that JavaScript can interact with. Think of it as a bridge between your web page and JavaScript code, allowing you to create dynamic and interactive web pages.

## The DOM Tree Structure

The DOM organizes your HTML document into a tree-like structure. Here's how a typical HTML document is represented:

```
Document
  └── html
      ├── head
      │   ├── title
      │   └── meta
      └── body
          ├── h1
          ├── p
          └── div
              ├── span
              └── img
```

Each element in this tree is called a **node**, and you can navigate between parent nodes, child nodes, and sibling nodes using JavaScript.

## Why is the DOM Important?

- **Dynamic Web Pages**: Create interactive websites that respond to user actions
- **Content Updates**: Change page content without reloading the entire page
- **User Interaction**: Handle clicks, form submissions, keyboard input, and more
- **Modern Web Development**: Foundation for frameworks like React, Vue, and Angular

## Selecting Elements from the DOM

Before you can manipulate elements, you need to select them. JavaScript provides several methods for this:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sample 2 - DOM Element Access</title>
</head>
<body>
    <form>
 
<p id="hd"> Content is <b>here</b> and notice tags </p>

<strong></strong>
<footer></footer>
<script>
    const MYTEXT = document.getElementById("hd").innerText;
    let someText = document.getElementById("hd").textContent;
    someText = document.getElementById("hd").innerHTML;
    document.querySelector("strong").innerHTML = someText;
    console.log(someText)
</script>

</body>
</html>
```

### Assignment ❓
Create an HTML page with your name inside a h1 element.  
Display your name in the console log.

<!--stopped here. Update with JavaScript_2025 DOM>
## Writing elements to the page

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Write Content of h1 element to the div tag</title>
    <style>
        #box {
            border: 1px solid #000;
            padding: 10px;
            margin-top: 10px;
            width: 200px;
            height: 200px;
        }
    </style>
</head>
<body>
    <h1 id="yourName">Put Your name here</h1>
    <div id="box"></div>
    <script>
        // Selects the <h1> element by its ID and stores a reference to it in the header constant
        const header = document.getElementById('yourName');
        const thebox = document.getElementById('box');

        //Copies the text content from the <h1> element to the <div> element
        thebox.textContent = header.textContent;
    </script>
</body>
</html>
```
## Commonly used DOM Methods and properties

Here are 5 commonly used DOM methods and properties that form the foundation of DOM manipulation in JavaScript:

### Methods:

#### 1. `getElementById()`
Selects a single element by its ID attribute. This is one of the fastest ways to select an element because IDs are unique.

```javascript
const element = document.getElementById('myId');
```

#### 2. `querySelector()`
Selects the first element that matches a CSS selector. This is very flexible as it accepts any valid CSS selector.

```javascript
const element = document.querySelector('.myClass');
const button = document.querySelector('button.submit');
const nested = document.querySelector('#container > p');
```

#### 3. `addEventListener()`
Attaches an event handler to an element. This allows you to respond to user interactions like clicks, keyboard input, and more.

```javascript
element.addEventListener('click', function() {
    console.log('Element was clicked!');
});

// Using a named function for clarity
function handleClick() {
    console.log('Button clicked!');
}
button.addEventListener('click', handleClick);
```

### Properties:

#### 4. `innerHTML`
Gets or sets the HTML content inside an element. Use this when you need to insert or read HTML markup.

```javascript
// Get HTML content
const content = element.innerHTML;

// Set HTML content
element.innerHTML = '<p>New <strong>content</strong></p>';
```

#### 5. `textContent`
Gets or sets the text content of an element without HTML tags. This is safer than `innerHTML` when you only need plain text.

```javascript
// Get text content
const text = element.textContent;

// Set text content
element.textContent = 'Plain text content';
```

### Additional Commonly Used Methods and Properties:

- **`classList`** - Provides methods to add, remove, or toggle CSS classes
  ```javascript
  element.classList.add('active');
  element.classList.remove('hidden');
  element.classList.toggle('visible');
  ```

- **`style`** - Allows direct manipulation of an element's inline CSS styles
  ```javascript
  element.style.color = 'blue';
  element.style.backgroundColor = 'lightgray';
  ```

- **`createElement()`** - Creates a new HTML element dynamically
  ```javascript
  const newDiv = document.createElement('div');
  newDiv.textContent = 'I am a new element';
  document.body.appendChild(newDiv);
  ```

