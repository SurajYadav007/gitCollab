var wearableItems = JSON.parse(localStorage.getItem('cart-items')) || [];
var orderPricingDetails = {
  totalMRP: 0,
  discount: 0,
  totalAmt: 0,
  couponDiscount: 0,
  supportUsAmount: 0,
};

var { totalMRP, discount, totalAmt, couponDiscount, supportUsAmount } =
  orderPricingDetails;

const items = document.querySelector('#items');
const collapseBtn = document.querySelector('#collapse-button');
const totalMRPAmount = document.querySelector('#totalMRP');
const totalDiscount = document.querySelector('#totalDiscount');
const totalAmount = document.querySelector('#total-amount > h4:last-child');
const placeButton = document.querySelector('#place-button');
const deliveryCheckBtn = document.querySelector('#delivery-check-button');
const checkDeliveryForm = document.querySelector('#check-delivery');
const deliveryFormCloseBtn = document.querySelector('.close-button');
const supportButtonsContainer = document.querySelector('#support-buttons');
const supportToggleCheckBox = document.querySelector('#support-toggle');
const socialWorkDonation = document.querySelector('#socialWorkDonation');
const socialWorkDonationHeading = document.querySelector(
  '#socialWorkDonationHeading'
);

wearableItems.forEach((item) => {
  const {
    type,
    img1,
    cost,
    selling_cost,
    discount,
    name,
    brand,
    quantity,
    size,
  } = item;

  totalAmt += cost * quantity;
  totalMRP += selling_cost * quantity;

  const card = document.createElement('div');
  card.classList.add('item-card');

  const img = document.createElement('img');
  img.setAttribute('src', img1);
  img.setAttribute('alt', brand);

  const itemInfo = document.createElement('div');

  const itemName = document.createElement('h4');
  itemName.textContent = name;

  const itemBrand = document.createElement('h5');
  itemBrand.textContent = brand;

  const sizeAndQuantity = document.createElement('div');
  sizeAndQuantity.classList.add('sizeAndQuantity');

  const sizeSpan = document.createElement('h5');
  sizeSpan.textContent = 'Size: ';

  const itemSize = document.createElement('select');

  const sizes =
    type === 'top'
      ? ['S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL', '5XL']
      : [6.5, 7.5, 8.5, 9.5, 10.5, 11.5, 12.5];

  sizes.forEach((fit) => {
    const option = document.createElement('option');
    option.setAttribute('value', fit);
    option.textContent = fit;

    itemSize.append(option);
  });
  itemSize.value = size;
  itemSize.addEventListener('change', (event) => {
    item.size = event.target.value;
    localStorage.setItem('cart-items', JSON.stringify(wearableItems));
  });

  const quantitySpan = document.createElement('h5');
  quantitySpan.textContent = 'Quantity: ';

  const itemQuantity = document.createElement('select');

  for (let i = 1; i <= 10; i++) {
    const option = document.createElement('option');
    option.setAttribute('value', i);
    option.textContent = i;
    itemQuantity.append(option);
  }

  itemQuantity.value = quantity;
  itemQuantity.addEventListener('change', (event) => {
    totalMRP += selling_cost * event.target.value - selling_cost * quantity;
    totalAmt += cost * event.target.value - cost * quantity;
    updatePricingDetails();
    item.quantity = event.target.value;
    localStorage.setItem('cart-items', JSON.stringify(wearableItems));
  });

  const sizeContainer = document.createElement('div');
  sizeContainer.classList.add('dropdown-container');
  sizeContainer.append(sizeSpan, itemSize);

  const quantityContainer = document.createElement('div');
  quantityContainer.classList.add('dropdown-container');
  quantityContainer.append(quantitySpan, itemQuantity);

  sizeAndQuantity.append(sizeContainer, quantityContainer);

  const pricingDetails = document.createElement('div');
  pricingDetails.classList.add('pricing-details');

  const itemPrice = document.createElement('h4');
  itemPrice.textContent = `₹${cost}`;

  const itemSellingPrice = document.createElement('h4');
  itemSellingPrice.textContent = `₹${selling_cost}`;
  itemSellingPrice.classList.add('strike-off');

  const itemDiscount = document.createElement('h4');
  itemDiscount.textContent = discount;
  itemDiscount.classList.add('discount');

  pricingDetails.append(itemPrice, itemSellingPrice, itemDiscount);

  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'X';
  removeBtn.classList.add('remove-button');
  removeBtn.addEventListener('click', (event) => {
    event.target.parentNode.remove();
    totalAmt -= cost;
    totalMRP -= selling_cost;
    updatePricingDetails();
  });

  itemInfo.append(itemName, itemBrand, sizeAndQuantity, pricingDetails);
  card.append(img, itemInfo, removeBtn);
  items.append(card);
});

totalMRPAmount.textContent = totalMRP;
totalDiscount.textContent = `-${totalMRP - totalAmt}`;
totalAmount.textContent = totalAmt + supportUsAmount;

collapseBtn.addEventListener('click', (event) => {
  const type = event.target.textContent;
  const collpaseItem = document.querySelector('.collapse');
  if (type === 'Show More') {
    event.target.textContent = 'Show Less';
    collpaseItem.style.display = 'block';
  } else if (type === 'Show Less') {
    event.target.textContent = 'Show More';
    collpaseItem.style.display = 'none';
  }
});

placeButton.addEventListener('click', (event) => {
  orderPricingDetails = {
    totalMRP,
    discount: totalMRP - totalAmt,
    totalAmt,
    couponDiscount,
    supportUsAmount,
  };
  localStorage.setItem(
    'order-pricing-details',
    JSON.stringify(orderPricingDetails)
  );
  window.location.href = './address.html';
});

deliveryCheckBtn.addEventListener('click', (event) => {
  checkDeliveryForm.style.display = 'flex';
});

deliveryFormCloseBtn.addEventListener('click', (event) => {
  checkDeliveryForm.style.display = 'none';
});

checkDeliveryForm.addEventListener('submit', (event) => {
  event.preventDefault();
  checkDeliveryForm.style.display = 'none';
  checkDeliveryForm.pincode.value = '';
  alert('Delivery Available!');
});

supportButtonsContainer.addEventListener('click', ({ target }) => {
  if (target.localName === 'button') {
    supportToggleCheckBox.checked = true;
    supportUsAmount = +target.textContent.slice(1);
    orderPricingDetails = {
      totalMRP,
      discount: totalMRP - totalAmt,
      totalAmt,
      couponDiscount,
      supportUsAmount,
    };
    updatePricingDetails();
    socialWorkDonation.classList.remove('hidden');
    socialWorkDonationHeading.classList.remove('hidden');
    localStorage.setItem(
      'order-pricing-details',
      JSON.stringify(orderPricingDetails)
    );
  }
});

supportToggleCheckBox.addEventListener('change', (event) => {
  socialWorkDonation.classList.add('hidden');
  socialWorkDonationHeading.classList.add('hidden');
  supportUsAmount = 0;
  orderPricingDetails = {
    totalMRP,
    discount: totalMRP - totalAmt,
    totalAmt,
    couponDiscount,
    supportUsAmount,
  };
  updatePricingDetails();
  localStorage.setItem(
    'order-pricing-details',
    JSON.stringify(orderPricingDetails)
  );
});

function updatePricingDetails() {
  totalMRPAmount.textContent = totalMRP;
  totalDiscount.textContent = `-${totalMRP - totalAmt}`;
  totalAmount.textContent = totalAmt + supportUsAmount;
  socialWorkDonation.textContent = supportUsAmount;
}
