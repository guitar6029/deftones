import { Component, OnInit, OnChanges, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Merch } from 'src/app/types/Merch';
import { MerchService } from '../merch.service';

@Component({
  selector: 'app-merch-detailed',
  templateUrl: './merch-detailed.component.html',
  styleUrls: ['./merch-detailed.component.scss']
})
export class MerchDetailedComponent implements OnInit {

  constructor(private route: ActivatedRoute, private merchService : MerchService) { }

  merchItem? : Merch = {} as Merch;
  merchTitle? : string;
  merchImage? : string;
  merchPrice? : number;
  id?: number;


  ngOnInit(): void {
    
      this.id = this.route.snapshot.params['id'];
      console.log('ID : ', this.id);
      //this.merchItem = 
      this.merchService.getMerchItemById(this.route.snapshot.params['id']);
      // this.merchTitle = this.merchItem.title;
      // this.merchImage = this.merchItem.image;
      // this.merchPrice = this.merchItem.price;
      
  }


}
