import { Component, OnInit } from '@angular/core';
import { Musician } from 'src/app/types/Musician';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  musicians : Musician [] = [
    {
      name: 'Chino Moreno',
      instrument : 'Vocalist',
      image : '../../../assets/images/Slice_3.png',
    },
    {
      name: 'Stephen Carpenter',
      instrument: 'Guitar',
      image: '../../../assets/images/Slice_4.png'
    },
    {
      name: 'Abe Cunningham',
      instrument: 'Drums',
      image: '../../../assets/images/Slice_2.png'
    },
    {
      name: 'Sergio Vega',
      instrument: 'Bass',
      image: '../../../assets/images/Slice_5.png'
    },
    {
      name: 'Frank Delgado',
      instrument: 'Keys',
      image: '../../../assets/images/Slice_1.png'
    }
  ]

  ngOnInit(): void {
  }

}
