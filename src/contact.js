import './contact.css';
import './style.css';

export default function () {
    const content = document.querySelector('#content');

    const overlay = document.createElement('div');
    overlay.classList.add('contact-overlay');

    document.body.appendChild(overlay);

    const contactsContainer = document.createElement('div');
    contactsContainer.classList.add('contacts-container', 'display-grid');

    overlay.appendChild(contactsContainer);

    const contactsClose = document.createElement('a');
    contactsClose.textContent = 'x';
    contactsClose.setAttribute('href', '#')
    overlay.style.display = 'none';
    contactsClose.classList.add('contact-close-btn');

    contactsContainer.appendChild(contactsClose);

    contactsClose.addEventListener('click', () => {
        overlay.style.display = 'none';
    })

    const heading = document.createElement('div');
    heading.textContent = 'CALL HOURS';
    heading.classList.add('contacts-heading');

    contactsContainer.appendChild(heading);

    const mondayToTue = document.createElement('div');
    mondayToTue.classList.add('mon-tue-container');

    contactsContainer.appendChild(mondayToTue);

    const mondayToTueHeading = document.createElement('div');
    mondayToTueHeading.textContent = 'MONDAY-TUESDAY';
    mondayToTueHeading.classList.add('mon-tue-heading', 'contact-days');

    mondayToTue.appendChild(mondayToTueHeading);

    const mondayToTueHours = document.createElement('div');
    mondayToTueHours.textContent = '11:00AM-9:00PM';
    mondayToTueHours.classList.add('mon-tue-hours', 'contact-body');

    mondayToTue.appendChild(mondayToTueHours);

    const wednesdayToSun = document.createElement('div');
    wednesdayToSun.classList.add('wen-sun-container');

    contactsContainer.appendChild(wednesdayToSun);

    const wednesdayToSunHeading = document.createElement('div');
    wednesdayToSunHeading.textContent = 'WEDNESDAY-SUNDAY';
    wednesdayToSunHeading.classList.add('wen-sun-heading', 'contact-days');

    wednesdayToSun.appendChild(wednesdayToSunHeading);

    const wednesdayToSunHours = document.createElement('div');
    wednesdayToSunHours.textContent = '11:00AM-10:00PM';
    wednesdayToSunHours.classList.add('wen-sun-hours', 'contact-body');

    wednesdayToSun.appendChild(wednesdayToSunHours);

    const callInfoContainer = document.createElement('div');
    callInfoContainer.classList.add('call-info-container', 'display-grid');

    contactsContainer.appendChild(callInfoContainer);

    const phoneIcon = document.createElement('div');
    phoneIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" /></svg>';
    phoneIcon.classList.add('phone-icon', 'contact-icon', 'clickable');

    callInfoContainer.appendChild(phoneIcon);

    const callTitle = document.createElement('div');
    callTitle.textContent = 'CALL NOW';
    callTitle.classList.add('call-title', 'contact-title', 'clickable');

    callInfoContainer.appendChild(callTitle);

    const callNunberOne = document.createElement('div');
    callNunberOne.textContent = '313.426.204';
    callNunberOne.classList.add('call-nomber', 'contact-body', 'clickable');

    callInfoContainer.appendChild(callNunberOne);

    const callNunberTwo = document.createElement('div');
    callNunberTwo.textContent = '313.626.301';
    callNunberTwo.classList.add('call-nomber', 'contact-body', 'clickable');

    callInfoContainer.appendChild(callNunberTwo);

    const directionContainer = document.createElement('div');
    directionContainer.classList.add('direction-container', 'display-grid');

    contactsContainer.appendChild(directionContainer);

    const mapIcon = document.createElement('div');
    mapIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" /></svg>';
    mapIcon.classList.add('map-icon', 'contact-icon', 'clickable');

    directionContainer.appendChild(mapIcon);

    const directionTitle = document.createElement('div');
    directionTitle.textContent = 'DIRECTIONS HERE';
    directionTitle.classList.add('direction-title', 'contact-title', 'clickable');

    directionContainer.appendChild(directionTitle);

    const address = document.createElement('div');
    address.textContent = '123 WW ST | ZANDOR';
    address.classList.add('contact-address', 'contact-body', 'clickable');

    directionContainer.appendChild(address);

    const emailContainer = document.createElement('div');
    emailContainer.classList.add('email-container', 'display-grid');

    contactsContainer.appendChild(emailContainer);

    const emailIcon = document.createElement('div');
    emailIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z" /></svg>';
    emailIcon.classList.add('email-icon', 'contact-icon', 'clickable');

    emailContainer.appendChild(emailIcon);

    const emailTitle = document.createElement('div');
    emailTitle.textContent = 'MESSAGE HERE';
    emailTitle.classList.add('email-title', 'contact-title', 'clickable');

    emailContainer.appendChild(emailTitle);

    const email = document.createElement('div');
    email.textContent = 'SAVORYLOCALE@GMAIL.COM';
    email.classList.add('contact-email', 'contact-body', 'clickable');

    emailContainer.appendChild(email);
}

export function displayContactInfo() {
    const overlay = document.querySelector('.contact-overlay');
    overlay.style.display = 'flex';
}