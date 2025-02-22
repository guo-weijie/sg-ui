import Vue from "vue";

/** SgementUI component common definition */
export declare class SgementUIComponent extends Vue {
  /** Install component into Vue */
  static install(vue: typeof Vue): void;
}

/** Component size definition for button, input, etc */
export type SgementUIComponentSize = "large" | "medium" | "small" | "mini";

/** Horizontal alignment */
export type SgementUIHorizontalAlignment = "left" | "center" | "right";
