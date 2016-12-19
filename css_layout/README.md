
### 常见网站的布局

css布局相关的属性 display，position，max-width，box-sizing，float/clear，清除浮动，
[左右布局](https://vue-loader.vuejs.org/en/index.html)
[左右布局](https://vuefe.cn/guide/single-file-components.html)
[左右布局](https://nodejs.org/dist/latest-v7.x/docs/api/)
[@media](http://mediaqueri.es/)

电脑端左右布局，手机移动端上下布局


### 左右布局

dir--1 关键点： 高度自适应
```
body, html {
	height: 100%;
}

写个外层div  relative
里面两个元素 左右
左absolute，width固定
右absolute，left为左的宽度，  注意若上面html没有100%，则外层的relative去掉，让它默认相对body的100%高度才行，
```

### 垂直居中

[5种垂直居中](https://www.qianduan.net/css-to-achieve-the-vertical-center-of-the-five-kinds-of-methods/)
