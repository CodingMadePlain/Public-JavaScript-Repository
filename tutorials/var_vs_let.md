# Differences between `var` and `let`

## 1. Scope

This is the most critical difference.

-   **`var` is function-scoped:** A variable declared with `var` is accessible anywhere within the function it was declared in, regardless of block (`{...}`).
-   **`let` is block-scoped:** A variable declared with `let` is only accessible within the block (`{...}`) it was declared in. 

A block can be a `for` loop, an `if` statement, or just a pair of curly braces.

**Example:**

```javascript
function scopeTest() {
  var varVariable = 'I am a var';
  let letVariable = 'I am a let';

  if (true) {
    var varVariable = 'I am a var, redeclared'; // This overwrites the original varVariable
    let letVariable = 'I am a let, redeclared'; // This is a NEW variable, only for this block
    console.log('Inside block:', varVariable); // 'I am a var, redeclared'
    console.log('Inside block:', letVariable); // 'I am a let, redeclared'
  }

  console.log('Outside block:', varVariable); // 'I am a var, redeclared' (The change leaked out!)
  console.log('Outside block:', letVariable); // 'I am a let' (The original remains untouched)
}

scopeTest();
```

**Example of block**

```javascript
  // Demonstrating block scope with let
        let a = 10;
        {
            let a = 20;
            console.log(a); // 20
        }
        console.log(a); // 10

        // Demonstrating block scope with var
        var b = 10;
        {
            var b = 30;
            console.log(b); // 30
        }
        console.log(b); // 30
```

### 2. Hoisting

Hoisting is JavaScript's behavior of moving declarations to the top of their scope before code execution.   
However, `var` and `let` are hoisted differently.

-   **`var` is hoisted and initialized with `undefined`:** You can access a `var` variable before its declaration line without an error; you'll just get `undefined`.
-   **`let` is hoisted but not initialized:** Accessing a `let` variable before its declaration results in a `ReferenceError`. The time between the start of the block and the `let` declaration is called the "Temporal Dead Zone" (TDZ).

**Example:**

```javascript
// Hoisting with var
console.log(myVar); // Output: undefined
var myVar = 10;
console.log(myVar); // Output: 10

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

### 4. Global Object Attachment

When used in the global scope (outside of any function), `var` and `let` behave differently.

*   **`var` attaches to the global object:** A `var` declared globally becomes a property of the `window` object in browsers. This can cause conflicts with other scripts or libraries.
*   **`let` does not attach to the global object:** A `let` declared globally does not become a property of the `window` object.

**Example (run in a browser console):**

```javascript
var globalVar = 'I am global';
let globalLet = 'I am also global';

console.log(window.globalVar); // Output: "I am global"
console.log(window.globalLet); // Output: undefined
```

### Summary & Best Practice

| Feature | `var` | `let` |
| :--- | :--- | :--- |
| **Scope** | Function-scoped | Block-scoped |
| **Hoisting** | Hoisted and initialized to `undefined` | Hoisted but not initialized (TDZ) |
| **Redeclaration** | Allowed in the same scope | Not allowed in the same scope |
| **Global Object** | Attaches to `window` object | Does not attach to `window` object |

**Conclusion:** For modern JavaScript, you should always prefer `let` and `const` over `var`. They provide more predictable behavior, prevent common bugs related to scope and redeclaration, and lead to cleaner, more maintainable code.