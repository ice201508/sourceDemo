import { Hero } from './hero';
import { HEROES } from './mock-heros';
import { Injectable } from '@angular/core';

@Injectable()
export class HeroService {
  getHeros(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  getHerosSlowly(): Promise<Hero[]> {
    return new Promise<Hero[]>(resolve =>
      setTimeout(resolve, 2000)) // delay 2 seconds
      .then(() => this.getHeros());
  }

  getHero(id: number): Promise<Hero> {
    return this.getHeros()
               .then(heros => heros.find(hero => hero.id === id));
  }
}
