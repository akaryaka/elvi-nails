export default function popup() {
  const btn = document.querySelector('.btn-popup');
  const popup = document.querySelector('.popup');
  const body = document.querySelector('body');
  const closeBtn = document.querySelector('.close');

  btn.addEventListener('click', function(event) {
    event.preventDefault();
    popup.classList.add('popup_active');
    body.style.overflow = 'hidden';
  })

  if(close) {
    closeBtn.addEventListener('click', function() {
      popup.classList.remove('popup_active');
      body.style.overflow = 'visible';
    })
  }
}



