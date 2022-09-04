import { Component, OnInit } from '@angular/core';
import { Merch } from '../types/Merch';

@Component({
  selector: 'app-merch',
  templateUrl: './merch.component.html',
  styleUrls: ['./merch.component.scss']
})
export class MerchComponent implements OnInit {

  constructor() { }

  merchItems : Merch[] =  [
    {
      image : '../../assets/images/DEFTONES_approvedmerchapril2022-blackreaper_1728x.jpeg',
      title: 'Reaper T-Shirt Black',
      price: 25
    },
    {
      image : '../../assets/images/DEFTONES_spring2022tourmerch-reaperred_1728x.jpeg',
      title : 'Reaper T-Shirt Red',
      price: 25
    },
    {
      image: '../../assets/images/DEFTONES_spring2022tourmerch-admatfront_1728x.jpeg',
      title : 'Deftones Tour T-Shirt',
      price : 20
    },
    {
      image: '../../assets/images/DEFTONES_spring2022tourmerch-blackonblackcollegiatehoodie_1728x.jpeg',
      title : 'Deftones Hoodie',
      price: 55
    }
  ]

  ngOnInit(): void {
  }

}
