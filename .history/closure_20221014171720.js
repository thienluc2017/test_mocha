// Ví dụ này sẽ được giải thích bên dưới.
function celebrityIDCreator (theCelebrities) {
    var i;
    
    var uniqueID = 100;
    for (i = 0; i < theCelebrities.length; i++) {
      //console.log(i);
      theCelebrities[i]["id"] = function ()  {
       // console.log(i);
       i=0;
        return uniqueID + i;
      }
    }
    
    return theCelebrities;
}

var actionCelebs = [{name:"Stallone", id:0}, {name:"Cruise", id:0}, {name:"Willis", id:0}];

var createIdForActionCelebs = celebrityIDCreator (actionCelebs);

var stalloneID = createIdForActionCelebs [0];
console.log(stalloneID.id()); // 103