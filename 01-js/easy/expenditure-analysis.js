/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
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
