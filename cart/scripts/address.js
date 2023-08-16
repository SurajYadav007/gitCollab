var addresses = JSON.parse(localStorage.getItem('address-list')) || [];
const orderPricingDetails =
  JSON.parse(localStorage.getItem('order-pricing-details')) || {};
var defaultAddress = JSON.parse(localStorage.getItem('default-address'));

const addressContainer = document.querySelector('#addresses');
const addNewAddressBtn = document.querySelector('#add-new-address');
const addressForm = document.querySelector('#address-form');
const formCloseBtn = document.querySelector('.close-button');
const totatlMRPSpan = document.querySelector('#totalMRP');
const totalDiscountSpan = document.querySelector('#totalDiscount');
const totalAmountSpan = document.querySelector('#total-amount > h4 + h4');
const socialWorkDonationSpan = document.querySelector('#socialWorkDonation');
const socialWorkDonationHeading = document.querySelector(
  '#socialWorkDonationHeading'
);
const couponDiscountHeading = document.querySelector('#couponDiscountHeading');
const couponDiscountSpan = document.querySelector('#couponDiscount');
const defaultAddressContainer = document.querySelector('#default-address');

if (!defaultAddress) {
  defaultAddressContainer.innerHTML = `<h4> Please choose an address </h4>`;
} else {
  displayDefaultAddress();
}

function displayDefaultAddress() {
  defaultAddress = JSON.parse(localStorage.getItem('default-address'));
  const { name, address, pincode, city, state, mobile } = defaultAddress;

  const nameHeading = document.createElement('h5');
  nameHeading.textContent = name;

  const addressPara = document.createElement('p');
  addressPara.textContent = `${address}, ${city}, ${state} - ${pincode}`;

  const mobileHeader = document.createElement('h5');
  mobileHeader.textContent = `Mobile: ${mobile}`;

  const addressCard = document.createElement('div');
  addressCard.classList.add('address-card');
  addressCard.append(nameHeading, addressPara, mobileHeader);
  defaultAddressContainer.innerHTML = '';
  defaultAddressContainer.append(addressCard);
}

const display = (list) => {
  list.forEach((ele) => {
    const { name, address, pincode, city, state, mobile } = ele;

    const nameHeading = document.createElement('h5');
    nameHeading.textContent = name;

    const addressPara = document.createElement('p');
    addressPara.textContent = `${address}, ${city}, ${state} - ${pincode}`;

    const mobileHeader = document.createElement('h5');
    mobileHeader.textContent = `Mobile: ${mobile}`;

    const removeAddressBtn = document.createElement('button');
    removeAddressBtn.textContent = 'REMOVE';
    removeAddressBtn.addEventListener('click', (event) => {
      addresses = addresses.filter(
        (add) => add.name !== name && add.mobile !== mobile
      );
      localStorage.setItem('address-list', JSON.stringify(addresses));
      removeAddressBtn.parentNode.remove();
    });

    const addressCard = document.createElement('div');
    addressCard.classList.add('address-card');
    addressCard.append(
      nameHeading,
      addressPara,
      mobileHeader,
      removeAddressBtn
    );

    addressCard.addEventListener('click', (event) => {
      localStorage.setItem('default-address', JSON.stringify(ele));
      displayDefaultAddress();
    });
    addressContainer.append(addressCard);
  });
};

display(addresses);

totatlMRPSpan.textContent = orderPricingDetails.totalMRP;
totalDiscountSpan.textContent = `-${orderPricingDetails.discount}`;
totalAmountSpan.textContent =
  orderPricingDetails.totalAmt +
  orderPricingDetails.supportUsAmount -
  orderPricingDetails.couponDiscount;
if (orderPricingDetails.supportUsAmount > 0) {
  socialWorkDonationHeading.classList.remove('hidden');
  socialWorkDonationSpan.classList.remove('hidden');
  socialWorkDonationSpan.textContent = orderPricingDetails.supportUsAmount;
}
if (orderPricingDetails.couponDiscount > 0) {
  couponDiscountHeading.classList.remove('hidden');
  couponDiscountSpan.classList.remove('hidden');
  couponDiscountSpan.textContent = `-${orderPricingDetails.couponDiscount}`;
}

addNewAddressBtn.addEventListener('click', (event) => {
  addressForm.style.display = 'flex';
});

addressForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const newAddress = {
    name: addressForm.name.value,
    mobile: addressForm.mobile.value,
    pincode: addressForm.pinCode.value,
    address: addressForm.address.value,
    city: addressForm.city.value,
    state: addressForm.state.value,
  };

  addresses.push(newAddress);
  display(addresses);
  localStorage.setItem('address-list', JSON.stringify(addresses));
  clearForm();
  addressForm.style.display = 'none';
});

function clearForm() {
  addressForm.name.value = '';
  addressForm.mobile.value = '';
  addressForm.pinCode.value = '';
  addressForm.address.value = '';
  addressForm.city.value = '';
  addressForm.state.value = '';
}


document.getElementById("place-button").onclick = function () {
  location.href = "../payment/index.html";
};
formCloseBtn.addEventListener('click', (event) => {
  addressForm.style.display = 'none';
});

