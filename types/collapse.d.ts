import { SgementUIComponent } from "./component";

/** Use Collapse to store contents. */
export declare class SgCollapse extends SgementUIComponent {
  /** Whether to activate accordion mode */
  accordion: boolean;

  /** Currently active panel */
  value: string | number | string[] | number[];
}
