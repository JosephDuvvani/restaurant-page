import loadHomepage from './home';
import loadMenu from './menu';
import loadReservation from './reservation';
import loadTakeAway from './take-away';
import loadContact from './contact';
import { displayContactInfo } from './contact';

loadHomepage();
loadContact();

(function navigationEvents() {
    const content = document.querySelector('#content');

    const navButtons = document.querySelectorAll('.primary-navigation button');

    for(let navBtn of navButtons) {
        navBtn.addEventListener('click', (e) => {
            const clickedBtn = e.target.dataset.button;
            switch(clickedBtn) {
                case 'home':
                    loadHomepage();
                    break;
                case 'menu':
                    loadMenu();
                    break;
                case 'reservation':
                    loadReservation();                 
                    break;
                case 'take-away':
                    loadTakeAway();              
                    break;
                case 'press':
                    console.log('No Press');                 
                    break;
                case 'contact-us':
                    displayContactInfo();       
                    break;     
            }
        });
    }
})();