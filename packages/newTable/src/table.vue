<script>
import Column from "./column";
import { calculateColumnWidth } from "./calculateColumnWidth";
export default {
  name: "new-table",
  // render 函数的 props 必须显示的接收
  props: {
    column: { type: Array, required: true },
    data: { type: Array, required: true },
    height: { type: [String, Number], default: "100%" },
    "max-height": { type: [String, Number] },
    stripe: { type: Boolean, default: true },
    border: { type: Boolean, default: true },
    size: { type: String },
    fit: { type: Boolean, default: true },
    "show-header": { type: Boolean, default: true },
    "highlight-current-row": { type: Boolean, default: true },
    "highlight-selection-row": { type: Boolean, default: true },
    "current-row-key": { type: [String, Number] },
    "row-class-name": { type: [Function, String] },
    "row-style": { type: [Function, Object] },
    "cell-class-name": { type: [Function, String] },
    "cell-style": { type: [Function, Object] },
    "header-row-class-name": { type: [Function, String] },
    "header-row-style": { type: [Function, Object] },
    "header-cell-class-name": { type: [Function, String] },
    "header-cell-style": { type: [Function, Object] },
    "row-key": { type: [Function, String] },
    "empty-text": { type: String, default: "暂无数据" },
    "default-expand-all": { type: Boolean, default: false },
    "expand-row-keys": { type: Array },
    "default-sort": { type: Object },
    "tooltip-effect": { type: String },
    "show-summary": { type: Boolean },
    "sum-text": { type: String },
    "summary-method": { type: Function },
    "span-method": { type: Function },
    "select-on-indeterminate": { type: Boolean },
    indent: { type: Number },
    lazy: { type: Boolean },
    load: { type: Function },
    "tree-props": { type: Object },
    autoWidth: { type: Boolean, default: true },
    /**
     * 自动宽度的 CSS 属性类型
     * - 'width': 使用固定宽度
     * - 'min-width': 使用最小宽度（默认）
     */
    autoWidthType: {
      type: String,
      default: "min-width",
      validator: (value) => ["width", "min-width"].includes(value),
    },
    /**
     * 需要应用自动宽度的列配置数组，表格列 props 组成的字符串数组
     * 为空时对所有列生效，指定列名时仅对指定列生效
     */
    autoWidthColumns: {
      type: Array,
      default: () => [],
    },
  },
  components: { Column },
  data() {
    return {
      TableColumn: [],
      refreshKey: 0,
    };
  },
  watch: {
    column(newVal) {
      this.TableColumn = newVal;
      this.refreshKey += 1;
    },
  },
  created() {
    this.TableColumn = this.column;
  },
  mounted() {
    this.setMethods();
  },
  methods: {
    setMethods() {
      this["clearSelection"] = this.$refs.elTable.clearSelection;
      this["toggleRowSelection"] = this.$refs.elTable.toggleRowSelection;
      this["toggleAllSelection"] = this.$refs.elTable.toggleAllSelection;
      this["toggleRowExpansion"] = this.$refs.elTable.toggleRowExpansion;
      this["setCurrentRow"] = this.$refs.elTable.setCurrentRow;
      this["clearSort"] = this.$refs.elTable.clearSort;
      this["clearFilter"] = this.$refs.elTable.clearFilter;
      this["sort"] = this.$refs.elTable.sort;
      this["doLayout"] = this.$refs.elTable.doLayout;
      this["scrollTop"] = () => {
        this.$refs.elTable.bodyWrapper.scrollTop = 0;
      };
      this["scrollLeft"] = () => {
        this.$refs.elTable.bodyWrapper.scrollLeft = 0;
      };
    },
    // 是否自动计算列宽
    isAutoCalculateColumnWidth(prop) {
      if (!this.autoWidthColumns || this.autoWidthColumns.length === 0) {
        return true;
      }
      return this.autoWidthColumns.includes(prop);
    },
    // 递归列生成函数
    createColumn(h, item, index, parentIndexPath = []) {
      const indexPath = [...parentIndexPath, index];
      const uniqueKey = indexPath.join("_");
      const key = item.prop || `column_${uniqueKey}`;

      // 处理作用域插槽
      const scopedSlots = {};
      if (item.slot && this.$scopedSlots[item.slot]) {
        // 否则使用插槽
        scopedSlots[item.slot] = ({ row, column, $index }) => {
          return this.$scopedSlots[item.slot]({ row, column, $index });
        };
      }

      // 递归处理子列
      const children = item.children ? item.children.map((child, childIndex) => {
        return this.createColumn(h, child, childIndex, indexPath);
      }) : null;

      if (
        this.autoWidth &&
        !item.width &&
        !item.minWidth &&
        !item.render && // 不对有 render 函数的列计算宽度
        !item.slot && // 不对有插槽的列计算宽度
        item.type !== 'index' && // 不对索引列计算宽度
        item.type !== 'selection' && // 不对选择列计算宽度
        this.data.length > 0 &&
        this.isAutoCalculateColumnWidth(item.prop)
      ) {
        item[this.autoWidthType] = calculateColumnWidth(
          this.data,
          item.label,
          item.prop
        );
      }

      return h(
        Column,
        {
          key: key,
          props: { column: item },
          scopedSlots: scopedSlots,
        },
        children
      );
    },
  },

  render(h) {
    // 生成表格列结构
    const tableChildren = this.TableColumn.map((item, index) => {
      return this.createColumn(h, item, index);
    });

    const { column, ...restProps } = this.$props;
    const props = {
      ...restProps,
      ...this.$attrs,
    };

    const slots = [];
    if (this.$scopedSlots.empty) {
      slots.push(h("template", { slot: "empty" }, [this.$scopedSlots.empty()]));
    }

    return h(
      "sg-table",
      {
        ref: "elTable",
        props,
        on: { ...this.$listeners },
        key: this.refreshKey,
      },
      [...tableChildren, ...slots]
    );
  },
};
</script>

<style lang="scss" scoped></style>
