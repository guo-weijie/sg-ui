import SgButton from './src/button';

/* istanbul ignore next */
SgButton.install = function (Vue) {
  Vue.component(SgButton.name, SgButton);
};

export default SgButton;
