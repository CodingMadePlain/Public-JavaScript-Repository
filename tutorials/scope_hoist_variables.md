# Scope and Hoisting
- Scope determines where a variable can be accessed in your code.
- Hoisting is JavaScript's behavior of moving declarations to the top of their scope before code execution.  

## 1. Scope
This is the most critical difference.
Scope determines where a variable can be accessed in your code.

-   **`var` is function-scoped:** A variable declared with `var` is accessible anywhere within the function it was declared in, regardless of block (`{...}`).
-   **`let` is block-scoped:** A variable declared with `let` is only accessible within the block (`{...}`) it was declared in. 

A block can be a `for` loop, an `if` statement, or just a pair of curly braces.

**Example:**

```JavaScript
// Example scope in var
function varScope() {
if (true) {
var scopedVar = 'I am scoped to the function';
}
console.log(scopedVar); // 'I am scoped to the function'
}
varScope();
```

```JavaScript
// Example scope in let
function letScope() {
if (true) {
let scopedLet = 'I am scoped to the block';
console.log(scopedLet); // 'I am scoped to the block'
}
console.log(scopedLet); // ReferenceError: scopedLet is not defined
}
letScope();
```
---

### 2. Hoisting

Hoisting is JavaScript's behavior of moving declarations to the top of their scope before code execution.   
However, `var` and `let` are hoisted differently.

-   **`var` is hoisted and initialized with `undefined`:** You can access a `var` variable before its declaration line without an error; you'll just get `undefined`.
-   **`let` is hoisted but not initialized:** Accessing a `let` variable before its declaration results in a `ReferenceError`. The time between the start of the block and the `let` declaration is called the "Temporal Dead Zone" (TDZ).

**Example:**

```JavaScript
// Example of hoisting in var
console.log(hoistedVar); // undefined
var hoistedVar = 5;
console.log(hoistedVar); // 5
```

```JavaScript
// Example of hoisting in let
console.log(hoistedLet); // ReferenceError: Cannot access 'hoistedLet' before initialization
let hoistedLet = 10;
console.log(hoistedLet); // 10
```


```JavaScript
// Hoisting with let
try {
  console.log(myLet); // Throws ReferenceError: Cannot access 'myLet' before initialization
} catch (e) {
  console.error(e.message);
}
let myLet = 20;
console.log(myLet); // Output: 20
```

### 3. Redeclaration

*   **`var` allows redeclaration:** You can declare the same variable with `var` multiple times in the same scope without any error. This can lead to bugs where you accidentally overwrite a variable.
*   **`let` does not allow redeclaration:** Declaring the same variable with `let` more than once in the same scope will cause a `SyntaxError`.

**Example:**

```javascript
// Redeclaring with var (Allowed)
var x = 5;
var x = 10; // No error, x is now 10
console.log(x); // Output: 10

// Redeclaring with let (Not Allowed)
let y = 5;
// let y = 10; // This line would throw: SyntaxError: Identifier 'y' has already been declared
```