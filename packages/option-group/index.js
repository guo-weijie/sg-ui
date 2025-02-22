import SgOptionGroup from '../select/src/option-group';

/* istanbul ignore next */
SgOptionGroup.install = function (Vue) {
  Vue.component(SgOptionGroup.name, SgOptionGroup);
};

export default SgOptionGroup;
