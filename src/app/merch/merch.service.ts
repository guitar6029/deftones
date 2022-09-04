import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MerchService {

  constructor() { }
  getMerch(){
    return [
      {
        id: 1,
        image : '../../assets/images/DEFTONES_approvedmerchapril2022-blackreaper_1728x.jpeg',
        title: 'Reaper T-Shirt Black',
        price: 25
      },
      {
        id: 2,
        image : '../../assets/images/DEFTONES_spring2022tourmerch-reaperred_1728x.jpeg',
        title : 'Reaper T-Shirt Red',
        price: 25
      },
      {
        id: 3,
        image: '../../assets/images/DEFTONES_spring2022tourmerch-admatfront_1728x.jpeg',
        title : 'Deftones Tour T-Shirt',
        price : 20
      },
      {
        id: 4,
        image: '../../assets/images/DEFTONES_spring2022tourmerch-blackonblackcollegiatehoodie_1728x.jpeg',
        title : 'Deftones Hoodie',
        price: 55
      }
    ]
  }
}
