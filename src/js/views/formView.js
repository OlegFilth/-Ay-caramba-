import {elements} from './base';

export const getInput = () => {
  console.log(elements);
  return {
    title: elements.inputName.value,
    year: elements.inputYear.value,
    description: elements.inputDesc.value,
    price: elements.inputPrice.value,
    status: elements.inputStatus.value,
    color: elements.inputColor.value,
  }
}