//a
function add(a, b) {
    if (a === void 0) { a = 10; }
    if (b === void 0) { b = 10; }
    console.log(a + b);
}
var func = add();
console.log(func);
//b
function userFriends(username, friends) {
    if (username === void 0) { username = "Ritambhara"; }
    if (friends === void 0) { friends = ["Bindushree", "Manisha"]; }
    console.log("Name is: " + username + " And her friends are: " + friends);
}
var func1 = userFriends();
console.log(func1);
//c
function names() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args[0] + args[1];
}
var values = ["Ritambhara", "Manisha"];
var func3 = names.apply(void 0, values);
console.log(func3);
