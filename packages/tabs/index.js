import SgTabs from './src/tabs';

/* istanbul ignore next */
SgTabs.install = function (Vue) {
  Vue.component(SgTabs.name, SgTabs);
};

export default SgTabs;
