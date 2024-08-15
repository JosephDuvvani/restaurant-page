import './style.css';
import './menu.css';
import meatImagePath from './meat.jpg';
import chefKitchen from './steam.jpg'
import foodTable from './set-table.jpg'

export default function () {
    const contentDiv = document.querySelector('#content');
    contentDiv.textContent = '';

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('main-image-display', 'display-grid');

    const image1 = document.createElement('img');
    image1.src = meatImagePath;
    image1.setAttribute('alt', 'shrimp');

    imageContainer.appendChild(image1);

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container', 'display-grid');

    const menuHeader = document.createElement('div');
    menuHeader.classList.add('menu-header');
    menuHeader.textContent = 'The Menu';

    menuContainer.appendChild(menuHeader);
    contentDiv.appendChild(imageContainer);
    contentDiv.appendChild(menuContainer);

    const startersList = [
        {
            name: 'Cajun fried shrimp',
            description: 'Deep-fried soy shrimp | Paprika | Vegan cocktail sauce.' //Deep-fried soy shrimp seasoned with paprika. Served with vegan cocktail sauce.
        },
        {
            name: 'Dragonfly dumplings',
            description: 'Fried rice dumplings | Mixed greens | Ginger dressing'
        },
        {
            name: 'Roti canai',
            description: 'Indian crepe | Soy chicken | Curry sauce.'
        },
        {
            name: 'Collard green rolls',
            description: 'Fried rolls | Sautéed greens | Ham | Sweet chili sauce'
        },
        {
            name: 'Chicken satay',
            description: 'Skewered chicken | Coconut seasoning | Peanut chili sauce'
        },
    ];

    displayMenuList('Starters', startersList, menuContainer);

    const imageWrapper1 = document.createElement('div');
    imageWrapper1.classList.add('menu-image-wrapper-1', 'image-wrapper');

    const menuImage1 = document.createElement('img');
    menuImage1.src = chefKitchen;
    menuImage1.setAttribute('alt', 'kitchen');
    menuImage1.classList.add('menu-image-1');
    imageWrapper1.appendChild(menuImage1);

    menuContainer.appendChild(imageWrapper1);

    const imageWrapper2 = document.createElement('div');
    imageWrapper2.classList.add('menu-image-wrapper-2', 'image-wrapper');

    const menuImage2 = document.createElement('img');
    menuImage2.src = foodTable;
    menuImage2.setAttribute('alt', 'table');
    menuImage2.classList.add('menu-image-2');
    imageWrapper2.appendChild(menuImage2);

    menuContainer.appendChild(imageWrapper2);

    const mainCourseList = [
        {
            name: 'Creole soul chicken',
            description: 'Chicken | Rosemary seasoning | Potatoes | gravy'
        },
        {
            name: 'Sizzling pepper steak platter',
            description: 'Steak | Mushrooms | peppers | Onion rings | Rice'
        },
        {
            name: 'Steak and potatoes . ',
            description: 'Vegan Steak | Fingerling potatoes | French beans | almonds'
        },
        {
            name: 'Citrus beef ',
            description: 'Citrus beef | Zucchini | Squash | Rice'
        },
        {
            name: 'Salmon teriyaki ',
            description: 'Salmon | Teriyaki dressing | Vegetables | Rice'
        },
        {
            name: 'Szechuan beef',
            description: 'Beef | Chinese chilies | Peppers | Rice'
        },
        {
            name: 'Barbecue ribs',
            description: 'Pork ribs | Snap peas | Potatoes | Gravy'
        },
        {
            name: 'Eggplant parmesan ',
            description: 'Breaded eggplant | Marinara sauce | Garlic toast | Cheese'
        },
        {
            name: 'Red curry tofu',
            description: 'Tofu | Eggplant | Green beans | Thai curry sauce | Rice'
        },
        {
            name: 'Rigatoni bolognese',
            description: 'Rigatoni pasta | Tomatoe sauce | minced beef | herbs'
        },
    ];

    displayMenuList('Main Course', mainCourseList, menuContainer);

    const dessertsList = [
        {
            name: 'Chocolate mousse',
            description: '',
        },
        {
            name: 'Chocolate cremeux | Ice cream | Coffee and caramel',
            description: '',
        },
        {
            name: 'Chocolate aero | Chocolate mousse | Salted caramel',
            description: '',
        },
        {
            name: 'Strawberry and pea',
            description: '',
        },
        {
            name: 'Hazelnut bavarois | Banana | Yoghurt sorbet',
            description: '',
        },
    ];

    displayMenuList('Desserts', dessertsList, menuContainer);
}

function displayMenuList(heading, list, parent) {
    const listContainer = document.createElement('div');
    listContainer.classList.add(`${heading.toLowerCase().split(' ').join('-')}-container`, 'menu');
    parent.appendChild(listContainer);

    const listHeading = document.createElement('h3');
    listHeading.classList.add(`${heading.toLowerCase().split(' ').join('-')}`, 'menu-list-heading');
    listHeading.textContent = heading;
    listContainer.appendChild(listHeading);

    const itemList = document.createElement('ul');
    itemList.setAttribute('role', 'list');
    itemList.classList.add('menu-list', 'display-grid');
    listContainer.appendChild(itemList);


    for(let food of list) {
        const item = document.createElement('li');
        itemList.appendChild(item);

        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item-name');
        menuItem.textContent = food.name;
        item.appendChild(menuItem);

        if(food.description !== '') {
            const itemDescription = document.createElement('div');
            itemDescription.classList.add('menu-item-description');
            itemDescription.textContent = food.description;
            item.appendChild(itemDescription);
        }
        itemList.appendChild(item);
    }
}