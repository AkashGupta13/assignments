/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  var map = {};
  for(let i in transactions) {
    var transaction = transactions[i];
    var category = transaction['category'];
    var price = transaction['price'];
    map[category] = map[category] == null ? price : map[category] + price;
  }
  console.log(map);
  var result = [];
  for(let category in map) {
    result.push({category : category, totalSpent : map[category]});
  }
  console.log(result);
  return result;
}

module.exports = calculateTotalSpentByCategory;
