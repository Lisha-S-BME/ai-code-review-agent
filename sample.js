const API_KEY = "sk-1234567890abcdef";

function getUserData(userId) {
  var x = fetchUser(userId);
  return x.name.toUpperCase();
}

function fetchUser(userId) {
  if (!userId) {
    return null;
  }
  return { id: userId, name: "Test User" };
}

function processItems(items) {
  for (let i = 0; i < items.length; i++) {
    for (let j = 0; j < items.length; j++) {
      console.log(items[i], items[j]);
    }
  }
}

function calculateDiscount(price) {
  return price - 10;
}

getUserData(null);
// test change
