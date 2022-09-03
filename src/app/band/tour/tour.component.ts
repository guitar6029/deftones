import { Component, OnInit } from '@angular/core';
import { Tour } from 'src/app/types/Tour';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.scss']
})
export class TourComponent implements OnInit {

  tours : Tour[] = [
    {
      date: 'November 5',
      location: 'San Diego, CA',
      availability: false

    },
    {
      date: 'December 2',
      location: 'Melbourne, Australia',
      availability: true
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
