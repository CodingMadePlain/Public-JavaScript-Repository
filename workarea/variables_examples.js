// JavaScript Variables - Code Examples
// This file demonstrates the concepts covered in the JavaScript_variables.md tutorial

console.log("=== JavaScript Variables Examples ===\n");

// 1. Variable Declaration Examples
console.log("1. Variable Declarations:");

// Using const for values that won't change
const siteName = "Learning JavaScript";
const maxLoginAttempts = 3;
const welcomeMessage = "Welcome to our website!";

console.log(`Site: ${siteName}`);
console.log(`Max login attempts: ${maxLoginAttempts}`);
console.log(`Message: ${welcomeMessage}\n`);

// Using let for values that can change
let currentUser = "guest";
let loginAttempts = 0;
let isLoggedIn = false;

console.log(`Current user: ${currentUser}`);
console.log(`Login attempts: ${loginAttempts}`);
console.log(`Is logged in: ${isLoggedIn}\n`);

// 2. Changing let variables
console.log("2. Updating let variables:");
currentUser = "john_doe";
loginAttempts = 1;
isLoggedIn = true;

console.log(`Updated user: ${currentUser}`);
console.log(`Updated attempts: ${loginAttempts}`);
console.log(`Updated login status: ${isLoggedIn}\n`);

// 3. Different data types in variables
console.log("3. Different Data Types:");

// Strings
const firstName = "Sarah";
const lastName = "Johnson";
const fullName = `${firstName} ${lastName}`; // Template literal

// Numbers
const age = 28;
const accountBalance = 1250.75;
const temperature = -2;

// Booleans
const hasPermission = true;
const isExpired = false;

// Arrays
const hobbies = ["reading", "swimming", "coding"];
const luckyNumbers = [7, 13, 21, 42];

// Objects
const userProfile = {
    username: "sarah_j",
    email: "sarah@example.com",
    age: 28,
    isActive: true
};

console.log(`Name: ${fullName}`);
console.log(`Age: ${age}`);
console.log(`Balance: $${accountBalance}`);
console.log(`Temperature: ${temperature}°C`);
console.log(`Has permission: ${hasPermission}`);
console.log(`Hobbies: ${hobbies.join(", ")}`);
console.log(`Lucky numbers: ${luckyNumbers.join(", ")}`);
console.log(`User profile:`, userProfile);
console.log();

// 4. Variable scope demonstration
console.log("4. Variable Scope Examples:");

function demonstrateScope() {
    const functionVariable = "I'm accessible throughout the function";
    
    console.log(`Function scope: ${functionVariable}`);
    
    if (true) {
        const blockVariable = "I'm only accessible in this block";
        let anotherBlockVar = "Me too!";
        
        console.log(`Block scope: ${blockVariable}`);
        console.log(`Block scope: ${anotherBlockVar}`);
        
        // This works because functionVariable is in function scope
        console.log(`Accessing function var from block: ${functionVariable}`);
    }
    
    // These would cause errors if uncommented:
    // console.log(blockVariable); // ReferenceError
    // console.log(anotherBlockVar); // ReferenceError
    
    console.log(`Back in function scope: ${functionVariable}`);
}

demonstrateScope();
console.log();

// 5. Best practices demonstration
console.log("5. Best Practices Examples:");

// Good variable names (descriptive and camelCase)
const userEmailAddress = "user@example.com";
const totalOrderAmount = 149.99;
const isPaymentProcessing = false;

// Initializing variables with meaningful values
let itemsInCart = 0;
let shippingCost = 0;

// Using const by default, let only when needed
const taxRate = 0.08;
let finalPrice = totalOrderAmount;

// Calculate final price (demonstrating variable usage)
if (itemsInCart > 0) {
    shippingCost = itemsInCart > 5 ? 0 : 9.99; // Free shipping over 5 items
    const taxAmount = totalOrderAmount * taxRate;
    finalPrice = totalOrderAmount + taxAmount + shippingCost;
}

console.log(`Email: ${userEmailAddress}`);
console.log(`Order amount: $${totalOrderAmount}`);
console.log(`Tax rate: ${taxRate * 100}%`);
console.log(`Shipping: $${shippingCost}`);
console.log(`Final price: $${finalPrice.toFixed(2)}`);
console.log(`Processing: ${isPaymentProcessing}\n`);

// 6. Common mistakes to avoid (commented out to prevent errors)
console.log("6. Common Mistakes (these are commented out to prevent errors):");

/*
// Mistake 1: Forgetting to declare variables
myUndeclaredVariable = "This creates a global variable accidentally";

// Mistake 2: Trying to reassign const
const pi = 3.14159;
pi = 3.14; // TypeError: Assignment to constant variable

// Mistake 3: Using var (old style)
var oldStyleVariable = "Avoid this in modern JavaScript";
*/

console.log("All examples completed successfully!");

// 7. Interactive example function
function createUserAccount(username, email, age) {
    // Using const for values that won't change during function execution
    const accountCreationDate = new Date().toISOString().split('T')[0];
    const accountType = "standard";
    
    // Using let for values that might change
    let accountStatus = "pending";
    let welcomeEmailSent = false;
    
    // Simulate account creation process
    if (username && email && age >= 13) {
        accountStatus = "active";
        welcomeEmailSent = true;
        
        // Return user account object
        return {
            username: username,
            email: email,
            age: age,
            createdOn: accountCreationDate,
            type: accountType,
            status: accountStatus,
            welcomeEmailSent: welcomeEmailSent
        };
    } else {
        return null; // Invalid user data
    }
}

// Test the function
console.log("\n7. User Account Creation Example:");
const newAccount = createUserAccount("mike_wilson", "mike@example.com", 25);
if (newAccount) {
    console.log("Account created successfully:", newAccount);
} else {
    console.log("Failed to create account - invalid data");
}