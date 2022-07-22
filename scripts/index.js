const popupLock = document.querySelector('.lock__popup');
const lockCloseButton = document.querySelector('.lock__popup-close');

lockCloseButton.addEventListener( "click", () => togglePopup(popupLock))

function togglePopup(popup) {
  popup.classList.toggle('lock__popup_closed');
}
