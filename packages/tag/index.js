import SgTag from './src/tag';

/* istanbul ignore next */
SgTag.install = function (Vue) {
  Vue.component(SgTag.name, SgTag);
};

export default SgTag;
