import { Component, OnInit } from '@angular/core';
import { Merch } from '../types/Merch';
import { MerchService } from './merch.service';

@Component({
  selector: 'app-merch',
  templateUrl: './merch.component.html',
  styleUrls: ['./merch.component.scss']
})
export class MerchComponent implements OnInit {

  constructor(private merchService : MerchService) { }

  merchItems : Merch[] =  []

  ngOnInit(): void {
    this.merchItems = this.merchService.getMerch();
  }

}
