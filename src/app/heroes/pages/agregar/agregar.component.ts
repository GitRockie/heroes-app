import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interface/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {

  publishers = [
    {
      id: 'DC Comics',
      description: 'dc-comics'
    },
    {
      id: 'Marvel',
      description: 'marvel-comics'
    }
  ]

  heroe: Heroe = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: '',

  }

  constructor( private heroesService: HeroesService) { }

  ngOnInit(): void {
  }

  saveHero() {
    
    if(this.heroe.superhero.trim().length === 0 ) {
      return;
    }

    this.heroesService.addHero( this.heroe )
      .subscribe( resp => {
        console.log('feedback:', resp );
      })

  }

}
