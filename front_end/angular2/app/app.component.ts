import { Component } from '@angular/core';

@Component ({
	selector: 'my-app',
	template: `<h3>first angular app</h3><div>{{title}}<p>{{hero}}</p></div>`
})

export class AppComponent {
	title = '根组件title';
	hero = 'sublime text';
}

console.log(Component);
