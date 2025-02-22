import SgMenu from './src/menu';

/* istanbul ignore next */
SgMenu.install = function (Vue) {
  Vue.component(SgMenu.name, SgMenu);
};

export default SgMenu;
