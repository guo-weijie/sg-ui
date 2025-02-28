import Fullscreen from './src/main';

/* istanbul ignore next */
Fullscreen.install = function(Vue) {
  Vue.component(Fullscreen.name, Fullscreen);
};

export default Fullscreen;
