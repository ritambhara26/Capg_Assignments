//a
function add(a = 10, b = 10)
{
    console.log(a+b);
}
let func = add();
console.log(func);

//b
function userFriends(username = "Ritambhara", friends = ["Bindushree","Manisha"])
{
    console.log("Name is: "+username+" And her friends are: "+friends);
}
let func1 = userFriends();
console.log(func1);

//c
function names(...args:string[])
{
    return args[0]+args[1];
}

const values = ["Ritambhara","Manisha"];
let func3 = names(...values);
console.log(func3);
