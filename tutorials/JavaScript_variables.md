# JavaScript Variables

Variables are containers that store data values in JavaScript. Think of them as labeled boxes where you can put information that you want to use later in your program. Variables are fundamental to programming because they allow you to store, modify, and retrieve data throughout your code.

- **Declaring** a variable is the act of creating it.
- **Initializing** a variable is the act of giving it its first value.
- **Assigning** a variable is  giving a new value to an already initialized variable.
- **const** cannot be reassigned after they are initialized.

## Declaring Variables

In modern JavaScript (ES6+), there are three ways to declare variables:

### const
Use `const` for values that won't change after they're set (constants):
With `const` you have to declare and assign a variable at the same time.

```javascript
const userName = "Alice"; // declaring and assigning
const maxUsers = 100; // You have to declare and assign a variable at the same time
const isLoggedIn = true;

// This will cause an error because you can't change a const variable
// userName = "Bob"; // TypeError: Assignment to constant variable
```

### let
Use `let` for values that can change:
You can declare and assign seperately

```javascript
let currentScore  // declaring a variable
currentScore = 20; // assigning a variable
let playerName = "John"; // declaring and assigning

// These are valid because let allows reassignment
currentScore = 150;
playerName = "Jane";
```
#### Assignment ❓
- Run the above examples in an HTML page
- View the answers in console log

### var (Avoid in Modern JavaScript)
`var` is the old way to declare variables.   
It has confusing scoping rules and should be avoided in favor of `let` and `const`:

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
## Summary

```javascript
// 1. Declaration
let playerStatus;

// At this point, playerStatus is `undefined`
console.log(playerStatus); 

// 2. Initialization
playerStatus = "Active"; 
console.log(playerStatus); // "Active"

// 3. Assignment
playerStatus = "Inactive";
console.log(playerStatus); // "Inactive"
```

