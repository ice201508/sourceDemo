(function(){
	var app = angular.module('app');

	app.controller("headerController", ["$http", headerController]);

	function headerController($http){
		this.sClass = "first";
		this.person = {
			name: "Lucy",
			age: 24,
			addr: "北京"
		}
	}
})();
