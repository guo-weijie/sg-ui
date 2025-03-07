export default {
  name: 'SgAnchorItemContent',

  props: {
    item: Object
  },

  render(h) {
    return h('div', this.item.children);
  }
};
