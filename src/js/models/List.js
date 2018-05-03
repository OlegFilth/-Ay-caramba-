import axios from 'axios';

export default class List {
  constructor() {
  }

  async getData() {
    try {   
     const result = await axios('https://rawgit.com/Varinetz/e6cbadec972e76a340c41a65fcc2a6b3/raw/90191826a3bac2ff0761040ed1d95c59f14eaf26/frontend_test_table.json');
     console.log(result);
     this.data = result.data;
     //console.log(this.data);
    } catch (error) {
     console.error(error)
    }
   }

   increasePriceByPercent(percent) {
     this.data.forEach(element => {
       element.incPrice = (element.price / 100 * percent) + element.price;
     })
     console.log(this.data);
   }
   

}

