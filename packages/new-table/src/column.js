export default {
  props: {
    column: {
      type: Object,
      required: true,
    },
  },
  render(h) {
    const { column } = this;
    let slotScoped = null;
    // 如果有 render 函数，则使用 render 函数
    if (column.render && typeof column.render === "function") {
      slotScoped = (props) => column.render(h, props.row, props.column, props.$index);
    } else if (column.slot && this.$scopedSlots[column.slot]) {
      slotScoped = this.$scopedSlots[column.slot];
    }
    const mergedProps = Object.assign(
      { "show-head-overflow-tooltip": false },
      column
    );
    let tableColumn = {
      props: mergedProps,
      scopedSlots: {
        default: slotScoped,
      },
    };
    return h("sg-table-column", tableColumn, this.$slots.default);
  },
};
