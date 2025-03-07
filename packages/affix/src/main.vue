<template>
  <div class="sg-affix" :style="rootStyle">
    <div :class="{'sg-affix--fixed': fixed}" :style="affixStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import {on, off, getScrollContainer} from 'sg-ui/src/utils/dom';
import {addResizeListener, removeResizeListener} from 'sg-ui/src/utils/resize-event';

export default {
  name: 'SgAffix',
  props: {
    offset: {
      type: Number,
      default: 0
    },
    position: {
      type: String,
      default: 'top',
      validator(val) {
        return ['top', 'bottom'].includes(val);
      }
    },
    target: {
      type: String,
      default: ''
    },
    zIndex: {
      type: Number,
      default: 100
    }
  },
  data() {
    return {
      fixed: false,
      height: 0, // height of root
      width: 0, // width of root
      scrollTop: 0, // scrollTop of documentElement
      clientHeight: 0, // clientHeight of documentElement
      transform: 0
    };
  },
  computed: {
    rootStyle() {
      return {
        height: this.fixed ? `${this.height}px` : '',
        width: this.fixed ? `${this.width}px` : ''
      };
    },
    affixStyle() {
      if (!this.fixed) {
        return;
      }
      const offset = this.offset ? `${this.offset}px` : 0;
      const transform = this.transform ? `translateY(${this.transform}px)` : '';

      return {
        height: `${this.height}px`,
        width: `${this.width}px`,
        top: this.position === 'top' ? offset : '',
        bottom: this.position === 'bottom' ? offset : '',
        transform: transform,
        zIndex: this.zIndex
      };
    }
  },
  methods: {
    updateState() {

      const {_scrollContainer, _target} = this;

      const rootRect = this.$el.getBoundingClientRect();
      const targetRect = _target.getBoundingClientRect();
      this.height = rootRect.height;
      this.width = rootRect.width;

      this.scrollTop = _scrollContainer === window
        ? document.documentElement.scrollTop : _scrollContainer.scrollTop;
      this.clientHeight = document.documentElement.clientHeight;

      if (this.position === 'top') {
        if (this.target) {
          const difference = targetRect.bottom - this.offset - this.height;
          this.fixed = this.offset > rootRect.top && targetRect.bottom > 0;
          this.transform = difference < 0 ? difference : 0;
        } else {
          this.fixed = this.offset > rootRect.top;
        }
      } else {
        if (this.target) {
          const difference = this.clientHeight - targetRect.top - this.offset - this.height;
          this.fixed = this.clientHeight - this.offset < rootRect.bottom && this.clientHeight > targetRect.top;
          this.transform = difference < 0 ? -difference : 0;
        } else {
          this.fixed = this.clientHeight - this.offset < rootRect.bottom;
        }
      }
    },
    onScroll() {
      this.updateState();

      this.$emit('scroll', {
        scrollTop: this.scrollTop,
        fixed: this.fixed
      });
    }
  },
  watch: {
    fixed() {
      this.$emit('change', this.fixed);
    }
  },
  mounted() {
    let _target = null;
    if (this.target) {
      _target = document.querySelector(this.target);
      if (!_target) {
        throw new Error(`target is not existed: ${this.target}`);
      }
    } else {
      _target = document.documentElement;
    }
    this._target = _target;

    let _scrollContainer = null;

    _scrollContainer = getScrollContainer(this.$el);

    if (_scrollContainer) {
      this._scrollContainer = _scrollContainer;
      on(_scrollContainer, 'scroll', this.onScroll);
    }
    addResizeListener(this.$el, this.updateState);
  },
  beforeDestroy() {
    const {_scrollContainer, _target} = this;
    if (_scrollContainer) {
      off(_scrollContainer, 'scroll', this.onScroll);
      this._scrollContainer = null;
    }
    if (_target) {
      this._target = null;
    }
    removeResizeListener(this.$el, this.updateState);
  }
};
</script>
