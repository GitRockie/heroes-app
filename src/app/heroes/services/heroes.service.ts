import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor( private http: HttpClient) { }

  getHeroes() {
   return this.http.get(`localhost:3000/heroes`)
  }








}
