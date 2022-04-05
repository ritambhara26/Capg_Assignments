var LowNumber = 1134;
function third_armstong() {
    if (LowNumber >= 1000) {
        console.log("Exceeds 1000");
        LowNumber = 1134;
    }
    else {
        for (var i = LowNumber; i > 0; i++) {
            var NumberOfDigits = i.toString().length;
            var sum_i = 0;
            var temp_i = i.toString();
            for (var _i = 0, temp_i_1 = temp_i; _i < temp_i_1.length; _i++) {
                var char = temp_i_1[_i];
                sum_i += Math.pow(parseInt(char), NumberOfDigits);
            }
            if (sum_i == i) {
                console.log(i);
                LowNumber = i;
                break;
            }
        }
    }
}
function getNextArmstrong_no() {
    LowNumber++;
    third_armstong();
}
getNextArmstrong_no();
