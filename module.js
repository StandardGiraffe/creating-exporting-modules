
var list = [];

module.exports = obj = {
  newNumber: function(number){
    list.push(number);
    // return "You have just added " + number;
    return list;
  }
}
