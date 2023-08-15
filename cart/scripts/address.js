var addresses = JSON.parse(localStorage.getItem('address-list')) || [];

const addressContainer = document.querySelector('#addresses');
const addNewAddressBtn = document.querySelector('#add-new-address');
const addressForm = document.querySelector('#address-form');

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
    addressContainer.append(addressCard);
  });
};

display(addresses);

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
