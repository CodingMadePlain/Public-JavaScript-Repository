# 2. Loops

Loops allow you to repeat a block of code multiple times. This is useful when you need to perform the same action repeatedly.

### Example 1: `for` Loop

The `for` loop is perfect when you know how many times you want to repeat something.

```javascript
// Example: Counting numbers
function countToTen() {
    for (let i = 1; i <= 10; i++) {
        console.log(`Number: ${i}`);
    }
}

countToTen();
// Output: Number: 1, Number: 2, ... Number: 10
```

**Another Example:**

```javascript
// Example: Processing an array
function printFruits() {
    const fruits = ["Apple", "Banana", "Orange", "Mango"];
    
    for (let i = 0; i < fruits.length; i++) {
        console.log(`Fruit ${i + 1}: ${fruits[i]}`);
    }
}

printFruits();
// Output:
// Fruit 1: Apple
// Fruit 2: Banana
// Fruit 3: Orange
// Fruit 4: Mango
```

### Example 2: `while` Loop

The `while` loop repeats as long as a condition remains true. It's useful when you don't know exactly how many times you need to loop.

```javascript
// Example: Countdown timer
function countdown(start) {
    let count = start;
    
    while (count > 0) {
        console.log(count);
        count--;
    }
    
    console.log("Blast off!");
}

countdown(5);
// Output: 5, 4, 3, 2, 1, Blast off!
```

**Another Example:**

```javascript
// Example: Finding a number
function findNumber(target) {
    let number = 1;
    
    while (number <= 100) {
        if (number === target) {
            console.log(`Found ${target} at position ${number}`);
            break;  // Exit the loop when found
        }
        number++;
    }
}

findNumber(50);  // "Found 50 at position 50"
```

### Bonus: `for...of` Loop (Modern JavaScript)

The `for...of` loop is a cleaner way to iterate through arrays.

```javascript
// Example: Iterating through an array
function listColors() {
    const colors = ["Red", "Green", "Blue", "Yellow"];
    
    for (const color of colors) {
        console.log(`Color: ${color}`);
    }
}

listColors();
// Output: Color: Red, Color: Green, Color: Blue, Color: Yellow
```