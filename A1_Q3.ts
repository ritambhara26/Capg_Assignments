const obj1 = { id: 1 };
const obj2 = { title: "Samsung M51" };
const obj3 = { price: 56000 };
var all_obj = (<any>Object).assign({}, obj1, obj2, obj3);
var price_obj = (<any>Object).assign({}, obj3)
function printOrder(all_obj : object)
{
    
    console.log(all_obj);
}

function getPrice(price_obj : object)
{
    
    console.log(price_obj);
}

let f1 = printOrder(all_obj);
let f2 = getPrice(price_obj);
console.log(f1);
console.log(f2);