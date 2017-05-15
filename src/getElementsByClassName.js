// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {

  // flatten the dom

  // get the elements
  var allDomElems = document.querySelectorAll('body');
  let elem = allDomElems[0];


  // get children
  let children = elem.childNodes;

  if (children.childNodes === []) {
    return;
  }

  // iterate through the elements
  var resultArray = [];
  for (let i = 0; i < children.length; i++) {
    console.log(children[i]);
    // getElementsByClassName();  
    // get the name
  }
};
