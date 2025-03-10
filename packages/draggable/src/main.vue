<template>
  <div class="sg-draggable">
    <draggable
        ref="draggable"
        :value="value"
        :group="group"
        :animation="animation"
        :dragClass="dragClass"
        :ghostClass="ghostClass"
        :chosenClass="chosenClass"
        :forceFallback="forceFallback"
        :draggable="draggableSelector"
        :handle="handleSelector"
        :disabled="disabled"
        @input="onInput"
        @start="onStart"
        @end="onEnd">
      <template slot="header">
        <slot name="header"/>
      </template>
      <slot/>
      <template slot="footer">
        <slot name="footer"/>
      </template>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable';

export default {
  name: 'SgDraggable',
  components: {draggable},
  props: {
    value: {
      type: Array,
      required: true
    },
    // 相同的组之间可以相互拖拽
    group: String,
    // 拖动时的动画效果 ms
    animation: Number,
    // 拖动元素的样式，你的自定义样式可能需要加!important才能生效，并把forceFallback属性设置成true
    dragClass: String,
    // 设置拖动元素的占位符类名,你的自定义样式可能需要加!important才能生效，并把forceFallback属性设置成true
    ghostClass: String,
    // 被选中目标的样式，你的自定义样式可能需要加!important才能生效，并把forceFallback属性设置成true
    chosenClass: String,
    // 默认false，忽略HTML5的拖拽行为，因为h5里有个属性也是可以拖动，你要自定义ghostClass chosenClass dragClass样式时，建议forceFallback设置为true
    forceFallback: {
      type: Boolean,
      default: false
    },
    // :handleSelector=".mover" 只有当鼠标移动到css为mover类的元素上才能拖动 优先级大于draggableSelector
    handleSelector: String,
    // :draggableSelector=".item" 那些元素是可以被拖动的
    draggableSelector: {
      type: String,
      default: '.item'
    },
    // 是否启用拖拽组件
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onInput(val) {
      this.$emit('input', val);
    },
    onStart(e) {
      this.$emit('start', e);
    },
    onEnd(e) {
      this.$emit('end', e);
    }
  }
};
</script>
