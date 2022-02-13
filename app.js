function updateProductNumber(product,increasing,price){
    const inputButton = document.getElementById(product+"-input");
    const increaseButton = inputButton.value;
    const totalPrice = document.getElementById(product+"-price");
    if(increasing == true){
        inputButton.value = parseInt(increaseButton) + 1;
    }
    else if(increaseButton > 0){
        inputButton.value = parseInt(increaseButton) - 1;
    }
    totalPrice.innerText = price * inputButton.value;
    console.log(totalPrice.innerText);
    calculateTotal()
}
// sub total
function inputNumber(product){
    const inputProductNum = document.getElementById(product+"-input");
    return inputProductNum.value;
}
function calculateTotal(){
    const phoneTotal = inputNumber('phone') * 1219;
    const phoneTotalC = inputNumber('case') * 59;
    const total = parseInt(phoneTotal) + parseInt(phoneTotalC);
    const totalTax = total /10;
    const totalAmmount = total + totalTax;
    document.getElementById('sub-total').innerText = total;
    document.getElementById('tax-total').innerText = totalTax;
    document.getElementById('total-ammount').innerText = totalAmmount;
    
}
// phone increase decrea{se
document.getElementById("plus-button").addEventListener('click', function(){  
    updateProductNumber('phone',true,1219);
})
document.getElementById("minus-button").addEventListener("click", function(){
    updateProductNumber('phone', false, 1219)
})

// case increase decrease
document.getElementById("case-plus").addEventListener('click',function(){
    updateProductNumber('case',true,59)
})
document.getElementById("case-minus").addEventListener('click',function(){
    updateProductNumber("case", false, 59);
})