// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var result = [];
  // debugger;`
  // get the elements
  var root = document.body;
  
  const traverseTree = function(node){
    
    let classNames = node.classList;

    if (classNames !== undefined) {
      for (let j = 0; j < classNames.length; j++) {
        if (classNames[j] === className) {
          result.push(node);
        }      
      }
    }

    if (node.childNodes.length >= 0) {
      let children = node.childNodes;
      for (let i = 0; i<children.length; i++){
        traverseTree(children[i]);
      }
    }
  }

  traverseTree(root);

  // the code is returning array vs the expected result is HTMLcollection
  console.log(document.getElementsByClassName(className));
  console.log(result);
  return result;
};
