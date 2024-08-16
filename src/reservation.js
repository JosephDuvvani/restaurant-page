import reserveTable from './restaurant.jpg';
import './style.css';

export default function () {
    const content = document.querySelector('#content');
    content.textContent = '';

    const restauImageContainer = document.createElement('div');
    restauImageContainer.classList.add('restau-image-container', 'display-grid', 'center-items');

    const restauImageWrapper = document.createElement('div');
    restauImageWrapper.classList.add('restau-image-wrapper', 'image-wrapper');

    const restaurantImage = document.createElement('img');
    restaurantImage.src = reserveTable;
    restaurantImage.setAttribute('alt', 'Restaurant');
    restaurantImage.classList.add('restau-image');

    const imageContent = document.createElement('div');
    imageContent.classList.add('image-content', 'display-flex');
    
    const imageTextWrapper = document.createElement('div');
    imageTextWrapper.classList.add('image-text-wrapper');

    const imageText = document.createElement('span');
    imageText.textContent = 'THE ROOM';
    imageText.classList.add('image-text');

    imageTextWrapper.appendChild(imageText)
    imageContent.appendChild(imageTextWrapper );

    const imageBtnWrapper = document.createElement('div');
    imageBtnWrapper.classList.add('image-btn-wrapper');

    const imageBtn = document.createElement('button');
    imageBtn.textContent = 'Reserve a Table at the Main Dining';
    imageBtn.classList.add('image-btn');
    imageBtn.setAttribute('type', 'button');

    imageBtnWrapper.appendChild(imageBtn);
    imageContent.appendChild(imageBtnWrapper);

    restauImageWrapper.appendChild(restaurantImage);
    restauImageWrapper.appendChild(imageContent);
    restauImageContainer.appendChild(restauImageWrapper);
    content.appendChild(restauImageContainer);
}