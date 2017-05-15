// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // collecting the result here
  var result = '';

  // base case for string
  if (typeof obj === 'string') {
    result += '"' + obj + +'"';
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

  // base case for null
  if (typeof obj === null) {
    result += 'null';
  }

  if (typeof obj === 'object') {
    if (Array.isArray(obj)) {
      for (let i = 0; i < obj.length; i++) {
        result += '[';
        result += stringifyJSON(obj[i]) + ', ';
        result += ']';
      }
    } else {
      // object literal goes here
      for (let key in obj) {
        result += '{';
        result += ' "' + key + '":' + stringifyJSON(obj[key]) + ', ';
        result += '}';
      }
    }
  }

  let prev = result[0];
  var result1 = '';
  for (let j = 1; j < result.length; j++) {
    if (prev === ',' && (result[i] === ']' || result[i] === '}')) {
      prev = result[i];
    } else {
      result += prev;
      prev = result[i];
    }
  }

  return result;
};