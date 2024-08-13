import mainImagePath from './plates.jpg';
import foodImagePath1 from './food-img-1.jpg';
import foodImagePath2 from './food-img-2.jpg';
import foodImagePath3 from './food-img-3.jpg';
import foodImagePath4 from './food-img-4.jpg';
import './style.css';
import './home.css';

export default function () {
    const contentDiv = document.querySelector('#content');
    const mainTitle = document.createElement('div');
    mainTitle.setAttribute('id', 'main-title');
    mainTitle.classList.add('display-grid', 'center-items');
    
    const mainImage = document.createElement('img');
    mainImage.src = mainImagePath;
    mainImage.setAttribute('alt', 'Kitchen');

    const logoContainer = document.createElement('div');
    logoContainer.classList.add('logo-container', 'display-grid');

    const logoSavory = document.createElement('div');
    logoSavory.classList.add('savory-text', 'logo-text');
    logoSavory.textContent = 'Savory';

    const logoLocale = document.createElement('div');
    logoLocale.classList.add('locale-text', 'logo-text');
    logoLocale.textContent = 'Locale';

    logoContainer.appendChild(logoSavory);
    logoContainer.appendChild(logoLocale);

    mainTitle.appendChild(logoContainer);
    mainTitle.appendChild(mainImage);
    contentDiv.appendChild(mainTitle);

    const foodGallery = document.createElement('div');
    foodGallery.classList.add('mini-food-gallery', 'display-grid');

    const showcaseFood = document.createElement('div');
    showcaseFood.classList.add('showcase-food', 'display-flex', 'center-items');
    for(let i = 0; i < 4; i++) {
        const foodImage = document.createElement('div');
        foodImage.classList.add('food-image');

        const paths = [
            foodImagePath1,
            foodImagePath2,
            foodImagePath3,
            foodImagePath4
        ];
        const image = document.createElement('img');
        image.src = paths[i];
        image.classList.add(`food-img-${i+1}`, 'food-img');
        image.setAttribute('alt', `Mini Gallery Image ${i+1}`);

        foodImage.appendChild(image);
        showcaseFood.appendChild(foodImage);
    }

    const orderNowBtn = document.createElement('button');
    orderNowBtn.classList.add('order-now-btn', 'primary-btn-colors', 'btn-border');
    orderNowBtn.setAttribute('type', 'button');
    orderNowBtn.textContent = 'ORDER NOW';

    foodGallery.appendChild(showcaseFood);
    foodGallery.appendChild(orderNowBtn);
    contentDiv.appendChild(foodGallery);
}