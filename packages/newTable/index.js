import NewTable from './src/table';

/* istanbul ignore next */
NewTable.install = function (Vue) {
  Vue.component(NewTable.name, NewTable);
};

export default NewTable;
