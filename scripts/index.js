const buttonAdd = document.querySelector('.header__menu-button');
const buttonClose = document.querySelector('.header__menu-button_close');
const popups = document.querySelector('.header__popup');
const popupLock = document.querySelector('.lock__popup');
const lockCloseButton = document.querySelector('.lock__popup-close');

function openPopup(popup) {
  popup.classList.add('header__popup_opened');
}
function closePopup(popup) {
  popup.classList.remove('header__popup_opened');
}
function togglePopup(popup) {
  popup.classList.toggle('lock__popup_closed');
}

buttonAdd.addEventListener('click', evt => {
  openPopup(popups);
});
buttonClose.addEventListener('click', evt => {
  closePopup(popups);
});
lockCloseButton.addEventListener( "click", () => togglePopup(popupLock));