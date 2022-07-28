const pageTitle = document.querySelector('.title__text');
const textBreadCrumbs = document.querySelector('.bread-crumbs__title');
textBreadCrumbs.textContent = pageTitle.textContent;
const popupTable = document.querySelector('.table');
const popupNote = document.querySelector('.note')
const tableCloseButton = document.querySelector('.table__close');
const tableOpenButton = document.querySelector('.table-button__text');
const noteCloseButton = document.querySelector('.note__close');

function togglePopup(popup) {
  popup.classList.toggle('table_opened');
}

function closeNotePopup(popup) {
  popup.classList.toggle('lock__popup_closed');
}

tableCloseButton.addEventListener( "click", () => togglePopup(popupTable));
tableOpenButton.addEventListener( "click", () => togglePopup(popupTable));
noteCloseButton.addEventListener( "click", () => closeNotePopup(popupNote));
