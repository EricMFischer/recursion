// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

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