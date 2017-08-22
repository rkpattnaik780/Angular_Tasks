import { Component, Input, OnInit } from '@angular/core';  // component is imported whenever a new component is defined
import { Hero } from "./hero"; // import Hero class from hero.ts
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { HeroService } from './hero.service';

@Component({  // provides the Angular metadata for the component
  selector: 'hero-detail',   // it will be like <hero-detail></hero-detail>
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './dashboard.component.css' ]
})

export class HeroDetailComponent implements OnInit{
   hero: Hero;   // Target binding property should be an input property
                         // how a component accepts input
                         /*A property that is bound in this way, through a sub-component’
                         s element, must be declared as an @Input() in the sub-component.*/ 
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) { }
   
  ngOnInit(): void {
  this.route.paramMap
    .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))  // + converts to number
    .subscribe(hero => this.hero = hero);
  }
  goBack(): void {
  this.location.back();
  }
}
