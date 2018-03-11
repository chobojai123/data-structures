var Graph = function() {
  this.graph = {};

};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
    this.graph[node] = {edge:[]};

};



// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {

 if(this.graph[node]) {
    return true;
  } else {
    return false;
  }
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.graph[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  //sconsole.log('fromNode ' + fromNode + ' ' + 'toNode ' + toNode)
    if(this.graph[fromNode] === undefined || this.graph[toNode] === undefined) {
    return false;
  } else {

     return this.graph[fromNode].edge.includes(toNode) || this.graph[toNode].edge.includes(fromNode);
  }


};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.graph[fromNode].edge.push(toNode);
  this.graph[toNode].edge.push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  this.graph[fromNode].edge.pop();
  this.graph[toNode].edge.pop();
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
//console.log(this.graph.keys)
  Object.keys(this.graph).forEach(function(el) {
cb(el);
})

};