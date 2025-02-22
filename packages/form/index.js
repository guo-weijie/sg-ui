import SgForm from './src/form';

/* istanbul ignore next */
SgForm.install = function (Vue) {
  Vue.component(SgForm.name, SgForm);
};

export default SgForm;
