# JavaScript Control Structure

## What is Control Structure?

Control structures determine the order in which your code executes. Instead of your code running line by line from top to bottom, control structures let you make decisions, repeat actions, and handle errors. Think of them as the traffic lights and road signs that direct the flow of your program.

In JavaScript, there are three main types of control structures:
1. **Conditionals** - Make decisions based on conditions
2. **Loops** - Repeat actions multiple times
3. **Error Handling** - Manage errors gracefully

## Comparison Operators

Before we dive into control structures, you need to understand comparison operators. These are used to compare values and return `true` or `false`.

| Operator | Description | Example | Result |
|----------|-------------|---------|--------|
| `==` | Equal to (loose equality) | `5 == "5"` | `true` |
| `===` | Strictly equal to (type + value) | `5 === "5"` | `false` |
| `!=` | Not equal to | `5 != 3` | `true` |
| `!==` | Strictly not equal to | `5 !== "5"` | `true` |
| `>` | Greater than | `10 > 5` | `true` |
| `<` | Less than | `3 < 7` | `true` |
| `>=` | Greater than or equal to | `5 >= 5` | `true` |
| `<=` | Less than or equal to | `4 <= 3` | `false` |

**Examples:**

```javascript
let age = 18;
let userInput = "18";

console.log(age == userInput);   // true (values are equal)
console.log(age === userInput);  // false (different types)
console.log(age > 16);           // true
console.log(age <= 18);          // true
```

### Logical Operators

Logical operators help you combine multiple conditions:

| Operator | Description | Example |
|----------|-------------|---------|
| `&&` | AND (both must be true) | `age > 18 && hasLicense` |
| `\|\|` | OR (at least one must be true) | `isWeekend \|\| isHoliday` |
| `!` | NOT (reverses the boolean) | `!isRaining` |

```javascript
let age = 20;
let hasLicense = true;
let isSunny = false;

console.log(age >= 18 && hasLicense);  // true (both conditions are true)
console.log(age < 18 || hasLicense);   // true (at least one is true)
console.log(!isSunny);                 // true (reverses false to true)
```

## 1. Conditionals

Conditionals allow your program to make decisions and execute different code based on whether conditions are true or false.

### Example 1: `if...else` Statement

The `if...else` statement checks a condition and runs different code depending on the result.

```javascript
// Example: Checking voting eligibility
function checkVotingAge(age) {
    if (age >= 18) {
        console.log("You are eligible to vote!");
    } else {
        console.log("You are too young to vote.");
    }
}

checkVotingAge(20);  // "You are eligible to vote!"
checkVotingAge(15);  // "You are too young to vote."
```

**More Complex Example:**

```javascript
// Example: Grade calculator
function calculateGrade(score) {
    if (score >= 90) {
        console.log("Grade: A - Excellent!");
    } else if (score >= 80) {
        console.log("Grade: B - Good job!");
    } else if (score >= 70) {
        console.log("Grade: C - Fair");
    } else if (score >= 60) {
        console.log("Grade: D - Needs improvement");
    } else {
        console.log("Grade: F - Failed");
    }
}

calculateGrade(85);  // "Grade: B - Good job!"
calculateGrade(55);  // "Grade: F - Failed"
```

### Example 2: `switch` Statement

The `switch` statement is useful when you need to check one value against multiple possibilities.

```javascript
// Example: Day of the week
function getDayMessage(day) {
    switch (day) {
        case "Monday":
            console.log("Start of the work week!");
            break;
        case "Wednesday":
            console.log("Midweek already!");
            break;
        case "Friday":
            console.log("Almost weekend!");
            break;
        case "Saturday":
        case "Sunday":
            console.log("It's the weekend!");
            break;
        default:
            console.log("It's a regular day.");
    }
}

getDayMessage("Friday");   // "Almost weekend!"
getDayMessage("Sunday");   // "It's the weekend!"
```

**Another Example:**

```javascript
// Example: Simple calculator
function calculate(operation, num1, num2) {
    let result;
    
    switch (operation) {
        case "add":
            result = num1 + num2;
            break;
        case "subtract":
            result = num1 - num2;
            break;
        case "multiply":
            result = num1 * num2;
            break;
        case "divide":
            result = num1 / num2;
            break;
        default:
            result = "Invalid operation";
    }
    
    return result;
}

console.log(calculate("add", 10, 5));       // 15
console.log(calculate("multiply", 4, 3));   // 12
console.log(calculate("unknown", 2, 2));    // "Invalid operation"
```

## 2. Loops

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

## 3. Error Handling

Error handling helps your program deal with unexpected situations without crashing. This makes your code more reliable and user-friendly.

### Example 1: `try...catch` Statement

The `try...catch` block lets you attempt code that might fail and handle any errors gracefully.

```javascript
// Example: Safe division
function safeDivide(numerator, denominator) {
    try {
        if (denominator === 0) {
            throw new Error("Cannot divide by zero!");
        }
        
        let result = numerator / denominator;
        console.log(`Result: ${result}`);
        return result;
        
    } catch (error) {
        console.log(`Error: ${error.message}`);
        return null;
    }
}

safeDivide(10, 2);  // "Result: 5"
safeDivide(10, 0);  // "Error: Cannot divide by zero!"
```

**Another Example:**

```javascript
// Example: Parsing user input
function parseUserAge(input) {
    try {
        const age = Number(input);
        
        if (isNaN(age)) {
            throw new Error("Please enter a valid number");
        }
        
        if (age < 0 || age > 150) {
            throw new Error("Age must be between 0 and 150");
        }
        
        console.log(`Valid age: ${age}`);
        return age;
        
    } catch (error) {
        console.log(`Invalid input: ${error.message}`);
        return null;
    }
}

parseUserAge("25");      // "Valid age: 25"
parseUserAge("abc");     // "Invalid input: Please enter a valid number"
parseUserAge("200");     // "Invalid input: Age must be between 0 and 150"
```

### Example 2: `try...catch...finally`

The `finally` block runs regardless of whether an error occurred. It's useful for cleanup operations.

```javascript
// Example: File operation simulation
function processData(data) {
    console.log("Opening connection...");
    
    try {
        if (!data) {
            throw new Error("No data provided");
        }
        
        console.log(`Processing: ${data}`);
        // Simulate processing
        console.log("Data processed successfully!");
        
    } catch (error) {
        console.log(`Error occurred: ${error.message}`);
        
    } finally {
        console.log("Closing connection...");
        console.log("Cleanup complete!");
    }
}

processData("User Information");
// Output:
// Opening connection...
// Processing: User Information
// Data processed successfully!
// Closing connection...
// Cleanup complete!

console.log("---");

processData(null);
// Output:
// Opening connection...
// Error occurred: No data provided
// Closing connection...
// Cleanup complete!
```

**Another Example:**

```javascript
// Example: API call simulation
function fetchUserData(userId) {
    let connection = "active";
    
    try {
        console.log("Connecting to server...");
        
        if (userId < 1) {
            throw new Error("Invalid user ID");
        }
        
        console.log(`Fetching data for user ${userId}`);
        return { id: userId, name: "John Doe" };
        
    } catch (error) {
        console.log(`Failed to fetch data: ${error.message}`);
        return null;
        
    } finally {
        connection = "closed";
        console.log(`Connection status: ${connection}`);
    }
}

fetchUserData(5);   // Success case
console.log("---");
fetchUserData(-1);  // Error case
```

## Combining Control Structures

In real-world applications, you often combine different control structures:

```javascript
// Example: Student grade processor
function processStudentGrades(students) {
    try {
        if (!Array.isArray(students)) {
            throw new Error("Invalid student data");
        }
        
        for (const student of students) {
            if (student.score >= 60) {
                console.log(`${student.name}: PASSED (${student.score})`);
            } else {
                console.log(`${student.name}: FAILED (${student.score})`);
            }
        }
        
    } catch (error) {
        console.log(`Error processing grades: ${error.message}`);
    }
}

const students = [
    { name: "Alice", score: 85 },
    { name: "Bob", score: 55 },
    { name: "Carol", score: 92 }
];

processStudentGrades(students);
// Output:
// Alice: PASSED (85)
// Bob: FAILED (55)
// Carol: PASSED (92)
```

## Important Tips

1. **Use `===` instead of `==`** - Strict equality prevents unexpected type conversions.

2. **Don't forget `break` in switch statements** - Without `break`, execution continues to the next case.

3. **Avoid infinite loops** - Make sure your loop condition will eventually become false:
   ```javascript
   // Bad - infinite loop
   // while (true) { }
   
   // Good - has an exit condition
   let count = 0;
   while (count < 10) {
       count++;
   }
   ```

4. **Use try...catch for risky operations** - Parsing data, network requests, or file operations should be wrapped in error handling.

5. **Keep conditions simple** - If your conditions are too complex, break them into smaller, named variables:
   ```javascript
   // Instead of this:
   if (age > 18 && hasLicense && !isSuspended && hasInsurance) { }
   
   // Consider this:
   const canDrive = age > 18 && hasLicense && !isSuspended && hasInsurance;
   if (canDrive) { }
   ```

6. **Choose the right loop** - Use `for` when you know the iteration count, `while` when you don't, and `for...of` for arrays.