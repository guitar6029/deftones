import { Component, OnInit, Input } from '@angular/core';
import { Merch } from 'src/app/types/Merch';

@Component({
  selector: 'app-merch-item',
  templateUrl: './merch-item.component.html',
  styleUrls: ['./merch-item.component.scss']
})
export class MerchItemComponent implements OnInit {

@Input() merch : Merch = {} as Merch;

  constructor() { }

  ngOnInit(): void {
  }

}
