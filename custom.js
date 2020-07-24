const btnAdd = document.querySelector("#plus-btn");
const btnSub = document.querySelector("#minus-btn");
const inputValue = document.querySelector('input');

btnAdd.addEventListener('click', function () {
    // Add Number Count
    const valueNumber = inputValue.value = parseInt(inputValue.value) + 1;

    console.log(valueNumber);

    const productRate = document.getElementById("product-rate").innerText;
    const productCurrentPrice = parseInt(productRate);

    // productTotalRate = productCurrentPrice * valueNumber;
    document.getElementById("product-rate").innerText = 30 * valueNumber;

})

btnSub.addEventListener('click', function () {
    // Sub Number Count
    if (inputValue.value == 0) {
        removeAttribute("desabled")
    } else {
        inputValue.value = parseInt(inputValue.value) - 1;
    }
})

// const plusButton = document.getElementById("plus-btn");
// plusButton.addEventListener("click", function () {

//     var plusValue = document.getElementById("input-value").value;
//     var plusNum = parseInt(plusValue) + 1;

//     // var inputResut = plusNum + 1;
//     console.log(plusNum);

//     // var productRate = document.getElementById("product-rate").innerText;
//     // var productCurrentPrice = parseInt(productRate);
//     // console.log(productCurrentPrice);

//     // productCurrentPrice = productCurrentPrice * inputResut;
//     // document.getElementById("product-rate").innerText = productCurrentPrice;

//     // plusNum = document.getElementById("input-value").stepUp(1);
// })

// const minusButton = document.getElementById("minus-btn");
// minusButton.addEventListener("click", function () {
//     var minusValue = document.getElementById("input-value").value;
//     var minusNum = parseInt(minusValue);

//     var productRate = document.getElementById("product-rate").innerText;
//     var productCurrentPrice = parseInt(productRate);
//     console.log(productCurrentPrice);

//     productCurrentPrice = productCurrentPrice / minusNum;
//     document.getElementById("product-rate").innerText = productCurrentPrice;



//     minusNum = document.getElementById("input-value").stepDown(1);
// })

// // var test = document.getElementById("input-value").value;
// var testi = parseInt(test);

// console.log(testi);

// let hmAdd = document.querySelector("plus-btn");
// let hmSub = document.querySelector("minus-btn");

// hmAdd.addEventListener("click", function(){
//     var inPut = parseInt
//     input.value = parseInt(input.value) + 1;
// })

// hmSub.addEventListener("click", function(){
//     input.value = parseInt(input.value) - 1;
// })