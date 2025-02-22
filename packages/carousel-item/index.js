import SgCarouselItem from '../carousel/src/item';

/* istanbul ignore next */
SgCarouselItem.install = function (Vue) {
  Vue.component(SgCarouselItem.name, SgCarouselItem);
};

export default SgCarouselItem;
