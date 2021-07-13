import { Component, OnInit } from '@angular/core';
import { Hero } from '../heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroList : Hero[] = [];
  selectedHero? : Hero;
  selectHero(hero : Hero): void {
    this.selectedHero = hero;
    console.log("You selected: "+hero.name);
  }
  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(){
    this.heroList = this.heroService.getHeroes();
  }
}
