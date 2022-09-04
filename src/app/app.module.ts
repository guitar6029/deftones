import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BandComponent } from './band/band.component';
import { MusicianComponent } from './band/about/musician/musician.component';
import { NavComponent } from './band/nav/nav.component';
import { Routes, RouterModule } from '@angular/router';
import { ShopComponent } from './band/shop/shop.component';
import { AboutComponent } from './band/about/about.component';
import { TourComponent } from './band/tour/tour.component';
import { MusicComponent } from './band/music/music.component';
import { AlbumComponent } from './band/music/album/album.component';
import { TourDayComponent } from './band/tour/tour-day/tour-day.component';
import { MerchComponent } from './merch/merch.component';
import { MerchItemComponent } from './merch/merch-item/merch-item.component';
import { MerchDetailedComponent } from './merch/merch-detailed/merch-detailed.component';

const routes = [
  {path: '' , component: BandComponent},
  {path: 'shop', component : ShopComponent}, 
  {path: 'about', component : AboutComponent}, 
  {path: 'tour', component : TourComponent}, 
  {path: 'music', component : MusicComponent},
  {path: 'merch', component: MerchComponent} ,
  {path: 'merch/:id', component: MerchDetailedComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    BandComponent,
    MusicianComponent,
    NavComponent,
    ShopComponent,
    AboutComponent,
    TourComponent,
    MusicComponent,
    AlbumComponent,
    TourDayComponent,
    MerchComponent,
    MerchItemComponent,
    MerchDetailedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
