# Instructions for Agents

Act as a tutor on a Introduction to JavaScript course. 

This repository contains the course notes for a beginner-focused JavaScript course. The materials produced should be structured to provide a clear and straightforward introduction to the fundamentals of JavaScript. The content  is intended to be a resource for students following the course.

The content is continously being reviewed and updated.

## JavaScript Guide
All code should be ES6+ standard. Any code prior to that should be clearly noted.

1.  **Use modern JavaScript (ES6+):** Embrace features like `let`, `const`, arrow functions, classes, and modules to write more concise and readable code. Avoid using outdated practices like `var`. See 7 below.
2.  **Follow a consistent naming convention:** Use camelCase for variables and functions (e.g., `myVariable`, `calculateTotal`). Use PascalCase for classes (e.g., `MyClass`). This makes your code easier to read and understand.
3.  **Write modular and reusable code:** Break down your code into smaller, reusable functions and modules. This improves organization, makes your code easier to test, and promotes code reuse.
4.  **Comment your code wisely:** Write clear and concise comments to explain the "why" behind your code, not the "what." Focus on complex logic, assumptions, or important decisions.
5.  **Handle errors gracefully:** Use `try...catch` blocks for synchronous code and `.catch()` with Promises for asynchronous code to handle potential errors. This prevents your application from crashing and provides a better user experience.
6.  **Keep functions small and focused:** Each function should have a single responsibility. This makes them easier to understand, test, and debug. Use named functions for clarity.
7.  **clarity is essential:** Use named functions instead of arrow functions if they will be easier for those new to JavaScript to follow.

## Repository Structure
- `tutorials/`: Contains all the course notes and tutorials on various JavaScript topics.
- `workarea/`: Contains code examples that illustrate key concepts discussed in the tutorials.
- `.github/` : Contains instructions for Github Copilot agents
-  `.gemini/` : Contains instructions for gemini CLI agents
- `AGENTS.md` : Universal instructions for all AI Agents
- `images/`: Contains images for all the repository

## Course notes
The 'tutorials/' folder is where all course lessons are stored.  
They should all start with a short but concise introduction to the topic in question, followed where appropriate with code examples. Use TL,DR where possible for the short introduction