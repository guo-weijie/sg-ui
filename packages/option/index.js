import SgOption from '../select/src/option';

/* istanbul ignore next */
SgOption.install = function (Vue) {
  Vue.component(SgOption.name, SgOption);
};

export default SgOption;
