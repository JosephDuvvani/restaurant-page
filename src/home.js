import mainImagePath from './plates.jpg';
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

    const showcaseFood = document.createElement('div');
    showcaseFood.classList.add('showcase-food', 'display-flex', 'center-items');
    for(let i = 0; i < 4; i++) {
        const foodImage = document.createElement('div');
        foodImage.classList.add('food-image');
        showcaseFood.appendChild(foodImage);
    }
    contentDiv.appendChild(showcaseFood);
}