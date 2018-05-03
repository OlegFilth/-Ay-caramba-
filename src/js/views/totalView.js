import {elements} from './base';
export const displayTotal = (total) => {
  elements.totalPrice.innerHTML = total.toLocaleString('ru-RU') + ' руб';
}