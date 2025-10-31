# Array in JavaScript 

Arrays are special variables that store multiple values in an ordered list. You can access each value by its numerical position, called an index, which starts from zero.

---

## Creating an Array

This creates an array named `fruits` that holds three string values.

```javascript
let fruits = ['apple', 'banana', 'cherry'];
```

### Accessing Array Elements

To get an element, use its index in square brackets `[]`. The first element is always at index `0`.

```javascript
console.log(fruits[0]); // Output: 'apple'
console.log(fruits[1]); // Output: 'banana'
```

### Changing an Element

You can update an item by assigning a new value to its index.

```javascript
fruits[1] = 'blueberry';
console.log(fruits); // Output: ['apple', 'blueberry', 'cherry']
```

### Getting the Array Size

The `.length` property tells you how many items are in the array.

```javascript
console.log(fruits.length); // Output: 3
```