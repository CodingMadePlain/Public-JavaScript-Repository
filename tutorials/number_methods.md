# JavaScript Number Methods

# What are they

Number methods are built-in functions in JavaScript that help you perform common operations on numbers. They are primarily used for formatting, converting, or checking the type and integrity of numerical values.


# When to use them

You can use them when you need to format a number for display (like currency), convert a string into a number, or check if a value is a valid, finite number before performing a calculation.

---

### Code Examples

#### 1. `toFixed()` - Format Decimal Places
This method formats a number to a specific number of decimal places and returns the result as a string. It's very useful for displaying prices.

```javascript
let price = 19.99123;
let formattedPrice = price.toFixed(2);

console.log(formattedPrice); // Output: "19.99"
```

#### 2. `toString()` - Convert to String
This method converts a number into its string representation. You can also pass a "radix" (or base) to convert the number to binary, hexadecimal, etc.

```javascript
let quantity = 100;
let quantityAsString = quantity.toString();

console.log(quantityAsString);   // Output: "100"
console.log((255).toString(16)); // Output: "ff" (hexadecimal)
```

#### 3. `Number.parseInt()` - Parse an Integer from a String
This method parses a string argument and returns an integer. It stops parsing when it hits a character that isn't part of the number.

```javascript
let width = '100px';
let widthAsNumber = Number.parseInt(width);

console.log(widthAsNumber); // Output: 100
```

#### 4. `Number.isNaN()` - Check for NaN
This ES6 method determines if the passed value is `NaN` (Not-a-Number). It's a reliable way to check if a mathematical operation resulted in an invalid number.

```javascript
let result = 0 / 0; // This calculation results in NaN
let isInvalid = Number.isNaN(result);

console.log(isInvalid); // Output: true
```

### More Examples
```javascript
// Example 1: using parseFloat()
let str = "3.14"; // a string containing a number
let num = parseFloat(str); // convert the string into a number
console.log(num); // output: 3.14
console.log(typeof num); // output: "number"

// Example 2: using parseInt()
let str2 = "3.14`"
let num2 = parseInt(str2); // convert the string into an integer
console.log(num2); // output: 3
console.log(typeof num); // output: "number"
```

---

### Common Number Methods

| Method | Description | ES6+ |
| :--- | :--- | :---: |
| `toFixed()` | Formats with fixed decimals | No |
| `toString()` | Converts number to string | No |
| `Number.parseInt()` | Parses string to integer | Yes |
| `Number.parseFloat()`| Parses string to float | Yes |
| `Number.isNaN()` | Checks if value is NaN | Yes |
| `Number.isInteger()` | Checks if value is integer | Yes |
| `Number.isFinite()` | Checks if value is finite | Yes |