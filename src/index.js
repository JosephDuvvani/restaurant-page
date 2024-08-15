import loadHomepage from './home';
import loadMenu from './menu';

loadHomepage();


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
                    console.log('reservation');
                    
                    break;
                case 'take-away':
                    console.log('take away');              
                    break;
                case 'press':
                    console.log('press');                 
                    break;
                case 'contact-us':
                    console.log('contact us');             
                    break;     
            }
        });
    }
})();