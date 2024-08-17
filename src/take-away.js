import './take-away.css';
import './style.css';
import image from './shrimp.jpg';
import dessertImage from './dessert.jpg';
import startersImage from './food-img-3.jpg';

function displayCard(item, imagePath, parent, before = 0) {
    const card = document.createElement('div');
    card.classList.add('order-display-card', 'clickable', 'display-grid');

    const imageWrapper = document.createElement('div');
    imageWrapper.classList.add('order-image-wrapper', 'image-wrapper');

    card.appendChild(imageWrapper);

    const orderItemImage = document.createElement('img');
    orderItemImage.src = imagePath;
    orderItemImage.setAttribute('alt', `${item.name}`);
    orderItemImage.classList.add('order-item-image');

    imageWrapper.appendChild(orderItemImage);

    const foodName = document.createElement('h3');
    foodName.textContent = item.name;
    foodName.classList.add('food-name', 'food-info');

    card.appendChild(foodName);

    const foodDescription = document.createElement('p');
    foodDescription.textContent = item.description;
    foodDescription.classList.add('food-description', 'food-info');

    card.appendChild(foodDescription);

    const foodPrice = document.createElement('span');
    foodPrice.textContent = item.price;
    foodPrice.classList.add('food-price', 'food-info');

    card.appendChild(foodPrice);

    parent.appendChild(card);

    if(before !== 0) parent.insertBefore(card, before);
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

    const ordersHeader = document.createElement('div');
    ordersHeader.classList.add('orders-header', 'display-flex');

    const restauName = document.createElement('div');
    restauName.textContent = 'Savory Locale';
    restauName.classList.add('orders-header-name');

    ordersHeader.appendChild(restauName);

    const ordersNav = document.createElement('nav');
    ordersNav.classList.add('orders-nav', 'display-grid');

    ordersHeader.appendChild(ordersNav);

    const ordersNavStarters = document.createElement('button');
    ordersNavStarters.setAttribute('type', 'button');
    ordersNavStarters.textContent = 'Starters';
    ordersNavStarters.classList.add('orders-nav-starters', 'orders-nav-btn', 'clickable');

    ordersNav.appendChild(ordersNavStarters);

    const ordersNavMainCourse = document.createElement('button');
    ordersNavMainCourse.setAttribute('type', 'button');
    ordersNavMainCourse.textContent = 'Main Course';
    ordersNavMainCourse.classList.add('orders-nav-main-course', 'orders-nav-btn', 'clickable');

    ordersNav.appendChild(ordersNavMainCourse);

    const ordersNavDesserts = document.createElement('button');
    ordersNavDesserts.setAttribute('type', 'button');
    ordersNavDesserts.textContent = 'Desserts';
    ordersNavDesserts.classList.add('orders-nav-desserts', 'orders-nav-btn', 'clickable');

    ordersNav.appendChild(ordersNavDesserts);

    const ordersCart = document.createElement('button');
    ordersCart.setAttribute('type', 'button');
    ordersCart.setAttribute('title', 'cart');
    ordersCart.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1.25rem"><path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" /></svg>';
    ordersCart.classList.add('orders-cart', 'clickable');

    ordersHeader.appendChild(ordersCart);

    orderItemsContainer.appendChild(ordersHeader);

    const startersTitle = document.createElement('div');
    startersTitle.textContent = 'Starters';
    startersTitle.classList.add('starters-title', 'food-section-title');

    orderItemsContainer.appendChild(startersTitle);

    const mainCourseTitle = document.createElement('div');
    mainCourseTitle.textContent = 'Main Course';
    mainCourseTitle.classList.add('main-course-title', 'food-section-title');

    orderItemsContainer.appendChild(mainCourseTitle);

    const dessertsTitle = document.createElement('div');
    dessertsTitle.textContent = 'Desserts';
    dessertsTitle.classList.add('desserts-title', 'food-section-title');

    orderItemsContainer.appendChild(dessertsTitle);

    mainContainer.appendChild(orderItemsContainer);

    const startersList = [
        {
            name: 'Cajun fried shrimp',
            description: 'Deep-fried soy shrimp | Paprika | Vegan cocktail sauce.',
            price: '$15.00'
        },
        {
            name: 'Dragonfly dumplings',
            description: 'Fried rice dumplings | Mixed greens | Ginger dressing',
            price: '$15.00'
        },
        {
            name: 'Roti canai',
            description: 'Indian crepe | Soy chicken | Curry sauce.',
            price: '$15.00'
        },
        {
            name: 'Collard green rolls',
            description: 'Fried rolls | Sautéed greens | Ham | Sweet chili sauce',
            price: '$15.00'
        },
        {
            name: 'Chicken satay',
            description: 'Skewered chicken | Coconut seasoning | Peanut chili sauce',
            price: '$15.00'
        },
    ];

    for(let food of startersList) {
        displayCard(food, startersImage, orderItemsContainer, mainCourseTitle);
    }

    const mainCourseList = [
        {
            name: 'Creole soul chicken',
            description: 'Chicken | Rosemary seasoning | Potatoes | gravy',
            price: '$24.99'
        },
        {
            name: 'Sizzling pepper steak platter',
            description: 'Steak | Mushrooms | peppers | Onion rings | Rice',
            price: '$24.99'
        },
        {
            name: 'Steak and potatoes . ',
            description: 'Vegan Steak | Fingerling potatoes | French beans | almonds',
            price: '$24.99'
        },
        {
            name: 'Citrus beef ',
            description: 'Citrus beef | Zucchini | Squash | Rice',
            price: '$24.99'
        },
        {
            name: 'Salmon teriyaki ',
            description: 'Salmon | Teriyaki dressing | Vegetables | Rice',
            price: '$24.99'
        },
        {
            name: 'Szechuan beef',
            description: 'Beef | Chinese chilies | Peppers | Rice',
            price: '$24.99'
        },
        {
            name: 'Barbecue ribs',
            description: 'Pork ribs | Snap peas | Potatoes | Gravy',
            price: '$24.99'
        },
        {
            name: 'Eggplant parmesan ',
            description: 'Breaded eggplant | Marinara sauce | Garlic toast | Cheese',
            price: '$24.99'
        },
        {
            name: 'Red curry tofu',
            description: 'Tofu | Eggplant | Green beans | Thai curry sauce | Rice',
            price: '$24.99'
        },
        {
            name: 'Rigatoni bolognese',
            description: 'Rigatoni pasta | Tomatoe sauce | minced beef | herbs',
            price: '$24.99'
        },
    ];

    for(let food of mainCourseList) {
        displayCard(food, image, orderItemsContainer, dessertsTitle);
    }

    const dessertsList = [
        {
            name: 'Chocolate mousse',
            description: '',
            price: '$9.95'
        },
        {
            name: 'Chocolate cremeux | Ice cream | Coffee and caramel',
            description: '',
            price: '$9.95'
        },
        {
            name: 'Chocolate aero | Chocolate mousse | Salted caramel',
            description: '',
            price: '$9.95'
        },
        {
            name: 'Strawberry and pea',
            description: '',
            price: '$9.95'
        },
        {
            name: 'Hazelnut bavarois | Banana | Yoghurt sorbet',
            description: '',
            price: '$9.95'
        },
    ];

    for(let food of dessertsList) {
        displayCard(food, dessertImage, orderItemsContainer);
    }
}