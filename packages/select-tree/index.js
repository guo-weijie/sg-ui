import SelectTree from './src/index';

/* istanbul ignore next */
SelectTree.install = function (Vue) {
  Vue.component(SelectTree.name, SelectTree);
};

export default SelectTree;
