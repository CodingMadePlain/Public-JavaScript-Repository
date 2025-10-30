# More on JavaScript DOM


## functions with DOM
```html
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Get Attribute Example</title>
  
  <body>
     <img src="../images/girl-face2.jpg" id="Ind" alt="sample image">
  </body>
  <script>
const myAttribute = document.getElementById("Ind").getAttribute("src");
console.log(myAttribute) // returns images/girl-face2.jpg
// function to swap image source
function swapImage() {
    const imageElement = document.getElementById("Ind");
    const currentSrc = imageElement.getAttribute("src");
    if (currentSrc === "../images/girl-face2.jpg") {
        imageElement.setAttribute("src", "../images/boy-face2.jpg");
    } else {
        imageElement.setAttribute("src", "../images/girl-face2.jpg");
    }
}
document.getElementById("Ind").onclick = swapImage;
</script>
  </html>
  ```