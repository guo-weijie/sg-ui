import SgHierarchicalSelector from './src/hierarchical-selector';

/* istanbul ignore next */
SgHierarchicalSelector.install = function (Vue) {
  Vue.component(SgHierarchicalSelector.name, SgHierarchicalSelector);
};

export default SgHierarchicalSelector;
