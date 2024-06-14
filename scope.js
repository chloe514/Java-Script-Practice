function outer(a,b) {
    a = 'string';
    b = { key: 'value' };

    console.log(a, b);
  
function inner(a, b) {
      console.log(a, b);
      a = 'new string';
      b = { newKey: 'newValue' };

      
      b.newKey = 'newValue';
      console.log(a, b);
    }
  inner(a, b);
    console.log(a, b);
  }
  
  outer();
  