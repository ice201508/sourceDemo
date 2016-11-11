//(function(){
	var vm = new Vue({
		el: "#app",
		data: {
			message: "hello Vue.js",
			newTodo: '',
			todos: [
				{text: 'Lucy'},
				{text: 'Jack'},
			],
			firstName:'foo',
			fullName: 'foo bar',
			isActive: false,
			hasError: true,
			classObject: {  //也可以使用计算属性
				active: true,
				'text-danger': true,
			},
		},
		computed: {
			reversedMessage: {
				cache: true,
				get: function(){
					return this.message.split('').reverse().join('') + Date.now();
				},
			},
			now: function(){
				return Date.now();
			},
			fullNameCom: function(){
				return this.firstName + "计算属性的fullName";
			}
		},
		methods: {
			addTodo: function(){
				var text = this.newTodo.trim();
				if(text){
					this.todos.push({text: text});
					this.newTodo = '';
				}
			},
			removeTodo: function(index){
				this.todos.splice(index, 1);
			}
		},
	})

	vm.$watch('firstName', function(val){  //watch监听，过程式的比较笨重，
		this.fullName = val + ':watch监听的fullName';
	})
//})();
