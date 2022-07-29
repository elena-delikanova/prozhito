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

const photoGallaries = document.querySelectorAll(".gallery");
photoGallaries.forEach((gallary) => {
  const galleryCaption = Array.from(gallary.children).find((elem) => {
    return elem.nodeName.toLowerCase() === "figcaption";
  });
  const content = gallary.querySelector(".content");
  const figureElements = content.querySelectorAll(".image");

  const photoCounterCaption = document.createElement("span");
  photoCounterCaption.classList.add('gallery__photo-counter');
  photoCounterCaption.textContent = `1/${figureElements.length}`;

  galleryCaption.append(photoCounterCaption);

  galleryCaption.classList.add("gallery__caption");

  figureElements.forEach((figure, index) => {
    figure.classList.add("gallery__image");
    figure.classList.remove("image");
    const imageFigcaption = figure.querySelector("figcaption");
    imageFigcaption.remove();

    const buttonNext = document.createElement("button");
    buttonNext.classList.add("gallery__next-button");

    buttonNext.addEventListener("click", (event) => {
      photoCounterCaption.textContent = `${index+2}/${figureElements.length}`;
      event.target.closest(".gallery__image").classList.add("gallery__image_hidden");
      figureElements[index + 1].classList.remove("gallery__image_hidden");
    });

    if (index !== figureElements.length - 1) {
      figure.append(buttonNext);
    }

    const buttonPrevious = document.createElement("button");
    buttonPrevious.classList.add("gallery__previous-button");

    buttonPrevious.addEventListener("click", (event) => {
      photoCounterCaption.textContent = `${index}/${figureElements.length}`;
      event.target.closest(".gallery__image").classList.add("gallery__image_hidden");
      figureElements[index - 1].classList.remove("gallery__image_hidden");
    });

    if (index !== 0) {
      figure.append(buttonPrevious);
      figure.classList.add("gallery__image_hidden");
    }
  });
});
