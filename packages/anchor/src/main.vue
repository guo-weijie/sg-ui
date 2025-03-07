<template>
   <div class="sg-anchor">
      <div 
      :id="'anchor-item--' + item.href"
      :class="['sg-anchor-item', activeHref === item.href ? 'isActive' : '']"
      @click="jump(item.href)"
      v-for="(item,index) in itemValues" :key="index">
       <sg-anchor-item-content :item="item"></sg-anchor-item-content>
      </div>
  </div>
</template>

<script>
import SgAnchorItemContent from './sg-anchor-item-content';
// import {debounce} from 'sg-ui/src/utils/util';

export default {
  name: 'SgAnchor',
  props: {
    scrollContainerId: {
      type: String,
      default: ''
    }
  },
  components: {
    SgAnchorItemContent
  },
  data() {
    return {
      scrollContainer: null,
      activeHref: '',
      hrefs: [],
      itemValues: []
    };
  },
  mounted() {
    this.generateChildrenRow(this.$slots.default || []);
    this.$nextTick(_ => {
      if (this.scrollContainerId && this.scrollContainerId !== '') {
        this.scrollContainer = document.getElementById(this.scrollContainerId);
        // debounce(function() {
        this.scrollContainer.addEventListener('scroll', this.handleScroll);
        // }, 500);
        // this.scrollContainer.addEventListener('scroll', this.handleScroll);
        this.scrollContainer.style.scrollBehavior = 'smooth';
        this.handleScroll();
      }
    });
  },
  methods: {
    generateChildrenRow(dataSource) {
      this.hrefs = [];
      const dataList = dataSource.filter(item => item.tag === 'sg-anchor-item');
      this.itemValues = [];
      dataList.forEach((item, index) => {
        const itemAttrs = item.data.attrs || {};
        let obj = {
          href: itemAttrs.href,
          ...item
        };
        this.hrefs.push(itemAttrs.href);
        this.itemValues.push(obj);
      });
    },
    // 滚动触发按钮高亮
    // handleScroll: debounce(0.05 * 1000, false, function(e) {
    handleScroll(e) {
      if (!this.hrefs && this.hrefs.length === 0) {
        return;
      }
      this.activeHref = '';
      for (let i = 0; i < this.hrefs.length; i++) {
        let el = this.hrefs[i];
        let scrollItems = document.querySelectorAll(el)[0];
        let targetTop = e ? e.target.offsetTop : this.scrollContainer.offsetTop;
        let judge = this.scrollContainer.scrollTop >= scrollItems.offsetTop - targetTop && this.scrollContainer.scrollTop <= scrollItems.offsetTop - targetTop + scrollItems.clientHeight;
        if (judge) {
          this.activeHref = el;
          break;
        }
      }
    },
    jump(href) {
      let target = this.scrollContainer;
      let scrollItems = document.querySelectorAll(href)[0];
      // 判断滚动条是否滚动到底部
      if (target.scrollHeight <= target.scrollTop + target.clientHeight) {
        this.activeHref = href;
      }
      let total = scrollItems.offsetTop - this.scrollContainer.offsetTop + 1; // 锚点元素距离其offsetParent(这里是body)顶部的距离(待滚动的距离)
      // let distance = this.scrollContainer.scrollTop; // 滚动条距离滚动区域顶部的距离
      // let distance = document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset // 滚动条距离滚动区域顶部的距离(滚动区域为窗口)
      // 滚动动画实现, 使用setTimeout的递归实现平滑滚动，将距离细分为50小段，10ms滚动一次
      // 计算每一小段的距离
      this.scrollContainer.scrollTop = total;
      // let step = total / 50;
      // if (total > distance) {
      //   this.smoothDown(distance, total, step);
      // } else {
      //   let newTotal = distance - total;
      //   step = newTotal / 50;
      //   this.smoothUp(distance, total, step);
      // }
    }
    // 参数element为滚动区域
    // smoothDown(distance, total, step) {
    //   if (distance < total) {
    //     distance += step;
    //     this.scrollContainer.scrollTop = distance;
    //     setTimeout(this.smoothDown(distance, total, step), 1000);
    //   } else {
    //     this.scrollContainer.scrollTop = total;
    //   }
    // },
    // 参数element为滚动区域
    // smoothUp(distance, total, step) {
    //   if (distance > total) {
    //     distance -= step;
    //     this.scrollContainer.scrollTop = distance;
    //     setTimeout(this.smoothUp(distance, total, step), 1000);
    //   } else {
    //     this.scrollContainer.scrollTop = total;
    //   }
    // }
  },
  beforeDestroy() {
    this.scrollContainer && this.scrollContainer.removeEventListener('scroll', this.handleScroll);
  }
};
</script>
