# JavaScript Template Literals

## What are Template Literals?

Template literals are a modern way to work with strings in JavaScript (introduced in ES6). They make it easier to create strings that include variables, expressions, and even multiple lines. Instead of using single quotes `'` or double quotes `"`, template literals use backticks `` ` ``.

Think of template literals as a more powerful version of regular strings - they let you embed variables and expressions directly into your text without complicated concatenation.

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
let name = "Alice";
let city = "London";
let country = "UK";

let introduction = `My name is ${name}. I live in ${city}, ${country}.`;
console.log(introduction);
// "My name is Alice. I live in London, UK."
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

### 4. Calling Functions Inside Template Literals

You can call functions directly inside the `${}` placeholder.

**Example 1: Using Built-in Methods**

```javascript
let text = "javascript";

let message = `Original: ${text}
Uppercase: ${text.toUpperCase()}
Length: ${text.length} characters
First letter: ${text.charAt(0)}`;

console.log(message);
// Original: javascript
// Uppercase: JAVASCRIPT
// Length: 10 characters
// First letter: j
```

**Example 2: Custom Functions**

```javascript
function calculateDiscount(price, discountPercent) {
    return price - (price * discountPercent / 100);
}

function formatCurrency(amount) {
    return `$${amount.toFixed(2)}`;
}

let originalPrice = 100;
let discount = 20;

let priceInfo = `
Original Price: ${formatCurrency(originalPrice)}
Discount: ${discount}%
Final Price: ${formatCurrency(calculateDiscount(originalPrice, discount))}
You save: ${formatCurrency(originalPrice - calculateDiscount(originalPrice, discount))}
`;

console.log(priceInfo);
// Original Price: $100.00
// Discount: 20%
// Final Price: $80.00
// You save: $20.00
```

### 5. Conditional Expressions (Ternary Operator)

You can use conditional logic inside template literals with the ternary operator.

**Example 1: Greeting Based on Time**

```javascript
let hour = 14;
let greeting = `Good ${hour < 12 ? 'morning' : hour < 18 ? 'afternoon' : 'evening'}!`;
console.log(greeting);  // "Good afternoon!"

// Another example
let age = 17;
let message = `You are ${age >= 18 ? 'eligible' : 'not eligible'} to vote.`;
console.log(message);  // "You are not eligible to vote."
```

**Example 2: Status Messages**

```javascript
let isLoggedIn = true;
let username = "Alex";
let itemCount = 3;

let statusMessage = `
User: ${isLoggedIn ? username : 'Guest'}
Status: ${isLoggedIn ? 'Logged In' : 'Logged Out'}
Cart: ${itemCount > 0 ? `${itemCount} item(s)` : 'Empty'}
`;

console.log(statusMessage);
// User: Alex
// Status: Logged In
// Cart: 3 item(s)
```

## Practical Examples

### Example 1: User Profile Card

```javascript
let user = {
    name: "Michael Brown",
    age: 28,
    email: "michael@example.com",
    isActive: true
};

let profileCard = `
================================
USER PROFILE
================================
Name: ${user.name}
Age: ${user.age} years old
Email: ${user.email}
Status: ${user.isActive ? '✓ Active' : '✗ Inactive'}
================================
`;

console.log(profileCard);
```

### Example 2: Dynamic HTML Generation

```javascript
let products = [
    { name: "Phone", price: 699 },
    { name: "Tablet", price: 499 },
    { name: "Laptop", price: 1299 }
];

function generateProductList(products) {
    let html = `<div class="product-list">`;
    
    for (let product of products) {
        html += `
    <div class="product">
        <h3>${product.name}</h3>
        <p>Price: $${product.price}</p>
        <button>Add to Cart</button>
    </div>`;
    }
    
    html += `
</div>`;
    
    return html;
}

console.log(generateProductList(products));
```

### Example 3: Report Generator

```javascript
function generateReport(employeeName, hoursWorked, hourlyRate) {
    const regularHours = 40;
    const overtimeRate = hourlyRate * 1.5;
    
    let regularPay = 0;
    let overtimePay = 0;
    
    if (hoursWorked <= regularHours) {
        regularPay = hoursWorked * hourlyRate;
    } else {
        regularPay = regularHours * hourlyRate;
        overtimePay = (hoursWorked - regularHours) * overtimeRate;
    }
    
    let totalPay = regularPay + overtimePay;
    
    return `
PAYROLL REPORT
====================
Employee: ${employeeName}
Hours Worked: ${hoursWorked}
Hourly Rate: $${hourlyRate}
--------------------
Regular Pay: $${regularPay.toFixed(2)}
Overtime Pay: $${overtimePay.toFixed(2)}
--------------------
Total Pay: $${totalPay.toFixed(2)}
====================
`;
}

console.log(generateReport("Jane Smith", 45, 25));
// Shows a complete payroll report with overtime calculation
```

### Example 4: Dynamic URL Builder

```javascript
function buildSearchURL(baseURL, searchTerm, page, sortBy) {
    return `${baseURL}?search=${searchTerm}&page=${page}&sort=${sortBy}`;
}

let url = buildSearchURL("https://example.com/products", "laptops", 2, "price");
console.log(url);
// "https://example.com/products?search=laptops&page=2&sort=price"

// Another example with user data
let userId = 12345;
let apiKey = "abc123";
let apiURL = `https://api.example.com/users/${userId}?key=${apiKey}`;
console.log(apiURL);
// "https://api.example.com/users/12345?key=abc123"
```

## Comparison: Old vs New

### String Concatenation (Old Way)

```javascript
let name = "David";
let age = 30;
let city = "New York";

// Using concatenation - harder to read and error-prone
let bio = "My name is " + name + ". " +
          "I am " + age + " years old. " +
          "I live in " + city + ".";

console.log(bio);
```

### Template Literals (Modern Way)

```javascript
let name = "David";
let age = 30;
let city = "New York";

// Using template literals - cleaner and easier to maintain
let bio = `My name is ${name}. I am ${age} years old. I live in ${city}.`;

console.log(bio);
```

## Important Tips

1. **Always use backticks** - Template literals require backticks `` ` ``, not regular quotes `'` or `"`.

2. **Syntax for placeholders** - Use `${}` to embed variables or expressions:
   ```javascript
   let result = `The answer is ${5 + 5}`;  // Correct
   // let result = `The answer is {5 + 5}`;  // Wrong - missing $
   ```

3. **Automatic line breaks** - Template literals preserve your formatting:
   ```javascript
   let poem = `Roses are red,
   Violets are blue,
   JavaScript is great,
   And so are you!`;
   ```

4. **Escaping backticks** - If you need to use a backtick inside a template literal, escape it with `\`:
   ```javascript
   let message = `This is a backtick: \``;
   console.log(message);  // "This is a backtick: `"
   ```

5. **Nest with care** - You can nest template literals, but keep it simple:
   ```javascript
   let x = 5;
   let result = `The value is ${x > 0 ? `positive (${x})` : 'not positive'}`;
   console.log(result);  // "The value is positive (5)"
   ```

6. **Performance** - Template literals are slightly slower than simple string concatenation for very large operations, but the difference is negligible in most cases. Readability is more important!

7. **Browser support** - Template literals are part of ES6 and are supported in all modern browsers. For older browsers, you may need a transpiler like Babel.

## When to Use Template Literals

✅ **Use template literals when:**
- Embedding variables in strings
- Building multi-line strings
- Creating HTML or formatted text
- Working with expressions in strings
- Improving code readability

❌ **Regular strings are fine when:**
- You have simple, static text with no variables
- You're working in an environment that doesn't support ES6

## Summary

Template literals make working with strings in JavaScript much easier and more intuitive. They allow you to:
- Embed variables and expressions using `${}`
- Create multi-line strings naturally
- Write cleaner, more readable code
- Avoid error-prone string concatenation

