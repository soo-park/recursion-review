// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {

  var result = [];

  // get the elements
  var root = document.body;

  const traverseTree = function(node){
    if (node.childNodes.length>=0){
      let children = node.childNodes;
      for (let i = 0; i<children.length; i++){
        if (children[i].className === className) {
          result.push(children[i]);
        }
      }
    }
  }

  traverseTree(root);

  return result;

};
