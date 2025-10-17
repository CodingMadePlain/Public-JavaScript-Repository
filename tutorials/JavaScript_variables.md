# JavaScript Variables

Variables are containers that store data values in JavaScript. Think of them as labeled boxes where you can put information that you want to use later in your program. Variables are fundamental to programming because they allow you to store, modify, and retrieve data throughout your code.

## Declaring Variables

In modern JavaScript (ES6+), there are three ways to declare variables:

### const
Use `const` for values that won't change after they're set (constants):

```javascript
const userName = "Alice";
const maxUsers = 100;
const isLoggedIn = true;

// This will cause an error because you can't change a const variable
// userName = "Bob"; // TypeError: Assignment to constant variable
```

### let
Use `let` for values that can change:

```javascript
let currentScore = 0;
let playerName = "John";

// These are valid because let allows reassignment
currentScore = 150;
playerName = "Jane";
```

### var (Avoid in Modern JavaScript)
`var` is the old way to declare variables. It has confusing scoping rules and should be avoided in favor of `let` and `const`:

```javascript
// Don't use var in modern JavaScript
var oldStyleVariable = "I'm outdated";
```

## Variable Naming Rules

Variables in JavaScript must follow these naming rules:

1. **Start with a letter, underscore (_), or dollar sign ($)**
2. **Cannot start with a number**
3. **Can contain letters, numbers, underscores, and dollar signs**
4. **Are case-sensitive** (`myVariable` and `MyVariable` are different)
5. **Cannot use reserved JavaScript keywords** (like `if`, `for`, `function`)

### Good Variable Names (camelCase)
```javascript
const firstName = "Sarah";
const totalAmount = 299.99;
const isEmailValid = true;
const userAccountBalance = 1500.75;
```

### Invalid Variable Names
```javascript
// These will cause errors:
// const 123invalid = "starts with number";
// const my-variable = "contains hyphen";
// const function = "reserved keyword";
```

## Variable Scope

Scope determines where variables can be accessed in your code:

### Block Scope (let and const)
Variables declared with `let` and `const` are only accessible within the block (curly braces) where they're defined:

```javascript
function calculateTotal() {
    if (true) {
        const taxRate = 0.08; // Only accessible within this if block
        let subtotal = 100;
        
        console.log(taxRate); // Works fine here
    }
    
    // console.log(taxRate); // Error: taxRate is not defined
}
```

### Function Scope
Variables are accessible throughout the entire function where they're declared:

```javascript
function processOrder() {
    const orderNumber = "ORD-001"; // Accessible throughout the function
    
    if (orderNumber) {
        console.log(`Processing ${orderNumber}`); // Works fine
    }
    
    console.log(`Order ${orderNumber} completed`); // Also works fine
}
```

## Best Practices

1. **Use `const` by default** - Only use `let` when you know the value will change
2. **Use descriptive names** - `userEmail` is better than `e`
3. **Use camelCase** - `totalPrice` instead of `total_price`
4. **Initialize variables when possible** - Give variables meaningful starting values
5. **Keep scope as narrow as possible** - Declare variables close to where they're used

### Good Examples
```javascript
const maxRetryAttempts = 3;
const apiUrl = "https://api.example.com";
let currentAttempt = 0;
let isProcessing = false;

function authenticateUser(email, password) {
    const trimmedEmail = email.trim().toLowerCase();
    
    if (trimmedEmail && password) {
        isProcessing = true;
        // Authentication logic here
    }
}
```

## Common Mistakes to Avoid

### 1. Forgetting to declare variables
```javascript
// Bad - creates global variable accidentally
myVariable = "Hello";

// Good - explicitly declare the variable
const myVariable = "Hello";
```

### 2. Using var instead of let/const
```javascript
// Avoid this
var counter = 0;

// Use this instead
let counter = 0;
```

### 3. Reassigning const variables
```javascript
const pi = 3.14159;
// pi = 3.14; // Error: Assignment to constant variable
```

## Summary

Variables are essential building blocks in JavaScript that allow you to store and manipulate data. Remember:

- Use `const` for values that won't change
- Use `let` for values that will change
- Avoid `var` in modern JavaScript
- Follow camelCase naming conventions
- Choose descriptive variable names
- Keep scope as narrow as possible

Understanding variables properly will make your JavaScript code more readable, maintainable, and less prone to errors.