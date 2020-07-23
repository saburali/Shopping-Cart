const plusButton = document.getElementById("plus-btn");
plusButton.addEventListener("click", function () {
    var plusValue = document.getElementById("input-value").value;
    var plusNum = parseInt(plusValue);
    plusNum = document.getElementById("input-value").stepUp(1);
})

const minusButton = document.getElementById("minus-btn");
minusButton.addEventListener("click", function () {
    var minusValue = document.getElementById("input-value").value;
    var minusNum = parseInt(minusValue);
    minusNum = document.getElementById("input-value").stepDown(1);
})