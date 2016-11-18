var vm = new Vue({
	el: "#app",
	data: {
		message: "hello world",
		changeClass: true,
		aList: [
			{'name': 'Lucy1'},
			{'name': 'Lucy2'},
			{'name': 'Lucy3'},
			{'name': 'Lucy4'},
		],
		sWatch: null,
		selected: 'Lucy'
	},
	computed: {
		cMessage: function(){
			return this.message.split('').reverse().join('');
		}
	},
	methods: {
		addList: function(){
			this.aList.push({'name': this.message});
		},
		fRemoveList: function(key){
			this.aList.splice(key, 1);
		}
	}
})

vm.$watch('message', function(){
	this.sWatch = "通过watch监听message";
})
