
## 环境搭建

```
npm install --save-dev babel-preset-es2015
npm install --save-dev babel-preset-stage-0
转码es6的响应API，在浏览器中使用必须加在index页面前面
npm install --save-dev babel-polyfill
//使用es7的装饰器功能
npm install  --save-dev babel-plugin-transform-decorators-legacy

.babelrc 的配置
{
	"presets": ['es2015', 'stage-0'],
	"plugins": ['transform-decorators-legacy']
}
```

命令行使用 `npm install babel-cli -g`
babel a.js --out-file es6.js  然后再页面导入 es6.js
