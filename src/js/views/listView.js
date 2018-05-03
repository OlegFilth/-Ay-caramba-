import {elements} from './base';
import utilities from './utilities';

export const getCars = cars => {
  const template = document.createDocumentFragment();
  cars.forEach(element => {
    const cloneNode = elements.listItem.cloneNode(true);
    cloneNode.setAttribute('id', `car-${element.id}`);
    cloneNode.querySelector('.list__name').textContent = element.title;
    cloneNode.querySelector('.list__year').textContent = element.year;
    cloneNode.querySelector('.list__color span').classList.add('circle', `circle--${element.color}`);
    switch(element.status) {
      case 'in_stock':
      cloneNode.querySelector('.list__status').textContent = 'В наличии';
      break;
      case 'out_of_stock':
      cloneNode.querySelector('.list__status').textContent = 'Нет в наличии';
      break;
      case 'pednding':
      cloneNode.querySelector('.list__status').textContent = 'Ожидается';
      break;
    }
    cloneNode.querySelector('.list__description').textContent = element.description;
    cloneNode.querySelector('.price--current').textContent = element.price.toLocaleString('ru-RU') + ' руб';
    cloneNode.querySelector('.price--increase').textContent = element.incPrice.toLocaleString('ru-RU') + ' руб';
    template.appendChild(cloneNode);
  })
  return template;
}

export const removeListItem = (id) => {
  document.querySelector(`#${id}`).remove();
}
