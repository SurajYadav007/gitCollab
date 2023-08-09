let wearableItems = [
  {
    type: 'top',
    img1: 'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/14197850/2021/6/5/363f66c6-cf69-4bef-bf65-d34b969d7b6e1622879758086USPoloAssnDenimCoMenMustardYellowBrandLogoPoloCollarT-shirt1.jpg',
    price: 'Rs. 399',
    cost: 399,
    selling_cost: 999,
    sellPrice: 'Rs. 999',
    discount: '60% OFF',
    ratings: '4.1',
    reviews: '14.1k',
    brand: 'usp',
    name: 'Yellow Classic',
    color: 'yellow',
    quantity: 1,
    size: 'M',
  },
  {
    type: 'bottom',
    img1: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwqnQUxYpr5N1iu9lHLLUYG3yuHKd8oy2t5w',
    price: 'Rs. 499',
    cost: 499,
    selling_cost: 999,
    sellPrice: 'Rs. 999',
    discount: '52% OFF',
    ratings: '4.3',
    reviews: '1.1k',
    name: 'Teal Texas',
    color: 'green',
    brand: 'nike',
    quantity: 1,
    size: '7.5',
  },
  {
    type: 'top',
    img1: 'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/10941384/2020/2/13/9447a845-892a-49f5-91ee-4de8a6589a541581587257528-Roadster-Men-Tshirts-8221581587255142-1.jpg',
    price: 'Rs. 599',
    cost: 599,
    selling_cost: 999,
    sellPrice: 'Rs. 999',
    discount: '52% OFF',
    ratings: '4.3',
    reviews: '241',
    name: 'Black Diamond',
    color: 'black',
    brand: 'adidas',
    quantity: 1,
    size: 'M',
  },
  {
    type: 'top',
    img1: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/16343396/2022/2/10/c5f6d701-a12f-41de-b751-2a318a0c20ba1644489749463-Levis-Men-Tshirts-9081644489748776-1.jpg',
    price: 'Rs. 843',
    cost: 843,
    selling_cost: 1284,
    sellPrice: 'Rs. 1284',
    discount: '32% OFF',
    ratings: '4.6',
    reviews: '12k',
    name: 'Volcanic Red',
    color: 'red',
    brand: 'puma',
    quantity: 1,
    size: 'M',
  },
  {
    type: 'top',
    img1: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/12318240/2021/2/27/b7f27330-eb9b-4cd8-9d2d-64239c4a5adb1614428943368-Calvin-Klein-Jeans-Men-Tshirts-2101614428942578-1.jpg',
    price: 'Rs. 843',
    selling_cost: 872,
    sellPrice: 'Rs. 872',
    cost: 872,
    discount: '15% OFF',
    ratings: '4.5',
    reviews: '3k',
    name: 'Creamy Simpson',
    color: 'yellow',
    brand: 'tantra',
    quantity: 1,
    size: 'M',
  },
  {
    type: 'top',
    img1: 'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/13345216/2021/2/25/ef8f64d1-0875-48dc-b664-bf560f9debb21614246856152-Mast--Harbour-Men-White-Printed-Round-Neck-T-shirt-339161424-1.jpg',
    price: 'Rs. 1139',
    cost: 1139,
    selling_cost: 1874,
    sellPrice: 'Rs. 1874',
    discount: '47% OFF',
    ratings: '4.5',
    reviews: '5.2k',
    name: 'Inspire Edition',
    brand: 'tantra',
    quantity: 1,
    size: 'M',
  },
];

const items = document.querySelector('#items');

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

  const card = document.createElement('div');
  card.classList.add('item-card');

  const img = document.createElement('img');
  img.setAttribute('src', img1);
  img.setAttribute('alt', brand);

  const itemInfo = document.createElement('div');

  const itemName = document.createElement('h4');
  itemName.textContent = name;

  const itemBrand = document.createElement('h4');
  itemBrand.textContent = brand;

  const sizeAndQuantity = document.createElement('div');
  sizeAndQuantity.classList.add('sizeAndQuantity');

  const sizeSpan = document.createElement('h4');
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

  const quantitySpan = document.createElement('h4');
  quantitySpan.textContent = 'Quantity: ';

  const itemQuantity = document.createElement('select');

  for (let i = 1; i <= 10; i++) {
    const option = document.createElement('option');
    option.setAttribute('value', i);
    option.textContent = i;
    itemQuantity.append(option);
  }

  itemQuantity.value = quantity;

  sizeAndQuantity.append(sizeSpan, itemSize, quantitySpan, itemQuantity);

  const pricingDetails = document.createElement('div');
  pricingDetails.classList.add('pricing-details');

  const itemPrice = document.createElement('h3');
  itemPrice.textContent = `₹${cost}`;

  const itemSellingPrice = document.createElement('h3');
  itemSellingPrice.textContent = `₹${selling_cost}`;
  itemSellingPrice.classList.add('strike-off');

  const itemDiscount = document.createElement('h3');
  itemDiscount.textContent = discount;
  itemDiscount.classList.add('discount');

  pricingDetails.append(itemPrice, itemSellingPrice, itemDiscount);

  itemInfo.append(itemName, itemBrand, sizeAndQuantity, pricingDetails);
  card.append(img, itemInfo);
  items.append(card);
});
