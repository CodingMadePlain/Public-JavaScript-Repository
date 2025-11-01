
# JavaScript String Methods

## What are they
String methods in JavaScript are built-in functions that you can use to manipulate and work with text. Since strings are immutable (they cannot be changed), these methods always return a new, modified string.

## When to use
You can use them anytime you need to format, search, or change text, such as cleaning up user input, checking for specific words, or preparing text for display.

---

### Code Examples

#### 1. `toUpperCase()` - Convert to Uppercase
This method converts the entire string to uppercase letters, which is useful for standardizing input.

```javascript
let greeting = 'Hello, World!';
let upperGreeting = greeting.toUpperCase();

console.log(upperGreeting); // Output: 'HELLO, WORLD!'
```

#### 2. `trim()` - Remove Whitespace
This method removes whitespace (spaces, tabs, newlines) from both the beginning and end of a string. It's perfect for cleaning up user-entered data from forms.

```javascript
let userInput = '   some.email@example.com   ';
let cleanedInput = userInput.trim();

console.log(cleanedInput); // Output: 'some.email@example.com'
```

#### 3. `includes()` - Check for a Substring
This ES6 method checks if a string contains another string and returns `true` or `false`. It's great for searching.

```javascript
let sentence = 'The quick brown fox jumps over the lazy dog.';
let hasFox = sentence.includes('fox');

console.log(hasFox); // Output: true
```

---

### Common String Methods

| Method | Description | ES6+ |
| :--- | :--- | :---: |
| `toUpperCase()` | Converts to uppercase | No |
| `toLowerCase()` | Converts to lowercase | No |
| `trim()` | Removes surrounding whitespace | No |
| `slice()` | Extracts a section | No |
| `replace()` | Replaces a substring | No |
| `split()` | Splits string into an array | No |
| `includes()` | Checks if string contains substring | Yes |
| `startsWith()` | Checks if string starts with | Yes |
| `endsWith()` | Checks if string ends with | Yes |
| `padStart()` | Pads the start of a string | Yes |
| `padEnd()` | Pads the end of a string | Yes |