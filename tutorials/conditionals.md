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