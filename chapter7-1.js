function asArray(quasiArray, start) {
  var result = [];
  for (var i = (start || 0); i < quasiArray.length; i++)
    result.push(quasiArray[i]);
  return result;
}

function partial(func) {
  var fixedArgs = asArray(arguments, 1);
  return function(){
    return func.apply(null, fixedArgs.concat(asArray(arguments)));
  };
}

map(partial(op["+"], 1), [0, 2, 4, 6, 8, 10]);

function makeRoads(from) {
	partial(makeRoad)


}

var roads = {};

function makeRoad(from, to, length) {
  function addRoad(from, to) {
    if (!(from in roads))
      roads[from] = [];
    roads[from].push({to: to, distance: length});
  }
  addRoad(from, to);
  addRoad(to, from);
}