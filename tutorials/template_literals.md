# JavaScript Template Literals

## What are Template Literals?

Template literals are a modern way to work with strings in JavaScript (introduced in ES6). They make it easier to create strings that include variables, expressions, and even multiple lines. Instead of using single quotes `'` or double quotes `"`, template literals use backticks `` ` ``.

## Why Use Template Literals?

**Old Way (String Concatenation):**
```javascript
let name = "Sarah";
let age = 25;
let message = "Hello, my name is " + name + " and I am " + age + " years old.";
console.log(message);
// "Hello, my name is Sarah and I am 25 years old."
```

**New Way (Template Literals):**
```javascript
let name = "Sarah";
let age = 25;
let message = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(message);
// "Hello, my name is Sarah and I am 25 years old."
```

As you can see, template literals are cleaner, easier to read, and less prone to errors!

## Basic Syntax

Template literals use:
- **Backticks** `` ` `` instead of quotes
- **`${}`** to embed variables and expressions

```javascript
// Basic template literal
let greeting = `Hello, World!`;
console.log(greeting);  // "Hello, World!"

// With variables
let firstName = "John";
let lastName = "Doe";
let fullName = `${firstName} ${lastName}`;
console.log(fullName);  // "John Doe"
```

## Key Features

### 1. String Interpolation (Embedding Variables)

String interpolation allows you to insert variables directly into your strings using `${}`.

**Example 1: Personal Information**

```javascript
let name = "Mike";
let city = "London";
let country = "UK";

let introduction = `My name is ${name}. I live in ${city}, ${country}.`;
console.log(introduction);
// "My name is Mike. I live in London, UK."
```

**Example 2: Shopping Cart**

```javascript
let product = "Laptop";
let price = 999;
let quantity = 2;

let orderSummary = `You ordered ${quantity} ${product}(s) at $${price} each.`;
console.log(orderSummary);
// "You ordered 2 Laptop(s) at $999 each."
```

### 2. Expression Evaluation

Template literals can evaluate expressions (calculations, function calls, etc.) inside `${}`.

**Example 1: Mathematical Calculations**

```javascript
let num1 = 10;
let num2 = 5;

console.log(`Addition: ${num1} + ${num2} = ${num1 + num2}`);
// "Addition: 10 + 5 = 15"

console.log(`Multiplication: ${num1} × ${num2} = ${num1 * num2}`);
// "Multiplication: 10 × 5 = 50"

console.log(`The average is ${(num1 + num2) / 2}`);
// "The average is 7.5"
```

**Example 2: Price Calculations**

```javascript
let price = 50;
let taxRate = 0.10;
let quantity = 3;

let subtotal = price * quantity;
let tax = subtotal * taxRate;
let total = subtotal + tax;

let receipt = `
Subtotal: $${subtotal}
Tax (10%): $${tax}
Total: $${total}
Amount per item: $${total / quantity}
`;

console.log(receipt);
// Subtotal: $150
// Tax (10%): $15
// Total: $165
// Amount per item: $55
```

### 3. Multi-line Strings

Template literals preserve line breaks, making it easy to create multi-line strings without special characters.

**Example 1: Simple Multi-line Message**

```javascript
// Old way with string concatenation
let oldMessage = "Line 1\n" +
                 "Line 2\n" +
                 "Line 3";

// New way with template literals
let newMessage = `Line 1
Line 2
Line 3`;

console.log(newMessage);
// Line 1
// Line 2
// Line 3
```

**Example 2: Formatted Email Template**

```javascript
let customerName = "Emma Wilson";
let orderNumber = "ORD-12345";
let deliveryDate = "October 25, 2025";

let emailTemplate = `
Dear ${customerName},

Thank you for your order!

Order Details:
- Order Number: ${orderNumber}
- Expected Delivery: ${deliveryDate}

We will notify you when your package is shipped.

Best regards,
The Store Team
`;

console.log(emailTemplate);
```

## Summary

Template literals make working with strings in JavaScript much easier and more intuitive. They allow you to:
- Embed variables and expressions using `${}`
- Create multi-line strings naturally
- Write cleaner, more readable code
- Avoid error-prone string concatenation

