import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
/*
The @Injectable() decorator tells TypeScript to emit metadata 
about the service. The metadata specifies that Angular may need to 
inject other dependencies into this service.
*/
export class HeroService {
    getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }
  getHero(id: number): Promise<Hero> {
  return this.getHeroes()
             .then(heroes => heroes.find(hero => hero.id === id));
}
}