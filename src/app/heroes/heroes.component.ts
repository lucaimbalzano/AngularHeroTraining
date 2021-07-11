import { Component, OnInit } from '@angular/core';
import { Hero } from '../heroes';
import { HEROS } from '../heroes.data';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroList = HEROS;
  selectedHero? : Hero;
  selectHero(hero : Hero): void {
    this.selectedHero = hero;
    console.log("youSelected: "+hero.name);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
