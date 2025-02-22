import SgDialog from './src/component';

/* istanbul ignore next */
SgDialog.install = function (Vue) {
  Vue.component(SgDialog.name, SgDialog);
};

export default SgDialog;
