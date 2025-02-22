import SgBreadcrumb from './src/breadcrumb';

/* istanbul ignore next */
SgBreadcrumb.install = function (Vue) {
  Vue.component(SgBreadcrumb.name, SgBreadcrumb);
};

export default SgBreadcrumb;
