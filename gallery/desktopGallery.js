const image = document.querySelector('img');

image.addEventListener('click', function() {
  this.classList.toggle('active');
});
