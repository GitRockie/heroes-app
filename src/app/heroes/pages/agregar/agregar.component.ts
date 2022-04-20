import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Heroe, Publisher } from '../../interface/heroes.interface';
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [`
    img {
      width: 100%;
      border-radius: 5px;
      
    }
  `
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

  constructor( private heroesService: HeroesService,
               private activatedRoute: ActivatedRoute,
               private router: Router ) { }

  ngOnInit(): void {

    if( !this.router.url.includes('edit') ) {
      return;
    }

    this.activatedRoute.params
      .pipe(
        switchMap(({id}) => this.heroesService.getHeroById(id) )
      )
        .subscribe( heroe => this.heroe = heroe);
  }

  saveHero() {
    
    if(this.heroe.superhero.trim().length === 0 ) {
      return;
    }

    if( this.heroe.id ) {
      this.heroesService.upgradeHero( this.heroe )
        .subscribe( heroe => console.log('Upgrading', heroe ) )
    } else {
       this.heroesService.addHero( this.heroe )
        .subscribe( heroe => {
          this.router.navigate(['/heroes/edit', heroe.id]);
      })
    }

   

  }

}
