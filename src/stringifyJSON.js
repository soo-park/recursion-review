// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // collecting the result here
  var result = '';

  // base case for undefined

  // base case for string
  if (typeof obj === 'string') {
    result += '"' + obj + '"';
  }  

  // base case for numbers
  if (typeof obj === 'number') {
    result += obj.toString();
  }
  
  // base case for true 
  if (obj === true) {
    result += 'true';
  }   

  // base case for false
  if (obj === false) {
    result += 'false';
  }

  if (typeof obj === 'object') {
    
    // checking array case
    if (Array.isArray(obj)) {
      console.log('yay', obj, result);
      for (let i = 0; i < obj.length; i++) {
        result += '[' + stringifyJSON(obj[i]) + ', ' + ']';
      }
    } else if (obj === null) {
      result += 'null';
    } else {
      // object literal goes here
      for (let key in obj) {
        result += '{';
        result += ' "' + key + '":' + stringifyJSON(obj[key]) + ', ';
        result += '}';
      }
    }
  }

  return result;

  // let prev = result[0];
  // var result1 = '';
  // for (let j = 1; j < result.length; j++) {
  //   if (prev === ',' && (result[i] === ']' || result[i] === '}')) {
  //     prev = result[i];
  //   } else {
  //     result1 += prev;
  //     prev = result[i];
  //   }
  // }

  // return result1;
};