import { Component, OnInit , HostListener} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }

  @HostListener("window:resize", ['$event'])
  onResize(event: any){
    if(this.toggleDisplay && ( window.innerWidth >= 450 )){
      this.toggleDisplay = !this.toggleDisplay;
    }
    //console.log(window.innerWidth);
  }

  toggleDisplay: boolean = false;
  screenWidth? : number;

  toggleMenu(){
    this.toggleDisplay = !this.toggleDisplay;
  }


  ngOnInit(): void {
    //this.screenWidth = window.innerWidth;
    //console.log('Screen width : ', this.screenWidth);
  }

}
