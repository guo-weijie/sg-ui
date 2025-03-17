<!DOCTYPE html>
<html lang="zh">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <link rel="stylesheet" href="./cdn/font_137970_p1tpzmomxp9cnmi.css">
    <link rel='mask-icon' href="./assets/images/element-logo-small.svg" color="#409EFF">
    <link rel="stylesheet" href="./cdn/color-brewer.css">
    <title>Element - The world's most popular Vue UI framework</title>
    <meta name="description" content="Element，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库" />
  </head>
  <body>
    <script>
      if (!window.Promise) {
        document.write('<script src="./cdn/es6-promise.min.js"><\/script><script>ES6Promise.polyfill()<\/script>')
      }
    </script>
    <div id="app"></div>
    <% if (process.env.NODE_ENV === 'production') { %>
      <script src="./cdn/vue.runtime.min.js"></script>
      <script src="./cdn/vue-router.min.js"></script>
      <script src="./cdn/highlight.pack.b1f71b31-3c07-11e9-ba1a-55bba1877129.js"></script>
    <% } %>
  </body>
  <% if (process.env.NODE_ENV !== 'production') { %><script>
    var ga = function() {
      console.log(arguments)
    };
  </script><% } %>
</html>
