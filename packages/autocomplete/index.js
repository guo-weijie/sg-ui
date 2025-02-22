import SgAutocomplete from './src/autocomplete';

/* istanbul ignore next */
SgAutocomplete.install = function (Vue) {
  Vue.component(SgAutocomplete.name, SgAutocomplete);
};

export default SgAutocomplete;
