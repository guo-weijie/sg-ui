'use strict';

var postcss = require('postcss');
var fs = require('fs');
var path = require('path');
// 自带图标
var fontFile = fs.readFileSync(path.resolve(__dirname, '../../packages/theme-chalk/src/icon.scss'), 'utf8');
// 扩展图标
var fontFile2 = fs.readFileSync(path.resolve(__dirname, '../../packages/theme-chalk/src/iconfont.scss'), 'utf8');
// 用采图标
var fontFile3 = fs.readFileSync(path.resolve(__dirname, '../../packages/theme-chalk/src/iconfont_yc.scss'), 'utf8');

function generateIconJson(iconFile, reg, fileName) {
  var nodes = postcss.parse(iconFile).nodes;
  var classList = [];

  // 生成自带图标名称列表
  nodes.forEach((node) => {
    var selector = node.selector || '';
    var arr = selector.match(reg);

    if (arr && arr[1]) {
      classList.push(arr[1]);
    }
  });

  classList.reverse(); // 希望按 css 文件顺序倒序排列

  fs.writeFile(path.resolve(__dirname, `../../examples/${fileName}.json`), JSON.stringify(classList), () => { });
}

generateIconJson(fontFile, /\.sg-icon-([^:]+):before/, 'icon')
generateIconJson(fontFile2, /\.iconfont-([^:]+):before/, 'iconfont')
generateIconJson(fontFile3, /\.icon_yc-([^:]+):before/, 'icon_yc')