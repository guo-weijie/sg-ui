import { VNodeDirective } from "vue";

export interface SgInfiniteScroll extends VNodeDirective {
  name: "infinite-scroll";
  value: Function;
}
