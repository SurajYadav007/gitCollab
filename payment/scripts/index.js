var amount = localStorage.getItem("amount");

document.querySelector(".amount_pay").innerText = amount;

var MRP = localStorage.getItem("MRP");
document.querySelector(".totalprice").innerText = MRP;

var discount = localStorage.getItem("discount")
document.querySelector(".filldiscount").innerText = "- " + discount;


var itemcount = localStorage.getItem("itemcount")
document.querySelector(".pricedets").innerText = `PRICE DETAILS ( ${itemcount} Items)`;



document.querySelector("#first").addEventListener("click", function () {
    window.location.href = "../wishlist/cart.html"
})

document.querySelector("#second").addEventListener("click", function () {
    window.location.href = "../payment/address.html"
})


const paymentMethods = document.querySelectorAll('#mode > div');
const paymentDiv = document.getElementById('paymentDiv');

paymentMethods.forEach(method => {
    method.addEventListener('click', () => {
        // Reset styles for all payment methods
        paymentMethods.forEach(m => {
            m.querySelector('i').style.color = '#000000';
            m.querySelector('h5').style.color = '#000000';
        });

        // Set styles for the clicked payment method
        method.querySelector('i').style.color = 'red';
        method.querySelector('h5').style.color = 'red';

        // Display content in paymentDiv
        paymentDiv.innerHTML = `<h4>${method.querySelector('h5').textContent}</h4><p>Additional content here...</p>`;
    });
}); 