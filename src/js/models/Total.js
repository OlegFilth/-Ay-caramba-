import axios from 'axios';
export default class Total {
 
  constructor() {
    this.price = [];
  }
  

  async getData() {
    try {   
     const result = await axios('https://rawgit.com/Varinetz/e6cbadec972e76a340c41a65fcc2a6b3/raw/90191826a3bac2ff0761040ed1d95c59f14eaf26/frontend_test_table.json');
     this.data = result.data;
     this.data.forEach(element => {
      this.price.push({
        price: element.price,
        id: element.id});
    })
     //console.log(this.data);
    } catch (error) {
     console.error(error)
    }
   }

   calculateTotal() {
      this.total = 0;
      this.price.forEach(element => {
        this.total += element.price;
      })
     return this.total;
   }

   deleteItem(id) {
      let index = this.price.findIndex(element => {
       return element.id === id;
      });
     this.price.splice(index, 1)
   }
  
}