import axios from 'axios';
export default class Form {
  constructor() {
    
  }

  async getData() {
    try {   
     const result = await axios('https://rawgit.com/Varinetz/e6cbadec972e76a340c41a65fcc2a6b3/raw/90191826a3bac2ff0761040ed1d95c59f14eaf26/frontend_test_table.json');
     console.log(result);
     this.dataLength = result.data.length;
     //console.log(this.data);
    } catch (error) {
     console.error(error)
    }
   }
   
   async postData(obj) {
     obj.id = this.dataLength + 1;
     try {
     const result = await axios.post('https://cors-anywhere.herokuapp.com/https://rawgit.com/Varinetz/e6cbadec972e76a340c41a65fcc2a6b3/raw/90191826a3bac2ff0761040ed1d95c59f14eaf26/frontend_test_table.json', obj);
     
     } catch (error) {
       console.log(error);
     }
   }

}
