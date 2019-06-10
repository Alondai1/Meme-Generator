'use strict';

const shareBtn = document.querySelector('.webshare');
const ogBtnContent = shareBtn.textContent;
const url =
  (document.querySelector('link[rel=canonical]') &&
    document.querySelector('link[rel=canonical]').href) ||
  window.location.href;

shareBtn.addEventListener('click', () => {
  if (navigator.share) {
    navigator
      .share({
        title: 'My awesome meme',
        text: 'The Ultimate Meme Generator',
        url: ''
      })
      .then(() => {
        showMessage(shareBtn, 'Thanks! 😄');
      })
      .catch(err => {
        showMessage(shareBtn, `Couldn't share 🙁`);
      });
  } else {
    showMessage(shareBtn, 'Not supported 🙅‍');
  }
});

function showMessage(element, msg) {
  element.textContent = msg;
  setTimeout(() => {
    element.textContent = ogBtnContent;
  }, 2000);
}
