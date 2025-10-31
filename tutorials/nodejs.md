# What is Node.js

**TL;DR:** Node.js is a JavaScript runtime environment that allows you to run JavaScript code outside of web browsers, primarily used for building server-side applications, APIs, and command-line tools.

## Introduction

Node.js is a powerful JavaScript runtime built on Chrome's V8 JavaScript engine. It enables developers to use JavaScript for server-side programming, creating a unified development experience where the same language can be used for both front-end and back-end development.

Unlike traditional JavaScript that runs in web browsers, Node.js allows JavaScript to run directly on your computer or server, opening up possibilities for building web servers, APIs, desktop applications, and command-line tools.

## What is Node.js Used For?

Node.js is commonly used for:

- **Web servers and APIs**: Building fast, scalable server-side applications
- **Real-time applications**: Chat applications, live updates, gaming servers
- **Command-line tools**: Creating utility scripts and development tools
- **Desktop applications**: Using frameworks like Electron
- **Microservices**: Building distributed systems
- **IoT applications**: Internet of Things device programming

## Installing Node.js

### Step 1: Download Node.js
1. Visit the official Node.js website: [https://nodejs.org](https://nodejs.org)
2. Download the LTS (Long Term Support) version for stability
3. Choose the installer for your operating system (Windows, macOS, or Linux)

### Step 2: Install Node.js
1. Run the downloaded installer
2. Follow the installation wizard
3. Accept the license agreement
4. Choose the installation directory (default is recommended)
5. Ensure "Add to PATH" is selected during installation

### Step 3: Verify Installation
Open your terminal (Command Prompt, PowerShell, or Terminal) and run:

```bash
node --version
npm --version
```

You should see version numbers for both Node.js and npm.

## What You Get with Node.js Installation

When you install Node.js, you automatically get:

1. **Node.js Runtime**: The JavaScript engine that executes your code
2. **npm (Node Package Manager)**: A package manager for installing third-party libraries
3. **Command-line tools**: Access to the `node` and `npm` commands
4. **Core modules**: Built-in modules for file system, HTTP, path operations, etc.

## Simple Node.js Code Example

Let's create a simple "Hello World" web server to demonstrate Node.js in action.

### Example: Basic Web Server

```javascript
// server.js
const http = require('http');

// Create a web server
const server = http.createServer(function(request, response) {
    // Set the response header
    response.writeHead(200, { 'Content-Type': 'text/html' });
    
    // Send response body
    response.write('<h1>Hello from Node.js!</h1>');
    response.write('<p>This server is running on Node.js</p>');
    response.end();
});

// Define the port to listen on
const port = 3000;

// Start the server
server.listen(port, function() {
    console.log(`Server is running on http://localhost:${port}`);
    console.log('Press Ctrl+C to stop the server');
});
```

### Code Explanation

1. **`require('http')`**: Imports the built-in HTTP module
2. **`createServer()`**: Creates a new web server instance
3. **Request handler function**: Processes incoming requests and sends responses
4. **`response.writeHead()`**: Sets the HTTP status code and headers
5. **`response.write()`**: Sends content to the client
6. **`response.end()`**: Finishes the response
7. **`server.listen()`**: Starts the server on the specified port

## Running Node.js Code in VS Code

### Method 1: Using the Integrated Terminal

1. **Open VS Code** and navigate to your project folder
2. **Create a new file** named `server.js` and paste the example code above
3. **Open the integrated terminal** in VS Code:
   - Press `Ctrl + ` (backtick) or
   - Go to **Terminal** → **New Terminal**
4. **Run the Node.js file**:
   ```bash
   node server.js
   ```
5. **Test the server**:
   - Open your web browser
   - Navigate to `http://localhost:3000`
   - You should see the "Hello from Node.js!" message

### Method 2: Using the Run Button (with Code Runner Extension)

1. **Install the Code Runner extension** in VS Code
2. **Open your JavaScript file**
3. **Click the Run button** in the top-right corner or press `Ctrl+F5`
4. The output will appear in the VS Code output panel

### Method 3: Using VS Code's Built-in Node.js Debugger

1. **Open your JavaScript file** in VS Code
2. **Set breakpoints** by clicking in the gutter (left margin)
3. **Press F5** to start debugging
4. **Configure the launch.json** if prompted:
   ```json
   {
       "version": "0.2.0",
       "configurations": [
           {
               "name": "Launch Program",
               "program": "${workspaceFolder}/server.js",
               "request": "launch",
               "skipFiles": [
                   "<node_internals>/**"
               ],
               "type": "node"
           }
       ]
   }
   ```

## Stopping the Server

To stop a running Node.js server:
- In the terminal, press `Ctrl + C`
- This will terminate the Node.js process

## Key Concepts for Beginners

1. **Single-threaded but Asynchronous**: Node.js runs on a single thread but handles multiple operations efficiently using an event loop
2. **Non-blocking I/O**: Operations like file reading or database queries don't block other code from running
3. **Module System**: Node.js uses modules to organize and reuse code
4. **Package Management**: npm allows you to install and manage third-party libraries easily

## Next Steps

After understanding the basics of Node.js, you can explore:
- **Express.js**: A popular web framework for Node.js
- **File system operations**: Reading and writing files
- **Working with databases**: MongoDB, MySQL, PostgreSQL
- **Building REST APIs**: Creating web services
- **Real-time applications**: Using Socket.io for real-time communication

Node.js opens up endless possibilities for JavaScript developers to build full-stack applications using a single programming language!