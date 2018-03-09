var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);
    if(list.head === null){
      list.head = node;
      list.tail = node;
      // list[index] = node;
      // console.log(list[index]);
      // index++;
    } else {
      list.tail.next = node;
      list.tail = node;
  }
}

  list.removeHead = function() {
    var removed = list.head.value;
    list.head = list.head.next;
    return removed;
  };

  list.contains = function(target){
    var result = false;
    var headValue = list.head;
    while(headValue !== null){
      if(headValue.value === target){
        result = true;
      }
      headValue = headValue.next;
    }
    return result;
  };

  return list;
};


var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

