# Arrays in JavaScript

## 1. What is an Array
An array is a special variable that can hold more than one value at a time. It is a versatile data structure that allows you to store and manage a collection of items, such as a list of numbers, strings, or even other objects.

## 2. When to use them
Arrays are useful when you need to work with a list of related items. For example, you could use an array to store a list of student names, the prices of items in a shopping cart, or the high scores in a game.

## 3. Simple Array Examples

Here are two simple examples of arrays:

**A numeric array:**
```javascript
let scores = [98, 85, 91, 78, 82];
```

**A string array:**
```javascript
let colors = ["red", "green", "blue"];
```

## 4. Common Array methods

### a. Access an array
To get an element, use its index in square brackets `[]`. The first element is always at index `0`.

```javascript
let fruits = ['apple', 'banana', 'cherry'];
console.log(fruits[0]); // Output: 'apple'
console.log(fruits[1]); // Output: 'banana'
```

### b. Changing an Element

You can update an item by assigning a new value to its index.

```javascript
fruits[1] = 'blueberry';
console.log(fruits); // Output: ['apple', 'blueberry', 'cherry']
```

### c. Getting the Array Size

The `.length` property tells you how many items are in the array.

```javascript
console.log(fruits.length); // Output: 3
```

### d. Looping an array
```javascript
// loop through the array using for...of
let fruits = ['apple', 'banana', 'cherry'];
for (let fruit of fruits) {
 console.log(fruit);
}
```

```html
<body>
     <h2 id="display">Display result of loop here</h2>
<script>
    let result = '';
    let vegetables = ['carrot', 'broccoli', 'spinach'];
    for (let veg of vegetables) {
        result += veg + ' ';
    }
    document.getElementById('display').innerText = result;
</script>
</body>
```

### e. Search Array with includes()

```JavaScript
 let animals = ['dog', 'cat', 'horse', 'mouse'];
// check if 'cat' is in the array
if (animals.includes('cat')) {
   console.log('Cat is found in the array.');
 } else {
  console.log('Cat is not found in the array.');
 }
```
---MORE---

## Array Properties and Methods

Here is a list of common array properties and methods in JavaScript.

| Property / Method | Description | ES6+ |
|---|---|:---:|
| `length` | Returns the array's length. | |
| `push()` | Adds items to the end. | |
| `pop()` | Removes the last item. | |
| `shift()` | Removes the first item. | |
| `unshift()` | Adds items to the start. | |
| `slice()` | Copies a portion of an array. | |
| `splice()` | Modifies an array by removing or replacing existing elements and/or adding new elements. | |
| `join()` | Joins array elements into a string. | |
| `concat()` | Merges two or more arrays. | |
| `indexOf()` | Finds the first index of an item. | |
| `lastIndexOf()` | Finds the last index of an item. | |
| `includes()` | Checks if an array contains a certain value. | ✔ |
| `find()` | Returns the first element that satisfies a condition. | ✔ |
| `findIndex()` | Returns the index of the first element that satisfies a condition. | ✔ |
| `filter()` | Creates a new array with all elements that pass a test. | |
| `map()` | Creates a new array by calling a function for every array element. | |
| `forEach()` | Calls a function for each array element. | |
| `some()` | Checks if any array elements pass a test. | |
| `every()` | Checks if all array elements pass a test. | |
| `reduce()` | Reduces the array to a single value. | |
| `reduceRight()` | Reduces the array to a single value (right-to-left). | |
| `from()` | Creates an array from an iterable object. | ✔ |
| `of()` | Creates an array from a sequence of values. | ✔ |
| `keys()` | Returns an iterator of keys. | ✔ |
| `values()` | Returns an iterator of values. | ✔ |
| `entries()` | Returns an iterator of key/value pairs. | ✔ |
| `flat()` | Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth. | ✔ |
| `flatMap()` | Maps all elements and flattens the result. | ✔ |

## Code Examples

### `length`
The `length` property returns the number of elements in an array.

```javascript
let fruits = ['apple', 'banana', 'cherry'];
console.log(fruits.length); // Output: 3
```

### `push()`
The `push()` method adds one or more elements to the end of an array.

```javascript
let numbers = [1, 2, 3];
numbers.push(4, 5);
console.log(numbers); // Output: [1, 2, 3, 4, 5]
```

### `pop()`
The `pop()` method removes the last element from an array.

```javascript
let numbers = [1, 2, 3, 4, 5];
numbers.pop();
console.log(numbers); // Output: [1, 2, 3, 4]
```

### `shift()`
The `shift()` method removes the first element from an array.

```javascript
let numbers = [1, 2, 3];
numbers.shift();
console.log(numbers); // Output: [2, 3]
```

### `unshift()`
The `unshift()` method adds one or more elements to the beginning of an array.

```javascript
let numbers = [3, 4];
numbers.unshift(1, 2);
console.log(numbers); // Output: [1, 2, 3, 4]
```

### `slice()`
The `slice()` method returns a shallow copy of a portion of an array into a new array object.

```javascript
let numbers = [1, 2, 3, 4, 5];
let subArray = numbers.slice(1, 4);
console.log(subArray); // Output: [2, 3, 4]
```

### `splice()`
The `splice()` method changes the contents of an array by removing or replacing existing elements and/or adding new elements.

```javascript
let numbers = [1, 2, 3, 4, 5];
numbers.splice(2, 1, 'three');
console.log(numbers); // Output: [1, 2, 'three', 4, 5]
```

### `join()`
The `join()` method creates and returns a new string by concatenating all of the elements in an array.

```javascript
let words = ['Hello', 'World'];
console.log(words.join(' ')); // Output: "Hello World"
```

### `concat()`
The `concat()` method is used to merge two or more arrays.

```javascript
let arr1 = [1, 2];
let arr2 = [3, 4];
let newArr = arr1.concat(arr2);
console.log(newArr); // Output: [1, 2, 3, 4]
```

### `indexOf()`
The `indexOf()` method returns the first index at which a given element can be found in the array.

```javascript
let numbers = [1, 2, 3, 2, 1];
console.log(numbers.indexOf(2)); // Output: 1
```

### `lastIndexOf()`
The `lastIndexOf()` method returns the last index at which a given element can be found in the array.

```javascript
let numbers = [1, 2, 3, 2, 1];
console.log(numbers.lastIndexOf(2)); // Output: 3
```

### `includes()`
The `includes()` method determines whether an array includes a certain value among its entries.

```javascript
let numbers = [1, 2, 3];
console.log(numbers.includes(2)); // Output: true
```

### `find()`
The `find()` method returns the value of the first element in the provided array that satisfies the provided testing function.

```javascript
let numbers = [1, 2, 3, 4, 5];
let found = numbers.find(element => element > 3);
console.log(found); // Output: 4
```

### `findIndex()`
The `findIndex()` method returns the index of the first element in the array that satisfies the provided testing function.

```javascript
let numbers = [1, 2, 3, 4, 5];
let foundIndex = numbers.findIndex(element => element > 3);
console.log(foundIndex); // Output: 3
```

### `filter()`
The `filter()` method creates a new array with all elements that pass the test implemented by the provided function.

```javascript
let numbers = [1, 2, 3, 4, 5];
let filtered = numbers.filter(element => element > 3);
console.log(filtered); // Output: [4, 5]
```

### `map()`
The `map()` method creates a new array populated with the results of calling a provided function on every element in the calling array.

```javascript
let numbers = [1, 2, 3];
let mapped = numbers.map(element => element * 2);
console.log(mapped); // Output: [2, 4, 6]
```

### `forEach()`
The `forEach()` method executes a provided function once for each array element.

```javascript
let numbers = [1, 2, 3];
numbers.forEach(element => console.log(element));
// Output:
// 1
// 2
// 3
```

### `some()`
The `some()` method tests whether at least one element in the array passes the test implemented by the provided function.

```javascript
let numbers = [1, 2, 3, 4, 5];
let hasEven = numbers.some(element => element % 2 === 0);
console.log(hasEven); // Output: true
```

### `every()`
The `every()` method tests whether all elements in the array pass the test implemented by the provided function.

```javascript
let numbers = [2, 4, 6];
let allEven = numbers.every(element => element % 2 === 0);
console.log(allEven); // Output: true
```

### `reduce()`
The `reduce()` method executes a reducer function on each element of the array, resulting in a single output value.

```javascript
let numbers = [1, 2, 3, 4];
let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 10
```

### `reduceRight()`
The `reduceRight()` method applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.

```javascript
let numbers = [1, 2, 3, 4];
let flattened = numbers.reduceRight((accumulator, currentValue) => accumulator.concat(currentValue), []);
console.log(flattened); // Output: [4, 3, 2, 1]
```

### `from()`
The `Array.from()` static method creates a new, shallow-copied Array instance from an array-like or iterable object.

```javascript
let str = "hello";
let chars = Array.from(str);
console.log(chars); // Output: ['h', 'e', 'l', 'l', 'o']
```

### `of()`
The `Array.of()` method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.

```javascript
let arr = Array.of(1, 2, 3);
console.log(arr); // Output: [1, 2, 3]
```

### `keys()`
The `keys()` method returns a new Array Iterator object that contains the keys for each index in the array.

```javascript
let fruits = ['apple', 'banana'];
let keys = fruits.keys();
for (let key of keys) {
  console.log(key);
}
// Output:
// 0
// 1
```

### `values()`
The `values()` method returns a new Array Iterator object that contains the values for each index in the array.

```javascript
let fruits = ['apple', 'banana'];
let values = fruits.values();
for (let value of values) {
  console.log(value);
}
// Output:
// "apple"
// "banana"
```

### `entries()`
The `entries()` method returns a new Array Iterator object that contains the key/value pairs for each index in the array.

```javascript
let fruits = ['apple', 'banana'];
let entries = fruits.entries();
for (let entry of entries) {
  console.log(entry);
}
// Output:
// [0, "apple"]
// [1, "banana"]
```

### `flat()`
The `flat()` method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

```javascript
let arr = [1, 2, [3, 4]];
console.log(arr.flat()); // Output: [1, 2, 3, 4]
```

### `flatMap()`
The `flatMap()` method first maps each element using a mapping function, then flattens the result into a new array.

```javascript
let arr = [1, 2, 3];
let result = arr.flatMap(x => [x, x * 2]);
console.log(result); // Output: [1, 2, 2, 4, 3, 6]
```

## Methods Grouped by Functionality

| Category | Methods & Properties |
|---|---|
| **Adding / removing** | `push()`, `pop()`, `shift()`, `unshift()`, `splice()`, `concat()` |
| **searching** | `indexOf()`, `lastIndexOf()`, `includes()`, `find()`, `findIndex()`, `some()`, `every()` |
| **iterating / performing actions** | `length`, `forEach()`, `map()`, `filter()`, `reduce()`, `reduceRight()`, `slice()`, `join()`, `keys()`, `values()`, `entries()`, `flat()`, `flatMap()` |

## Array deconstructiong
[Array and Object deconstructing](array-object-deconstructing.md)