//scope and closure activity
function outer(a, b) {
  // Assign new values to parameters a and b
  a = 'string';
  b = { key: 'value' };

  // Log the values of a and b inside outer function
  console.log(a, b);

  // Define inner function
  function inner(a, b) {
      // Log the values of a and b inside inner function (parameters shadowing outer variables)
      console.log(a, b);

      // Assign new values to parameters a and b
      a = 'new string';
      b = { newKey: 'newValue' };

      // Modify the object referenced by b
      b.newKey = 'newValue';

      // Log the updated values of a and b inside inner function
      console.log(a, b);
  }

  // Call inner function with the current values of a and b from outer function
  inner(a, b);

  // Log the values of a and b after inner function call (outer function scope)
  console.log(a, b);
}

// Call outer function without arguments (a and b will default to undefined)
outer();
