var config = require("./config");

module.exports = function(){
	var greet = document.createElement('div');
	greet.textContent = config.greetText;
	return greet;
}
