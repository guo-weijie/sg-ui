import SgTableColumn from '../table/src/table-column';

/* istanbul ignore next */
SgTableColumn.install = function (Vue) {
  Vue.component(SgTableColumn.name, SgTableColumn);
};

export default SgTableColumn;
