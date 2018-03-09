var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var result = {
  	storage: {},
  	counter: 0,
  	first: 0,
  	last: 0,
  };
  extend(result, queueMethods);
  return result;
};

function extend(obj, methods){
  for(var key in methods){
	obj[key] = methods[key]; 
  }
}


var queueMethods = {
  enqueue: function(value){
    this.storage[this.last++] = value;
      return this.counter++;
  },
  dequeue: function(){
  	if(this.counter > 0){
  	  var removed = this.storage[this.first];
   	  delete this.storage[this.first++];
  	  this.counter--;
	    return removed;
	 }
  },
  size: function(){
  	return this.counter;
  }
};


