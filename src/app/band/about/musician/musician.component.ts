import { Component, HostListener, OnInit, Input, ElementRef, Renderer2 } from '@angular/core';
import { Musician } from 'src/app/types/Musician';

@Component({
  selector: 'app-musician',
  templateUrl: './musician.component.html',
  styleUrls: ['./musician.component.scss']
})
export class MusicianComponent implements OnInit {

  @Input() musician : Musician = {} as Musician;
  //HostListener('click', ['$event.target']);

  clickedOnCard : boolean = false;

  constructor(private element : ElementRef, private renderer : Renderer2) { }

  
  toggleSize(){
    
      this.clickedOnCard = !this.clickedOnCard;
  }


  ngOnInit(): void {
  }

}
