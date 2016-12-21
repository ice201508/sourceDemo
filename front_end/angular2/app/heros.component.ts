import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component ({
	selector: 'my-heros',
	template: `
		<ul class="heroes">
			<li *ngFor='let hero of heros' (click)='onSelect(hero)' [class.selected]="hero === selectedHero">
				<span class="badge">{{hero.id}}</span>
				<span>{{hero.name}}</span>
			</li>
		</ul>
		
		`,
	styles: [`
		.selected {
		  background-color: #CFD8DC !important;
		  color: white;
		}
		.heroes {
		  margin: 0 0 2em 0;
		  list-style-type: none;
		  padding: 0;
		  width: 15em;
		}
		.heroes li {
		  cursor: pointer;
		  position: relative;
		  left: 0;
		  background-color: #EEE;
		  margin: .5em;
		  padding: .3em 0;
		  height: 1.6em;
		  border-radius: 4px;
		}
		.heroes li.selected:hover {
		  background-color: #BBD8DC !important;
		  color: white;
		}
		.heroes li:hover {
		  color: #607D8B;
		  background-color: #DDD;
		  left: 5px;
		}
		.heroes .text {
		  position: relative;
		  top: -3px;
		}
		.heroes .badge {
		  display: inline-block;
		  font-size: small;
		  color: white;
		  padding: 0.8em 0.7em 0 0.7em;
		  background-color: #607D8B;
		  line-height: 1em;
		  position: relative;
		  left: -1px;
		  top: -4px;
		  height: 1.8em;
		  margin-right: .8em;
		  border-radius: 4px 0 0 4px;
		}
	`],
})

export class HerosComponent implements OnInit {
	heros: Hero[];
	selectedHero: Hero;

	constructor(
		private router: Router
	) { };

	ngOnInit(): void {
		this.getHeros();
	}
	onSelect(hero: Hero): void {
		this.selectedHero = hero;
	}
	getHeros(): void {
		this.heroService.getHeros().then(heros => this.heros= heros);
	}
	gotoDetail(): void {
		this.router.navigate(['./detail'], this.selectedHero.id);
	}
}
