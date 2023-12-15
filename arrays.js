var names = ["Bessie","Ricky","Martin"]
console.log(names)// ["Bessie","Ricky","Martin"]
// splice method has three params from which index , how many items 
// to delete, if replace third params of vlaue to replace
names.splice(0,2,"Annie");
console.log(names)
//[ 'Annie', 'Martin' ] two items removed one added
names.push("Ellen","Ellen");
names.reverse();
names.sort()
var position =names.indexOf("Ellen")
var position2 =names.indexOf("Allean")// get -1 if not found
var pos= names.lastIndexOf("Ellen")// start searching from last of the array 
console.log(pos)