import { Component, OnInit, Input } from '@angular/core';
import { Tour } from 'src/app/types/Tour';

@Component({
  selector: 'app-tour-day',
  templateUrl: './tour-day.component.html',
  styleUrls: ['./tour-day.component.scss']
})
export class TourDayComponent implements OnInit {

  @Input() tour : Tour = {} as Tour;

  constructor() { }

  ngOnInit(): void {
  }

}
