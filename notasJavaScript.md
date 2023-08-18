**NOTAS JavaScript**


**Functions**

What is a pure function?
Answer
A pure function is a function that satisfies these two conditions:

- Given the same input, the function returns the same output.
- The function doesn't cause side effects outside of the function's scope (i.e. mutate data outside the function or data supplied to the function).

Pure functions can mutate local data within the function as long as it satisfies the two conditions above.
*Extracted from: 30 Seconds of knoledge tab*


# THE PROTOTYPE CHAIN

La cadena "prototype" en JavaScript se refiere a un mecanismo de herencia y extensión que está presente en todos los objetos en JavaScript, incluyendo los objetos construidos mediante funciones constructoras, como los objetos nativos como Array, String, Number, etc. (Obtenido de chatGPT).


- In javascript the trigonometry is all in RADIANS

- A fragment of code that produces a value is called an expression.

- Arrow functions have no “this”: Arrow functions are special: they don’t have their “own” this. If we reference this from such a function, it’s taken from the outer “normal” function.

-  When you define a function as a property of an object, it becomes a method, and it can access and operate on the object's properties using the this keyword.


- You can return false in a onSubmit to prevent reload of the submit in a form

- Unit test is for bussiness logic (even in the front) and Automated browser tests like with cypress are for functionality.
Unit testing allows you to test all sorts of scenarios with none of the complicated and flakey test setups that integration style tests require.
