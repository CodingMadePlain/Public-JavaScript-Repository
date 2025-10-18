# Data Types and typeof()

In JavaScript, **primitive data types** are the most basic data types that represent single values. They are immutable (cannot be changed) and are stored directly in memory.

## The 7 Primitive Data Types

### 1. String
Text data enclosed in quotes:
```javascript
const message = "Hello World";
const name = 'Alice';
```

### 2. Number
Both integers and floating-point numbers:
```javascript
const age = 30;
const price = 99.99;
const negative = -42;
const infinity = Infinity;
```

### 3. Boolean
Logical values:
```javascript
const isLoggedIn = true;
const isComplete = false;
```

### 4. Undefined
Variable declared but not assigned a value:
```javascript
let userName; // undefined
const result = undefined;
```

### 5. Null
Intentionally empty or "no value":
```javascript
const data = null;
let response = null;
```

### 6. Symbol
Unique identifier (ES6+):
```javascript
const id = Symbol('id');
const uniqueKey = Symbol();
```

### 7. BigInt
Large integers beyond Number.MAX_SAFE_INTEGER (ES2020):
```javascript
const largeNumber = 123456789012345678901234567890n;
const bigInt = BigInt(9007199254740991);
```

## Key Characteristics

- **Immutable**: You cannot change the primitive value itself
- **Passed by value**: When assigned or passed to functions, a copy is made
- **Stored in stack memory**: Direct storage for faster access

## Checking Data Types with typeof()

```javascript
let yourName = "John Peters";
console.log(typeof(yourName))
```

Use the `typeof` operator:
```javascript
console.log(typeof "hello");     // "string"
console.log(typeof 42);          // "number"
console.log(typeof true);        // "boolean"
console.log(typeof undefined);   // "undefined"
console.log(typeof null);        // "object" (this is a known quirk!)
console.log(typeof Symbol());    // "symbol"
console.log(typeof 123n);        // "bigint"
```

Everything else in JavaScript (arrays, objects, functions) are **non-primitive** or **reference types**.

