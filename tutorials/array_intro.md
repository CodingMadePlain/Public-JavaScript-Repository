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

## common array methods in JavaScript.

Let's start with this sample array:
```javascript
let animals = ['dog', 'cat', 'horse', 'mouse'];
```

---

### Adding and Removing Elements

#### `push()` - Add to the end
Adds one or more elements to the end of an array.

```javascript
animals.push('bird');
console.log(animals); // Output: ['dog', 'cat', 'horse', 'mouse', 'bird']
```

#### `pop()` - Remove from the end
Removes the last element from an array and returns that element.

```javascript
let lastAnimal = animals.pop();
console.log(lastAnimal); // Output: 'bird'
console.log(animals);    // Output: ['dog', 'cat', 'horse', 'mouse']
```

#### `unshift()` - Add to the start
Adds one or more elements to the beginning of an array.

```javascript
animals.unshift('fish', 'ferret');
console.log(animals); // Output: ['fish', 'ferret', 'dog', 'cat', 'horse', 'mouse']
```

#### `shift()` - Remove from the start
Removes the first element from an array and returns that element.

```javascript
let firstAnimal = animals.shift();
console.log(firstAnimal); // Output: 'fish'
console.log(animals);     // Output: ['ferret', 'dog', 'cat', 'horse', 'mouse']
```

---

### Finding and Filtering Elements

#### `includes()` - Check for an item
Returns `true` if an array contains a certain value, and `false` otherwise.

```javascript
let hasCat = animals.includes('cat');
console.log(hasCat); // Output: true
```

#### `indexOf()` - Find the index
Returns the first index at which a given element can be found in the array, or `-1` if it is not present.

```javascript
let catIndex = animals.indexOf('cat');
console.log(catIndex); // Output: 2
```

---

### Creating New Arrays

#### `slice()` - Copy a portion
Returns a shallow copy of a portion of an array into a new array object. The original array is not modified.

```javascript
// Get elements from index 1 up to (but not including) index 3
let domestic = animals.slice(1, 3);
console.log(domestic); // Output: ['dog', 'cat']
console.log(animals);  // Original is unchanged: ['ferret', 'dog', 'cat', 'horse', 'mouse']
```

#### `join()` - Combine into a string
Joins all elements of an array into a single string. You can specify a separator.

```javascript
let animalString = animals.join(', ');
console.log(animalString); // Output: "ferret, dog, cat, horse, mouse"
```