var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var result = Object.create(stackMethods);
  	result.storage = {};
  	result.counter = 0;
  	return result;
};


var stackMethods = {
  push: function(value){
    return this.storage[this.counter++] = value;
  },
  pop: function(){
	if(this.counter > 0){
	  var removed = this.storage[--this.counter];
	  return removed;
	}
  },	
  size: function(){
	return this.counter;
  }
};





