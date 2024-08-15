import mainImagePath from './plates.jpg';
import foodImagePath1 from './food-img-1.jpg';
import foodImagePath2 from './food-img-2.jpg';
import foodImagePath3 from './food-img-3.jpg';
import foodImagePath4 from './food-img-4.jpg';
import infoSectionBgImg from './food-table.jpg';
import './style.css';
import './home.css';

export default function () {
    const contentDiv = document.querySelector('#content');
    contentDiv.textContent = '';
    
// Homepage main image and logo
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

// Food Image mini Gallery
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

// Create 'ORDER NOW' Button
    const orderNowBtn = document.createElement('button');
    orderNowBtn.classList.add('order-now-btn', 'primary-btn-colors', 'btn-border');
    orderNowBtn.setAttribute('type', 'button');
    orderNowBtn.textContent = 'ORDER NOW';

    foodGallery.appendChild(showcaseFood);
    foodGallery.appendChild(orderNowBtn);
    contentDiv.appendChild(foodGallery);

// Info Section
    const infoSection = document.createElement('div');
    infoSection.classList.add('info-section');

    //Background Image
    const bgImage = document.createElement('img');
    bgImage.src = infoSectionBgImg;
    bgImage.classList.add('bg-img');
    bgImage.setAttribute('alt', `Table with food`);
    infoSection.appendChild(bgImage);

    // About Info
    const aboutContainer = document.createElement('div');
    aboutContainer.classList.add('about-container', 'display-grid');

    const aboutInfo = document.createElement('div')
    aboutInfo.classList.add('about-info', 'info-card', 'display-grid', 'grid-horizontal-center');

    const aboutHeading = document.createElement('h3')
    aboutHeading.classList.add('about-heading', 'info-card-heading');
    aboutHeading.textContent =  'ABOUT';
    aboutInfo.appendChild(aboutHeading);

    const aboutSubHeading = document.createElement('h3')
    aboutSubHeading.classList.add('about-sub-heading', 'info-card-sub-heading');
    aboutSubHeading.textContent =  'our restaurant';
    aboutInfo.appendChild(aboutSubHeading);

    const aboutUnderline = document.createElement('div')
    aboutUnderline.classList.add('info-underline');
    aboutInfo.appendChild(aboutUnderline);

    const hoursOpen = document.createElement('div')
    hoursOpen.classList.add('hours-open-title', 'info-card-body-title');
    hoursOpen.textContent =  'HOURS';
    aboutInfo.appendChild(hoursOpen);

    const openHoursDiv = document.createElement('div');
    openHoursDiv.classList.add('open-hours', 'info-card-body', 'display-grid');

    const days = [
        'Monday - ',
        'Tuesday - ',
        'Wednesday - ',
        'Thursday - ',
        'Friday - ',
        'Saturday - ',
        'Sunday - '
    ];

    const hours = [
        '12pm-9pm',
        '12pm-9pm',
        '12pm-10pm',
        '12pm-10pm',
        '12pm-10pm',
        '12pm-10pm',
        '12pm-10pm'
    ];

    for(let i = 0; i < days.length; i++) {
        const day = document.createElement('span');
        const time = document.createElement('span');

        day.textContent = days[i];
        time.textContent = hours[i];

        openHoursDiv.appendChild(day);
        openHoursDiv.appendChild(time);
    }

    aboutInfo.appendChild(openHoursDiv);

    const phoneNumbers = document.createElement('div')
    phoneNumbers.classList.add('phone-numbers', 'info-card-body-title');
    phoneNumbers.textContent =  'PHONE';
    aboutInfo.appendChild(phoneNumbers);

    const phoneNumberOne = document.createElement('div')
    phoneNumberOne.classList.add('phone-number', 'info-card-body');
    phoneNumberOne.textContent =  '212.260.1212';
    aboutInfo.appendChild(phoneNumberOne);

    const phoneNumberTwo = document.createElement('div')
    phoneNumberTwo.classList.add('phone-number', 'info-card-body');
    phoneNumberTwo.textContent =  '212.260.7049';
    aboutInfo.appendChild(phoneNumberTwo);

    const aboutBtn = document.createElement('button');
    aboutBtn.classList.add('about-btn', 'info-btn', 'primary-btn-colors', 'btn-border');
    aboutBtn.setAttribute('type', 'button');
    aboutBtn.textContent = 'ABOUT US';
    aboutInfo.appendChild(aboutBtn);

    const emptyAboutDiv = document.createElement('div');
    emptyAboutDiv.classList.add('empty-div');

    aboutContainer.appendChild(emptyAboutDiv);
    aboutContainer.appendChild(aboutInfo);
    infoSection.appendChild(aboutContainer);

    // Order Info
    const orderContainer = document.createElement('div');
    orderContainer.classList.add('order-container', 'display-grid');

    const orderInfo = document.createElement('div')
    orderInfo.classList.add('order-info', 'info-card', 'display-grid','center-text', 'grid-horizontal-center');

    const orderHeading = document.createElement('h3')
    orderHeading.classList.add('order-heading', 'info-card-heading');
    orderHeading.textContent =  'ORDER';
    orderInfo.appendChild(orderHeading);

    const orderSubHeading = document.createElement('h3')
    orderSubHeading.classList.add('order-sub-heading', 'info-card-sub-heading');
    orderSubHeading.textContent =  'pick-up & delivery';
    orderInfo.appendChild(orderSubHeading);

    const orderUnderline = document.createElement('div')
    orderUnderline.classList.add('info-underline');
    orderInfo.appendChild(orderUnderline);

    const takeOutTitle = document.createElement('div')
    takeOutTitle.classList.add('order-take-out', 'info-card-body-title');
    takeOutTitle.textContent =  'CONTACTLESS TAKE-OUT';
    orderInfo.appendChild(takeOutTitle);

    const takeOutInfo = document.createElement('p')
    takeOutInfo.classList.add('order-take-out', 'info-card-body');
    takeOutInfo.textContent =  'To place an order for pickup, please order via ';
    orderInfo.appendChild(takeOutInfo);

    const takeOutOrderLink = document.createElement('a')
    takeOutOrderLink.classList.add('take-out-link');
    takeOutOrderLink.setAttribute('href', '#')
    takeOutOrderLink.textContent = 'Square';
    takeOutInfo.appendChild(takeOutOrderLink);

    const pickUpOrderBtn = document.createElement('button');
    pickUpOrderBtn.classList.add('pickup-btn', 'info-btn', 'primary-btn-colors', 'btn-border');
    pickUpOrderBtn.setAttribute('type', 'button');
    pickUpOrderBtn.textContent = 'ORDER PICKUP';
    orderInfo.appendChild(pickUpOrderBtn);
    
    const deliveryTitle = document.createElement('div')
    deliveryTitle.classList.add('order-delivery', 'info-card-body-title');
    deliveryTitle.textContent =  'DELIVERY OPTIONS';
    orderInfo.appendChild(deliveryTitle);

    const deliveryInfo = document.createElement('p')
    deliveryInfo.classList.add('delivery-info', 'info-card-body');
    deliveryInfo.textContent =  'To place an order for delivery, please choose from one of our partners below:';
    orderInfo.appendChild(deliveryInfo);

    const deliveryLinks = document.createElement('div')
    deliveryLinks.classList.add('take-out-link', 'info-card-body');
    orderInfo.appendChild(deliveryLinks);

    // Create links
    const deliveryServices = [
        'Postmates',
        'GrubHub',
        'Seamless',
        'UberEats'
    ];
    for (let i = 0; i < deliveryServices.length; i++) {
        const link = document.createElement('a')
        const punct = document.createElement('span')
        link.classList.add(`${deliveryServices[i]}-link`);
        link.setAttribute('href', '#')
        link.textContent = `${deliveryServices[i]}`;

        if(i === (deliveryServices.length -1)) {
            punct.textContent += ' & ';
            deliveryLinks.appendChild(punct);
        }else if(i > 0 && i < (deliveryServices.length -1)) {
            punct.textContent += ', ';
            deliveryLinks.appendChild(punct);
        }
        deliveryLinks.appendChild(link);
    }

    const emptyOrderDiv = document.createElement('div');
    emptyOrderDiv.classList.add('empty-div');

    orderContainer.appendChild(orderInfo);
    orderContainer.appendChild(emptyOrderDiv);
    infoSection.appendChild(orderContainer);

    contentDiv.appendChild(infoSection);
}