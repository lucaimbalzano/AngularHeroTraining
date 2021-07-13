import { Injectable } from '@angular/core';
import { HEROS } from './heroes.data';
import { Hero } from './heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Hero[] {
    return HEROS;
  }
}
