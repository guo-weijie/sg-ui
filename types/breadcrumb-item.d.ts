import { SgementUIComponent } from "./component";

/** Breadcrumb Item Component */
export declare class SgBreadcrumbItem extends SgementUIComponent {
  /** Target route of the link, same as to of vue-router */
  to: string | object;

  /** If true, the navigation will not leave a history record */
  replace: boolean;
}
