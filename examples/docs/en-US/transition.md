## Built-in transition

You can use Element's built-in transitions directly. Before that, please read the [transition docs](https://v2.vuejs.org/v2/api/#transition).

### fade

:::demo We have two fading effects: `sg-fade-in-linear` and `sg-fade-in`.
```html
<template>
  <div>
    <sg-button @click="show = !show">Click Me</sg-button>

    <div style="display: flex; margin-top: 20px; height: 100px;">
      <transition name="sg-fade-in-linear">
        <div v-show="show" class="transition-box">.sg-fade-in-linear</div>
      </transition>
      <transition name="sg-fade-in">
        <div v-show="show" class="transition-box">.sg-fade-in</div>
      </transition>
    </div>
  </div>
</template>

<script>
    export default {
    data: () => ({
      show: true
    })
  }
</script>

<style>
  .transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
</style>
```
:::

### zoom

:::demo `sg-zoom-in-center`, `sg-zoom-in-top` and `sg-zoom-in-bottom` are provided.
```html
<template>
  <div>
    <sg-button @click="show2 = !show2">Click Me</sg-button>

    <div style="display: flex; margin-top: 20px; height: 100px;">
      <transition name="sg-zoom-in-center">
        <div v-show="show2" class="transition-box">.sg-zoom-in-center</div>
      </transition>

      <transition name="sg-zoom-in-top">
        <div v-show="show2" class="transition-box">.sg-zoom-in-top</div>
      </transition>

      <transition name="sg-zoom-in-bottom">
        <div v-show="show2" class="transition-box">.sg-zoom-in-bottom</div>
      </transition>
    </div>
  </div>
</template>

<script>
    export default {
    data: () => ({
      show2: true
    })
  }
</script>

<style>
  .transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
</style>
```
:::


### collapse

For collapse effect, use the `sg-collapse-transition` component.

:::demo
```html
<template>
  <div>
    <sg-button @click="show3 = !show3">Click Me</sg-button>

    <div style="margin-top: 20px; height: 200px;">
      <sg-collapse-transition>
        <div v-show="show3">
          <div class="transition-box">sg-collapse-transition</div>
          <div class="transition-box">sg-collapse-transition</div>
        </div>
      </sg-collapse-transition>
    </div>
  </div>
</template>

<script>
    export default {
    data: () => ({
      show3: true
    })
  }
</script>

<style>
  .transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
</style>
```
:::

### On demand

```js
// fade/zoom
import 'sg-ui/lib/theme-chalk/base.css';
// collapse
import CollapseTransition from 'sg-ui/lib/transitions/collapse-transition';
import Vue from 'vue'

Vue.component(CollapseTransition.name, CollapseTransition)
```
