const serachElement = document.querySelector('.search');
const serachInputElement = serachElement.querySelector('input');

serachElement.addEventListener('click', function(){
  serachInputElement.focus();
})

serachInputElement.addEventListener('focus', function() {
  serachElement.classList.add('focused');
  serachInputElement.setAttribute('placeholder', '통합검색');
});

serachInputElement.addEventListener('blur', function() {
  serachElement.classList.remove('focused');
  serachInputElement.setAttribute('placeholder', '');
  serachInputElement.value = '';
});

const currentYear = document.querySelector('.this-year');
currentYear.textContent = new Date().getFullYear();