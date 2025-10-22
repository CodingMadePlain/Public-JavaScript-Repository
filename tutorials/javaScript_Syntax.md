# JavaScript Syntax

Three ways of applying JavaScript


```javascript
- Inline - <button onclick="alert('Clicked')">Click me</button>.
- embedded - <script> code goes here </script>
- linked - <script defer src="script.js"></script>
```
**Best Practices:** Prefer external scripts for maintainability and performance.  
That is, the ```<script defer src="script.js"></script>```

## Defer running JavaScript with embedded

```HTML
<html>
<head>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            // place your script here.
               document.getElementById('header').style.color = 'red';
        });
      </script>
</head>
<body>
    <h1 id="header">This is the header</h1>
  </body>
   
  </html>
```

## Defer running linked Scripts

```html
<!DOCTYPE html>
<html lang="en">
<head>
<script defer src="myscript.js"></script>
</head>
<body>
    <h1>Main Page</h1>
</body>
</html>
```
## Essentials of good scripting
- Separating HTML from logic
- Console.log()
- Adding comments
