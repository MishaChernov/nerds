var link = document.querySelector('.contacts .btn');
var close = document.querySelector('.btn-close');
var popup = document.querySelector('.popup');

link.addEventListener('click', function(event) {
  event.preventDefault();
  popup.classList.add('popup-show');
});

close.addEventListener('click', function(event) {
  event.preventDefault();
  popup.classList.remove('popup-show');
});

window.addEventListener('keydown', function(event){
  if(event.keyCode === 27) {
    if(popup.classList.contains('popup-show')){
      popup.classList.remove('popup-show');
    }
  }
});
