var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var result = {};
	  result.storage = {};
	  result.counter = 0;
	  extend(result, stackMethods);
	  return result;
};

function extend(obj, methods){
  for(var key in methods){
	obj[key] = methods[key]; 
  }
}


var stackMethods = {
  push: function(value){
    return this.storage[this.counter++] = value;
  },
  pop: function(){
	if(this.counter > 0){
	  var removed = this.storage[--this.counter];
	  return removed;
	}

// {a, b, c}
// counter 3

  },	
  size: function(){
	return this.counter;
  }
};


