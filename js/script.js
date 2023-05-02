const mainContentContainer = document.querySelector('#main-content');
const musicContainer = document.querySelector('#music-container');
const homeBtn = document.querySelector('#home');
const theBests = document.querySelector('#the-bests');

theBests.addEventListener('click', theBest);
homeBtn.addEventListener('click', home);


function theBest(){
    mainContentContainer.classList.remove('main-content');
    mainContentContainer.classList.add('main-content-disabled');
    musicContainer.classList.remove('music-container-disabled');
    musicContainer.classList.add('music-container-avtive');
}


function home(){
    mainContentContainer.classList.remove('main-content-disabled');
    mainContentContainer.classList.add('main-content');
    musicContainer.classList.remove('music-container-avtive');
    musicContainer.classList.add('music-container-disabled');
}