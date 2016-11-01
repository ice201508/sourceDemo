module.exports = function(){
	var config = {
		image: "",
		js: "app/js/**/*.js",
		css: "app/css/**/*.scss",
		html: "app/html/**/*.html",
		dist_js: "dist/js",
		dist_css: "dist/css",
		dist_html: "dist/html",
		tmp_js: "tmp/js",
		entries: "dist/js/app.js"
	};

	return config;
}
