import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from '../../interface/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  term: string = '';
  heroes: Heroe[] = [];

  heroeSelected: Heroe | undefined;

  constructor( private heroesService: HeroesService ) { }

  ngOnInit(): void {
  }

  searching() {
    this.heroesService.getSuggestions( this.term.trim() )
      .subscribe( heroes => this.heroes = heroes );
  }

  optionSelected( event: MatAutocompleteSelectedEvent ) {
    if(!event.option.value) {
      this.heroeSelected = undefined;
      console.log('no value')
      return;
    }
    const heroe: Heroe = event.option.value;
    console.log(heroe);
    this.term = heroe.superhero;

    this.heroesService.getHeroById( heroe.id! )
      .subscribe( heroe => this.heroeSelected = heroe );
  }

}
