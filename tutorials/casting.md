# Casting

## What is Casting?

Casting is the process of converting a value from one data type to another. In JavaScript, you might need to convert a string to a number, a number to a string, or a boolean to a string. This conversion helps your code work correctly when different data types interact.

For example, if a user enters "25" in a form (which JavaScript receives as a string), you might need to convert it to a number before performing calculations.

## Types of Casting

### 1. Implicit Casting (Automatic Conversion)

Implicit casting happens automatically when JavaScript converts data types behind the scenes. This is also called **type coercion**.

**Examples:**

```javascript
// String + Number = String (concatenation)
let result1 = "5" + 10;  // "510"
console.log(result1);

// String - Number = Number (JavaScript converts string to number)
let result2 = "10" - 5;  // 5
console.log(result2);

// Boolean to Number
let result3 = true + 1;  // 2 (true becomes 1)
console.log(result3);

// String to Boolean in conditions
if ("hello") {  // "hello" is truthy
    console.log("This runs!");
}

if ("") {  // Empty string is falsy
    console.log("This won't run");
}
```

### 2. Explicit Casting (Manual Conversion)

Explicit casting is when you deliberately convert a value from one type to another using JavaScript methods. This gives you more control and makes your code clearer.

**Examples:**

```javascript
// Converting to String
let num = 42;
let str1 = String(num);        // "42"
let str2 = num.toString();     // "42"

// Converting to Number
let text = "123";
let num1 = Number(text);       // 123
let num2 = parseInt(text);     // 123
let num3 = parseFloat("12.5"); // 12.5

// Converting to Boolean
let value1 = Boolean(1);       // true
let value2 = Boolean(0);       // false
let value3 = Boolean("hello"); // true
```

## Common Casting Methods

### Converting to String

| Method | Description | Example |
|--------|-------------|---------|
| `String()` | Converts any value to a string | `String(123)` → `"123"` |
| `.toString()` | Converts value to string (method) | `(123).toString()` → `"123"` |
| Template literals | Embeds values in strings | `` `${123}` `` → `"123"` |

```javascript
let number = 99;
let bool = false;

console.log(String(number));      // "99"
console.log(number.toString());   // "99"
console.log(`${number}`);         // "99"
console.log(String(bool));        // "false"
```

### Converting to Number

| Method | Description | Example |
|--------|-------------|---------|
| `Number()` | Converts value to number | `Number("42")` → `42` |
| `parseInt()` | Converts to integer | `parseInt("42.8")` → `42` |
| `parseFloat()` | Converts to decimal number | `parseFloat("42.8")` → `42.8` |
| Unary `+` | Quick conversion to number | `+"42"` → `42` |

```javascript
let text = "456";
let decimal = "12.75";

console.log(Number(text));        // 456
console.log(parseInt(text));      // 456
console.log(parseFloat(decimal)); // 12.75
console.log(+text);               // 456 (unary plus)

// parseInt with non-numeric characters
console.log(parseInt("100px"));   // 100 (stops at first non-digit)
console.log(Number("100px"));     // NaN (Not a Number)
```

### Converting to Boolean

| Method | Description | Falsy Values |
|--------|-------------|--------------|
| `Boolean()` | Converts value to boolean | `false`, `0`, `""`, `null`, `undefined`, `NaN` |

```javascript
// Truthy values become true
console.log(Boolean(1));          // true
console.log(Boolean("hello"));    // true
console.log(Boolean([]));         // true
console.log(Boolean({}));         // true

// Falsy values become false
console.log(Boolean(0));          // false
console.log(Boolean(""));         // false
console.log(Boolean(null));       // false
console.log(Boolean(undefined));  // false
console.log(Boolean(NaN));        // false
```

## Practical Examples

### Example 1: User Input

```javascript
// User input is always a string
let userAge = "25";  // From a form input

// Convert to number for calculation
let ageNumber = Number(userAge);
let nextYear = ageNumber + 1;

console.log(`Next year you will be ${nextYear}`); // "Next year you will be 26"
```

### Example 2: Displaying Numbers

```javascript
let score = 1250;
let lives = 3;

// Convert numbers to strings for display
let message = "Score: " + String(score) + ", Lives: " + String(lives);
console.log(message); // "Score: 1250, Lives: 3"

// Or use template literals (implicit conversion)
let message2 = `Score: ${score}, Lives: ${lives}`;
console.log(message2); // "Score: 1250, Lives: 3"
```

### Example 3: Checking Values

```javascript
function checkValue(value) {
    if (Boolean(value)) {
        console.log("Value exists and is truthy");
    } else {
        console.log("Value is falsy");
    }
}

checkValue(10);        // "Value exists and is truthy"
checkValue("");        // "Value is falsy"
checkValue(0);         // "Value is falsy"
```

## Important Tips

1. **Be careful with implicit casting** - It can lead to unexpected results if you're not aware of how JavaScript handles it.

2. **Use explicit casting for clarity** - It makes your code easier to understand and prevents bugs.

3. **Watch out for NaN** - When converting invalid strings to numbers, you get `NaN` (Not a Number):
   ```javascript
   console.log(Number("hello")); // NaN
   ```

4. **Empty strings and zeros** - Remember that empty strings and zero are falsy values:
   ```javascript
   console.log(Boolean(""));  // false
   console.log(Boolean(0));   // false
   ```

5. **Use parseInt with radix** - When using `parseInt()`, specify the base (radix) to avoid confusion:
   ```javascript
   parseInt("10", 10);  // 10 in decimal
   parseInt("10", 2);   // 2 in binary
   ```
