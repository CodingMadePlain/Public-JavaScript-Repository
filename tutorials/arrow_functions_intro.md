# A Simple Introduction to Arrow Functions

In JavaScript, functions are blocks of code designed to perform a particular task. They are executed when "called" or "invoked," allowing you to reuse code efficiently.

Here is how you can write the same piece of logic using three different function styles in modern JavaScript. The goal is to check if we have an office in a user's country and return a personalized message.

```javascript
const officeCountries = ['United Kingdom', 'USA', 'South Africa', 'Nigeria'];
```

### 1. Named Function

This is the classic way to declare a function. It has a name (`checkOffice`) that you can use to call it.

```javascript
function checkOffice(name, country) {
  if (officeCountries.includes(country)) {
    return `<h2>Hello ${name}, yes, we have an office in your country.</h2>`;
  } else {
    return `<h2>Hello ${name}, you have to do your meeting on zoom.</h2>`;
  }
}

// How to use it:
console.log(checkOffice('John Doe', 'USA'));
// Output: <h2>Hello John Doe, yes, we have an office in your country.</h2>

console.log(checkOffice('Jane Smith', 'France'));
// Output: <h2>Hello Jane Smith, you have to do your meeting on zoom.</h2>
```

### 2. Anonymous Function

An anonymous function has no name. It is typically assigned to a variable, which you then use to call the function.

```javascript
const checkOfficeAnonymous = function(name, country) {
  if (officeCountries.includes(country)) {
    return `<h2>Hello ${name}, yes, we have an office in your country.</h2>`;
  } else {
    return `<h2>Hello ${name}, you have to do your meeting on zoom.</h2>`;
  }
};

// How to use it:
console.log(checkOfficeAnonymous('Peter Jones', 'South Africa'));
// Output: <h2>Hello Peter Jones, yes, we have an office in your country.</h2>
```

### 3. Arrow Function (ES6+)

Arrow functions, introduced in ES6, provide a shorter, more concise syntax for writing functions.

```javascript
const checkOfficeArrow = (name, country) => {
  if (officeCountries.includes(country)) {
    return `<h2>Hello ${name}, yes, we have an office in your country.</h2>`;
  } else {
    return `<h2>Hello ${name}, you have to do your meeting on zoom.</h2>`;
  }
};

// How to use it:
console.log(checkOfficeArrow('Mary Williams', 'United Kingdom'));
// Output: <h2>Hello Mary Williams, yes, we have an office in your country.</h2>
```
