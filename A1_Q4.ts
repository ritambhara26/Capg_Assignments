var arr1 = ["Ritambhara", "Bindushree", "Manisha"];
var arr2 = arr1.map(array => array.length);

var alternateList = function(arr1,arr2)
{
    let lengthList = arr1.length + arr2.length;
    let emptyArray = [];
    let j=0,k=0;
    for(let i=0; i<lengthList; i++) {
        if(i%2==0) {
            emptyArray[i]=arr1[j++];
        } else {
            emptyArray[i]=arr2[k++];
        }
    }
    return emptyArray;
}

console.log(alternateList(arr1,arr2));