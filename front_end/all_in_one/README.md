
## 首先是gulp的使用

优化 --> 压缩，拼接。也就是减少体积和HTTP次数

常用的gulp插件

js 转换，检查，合并，压缩(第三方库，业务js)
css 转换，检查，合并，压缩(第三方css文件，自定义css)，添加css前缀
项目启动，监听，改名，gulp懒加载，调试，静态文件服务器启动浏览器，删除文件(夹)，自动导入文件到html中，MD5命名，检查scss语法，检查js语法，按预定顺序运行任务，区分生产环境和开发环境，替换html文件中的标记，
`npm install --save-dev gulp gulp-concat gulp-uglify gulp-autoprefixer gulp-sass gulp-clean-css gulp-rename gulp-livereload gulp-load-plugins gulp-sourcemaps browser-sync del gulp-inject gulp-rev gulp-scss-lint gulp-jshint run-sequence gulp-if gulp-useref gulp-if gulp-order`

watch方法路径不要写 ./

gulp-scss-lint 的使用必须先安装 gem install scss_lint。 还有对应的gulp-sass-lint的插件对sass进行检查

browser-sync能实现LiveReload的所有功能

gulp-useref解决文件路径不用的合并等问题，html中的buildtype可以是js/css/remove，需要用到gulp-if，来判断js和css文件，不同的压缩方式

gulp-order合并css文件顺序问题，

### CSS任务

字体图标
[bootstrap文档](http://getbootstrap.com/)
[foundation文档](http://foundation.zurb.com/)
[fontawesome文档](http://fontawesome.io/)
[Weather Icons文档](https://erikflowers.github.io/weather-icons/)

sass片段，在文件名前加_ 可以避免被编译为css文件，而作为一个sass片段使用，如_color.scss编译就不会生成color.css文件。并且同一文件夹下不能有同名的文件存在如 _color.scss 和 color.scss 是同名文件，不能共存

### JS任务











- [Bootstrap 3][bootstrap3] - [select2-bootstrap-theme]
- [Flat UI][flat-ui] - [select2-flat-theme]
- [Metro UI][metro-ui] - [select2-metro]

[cdnjs]: http://www.cdnjs.com/libraries/select2
[community]: https://select2.github.io/community.html
[documentation]: https://select2.github.io/
[documentation-folder]: https://github.com/select2/select2/tree/master/docs
[freenode]: https://freenode.net/
[jsdelivr]: http://www.jsdelivr.com/#!select2
[license]: LICENSE.md
[releases]: https://github.com/select2/select2/releases
[saucelabs-matrix]: https://saucelabs.com/browser-matrix/select2.svg
[saucelabs-status]: https://saucelabs.com/u/select2
[travis-ci-image]: https://img.shields.io/travis/select2/select2/master.svg
[travis-ci-status]: https://travis-ci.org/select2/select2

[bootstrap3]: https://getbootstrap.com/
[django]: https://www.djangoproject.com/
[django-easy-select2]: https://github.com/asyncee/django-easy-select2
[django-select2]: https://github.com/applegrew/django-select2
[flat-ui]: http://designmodo.github.io/Flat-UI/
[meteor]: https://www.meteor.com/
[meteor-select2]: https://github.com/nate-strauser/meteor-select2
[metro-ui]: http://metroui.org.ua/
[select2-metro]: http://metroui.org.ua/select2.html
[ruby-on-rails]: http://rubyonrails.org/
[select2-bootstrap-theme]: https://github.com/select2/select2-bootstrap-theme
[select2-flat-theme]: https://github.com/techhysahil/select2-Flat_Theme
[select2-rails]: https://github.com/argerim/select2-rails
[vue.js]: http://vuejs.org/
[select2-vue]: http://vuejs.org/examples/select2.html
[wicket]: https://wicket.apache.org/
[wicketstuff-select2]: https://github.com/wicketstuff/core/tree/master/select2-parent
[yii2]: http://www.yiiframework.com/
[yii2-widget-select2]: https://github.com/kartik-v/yii2-widget-select2
