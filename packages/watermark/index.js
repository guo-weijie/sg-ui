import Watermark from './src/watermark';

/* istanbul ignore next */
Watermark.install = function (Vue) {
  Vue.component(Watermark.name, Watermark);
};

export default Watermark;
