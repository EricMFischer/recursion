// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

// Consider strings, null, arrays, objects, numbers & booleans
var stringifyJSON = function (obj) {
  if (typeof obj === "string") {return '"' + obj + '"';}
  if (obj === null) {return "" + obj;} // need this because null is an object

  if(Array.isArray(obj)){
    var results = obj.map(function(item){
      return stringifyJSON(item);
    });
    return "["+ results.join(",") + "]";
  }

  if(typeof obj === "object") {
    var results = [];
    for (var key in obj) {
      if (typeof obj[key] === "function" || typeof obj[key] === undefined) {
        return "{}";
      } else {
       results.push(stringifyJSON(key) + ":" + stringifyJSON(obj[key]));
     }
    }
    return "{" + results.join(",") + "}";
  }

  return "" + obj; // For numbers and booleans
};