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
	template: '<div><button @click="increment">counter: {{counter}}</button> <slot>如果没有内容显示自己</slot></div>',
	data: function(){
		return {
			counter: 0
		}
	},
	methods: {
		increment: function(){
			console.log(this.$slots.default);
			this.counter +=1;
			this.$emit('increment'); //子组件中每点击一次，就向上发送一个事件increment，父组件就会
		}
	}
})

var vm = new Vue({
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

Vue.nextTick(function(){
	//vm.$el.textContent = "nextTick";
})

console.log(vm.$el.textContent);
console.log(vm.$slots.default);
