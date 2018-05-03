// Global app controller

import $ from 'jquery';
import {elements, formPlaceholder} from './views/base';
import {utilities} from './views/utilities';

import * as listView from './views/listView';
import List from './models/List';

import * as formView from './views/formView';
import Form from './models/Form';

import * as totalView from './views/totalView';
import Total from './models/Total';

const state = {

}

const controlList = async () => {
  state.list = new List();
  await state.list.getData();
  console.log(state.list.data);
  state.list.increasePriceByPercent(13);
  const carList = listView.getCars(state.list.data);
  utilities.renderData(elements.list, carList);

}

const controlForm = async() => {
   state.form  = new Form();
   await state.form.getData();
   const newCar = formView.getInput();
   await state.form.postData(newCar);
}

const controlTotal = async () => {
  state.total = new Total();
  await state.total.getData();
  const total = state.total.calculateTotal();
  totalView.displayTotal(total);
}


document.querySelector('.js-add-car').addEventListener('submit', event => {
  event.preventDefault();
  controlForm();
});



elements.list.addEventListener('click', event => {
  if (event.target.className.includes('list__delete')) {
    let id, type;
    id = event.target.parentNode.id;
    id = id.split('-');
    [type, id] = id;
    state.total.deleteItem(Number(id));
    totalView.displayTotal(state.total.calculateTotal())
    listView.removeListItem(event.target.parentNode.id);
  }
  return
});

formPlaceholder();
controlList();
controlTotal();









