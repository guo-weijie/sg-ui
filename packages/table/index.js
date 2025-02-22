import SgTable from './src/table';

/* istanbul ignore next */
SgTable.install = function (Vue) {
  Vue.component(SgTable.name, SgTable);
};

export default SgTable;
