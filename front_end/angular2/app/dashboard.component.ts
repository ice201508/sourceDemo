import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
	moduleId: module.id,
	selector: 'my-dashboard',
	templateUrl: 'dashboard.component.html'
})

export class DashboardComponent  implements OnInit {
	heros: Hero[] = [];

	constructor(private heroService: HeroService) { }

	ngOnInit(): void {
		this.heroService.getHeros()
			.then(heros => this.heros = heros.slice(1, 5));
	}
}
