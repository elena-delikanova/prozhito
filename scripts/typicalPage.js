const pageTitle = document.querySelector('.title__text');
const textBreadCrumbs = document.querySelector('.bread-crumbs__title');
textBreadCrumbs.textContent = pageTitle.textContent;
const buttonAdd = document.querySelector('.header__menu-button');
const buttonClose = document.querySelector('.header__menu-button_close');
const popups = document.querySelector('.header__popup');

function openPopup(popup) {
  popup.classList.add('header__popup_opened');
}
function closePopup(popup) {
  popup.classList.remove('header__popup_opened');
}

buttonAdd.addEventListener('click', evt => {
  openPopup(popups);
});
buttonClose.addEventListener('click', evt => {
  closePopup(popups);
});
