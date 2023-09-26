function calculateSum(numbers, callback) {
    if (!Array.isArray(numbers)) {
        callback("Input is not an array", null);
        return;
    }

    var sum = numbers.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
    }, 0);

    callback(null, sum);
}
var numberArray = [1, 2, 3, 4, 5];

calculateSum(numberArray, function (error, result) {
    if (error) {
        console.error("Error:", error);
    } else {
        console.log("Sum:", result);
    }
});