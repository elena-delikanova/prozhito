
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

if (document.querySelector('body').clientWidth < 769) {
  const cards = document.querySelectorAll('.journal-grid__item');

  let curPos = 0;

  cards.forEach((card, i) => {
    let start;
    card.addEventListener('touchstart', evt => {
      start = evt.changedTouches[0].pageX;
    });
    card.addEventListener('touchend', evt => {
      card.style.transform=`translateX(0)`;
      if (evt.changedTouches[0].clientX < start) {//left
        if (curPos < cards.length - 1) {
          cards[curPos].classList.add('journal-grid__item_hidden');
          curPos++;
          cards[curPos].classList.remove('journal-grid__item_pos_2')
        }
        if (curPos < cards.length - 1) {
          cards[curPos + 1].classList.add('journal-grid__item_pos_2');
          cards[curPos + 1].classList.remove('journal-grid__item_pos_3')
        }
        if (curPos < cards.length - 2) {
          cards[curPos + 2].classList.add('journal-grid__item_pos_3');
          cards[curPos + 2].classList.remove('journal-grid__item_hidden')
        }

      } else {
        if (curPos > 0) {
          cards[curPos].classList.add('journal-grid__item_pos_2');
          curPos--;
          cards[curPos].classList.remove('journal-grid__item_hidden')
        }
        if (curPos < cards.length - 2) {
          cards[curPos + 2].classList.add('journal-grid__item_pos_3');
          cards[curPos + 2].classList.remove('journal-grid__item_pos_2')
        }
        if (curPos < cards.length - 3) {
          cards[curPos + 3].classList.remove('journal-grid__item_pos_3');
          cards[curPos + 3].classList.add('journal-grid__item_hidden')
        }
      }
    });
    card.addEventListener('touchmove', evt => {
      card.style.transition='transform 0s';
      card.style.transform=`translateX(${evt.changedTouches[0].clientX-start}px)`;
    });
  });
}

