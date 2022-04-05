var lowNumber = 134;
function armstong() {
    if (lowNumber >= 1000) {
        console.log("Exceeds 1000");
        lowNumber = 1634;
    }
    else {
        for (var i = lowNumber; i > 0; i++) {
            var numberOfDigits = i.toString().length;
            var sum = 0;
            var temp = i.toString();
            for (var _i = 0, temp_1 = temp; _i < temp_1.length; _i++) {
                var char = temp_1[_i];
                sum += Math.pow(parseInt(char), numberOfDigits);
            }
            if (sum == i) {
                console.log(i);
                lowNumber = i;
                break;
            }
        }
    }
}
function getNextArmstrong() {
    lowNumber++;
    armstong();
}
getNextArmstrong();
