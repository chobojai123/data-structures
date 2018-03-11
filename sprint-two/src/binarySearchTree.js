var BinarySearchTree = function(value) {
    var newTree = Object.create(BinarySearchTree.prototype);
    newTree.value = value;
    newTree.left = null;
    newTree.right = null;
    return newTree;
};
BinarySearchTree.prototype.insert = function(value) {
    var newNode = BinarySearchTree(value);
    if(value < this.value) {    
        if(this.left === null) {        
            this.left = newNode;        
        } else {
         this.left.insert(value);
        }
    } else if (value > this.value) {
        if(this.right === null) {
            this.right = newNode;
        } else {
            this.right.insert(value);
        }
    }
};
BinarySearchTree.prototype.contains = function(value) {

  if(this.value === value){
    return true;
  }
  if(value < this.value){
    return this.left !== null && this.left.contains(value);
  } else {
    return this.right !== null && this.right.contains(value);
  }
};

BinarySearchTree.prototype.depthFirstLog = function(func) { //console.log
  func(this.value);
  if(this.left !== null){
    this.left.depthFirstLog(func)
  }
  if(this.right !== null){
    this.right.depthFirstLog(func)
  }
}
 


// function(this) {

//   if(this.value) {
//     return this.value
//   } else {
    
//  }
// }