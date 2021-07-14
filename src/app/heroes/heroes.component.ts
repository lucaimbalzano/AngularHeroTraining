import { Component, OnInit } from '@angular/core';
import { Hero } from '../heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

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
    this.messageService.addMessages(`***** HeroesComponent: Hero[id=${hero.id}, name=${hero.name}] *****`);
  }
  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes() :void { 
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroList = heroes);
  }
}
