var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if(Array.isArray(this._storage.get(index))){
    this._storage.get(index).push(v);
    } else {  
    var subArray = [];
    subArray.push(v);
    this._storage.set(index, subArray)
    }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var result = this._storage.get(index);
  if(result === null){
    return undefined;
  } else {
    return result;
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.each(function(k, i, storage){
    if(i === index ){
    delete storage[i];
  }
  });
  
};