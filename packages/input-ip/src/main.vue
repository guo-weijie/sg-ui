<template>
  <ul :class="[ulClass, inputSize]">
    <i
      v-if="!disabled && !readonly && clearable && showClear"
      class="sg-input__icon sg-icon-circle-close sg-input__clear"
      @mousedown.prevent
      @click="clear"
    ></i>
    <li :key="index" v-for="(item, index) in ipAddress">
      <input
        ref="ipInput"
        :disabled="disabled"
        :readonly="!disabled && readonly"
        v-model="item.value"
        type="text"
        class="ipInputClass"
        @focus="changeBorderColor(1)"
        @blur="changeBorderColor(0)"
        @input="checkIpVal(item)"
        @keyup="turnIpPosition(item, index, $event)"
      />
      <div></div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'SgInputIp',
  props: {
    size: String,
    disabled: false,
    value: {
      type: String,
      default: ''
    },
    formatStyle: {
      type: String,
      default: 'node'
    },
    clearable: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      showClear: false,
      ulClass: ['sg-input-ip'],
      ipAddress: [
        {
          value: ''
        },
        {
          value: ''
        },
        {
          value: ''
        },
        {
          value: ''
        }
      ]
    };
  },
  mounted() {
    if (this.value && this.value.length > 0 && this.value.split('.').length === 4) {
      let arr = this.value.split('.');
      for (let v in arr) {
        this.ipAddress[v].value = arr[v];
      }
    }
  },
  computed: {
    inputSize() {
      let classList = [];
      if (this.size && typeof this.size === 'string') {
        if (this.size === 'medium') {
          classList = 'sg-input-ip-medium';
        } else if (this.size === 'small') {
          classList = 'sg-input-ip-small';
        } else if (this.size === 'mini') {
          classList = 'sg-input-ip-mini';
        }
      }
      return classList;
    }
  },
  watch: {
    disabled: {
      handler: function (val) {
        if (val === '' || val) {
          this.ulClass.push('sg-input-ip-disabled');
        } else {
          let sn = this.ulClass.indexOf('sg-input-ip-disabled');
          if (sn !== -1) {
            this.ulClass.splice(sn, 1);
          }
        }
      },
      immediate: true
    },
    ipAddress: {
      // 双向数据绑定的value
      handler: function (newVal, oldVal) {
        let str = '';
        for (const i in this.ipAddress) {
          if (this.formatStyle === 'noNode') {
            str += this.formatter(this.ipAddress[i].value);
          } else {
            if (str.length > 0) {
              str += '.';
            }
            str += this.ipAddress[i].value === '' ? '000' : this.ipAddress[i].value;
          }
        }
        if (str === '000000000000' || str === '000.000.000.000') {
          str = '';
        }
        this.showClear = str.length > 0;
        this.$emit('input', str);
      },
      deep: true
    }
  },
  methods: {
    clear() {
      for (const i in this.ipAddress) {
        this.ipAddress[i].value = '';
      }
    },
    changeBorderColor(isOn) {
      this.ulClass = isOn ? ['sg-input-ip sg-input-ip-on'] : ['sg-input-ip'];
    },
    // 格式化补零方法
    formatter(val) {
      let value = val.toString();
      if (value.length === 2) {
        value = '0' + value;
      } else if (value.length === 1) {
        value = '00' + value;
      } else if (value.length === 0) {
        value = '000';
      }
      return value;
    },
    // 检查ip输入为0-255
    checkIpVal(item) {
      // 确保每个值都处于0-255
      let val = item.value;
      // 处理非数字
      val = val.toString().replace(/[^0-9]/g, '');
      val = parseInt(val, 10);
      if (isNaN(val)) {
        val = '';
      } else {
        val = val < 0 ? 0 : val;
        val = val > 255 ? 255 : val;
      }
      item.value = val;
    },
    // 光标位置判断
    turnIpPosition(item, index, event) {
      let self = this;
      let e = event || window.event;
      if (e.keyCode === 37) {
        // 左箭头向左跳转，左一不做任何措施
        if (index !== 0 && e.currentTarget.selectionStart === 0) {
          self.$refs.ipInput[index - 1].focus();
        }
      } else if (e.keyCode === 39) {
        // 右箭头向右跳转，右一不做任何措施
        if (index !== 3 && e.currentTarget.selectionStart === item.value.toString().length) {
          self.$refs.ipInput[index + 1].focus();
        }
      } else if (e.keyCode === 8) {
        // 删除键把当前数据删除完毕后会跳转到前一个input，左一不做任何处理
        if (index !== 0 && item.value === '') {
          self.$refs.ipInput[index - 1].focus();
        }
      } else if (e.keyCode === 13 || e.keyCode === 32 || e.keyCode === 190) {
        // 回车键、空格键、冒号均向右跳转，右一不做任何措施
        if (index !== 3) {
          self.$refs.ipInput[index + 1].focus();
        }
      } else if (item.value.toString().length === 3) {
        // 满3位，光标自动向下一个文本框
        if (index !== 3) {
          self.$refs.ipInput[index + 1].focus();
        }
      }
    }
  }
};
</script>
