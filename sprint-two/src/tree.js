var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  // newTree.parent;
  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value); 	
  this.children.push(child);
  return child;

};


treeMethods.contains = function(target){
  if (this.value === target){
  	return true;
  } else {
  	return _.some(this.children, function(item){
  	  return item.contains(target);	
  	});
  }
}


