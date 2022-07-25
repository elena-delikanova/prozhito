if (document.querySelector('body').clientWidth < 769) {
  const cards = document.querySelectorAll('.journal-grid__item');
  let start;
  let curPos = 0;

  cards.forEach((card, i) => {
    card.addEventListener('touchstart', evt => {
      start = evt.changedTouches[0].pageX;
    });
    card.addEventListener('touchend', evt => {
      if (!start) {
        return;
      }
      card.style.transform=`translateX(0)`;
      if (evt.changedTouches[0].clientX < start) {//left
        for (let j = i; j < cards.length && j < i + 3; j++) {
          cards[j].classList.add('swipe');
        }
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
        for (let j = i; j > 0 && j > i - 3; j--) {
          cards[j].classList.add('swipe');
        }
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
      start = null
    });
    card.addEventListener('touchmove', evt => {
      card.style.transition='transform 0s';
      card.style.transform=`translateX(${evt.changedTouches[0].clientX-start}px)`;
    });
  });
}
