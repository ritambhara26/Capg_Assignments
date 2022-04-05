//a
const array1 = [5, 12, 8, 130, 44];
const found = array1.find(element => element === array1[3]);
console.log(found);

//b
const user1 = {
    name: "Ritambhara",
    address: {
        city: "Kolkata",
        state:"West Bengal",
        pin:"700003"  
    }
};
console.log(user1.address.pin);