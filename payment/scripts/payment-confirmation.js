let address_details = JSON.parse(localStorage.getItem('address-list'))

if (address_details && address_details.length) {
    document.querySelector('#name-ls').textContent = address_details[0].name;
    document.querySelector('#phone-ls').textContent = address_details[0].mobile;
    document.querySelector('#address-ls').textContent = address_details[0].address;
}


document.querySelector(".contineue-btn").addEventListener("click", function () {
    window.location.href = "../cart/index.html";
});

document.querySelector(".view-btn").addEventListener("click", function () {
    window.location.href = "../index.html";
});