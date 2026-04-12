import { debounce } from 'sg-ui/src/utils/util';

// 记录上一次生成水印的 div 元素 id
let prevDivId = 0;

const number180 = 180;

export default {
  name: 'SgWatermark',
  props: {
    text: {
      type: String,
      default: '水印内容'
    },
    angle: {
      type: Number,
      default: 25
    },
    color: {
      type: String,
      default: 'rgba(128, 128, 128, 0.3)'
    },
    fontSize: {
      type: String,
      default: '16px'
    },
    top: {
      type: Number,
      default: 70
    },
    show: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    option() {
      return {
        text: this.text,
        angle: this.angle,
        color: this.color,
        fontSize: this.fontSize,
        top: this.top,
        show: this.show
      };
    }
  },
  methods: {
    setWatermark() {
      let config = this.option;
      if (config.show && config.text !== '') {
        // 角度转成负数
        config.angle = -Math.abs(config.angle);
        // 随机生成一个 id
        const id = Math.random();
        // 清除上次的水印 div[解决：窗口大小调整时（onresize方法）水印会叠加，导致颜色加深的问题]
        if (prevDivId && document.getElementById(prevDivId) !== null) {
          document.body.removeChild(document.getElementById(prevDivId));
        }
        // 记录 id
        prevDivId = id;

        // 创建画布
        const canvas = document.createElement('canvas');
        // 设置画布的长、宽
        canvas.width = 240;
        canvas.height = 180;

        const context = canvas.getContext('2d');

        // 旋转角度（以弧度计）
        context.rotate((config.angle * Math.PI) / number180);
        context.font = config.fontSize + ' 微软雅黑';
        // 设置填充绘画的颜色、渐变或者模式
        context.fillStyle = config.color;
        context.textAlign = 'left';
        context.textBaseline = 'middle';
        context.fillText(config.text, 0, canvas.height);

        const div = document.createElement('div');
        div.id = prevDivId;
        div.style.pointerEvents = 'none';
        div.style.position = 'absolute';
        div.style.top = config.top + 'px';
        div.style.left = '0px';
        div.style.zIndex = '999999';
        div.style.width = document.documentElement.scrollWidth + 'px';
        div.style.height = document.documentElement.scrollHeight + 'px';
        div.style.background = 'url(' + canvas.toDataURL('image/png') + ') left top repeat';
        document.body.appendChild(div);
      } else {
        this.clearWater();
      }
      return prevDivId;
    },
    clearWater() {
      const div = document.getElementById(prevDivId);
      if (div) {
        document.body.removeChild(div);
      } else {
        console.warn('can not find this element');
      }
      prevDivId = 0;
    },
    resize: debounce(0.4 * 1000, false, function () {
      if (prevDivId !== 0) {
        this.setWatermark();
      }
    })
  },
  mounted() {
    this.setWatermark();

    this.$watch(vm => [vm.text, vm.angle, vm.color, vm.fontSize, vm.top, vm.show].join(), this.setWatermark);

    // 监听窗口变化事件
    window.addEventListener('resize', this.resize, false);

    // 监听页面滚动
    window.addEventListener('scroll', this.resize, false);
  },
  beforeDestroy() {
    this.clearWater();
    window.removeEventListener('resize', this.resize);
    window.removeEventListener('scroll', this.resize);
  },
  render(h) {
    return null;
  }
};
