var arr1 = ["Ritambhara", "Bindushree", "Manisha"];
var arr2 = arr1.map(function (array) { return array.length; });
var alternateList = function (arr1, arr2) {
    var lengthList = arr1.length + arr2.length;
    var emptyArray = [];
    var j = 0, k = 0;
    for (var i = 0; i < lengthList; i++) {
        if (i % 2 == 0) {
            emptyArray[i] = arr1[j++];
        }
        else {
            emptyArray[i] = arr2[k++];
        }
    }
    return emptyArray;
};
console.log(alternateList(arr1, arr2));
