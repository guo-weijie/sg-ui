import SgMenuItem from '../menu/src/menu-item';

/* istanbul ignore next */
SgMenuItem.install = function (Vue) {
  Vue.component(SgMenuItem.name, SgMenuItem);
};

export default SgMenuItem;
