let shoppingList = ['pop tarts', 'ramen noodles', 'chips', 'salsa', 'coffee'];
shoppingList.push('fruit loops');
let indexCoffee = shoppingList.indexOf('coffee');
if (indexCoffee !== -1) {
    shoppingList[indexCoffee] = 'fair trade coffee';
}
let indexChips = shoppingList.indexOf('chips');
if (indexChips !== -1) {
    shoppingList[indexChips] = 'rice';
}
let indexSalsa = shoppingList.indexOf('salsa');
if (indexSalsa !== -1) {
    shoppingList[indexSalsa] = 'beans';
}


let shoppingCart = [];


let lastItem = shoppingList.pop();
shoppingCart.push(lastItem);


let firstItem = shoppingList.shift();
shoppingCart.push(firstItem);


while (shoppingList.length > 0) {
    let item = shoppingList.shift();
    shoppingCart.push(item);
}


shoppingCart.sort();


shoppingCart.reverse();


console.log(shoppingCart.join(', '));
