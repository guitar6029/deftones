import { Component, OnInit, Input } from '@angular/core';
import { Album } from 'src/app/types/Album';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  @Input() album : Album = {} as Album;
  
  constructor() { }


  isPlaying: boolean = false;



  handlePlay(){
    this.isPlaying = !this.isPlaying;
  }

  ngOnInit(): void {
    
  }

}
