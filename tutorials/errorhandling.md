## 3. Error Handling

Error handling helps your program deal with unexpected situations without crashing. This makes your code more reliable and user-friendly.

### Example 1: `try...catch` Statement

The `try...catch` block lets you attempt code that might fail and handle any errors gracefully.

```javascript
// Example: Safe division
function safeDivide(numerator, denominator) {
    try {
        if (denominator === 0) {
            throw new Error("Cannot divide by zero!");
        }
        
        let result = numerator / denominator;
        console.log(`Result: ${result}`);
        return result;
        
    } catch (error) {
        console.log(`Error: ${error.message}`);
        return null;
    }
}

safeDivide(10, 2);  // "Result: 5"
safeDivide(10, 0);  // "Error: Cannot divide by zero!"
```

**Another Example:**

```javascript
// Example: Parsing user input
function parseUserAge(input) {
    try {
        const age = Number(input);
        
        if (isNaN(age)) {
            throw new Error("Please enter a valid number");
        }
        
        if (age < 0 || age > 150) {
            throw new Error("Age must be between 0 and 150");
        }
        
        console.log(`Valid age: ${age}`);
        return age;
        
    } catch (error) {
        console.log(`Invalid input: ${error.message}`);
        return null;
    }
}

parseUserAge("25");      // "Valid age: 25"
parseUserAge("abc");     // "Invalid input: Please enter a valid number"
parseUserAge("200");     // "Invalid input: Age must be between 0 and 150"
```

### Example 2: `try...catch...finally`

The `finally` block runs regardless of whether an error occurred. It's useful for cleanup operations.

```javascript
// Example: File operation simulation
function processData(data) {
    console.log("Opening connection...");
    
    try {
        if (!data) {
            throw new Error("No data provided");
        }
        
        console.log(`Processing: ${data}`);
        // Simulate processing
        console.log("Data processed successfully!");
        
    } catch (error) {
        console.log(`Error occurred: ${error.message}`);
        
    } finally {
        console.log("Closing connection...");
        console.log("Cleanup complete!");
    }
}

processData("User Information");
// Output:
// Opening connection...
// Processing: User Information
// Data processed successfully!
// Closing connection...
// Cleanup complete!

console.log("---");

processData(null);
// Output:
// Opening connection...
// Error occurred: No data provided
// Closing connection...
// Cleanup complete!
```

**Another Example:**

```javascript
// Example: API call simulation
function fetchUserData(userId) {
    let connection = "active";
    
    try {
        console.log("Connecting to server...");
        
        if (userId < 1) {
            throw new Error("Invalid user ID");
        }
        
        console.log(`Fetching data for user ${userId}`);
        return { id: userId, name: "John Doe" };
        
    } catch (error) {
        console.log(`Failed to fetch data: ${error.message}`);
        return null;
        
    } finally {
        connection = "closed";
        console.log(`Connection status: ${connection}`);
    }
}

fetchUserData(5);   // Success case
console.log("---");
fetchUserData(-1);  // Error case
```

## Combining Control Structures

In real-world applications, you often combine different control structures:

```javascript
// Example: Student grade processor
function processStudentGrades(students) {
    try {
        if (!Array.isArray(students)) {
            throw new Error("Invalid student data");
        }
        
        for (const student of students) {
            if (student.score >= 60) {
                console.log(`${student.name}: PASSED (${student.score})`);
            } else {
                console.log(`${student.name}: FAILED (${student.score})`);
            }
        }
        
    } catch (error) {
        console.log(`Error processing grades: ${error.message}`);
    }
}

const students = [
    { name: "Alice", score: 85 },
    { name: "Bob", score: 55 },
    { name: "Carol", score: 92 }
];

processStudentGrades(students);
// Output:
// Alice: PASSED (85)
// Bob: FAILED (55)
// Carol: PASSED (92)
```

## Important Tips

1. **Use `===` instead of `==`** - Strict equality prevents unexpected type conversions.

2. **Don't forget `break` in switch statements** - Without `break`, execution continues to the next case.

3. **Avoid infinite loops** - Make sure your loop condition will eventually become false:
   ```javascript
   // Bad - infinite loop
   // while (true) { }
   
   // Good - has an exit condition
   let count = 0;
   while (count < 10) {
       count++;
   }
   ```

4. **Use try...catch for risky operations** - Parsing data, network requests, or file operations should be wrapped in error handling.

5. **Keep conditions simple** - If your conditions are too complex, break them into smaller, named variables:
   ```javascript
   // Instead of this:
   if (age > 18 && hasLicense && !isSuspended && hasInsurance) { }
   
   // Consider this:
   const canDrive = age > 18 && hasLicense && !isSuspended && hasInsurance;
   if (canDrive) { }
   ```

6. **Choose the right loop** - Use `for` when you know the iteration count, `while` when you don't, and `for...of` for arrays.