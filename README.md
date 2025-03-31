
> 基于 element-ui 二次开发的 UI 组件库

## 访问
- [在线文档](https://sg-ui.keep-silent.com)
- [FAQ](./FAQ.md)

## 安装

未发布到 npmjs，目前只支持本地安装

## 快速开始
``` javascript
// 全量安装
import Vue from 'vue'
import Element from 'sg-ui'

Vue.use(Element)

// 或者按需安装
import {
  Select,
  Button
  // ...
} from 'sg-ui'

Vue.component(Select.name, Select)
Vue.component(Button.name, Button)
```

## 浏览器支持
现代浏览器和IE 10+.

## 修改日志
[日志](./CHANGELOG.zh-CN.md).

## LICENSE
[MIT](LICENSE)
