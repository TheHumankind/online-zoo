const headerMenuBtn = document.querySelectorAll('.menu__account-manage .button'),
      popUpChooseMenu = document.querySelectorAll('.popup-choose__btn button'),
      feedbackPopUp = document.getElementById('feedbackPopUp');
// popUp open (login button)

const   popUpAccount = document.getElementById('accountPopUp'),
        createAccount = document.getElementById('createAccount'),
        logAccount = document.getElementById('logAccount'),
        popUpCoverElement = document.getElementById('popUpCover');

headerMenuBtn.forEach(e => {
    e.addEventListener('click', () => {

        // show popUp

        popUpAccount.classList.remove('not-visible'); 
        popUpCoverElement.classList.remove('not-visible'); 
        //choosing form to display

        if (e.matches('.menu__log-in')){

            logAccount.classList.remove('not-visible');
            createAccount.classList.add('not-visible');
            popUpChooseMenu[1].classList.add('active');
            popUpChooseMenu[0].classList.remove('active');

        } else if (e.matches('.menu__sign-up')) {

            logAccount.classList.add('not-visible');
            createAccount.classList.remove('not-visible');
            popUpChooseMenu[0].classList.add('active');
            popUpChooseMenu[1].classList.remove('active');

        }
    });
});

popUpChooseMenu.forEach(e => {
    e.addEventListener('click', () => {
        if (e.id === 'popUpCreateBtn') { 
            createAccount.classList.remove('not-visible');
            logAccount.classList.add('not-visible');
            document.querySelector('.active').classList.remove('active');
            e.classList.add('active');
        } else {

            createAccount.classList.add('not-visible');
            logAccount.classList.remove('not-visible');
            document.querySelector('.active').classList.remove('active');
            e.classList.add('active');

        }
    });
});

//popUp close

popUpCoverElement.addEventListener('click', () => {
    popUpCoverElement.classList.add('not-visible'); 
    popUpAccount.classList.add('not-visible'); 
    feedbackPopUp.classList.add('not-visible');
});

//

const feedbackBtn = document.getElementById('feedback');
const contactUs = document.getElementById('contactUs');

feedbackBtn.addEventListener('click', () => {
    
    popUpCoverElement.classList.remove('not-visible'); 
    feedbackPopUp.classList.remove('not-visible'); 

});

contactUs.addEventListener('click', (e) => {
    e.preventDefault();
    popUpCoverElement.classList.remove('not-visible'); 
    feedbackPopUp.classList.remove('not-visible'); 

});
