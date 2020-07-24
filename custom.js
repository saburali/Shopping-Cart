const btnAdd = document.querySelector("#plus-btn");
const btnSub = document.querySelector("#minus-btn");
const inputValue = document.querySelector('input');

// Plus Button Event
btnAdd.addEventListener('click', function () {
    // Add Number Count
    const valuePlus = inputValue.value = parseInt(inputValue.value) + 1;
    // Calculation Product-rate
    document.getElementById('product-rate').innerText = (pruductPrice * valuePlus);
})

// Minus Button Event
btnSub.addEventListener('click', function () {
    // Sub Number Count Condition
    if (inputValue.value == 0) {
        removeAttribute("desabled")
    }
    else {
        // Sub Number Cout
        const valueMinus = inputValue.value = parseInt(inputValue.value) - 1;
        // Calculation Product-rate
        document.getElementById('product-rate').innerText = (pruductPrice * valueMinus);
    }
})

// Product Rate Function
function addFunction(id){
    const productRate = document.getElementById(id).innerText;
    const productCurrentPrice = parseInt(productRate);
    return productCurrentPrice;
}
const pruductPrice = addFunction("product-rate");