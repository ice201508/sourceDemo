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
		},
		computed: {
			reversedMessage: function(){
				return this.message.split('').reverse().join('');
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
//})();
