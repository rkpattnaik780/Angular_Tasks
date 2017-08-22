import { Component } from '@angular/core';
import { Hero } from "./hero";
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',  
  styleUrls: [ './heroes.component.css' ],
  providers: []            // providers array tells Angular to create 
})                       // a fresh instance of the HeroService when it creates an AppComponent

export class HeroesComponent implements OnInit {
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;

  gotoDetail(): void {
     this.router.navigate(['/detail', this.selectedHero.id]);
  }
  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  constructor(private heroService: HeroService , private router: Router ) { } // angular supplies an instance of array service when it creates
                                                                              // an app component. Router needs to be in constructor
  onSelect(hero: Hero): void { // find out which things are nedd to  be declared in constructor after importing , is it services?
    this.selectedHero = hero;
  }
}

