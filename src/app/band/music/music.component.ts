import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/types/Album';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss'],
})
export class MusicComponent implements OnInit {


  names: string[] = ['Alex', 'Bobby', 'Ashley'];

  albums: Album[] = [
    {
      name: 'Ohms',
      year: 2020,
      image: '../../../assets/images/ohms_deftones.jpeg',
      tracks: [
        { name: 'Genesis', length: '5:17' },
        { name: 'Ceremony', length: '3:27' },
        { name: 'Urantia', length: '4:30' },
        { name: 'Error', length: '4:50' },
        { name: 'The Spell of Mathematics', length: '5:27' },
        { name: 'Pompeji', length: '5:25' },
        { name: 'This Link Is Dead', length: '4:37' },
        { name: 'Radiant City', length: '3:35' },
        { name: 'Headless', length: '4:59' },
        { name: 'Ohms', length: '4:10' },
      ],
    },
    {
      name: 'Gore',
      year: 2016,
      image: '../../../assets/images/gore.jpg',
      tracks: [
        { name: 'Prayers/Triangles', length: '3:38' },
        { name: 'Acid Hologram', length: '4:06' },
        { name: 'Dooomed User', length: '4:27' },
        { name: 'Geometric Headdress', length: '3:29' },
        { name: 'Hearts / Wires', length: '5:21' },
        { name: 'Pittura Infamante', length: '4:04' },
        { name: 'Xenon', length: '3:17' },
        { name: 'LMIRL', length: '5:02' },
        { name: 'Gore', length: '4:59' },
        { name: 'Phantom Blade', length: '4:53' },
        { name: 'Rubicon', length: '4:58' },
      ],
    },
    {
      name: 'Koi No Yokam',
      year: 2012,
      image: '../../../assets/images/Koi_No_Yokan.jpg',
      tracks: [
        { name: 'Swerve City', length: '2:44' },
        { name: 'Romantic Dreams', length: '4:38' },
        { name: 'Leathers', length: '4:08' },
        { name: 'Poltergeist', length: '3:31' },
        { name: 'Entombed', length: '4:59' },
        { name: 'Graphic Nature', length: '4:32' },
        { name: 'Tempest', length: '6:05' },
        { name: 'Gauze', length: '4:41' },
        { name: 'Rosemary', length: '6:53' },
        { name: 'Goon Squad', length: '5:40' },
        { name: 'What Happened to You', length: '3:53' },
      ],
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
