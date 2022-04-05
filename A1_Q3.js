var obj1 = { id: 1 };
var obj2 = { title: "Samsung M51" };
var obj3 = { price: 56000 };
var all_obj = Object.assign({}, obj1, obj2, obj3);
var price_obj = Object.assign({}, obj3);
function printOrder(all_obj) {
    console.log(all_obj);
}
function getPrice(price_obj) {
    console.log(price_obj);
}
var f1 = printOrder(all_obj);
var f2 = getPrice(price_obj);
console.log(f1);
console.log(f2);
