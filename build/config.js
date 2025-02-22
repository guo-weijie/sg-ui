var path = require('path');
var fs = require('fs');
var nodeExternals = require('webpack-node-externals');
var Components = require('../components.json');

var utilsList = fs.readdirSync(path.resolve(__dirname, '../src/utils'));
var mixinsList = fs.readdirSync(path.resolve(__dirname, '../src/mixins'));
var transitionList = fs.readdirSync(path.resolve(__dirname, '../src/transitions'));
var externals = {};

Object.keys(Components).forEach(function (key) {
  externals[`sg-ui/packages/${key}`] = `sg-ui/lib/${key}`;
});

externals['sg-ui/src/locale'] = 'sg-ui/lib/locale';
utilsList.forEach(function (file) {
  file = path.basename(file, '.js');
  externals[`sg-ui/src/utils/${file}`] = `sg-ui/lib/utils/${file}`;
});
mixinsList.forEach(function (file) {
  file = path.basename(file, '.js');
  externals[`sg-ui/src/mixins/${file}`] = `sg-ui/lib/mixins/${file}`;
});
transitionList.forEach(function (file) {
  file = path.basename(file, '.js');
  externals[`sg-ui/src/transitions/${file}`] = `sg-ui/lib/transitions/${file}`;
});

externals = [Object.assign({
  vue: 'vue'
}, externals), nodeExternals()];

exports.externals = externals;

exports.alias = {
  main: path.resolve(__dirname, '../src'),
  packages: path.resolve(__dirname, '../packages'),
  examples: path.resolve(__dirname, '../examples'),
  'sg-ui': path.resolve(__dirname, '../')
};

exports.vue = {
  root: 'Vue',
  commonjs: 'vue',
  commonjs2: 'vue',
  amd: 'vue'
};

exports.jsexclude = /node_modules|utils\/popper\.js|utils\/date\.js|utils\/lodash\.js/;
