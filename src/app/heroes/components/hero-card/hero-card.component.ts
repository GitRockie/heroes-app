import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { Heroe } from '../../interface/heroes.interface';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styles: [`
    
  mat-card {
    margin-top: 20px;
  }
  `
  ]
})
export class HeroCardComponent {

  @Input() heroe!: Heroe

}
