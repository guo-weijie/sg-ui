import SgProgress from './src/progress';

/* istanbul ignore next */
SgProgress.install = function (Vue) {
  Vue.component(SgProgress.name, SgProgress);
};

export default SgProgress;
