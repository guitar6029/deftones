import { Injectable } from '@angular/core';
import { Merch } from '../types/Merch';

@Injectable({
  providedIn: 'root',
})
export class MerchService {


  items: Merch[] = [
    {
      id: 1,
      image:
        '../../assets/images/DEFTONES_approvedmerchapril2022-blackreaper_1728x.jpeg',
      title: 'Reaper T-Shirt Black',
      price: 25,
    },
    {
      id: 2,
      image:
        '../../assets/images/DEFTONES_spring2022tourmerch-reaperred_1728x.jpeg',
      title: 'Reaper T-Shirt Red',
      price: 25,
    },
    {
      id: 3,
      image:
        '../../assets/images/DEFTONES_spring2022tourmerch-admatfront_1728x.jpeg',
      title: 'Deftones Tour T-Shirt',
      price: 20,
    },
    {
      id: 4,
      image:
        '../../assets/images/DEFTONES_spring2022tourmerch-blackonblackcollegiatehoodie_1728x.jpeg',
      title: 'Deftones Hoodie',
      price: 55,
    },
  ];

  myItem: Merch = {} as Merch;
  

  constructor() {}

  getMerch() {
    return this.items;
  }

  getMerchItemById(id: number){
    console.log('getMerchById : ', id);
     this.items.map((item) => {
       if(item.id == id){
        console.log(item);
        this.myItem = item;
        //return this.myItem ;
       }
      
      })
      return this.myItem ;
    }
      


}
