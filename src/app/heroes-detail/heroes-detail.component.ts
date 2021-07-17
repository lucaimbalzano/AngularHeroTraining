import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../heroes';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes-detail',
  templateUrl: './heroes-detail.component.html',
  styleUrls: ['./heroes-detail.component.css']
})
export class HeroesDetailComponent implements OnInit {

  @Input() 
  hero?: Hero;

  constructor(
    private activatedRoute : ActivatedRoute,
    private location : Location,
    private heroService : HeroService
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero():void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack():void{
    this.location.back();
  }
}
