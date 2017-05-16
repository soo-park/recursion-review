// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // collecting the result here
  var result = '';

  // base case for undefined
  if (obj === undefined) {
    return undefined;   
  }

  // base case for string
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }  

  // base case for numbers
  if (typeof obj === 'number') {
    return obj.toString();
  }

  // base case for true 
  if (obj === true) {
    return 'true';
  }   

  // base case for false
  if (obj === false) {
    return 'false';
  }

  if (typeof obj === 'object') {
    // checking array case
    if (Array.isArray(obj)) {
      result += '[';
      if (obj.length >0){
        for (let i = 0; i < obj.length; i++) {
          result += stringifyJSON(obj[i]) + ',';
        }
      }
      result += ']';
    } else if (obj === null) {
      result += 'null';
    } else {
      // object literal goes here
      // debugger;
      result += '{';
      if (Object.keys(obj).length > 0) {
        for (var key in obj) {
          if (key === undefined || obj[key] === undefined || typeof key === "function" || typeof obj[key] === "function") {
            let a= 1;
          } else {
            result += '"' + key + '":' + stringifyJSON(obj[key]) + ',';
          }
        }
      }
      
      result += '}';
    }
  }

  let prev = result[0];
  var result1 = '';
  for (let j = 1; j < result.length; j++) {
    if (prev === ',' && (result[j] === ']' || result[j] === '}')) {
      prev = result[j];
    } else {
      result1 += prev;
      prev = result[j];
    }
  }
  result1+= result[result.length-1];
  result = result1; 

  return result;
};