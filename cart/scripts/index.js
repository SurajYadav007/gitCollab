const wearableItems = [
  {
    name: 'T-shirt',
    brand: 'Nike',
    size: 'Medium',
    quantity: 5,
    price: 25.99,
    image:
      'https://cdn.pixabay.com/photo/2016/12/06/09/31/blank-1886008_640.png',
  },
  {
    name: 'Jeans',
    brand: "Levi's",
    size: '32x30',
    quantity: 3,
    price: 49.99,
    image:
      'https://media.gq.com/photos/60da183718480638c840cc4d/master/w_1280%2Cc_limit/Carhartt-relaxed-fit-tapered-leg-jean.jpg',
  },
  {
    name: 'Sneakers',
    brand: 'Adidas',
    size: '9',
    quantity: 2,
    price: 74.95,
    image:
      'https://media.istockphoto.com/id/1350560575/photo/pair-of-blue-running-sneakers-on-white-background-isolated.webp?b=1&s=170667a&w=0&k=20&c=liUSgX6SafJ7HWvefFqR9-pnf3KuH6v1lwQ6iEpePWc=',
  },
  {
    name: 'Dress',
    brand: 'H&M',
    size: 'Small',
    quantity: 1,
    price: 39.99,
    image:
      'https://media.istockphoto.com/id/178851955/photo/flowery-evase-bateau-yellow-dress.jpg?s=612x612&w=0&k=20&c=EOJGCGC6dmFt0IQvbxq3PthCmNXO1flOpjYWC4KkcyQ=',
  },
];

const items = document.querySelector('#items');

wearableItems.forEach((item) => {
  const { name, brand, size, quantity, price, image } = item;
  const div = document.createElement('div');
  div.classList.add('item-card');
  const img = document.createElement('img');
  img.setAttribute('src', image);
  img.setAttribute('alt', name);

  const subDiv = document.createElement('div');

  const itemName = document.createElement('h3');
  itemName.textContent = name;

  const itemBrand = document.createElement('h4');
  itemBrand.textContent = brand;

  const sizeAndQuantity = document.createElement('div');
  sizeAndQuantity.classList.add('sizeAndQuantity');

  const itemSize = document.createElement('h4');
  const itemQuantity = document.createElement('h4');
  itemSize.textContent = `Size : ${size}`;
  itemQuantity.textContent = `Quantity : ${quantity}`;

  sizeAndQuantity.append(itemSize, itemQuantity);

  const itemPrice = document.createElement('h3');
  itemPrice.textContent = price;

  subDiv.append(itemName, itemBrand, sizeAndQuantity, itemPrice);
  div.append(img, subDiv);
  items.append(div);
});
