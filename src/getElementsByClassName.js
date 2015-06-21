// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
// The getElementsByClassName() method returns a collection of all 
// elements in the document with the spec. class name, as a NodeList object

var getElementsByClassName = function(className){
  var results = [];
  var getNodesByClassName = function(node) {
    if (node.classList && node.classList.contains(className)) {
      results.push(node);
    }
    _.each(node.childNodes, getNodesByClassName);
  }
  getNodesByClassName(document.body);
  return results;
};

// classList returns the class name(s) of an element, as a DOMTokenList object
// childNodes returns a collection of a node's child nodes, as a NodeList object
// contains(class) --> returns boolean of whether an element has a spec. class name