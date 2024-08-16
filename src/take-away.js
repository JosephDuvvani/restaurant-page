import './take-away.css';
import './style.css';
import image from './shrimp.jpg';

function displayCard(name, description, price, imagePath, parent) {
    const card = document.createElement('div');
    card.classList.add('order-display-card', 'display-grid');

    const imageWrapper = document.createElement('div');
    imageWrapper.classList.add('order-image-wrapper', 'image-wrapper');

    card.appendChild(imageWrapper);

    const orderItemImage = document.createElement('img');
    orderItemImage.src = imagePath;
    orderItemImage.setAttribute('alt', `${name}`);
    orderItemImage.classList.add('order-item-image');

    imageWrapper.appendChild(orderItemImage);

    const foodName = document.createElement('h3');
    foodName.textContent = name;
    foodName.classList.add('food-name', 'food-info');

    card.appendChild(foodName);

    const foodDescription = document.createElement('p');
    foodDescription.textContent = description;
    foodDescription.classList.add('food-description', 'food-info');

    card.appendChild(foodDescription);

    const foodPrice = document.createElement('span');
    foodPrice.textContent = price;
    foodPrice.classList.add('food-price', 'food-info');

    card.appendChild(foodPrice);

    parent.appendChild(card);
}

export default function () {
    const content = document.querySelector('#content');
    content.textContent = '';

    const mainContainer = document.createElement('div');
    mainContainer.classList.add('main-container', 'display-grid');

    content.appendChild(mainContainer);

    const heading = document.createElement('h3');
    heading.textContent = 'Order Your Take-Away';
    heading.classList.add('take-away-heading');

    mainContainer.appendChild(heading);

    const orderItemsContainer = document.createElement('div');
    orderItemsContainer.classList.add('order-items-container', 'display-grid', 'center-items');

    mainContainer.appendChild(orderItemsContainer);

    displayCard('Steak', 'Sizzling saucy steak with mash potatoes', '$22.99', image, orderItemsContainer);
    displayCard('Steak', 'Sizzling saucy steak with mash potatoes', '$22.99', image, orderItemsContainer);
    displayCard('Steak', 'Sizzling saucy steak with mash potatoes', '$22.99', image, orderItemsContainer);
    displayCard('Steak', 'Sizzling saucy steak with mash potatoes', '$22.99', image, orderItemsContainer);
    displayCard('Steak', 'Sizzling saucy steak with mash potatoes', '$22.99', image, orderItemsContainer);
}