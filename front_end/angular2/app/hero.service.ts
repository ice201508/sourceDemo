import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heros'
@Injectable()
export class HeroService {
	getHeros(id: number): Promise<Hero[]> {
		return this.getHeros()
					.then(heros => heros.find(hero => hero.id === id));
	}
}
