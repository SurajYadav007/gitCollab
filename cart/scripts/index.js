var wearableItems = JSON.parse(localStorage.getItem('cart-items')) || [];

 const couponsList = JSON.parse(localStorage.getItem('coupons-list')) || [];

var orderPricingDetails = {
  totalMRP: 0,
  discount: 0,
  totalAmt: 0,
  couponDiscount: 0,
  supportUsAmount: 0,
};
var { totalMRP, discount, totalAmt, couponDiscount, supportUsAmount } =
  orderPricingDetails;

//getting  items form DOM
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
const couponsContainer = document.querySelector(
  '#coupons-container > div:last-child'
);
const couponDiscountHeading = document.querySelector('#couponDiscountHeading');
const couponDiscountSpan = document.querySelector('#couponDiscount');
const appliedCouponField = document.querySelector('#applied-coupon');
const applyCouponButton = document.querySelector('#applyCoupon > button');
const applyCouponContainer = document.querySelector('#coupons-container');
const closeApplyCouponButton = document.querySelector('#close-apply-coupon');

//  displaying items on cart
wearableItems.forEach((item) => {
  const {
    category,
    image_url,
    selling_price,
    offer,
    para,
    brand,
    quantity,
    size,
    rs,
  } = item;

  totalAmt += rs * quantity;
  totalMRP += selling_price * quantity;

  const card = document.createElement('div');
  card.classList.add('item-card');

  const img = document.createElement('img');
  img.setAttribute('src', image_url);
  img.setAttribute('alt', brand);

  const itemInfo = document.createElement('div');

  const itemPara = document.createElement('p');
  itemPara.textContent = para;

  const itemBrand = document.createElement('h5');
  itemBrand.textContent = brand;

  const sizeAndQuantity = document.createElement('div');
  sizeAndQuantity.classList.add('sizeAndQuantity');

  const sizeSpan = document.createElement('h5');
  sizeSpan.textContent = 'Size: ';

  const itemSize = document.createElement('select');

  const sizes =
    category === 'top'
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

  //have to get the quantity form local storage in-order to show correct data.
  itemQuantity.value = quantity;
  itemQuantity.addEventListener('change', (event) => {
    //find the item in local storage
    wearableItems = JSON.parse(localStorage.getItem('cart-items')) || [];
    wearableItems.forEach((i) => {
      if (i.para === para && i.brand === brand) {
        var prevQuantity = i.quantity;
        i.quantity = event.target.value;
        orderPricingDetails =
          JSON.parse(localStorage.getItem('order-pricing-details')) || {};
        orderPricingDetails.totalMRP +=
          selling_price * (i.quantity - prevQuantity);
        orderPricingDetails.totalAmt += rs * (i.quantity - prevQuantity);
        localStorage.setItem(
          'order-pricing-details',
          JSON.stringify(orderPricingDetails)
        );
        updatePricingDetails();
      }
    });
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
  itemPrice.textContent = `₹${rs}`;

  const itemSellingPrice = document.createElement('h4');
  itemSellingPrice.textContent = `₹${selling_price}`;
  itemSellingPrice.classList.add('strike-off');

  const itemDiscount = document.createElement('h4');
  itemDiscount.textContent = offer;
  itemDiscount.classList.add('discount');

  pricingDetails.append(itemPrice, itemSellingPrice, itemDiscount);

  //removing item form cart
  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'X';
  removeBtn.classList.add('remove-button');
  removeBtn.addEventListener('click', (event) => {
    event.target.parentNode.remove();
    wearableItems = JSON.parse(localStorage.getItem('cart-items')) || [];
    wearableItems.forEach((i) => {
      if (i.para === para && i.brand === brand) {
        orderPricingDetails =
          JSON.parse(localStorage.getItem('order-pricing-details')) || {};
        orderPricingDetails.totalMRP -= selling_price * i.quantity;
        orderPricingDetails.totalAmt -= rs * i.quantity;
        localStorage.setItem(
          'order-pricing-details',
          JSON.stringify(orderPricingDetails)
        );
        updatePricingDetails();
      }
    });
    wearableItems = wearableItems.filter(
      (i) => i.para !== para && i.brand !== brand
    );
    localStorage.setItem('cart-items', JSON.stringify(wearableItems));
  });

  itemInfo.append(itemBrand, itemPara, sizeAndQuantity, pricingDetails);
  card.append(img, itemInfo, removeBtn);
  items.append(card);
});

//review this  during integeration
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

updatePricingDetails();

//offers
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

//pacing orde3r
placeButton.addEventListener('click', (event) => {
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

//suport US
supportButtonsContainer.addEventListener('click', ({ target }) => {
  if (target.localName === 'button') {
    supportToggleCheckBox.checked = true;
    orderPricingDetails =
      JSON.parse(localStorage.getItem('order-pricing-details')) || {};
    orderPricingDetails.supportUsAmount = +target.textContent.slice(1);
    console.log(orderPricingDetails);
    localStorage.setItem(
      'order-pricing-details',
      JSON.stringify(orderPricingDetails)
    );
    updatePricingDetails();
    socialWorkDonation.classList.remove('hidden');
    socialWorkDonationHeading.classList.remove('hidden');
  }
});

supportToggleCheckBox.addEventListener('change', (event) => {
  socialWorkDonation.classList.add('hidden');
  socialWorkDonationHeading.classList.add('hidden');
  orderPricingDetails =
    JSON.parse(localStorage.getItem('order-pricing-details')) || {};
  orderPricingDetails.supportUsAmount = 0;
  localStorage.setItem(
    'order-pricing-details',
    JSON.stringify(orderPricingDetails)
  );
  updatePricingDetails();
  localStorage.setItem(
    'order-pricing-details',
    JSON.stringify(orderPricingDetails)
  );
});

function updatePricingDetails() {
  orderPricingDetails =
    JSON.parse(localStorage.getItem('order-pricing-details')) || {};

  totalMRPAmount.textContent = orderPricingDetails.totalMRP;
  totalDiscount.textContent = `-${
    orderPricingDetails.totalMRP - orderPricingDetails.totalAmt
  }`;
  totalAmount.textContent =
    orderPricingDetails.totalAmt +
    orderPricingDetails.supportUsAmount -
    orderPricingDetails.couponDiscount;
  socialWorkDonation.textContent = orderPricingDetails.supportUsAmount;
  couponDiscountSpan.textContent = `-${orderPricingDetails.couponDiscount}`;
}

//adding coupons
couponsList.forEach((coupon) => {
  const { couponName, discount, minValue } = coupon;

  const couponCard = document.createElement('div');
  couponCard.classList.add('coupon-card');

  const couponNameHeading = document.createElement('h5');
  couponNameHeading.textContent = couponName;

  const couponDescription = document.createElement('p');
  couponDescription.textContent = `Apply ${couponName} to get ₹${discount} off on an order above ₹${minValue}`;

  const buttonsContainer = document.createElement('div');

  const addCouponButton = document.createElement('button');
  addCouponButton.textContent = 'ADD';
  addCouponButton.addEventListener('click', (event) => {
    orderPricingDetails =
      JSON.parse(localStorage.getItem('order-pricing-details')) || {};
    if (orderPricingDetails.totalAmt < minValue) {
      alert(
        `Coupon can only be applied to a minimum total Amount of ${minValue}`
      );
    } else if (orderPricingDetails.couponDiscount > 0) {
      alert('A coupon is already applied');
    } else {
      appliedCouponField.value = couponName;
      orderPricingDetails.couponDiscount = discount;
      localStorage.setItem(
        'order-pricing-details',
        JSON.stringify(orderPricingDetails)
      );
      updatePricingDetails();
      couponDiscountSpan.classList.remove('hidden');
      couponDiscountHeading.classList.remove('hidden');
    }
  });

  const removeCouponButton = document.createElement('button');
  removeCouponButton.textContent = 'REMOVE';
  removeCouponButton.addEventListener('click', (event) => {
    appliedCouponField.value = '';
    orderPricingDetails =
      JSON.parse(localStorage.getItem('order-pricing-details')) || {};

    orderPricingDetails.couponDiscount = 0;
    localStorage.setItem(
      'order-pricing-details',
      JSON.stringify(orderPricingDetails)
    );
    updatePricingDetails();
    couponDiscountSpan.classList.add('hidden');
    couponDiscountHeading.classList.add('hidden');
  });

  buttonsContainer.append(addCouponButton, removeCouponButton);

  couponCard.append(couponNameHeading, couponDescription, buttonsContainer);

  couponsContainer.append(couponCard);
});

//enable apply coupon
applyCouponButton.addEventListener('click', (event) => {
  applyCouponContainer.classList.remove('hidden');
});

//disable apply coupon
closeApplyCouponButton.addEventListener('click', () => {
  applyCouponContainer.classList.add('hidden');
});
