import SgTimelineItem from '../timeline/src/item';

/* istanbul ignore next */
SgTimelineItem.install = function (Vue) {
  Vue.component(SgTimelineItem.name, SgTimelineItem);
};

export default SgTimelineItem;
