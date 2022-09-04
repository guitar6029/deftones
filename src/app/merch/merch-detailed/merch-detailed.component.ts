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
  defaultQuantityNumber: number = 1;


  ngOnInit(): void {
    
      this.id = this.route.snapshot.params['id'];
      console.log('ID : ', this.id);
      //this.merchItem = 
      this.merchItem = this.merchService.getMerchItemById(this.route.snapshot.params['id']);
      this.merchTitle = this.merchItem.title;
      this.merchImage = this.merchItem.image;
      this.merchPrice = this.merchItem.price;
      
  }


  incrementMerchItemQuantity(): void{
    if(this.defaultQuantityNumber === 10){
      this.defaultQuantityNumber = 10;
    }
    else{
      this.defaultQuantityNumber = this.defaultQuantityNumber + 1;

    }
  }

  decrementMerchItemQuantity() : void{
    if(this.defaultQuantityNumber === 1){
      this.defaultQuantityNumber = 1;
    }
    else{
      this.defaultQuantityNumber = this.defaultQuantityNumber - 1;
    }
  }


}
