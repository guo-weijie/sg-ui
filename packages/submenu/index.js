import SgSubmenu from '../menu/src/submenu';

/* istanbul ignore next */
SgSubmenu.install = function (Vue) {
  Vue.component(SgSubmenu.name, SgSubmenu);
};

export default SgSubmenu;
