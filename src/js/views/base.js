export const elements = {
  list: document.querySelector('.list'),
  listItem: document.querySelector('template').content.querySelector('.list__item'),
  deleteBtn: document.querySelector('.btn--primary'),
  addCarForm:  document.querySelector('.js-add-car'),
  fieldInputs: document.querySelectorAll('.field__input'),
  fieldPlaceholder: document.querySelector('.field__placeholder'),
  inputName: document.querySelector('#name'),
  inputYear: document.querySelector('#year'),
  inputDesc: document.querySelector('#description'),
  inputPrice: document.querySelector('#price'),
  inputStatus: document.querySelector('#status'),
  inputColor: document.querySelector('.radio__input'),
  totalPrice: document.querySelector('.total__price')
};

export const formPlaceholder  = () => {
  Array.from(elements.fieldInputs).forEach(element => {
    element.addEventListener('change', onfieldInputChange);
  })
}

const onfieldInputChange = function() {
  if (this.value.length > 0) {
    this.parentNode.querySelector('.field__placeholder').style.transform = 'translateY(-40px)';
  } else {
    this.parentNode.querySelector('.field__placeholder').style.transform = 'translateY(0)';
  }
  this.removeEventListener('change', onfieldInputChange);
}
