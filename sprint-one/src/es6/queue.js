class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
	  this.storage = {};
	  this.counter = 0;
	  this.first = 0;
	  this.last = 0;
	};
}




  Queue.prototype.enqueue =  function(value){
    this.storage[this.last++] = value;
      return this.counter++;
  },
  Queue.prototype.dequeue = function(){
  	if(this.counter > 0){
  	  var removed = this.storage[this.first];
   	  delete this.storage[this.first++];
  	  this.counter--;
	  return removed;
	}
  },
  Queue.prototype.size = function(){
  	return this.counter;
  }

