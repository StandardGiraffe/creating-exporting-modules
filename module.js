
var list = [10,100,4,3,2,1];

function sortNumerically(arr){
  arr.sort(function(a, b){
    return a-b;

  });

  return arr;
}



module.exports = obj = {
  newNumber: function(number){
    list.push(number);

  },

  displayList: function(){
    return sortNumerically(list);
  }


}
