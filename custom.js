const btnAdd = document.querySelector("#plus-btn");
const btnSub = document.querySelector("#minus-btn");
const inputValue = document.querySelector('input');
const price = addFunction("price");
const subTotal = addFunction("sub-totalPrice");
const taxPrice = addFunction("tax-price");
const totalPrice = addFunction("total-price");

// Plus Button Event
btnAdd.addEventListener('click', function () {
    countFunction(true);
})

function countFunction(numberCount) {
    // Add Number Count
    if (numberCount == true) {
        valuePlus = inputValue.value = parseInt(inputValue.value) + 1;
    }
    if (numberCount == false && inputValue.value > 0) {
        valuePlus = inputValue.value = parseInt(inputValue.value) - 1;
    }
    // Calculation Product-rate
    const priceValue = document.getElementById('price').innerText = (price * valuePlus);
    // Sub Total Price
    const priceResult = document.getElementById('sub-totalPrice').innerText = priceValue;
    // Tax Price
    const taxPriceResult = document.getElementById("tax-price").innerText = taxPrice;
    // Total Price
    document.getElementById("total-price").innerText = priceResult + taxPriceResult;
}

// Minus Button Event
btnSub.addEventListener('click', function () {
    countFunction(false);
})

// Price Function
function addFunction(id) {
    const productRate = document.getElementById(id).innerText;
    const currentPrice = parseFloat(productRate);
    return currentPrice;
}

// Remove Item
const itemRemove = document.getElementById('remove-item');
itemRemove.addEventListener("click", function () {
    const item = document.getElementById('cart-item');
    item.style.display = "none";
})

// Check Out
const ChkBtn = document.getElementById('chk-btn');
ChkBtn.addEventListener("click", function () {
    const cartArea = document.getElementById('cart');
    cartArea.style.display = "none";
    const successArea = document.getElementById('checkOut');
    successArea.style.display = "block";
})