<template>
  <div class="sg-scroll">
    <vue-seamless-scroll
        :data="listData"
        :class-option="option">
      <slot></slot>
    </vue-seamless-scroll>
  </div>
</template>

<script>
import VueSeamlessScroll from 'vue-seamless-scroll';

export default {
  name: 'SgScroll',
  components: {VueSeamlessScroll},
  props: {
    step: {
      // 数值越大速度滚动越快
      type: Number,
      default: 0.2
    },
    limitMoveNum: {
      // 开始无缝滚动的数据量 this.dataList.length
      type: Number,
      default: 2
    },
    hoverStop: {
      // 是否开启鼠标悬停stop
      type: Boolean,
      default: true
    },
    direction: {
      // 0向下 1向上 2向左 3向右
      type: Number,
      default: 1,
      validator(val) {
        return val === 0 || val === 1 || val === 2 || val === 3;
      }
    },
    openWatch: {
      // 开启数据实时监控刷新dom
      type: Boolean,
      default: true
    },
    singleHeight: {
      // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
      type: Number,
      default: 0
    },
    singleWidth: {
      // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
      type: Number,
      default: 0
    },
    waitTime: {
      // 单步运动停止的时间(默认值1000ms)
      type: Number,
      default: 1000
    }
  },
  data() {
    // 这里存放数据
    return {
      listData: []
    };
  },
  // 监听属性 类似于data概念
  computed: {
    option() {
      return {
        step: this.step,
        limitMoveNum: this.limitMoveNum,
        hoverStop: this.hoverStop,
        direction: this.direction,
        openWatch: this.openWatch,
        singleHeight: this.singleHeight,
        singleWidth: this.singleWidth,
        waitTime: this.waitTime
      };
    }
  },
  mounted() {
    this.calcList();
  },
  methods: {
    calcList() {
      let listData = [];
      for (let i = 0; i < this.limitMoveNum; i++) {
        let j = '';
        listData.push(j);
      }
      this.listData = listData;
    }
  },
  watch: {
    limitMoveNum() {
      this.calcList();
    }
  }
};
</script>
