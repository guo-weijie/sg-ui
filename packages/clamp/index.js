import Clamp from './src/clamp';

/* istanbul ignore next */
Clamp.install = function(Vue) {
  Vue.component(Clamp.name, Clamp);
};

export default Clamp;
