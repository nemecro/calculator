# Calculator

## Background

I made this calculator when doing the TOP Fundamentals course.

## Project description

The website features a basic calculator. 

It supports:
- addition
- subtraction
- multiplication
- division

There are some additional buttons
- AC - clears the entire display and history
- C - removes only the latest character
- \+ / \- - makes the number negative or positive

You can use the calculator by either clicking buttons or typing on your keyboard.

## Debriefing

I found this project very difficult to finish and I'm sure my solution is not perfect.

I'm aware there are many bugs and overall I wish I could come up with a completely different solution.

During making the project I experienced something I would call *conditional hell*, I found myself completely lost writing one if statement after another... There were simply many cases and problems that could occur.

My solution uses the calculatorDisplay as a variable that keeps track of what the user inputs.
When an = sign or second operator is pressed it displays the result.

To calculate the result, the calculatorDisplay.textContent is then split into an array. Items are then copied to number1, operator and number2 functions. Then operate function is called and decides on what function to call based on the operator input.

For now, I would not dare to call this project as FINISHED, rather a **WORK IN PROGRESS**. I believe I will return to it once I get better at JavaScript.