# The Three Phases of a Variable: Declaration, Initialization, and Assignment
When you work with variables, they go through up to three distinct phases. Understanding the difference between them is crucial, especially when dealing with scope and hoisting.

## 1. Declaration
Declaring a variable is the act of creating it. You are telling the JavaScript engine that a variable with a specific name exists within the current scope. At this stage, the variable is registered, but it doesn't have a value yet (or it has a default undefined value, depending on how it's declared).

```javascript
let score; // 'score' is declared but has no value (it's undefined)
let name;
```

## 2. Initialization
Initializing a variable is the act of giving it its first value. This is often done at the same time as the declaration.

- With let, you can declare first and initialize later.
- With const, you must declare and initialize at the same time.

```javascript
// Declaration and Initialization on the same line
let message = "Hello, World!"; // 'message' is declared and initialized.

const maxRetries = 3; // 'maxRetries' is declared and initialized.

// Declaration first, then initialization
let currentUser;       // Declaration
currentUser = "Alice"; // Initialization
```

## 3. Assignment
Assigning a variable is the act of giving a new value to an already initialized variable. You are updating or changing its content. This can only be done for variables declared with let (or the older var).

Variables declared with const cannot be reassigned after they are initialized.

```javascript
let level = 1; // Declaration and initialization

level = 2; // Assignment (updating the value)
level = 3; // Assignment again

const username = "JohnDoe";
// username = "JaneDoe"; // This would cause a TypeError: Assignment to constant variable.
```

## Summary: Declaration, Initialization, and Assignment

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

