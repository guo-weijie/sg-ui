import SgCollapse from './src/collapse';

/* istanbul ignore next */
SgCollapse.install = function (Vue) {
  Vue.component(SgCollapse.name, SgCollapse);
};

export default SgCollapse;

