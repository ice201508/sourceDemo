Vue.component('my-component', {
	props: ['myMessage'],
	template: '<div><button @click="myMessage.age += 1">myMessage= {{myMessage.age}}</button><p>{{myMessage}}</p></div>',
	data: function(){
		return {
			count: 0
		}
	}
})

Vue.component('child-component', {
	template: '<button @click="increment">counter: {{counter}}</button>',
	data: function(){
		return {
			counter: 0
		}
	},
	methods: {
		increment: function(){
			this.counter +=1;
			this.$emit('increment'); //子组件中每点击一次，就向上发送一个事件increment，父组件就会
		}
	}
})

new Vue({
	el: '#example',
	data: {
		total: 0,
		message: {
			name: "parent",
			age: 25
		}
	},
	methods: {
		incrementTotal: function(){
			this.total += 1;
		}
	}
})
