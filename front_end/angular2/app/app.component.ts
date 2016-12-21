import { Component } from '@angular/core';

@Component({
	selector: 'my-app',
	template: `
		<h1>{{title}}</h1>
		<nav>
			<a routerLink="/dashboard">Dashboard</a>
			<a routerLink="/heros">Heros</a>
		</nav>
		<router-outlet></router-outlet>
	`
})
export class AppComponent {
	title = '根组件';
}
