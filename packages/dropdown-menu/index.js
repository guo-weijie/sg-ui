import SgDropdownMenu from '../dropdown/src/dropdown-menu';

/* istanbul ignore next */
SgDropdownMenu.install = function (Vue) {
  Vue.component(SgDropdownMenu.name, SgDropdownMenu);
};

export default SgDropdownMenu;
