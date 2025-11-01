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

1. [Conditionals](conditionals.md)
2. [Loops](loops.md)
3. [Error handling](errorhandling.md)


