import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudioService {

  public introMusic = new Audio('../../assets/sounds/intro.mp3');

  constructor() { 
    this.introMusic.volume = 0.009;
  }
}
