import {Component} from '@angular/core';
import {MatCard} from "@angular/material/card";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    MatCard
  ],
  // Mark the component as standalone
})
export class AppComponent {
  title = 'BusquedaDelTesoroJirafas';
  flippedColor = false;
  flippedSound = false;
  flippedNumber = false;

  toggleFlip(i: number) {
    switch (i) {
      case 1:
        this.flippedColor = !this.flippedColor;
        break;
      case 2:
        this.flippedSound = !this.flippedSound;
        this.playSound();
        break;
      case 3:
        this.flippedNumber = !this.flippedNumber;
        break;
    }
  }

   playSound() {
    const audio = new Audio();
    audio.src = 'assets/elephant.mp3';
    audio.load();
    audio.play();
  }
}
