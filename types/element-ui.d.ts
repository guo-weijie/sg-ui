import Vue, { PluginObject } from "vue";
import {
  SgementUIComponent,
  SgementUIComponentSize,
  SgementUIHorizontalAlignment,
} from "./component";

import { SgAlert } from "./alert";
import { SgAside } from "./aside";
import { SgAutocomplete } from "./autocomplete";
import { SgBadge } from "./badge";
import { SgBreadcrumb } from "./breadcrumb";
import { SgBreadcrumbItem } from "./breadcrumb-item";
import { SgButton } from "./button";
import { SgButtonGroup } from "./button-group";
import { SgCard } from "./card";
import { SgCarousel } from "./carousel";
import { SgCarouselItem } from "./carousel-item";
import { SgCascader } from "./cascader";
import { SgCheckbox } from "./checkbox";
import { SgCheckboxButton } from "./checkbox-button";
import { SgCheckboxGroup } from "./checkbox-group";
import { SgCol } from "./col";
import { SgCollapse } from "./collapse";
import { SgCollapseItem } from "./collapse-item";
import { SgColorPicker } from "./color-picker";
import { SgContainer } from "./container";
import { SgDatePicker } from "./date-picker";
import { SgDialog } from "./dialog";
import { SgDropdown } from "./dropdown";
import { SgDropdownItem } from "./dropdown-item";
import { SgDropdownMenu } from "./dropdown-menu";
import { SgFooter } from "./footer";
import { SgForm } from "./form";
import { SgFormItem } from "./form-item";
import { SgHeader } from "./header";
import { SgInput } from "./input";
import { SgInputNumber } from "./input-number";
import { SgLoading } from "./loading";
import { SgMain } from "./main";
import { SgMenu } from "./menu";
import { SgMenuItem } from "./menu-item";
import { SgMenuItemGroup } from "./menu-item-group";
import { SgMessage } from "./message";
import { SgMessageBox } from "./message-box";
import { SgNotification } from "./notification";
import { SgOption } from "./option";
import { SgOptionGroup } from "./option-group";
import { SgPagination } from "./pagination";
import { SgPopover } from "./popover";
import { SgProgress } from "./progress";
import { SgRate } from "./rate";
import { SgRadio } from "./radio";
import { SgRadioButton } from "./radio-button";
import { SgRadioGroup } from "./radio-group";
import { SgRow } from "./row";
import { SgSelect } from "./select";
import { SgSlider } from "./slider";
import { SgStep } from "./step";
import { SgSteps } from "./steps";
import { SgSubmenu } from "./submenu";
import { SgSwitch } from "./switch";
import { SgTable } from "./table";
import { SgTableColumn } from "./table-column";
import { SgTag } from "./tag";
import { SgTabs } from "./tabs";
import { SgTabPane } from "./tab-pane";
import { SgTimeline } from "./timeline";
import { SgTimelineItem } from "./timeline-item";
import { SgTimePicker } from "./time-picker";
import { SgTimeSelect } from "./time-select";
import { SgTooltip } from "./tooltip";
import { SgTransfer } from "./transfer";
import { SgTree, TreeData } from "./tree";
import { SgUpload } from "./upload";
import { SgLink } from "./link";
import { SgDivider } from "./divider";
import { SgIcon } from "./icon";
import { SgCalendar } from "./calendar";
import { SgImage } from "./image";
import { SgBacktop } from "./backtop";
import { SgInfiniteScroll } from "./infinite-scroll";
import { SgPageHeader } from "./page-header";
import { SgAvatar } from "./avatar";
import { SgDrawer } from "./drawer";
import { SgPopconfirm } from "./popconfirm";
import { SgSkeleton } from "./skeleton";
import { SgSkeletonItem } from "./skeleton-item";
import { SgCascaderPanel } from "./cascader-panel";
import { SgEmpty } from "./empty";
import { SgSpinner } from "./spinner";
import { SgDescriptions } from "./descriptions";
import { SgDescriptionsItem } from "./descriptions-item";
import { SgResult } from "./result";
import { SgStatistic } from "./statistic";

export interface InstallationOptions {
  locale: any;
  i18n: any;
  size: string;
}

/** The version of sg-ui */
export const version: string;

/**
 * Install all sg-ui components into Vue.
 * Please do not invoke this method directly.
 * Call `Vue.use(SgementUI)` to install.
 */
export function install(vue: typeof Vue, options: InstallationOptions): void;

/** SgementUI component common definition */
export type Component = SgementUIComponent;

/** Component size definition for button, input, etc */
export type ComponentSize = SgementUIComponentSize;

/** Horizontal alignment */
export type HorizontalAlignment = SgementUIHorizontalAlignment;

/** Show animation while loading data */
export const Loading: SgLoading;

/** Used to show feedback after an activity. The difference with Notification is that the latter is often used to show a system level passive notification. */
export const Message: SgMessage;

/** A set of modal boxes simulating system message box, mainly for message prompt, success tips, error messages and query information */
export const MessageBox: SgMessageBox;

/** Displays a global notification message at the upper right corner of the page */
export const Notification: SgNotification;

// TS cannot merge imported class with namespace, so declare subclasses instead

/** Alert Component */
export class Alert extends SgAlert {}

/** Aside Component */
export class Aside extends SgAside {}

/** Autocomplete Component */
export class Autocomplete extends SgAutocomplete {}

/** Bagde Component */
export class Badge extends SgBadge {}

/** Breadcrumb Component */
export class Breadcrumb extends SgBreadcrumb {}

/** Breadcrumb Item Component */
export class BreadcrumbItem extends SgBreadcrumbItem {}

/** Button Component */
export class Button extends SgButton {}

/** Button Group Component */
export class ButtonGroup extends SgButtonGroup {}

/** Card Component */
export class Card extends SgCard {}

/** Cascader Component */
export class Cascader extends SgCascader {}

/** Carousel Component */
export class Carousel extends SgCarousel {}

/** Carousel Item Component */
export class CarouselItem extends SgCarouselItem {}

/** Checkbox Component */
export class Checkbox extends SgCheckbox {}

/** Checkbox Button Component */
export class CheckboxButton extends SgCheckboxButton {}

/** Checkbox Group Component */
export class CheckboxGroup extends SgCheckboxGroup {}

/** Colunm Layout Component */
export class Col extends SgCol {}

/** Collapse Component */
export class Collapse extends SgCollapse {}

/** Collapse Item Component */
export class CollapseItem extends SgCollapseItem {}

/** Color Picker Component */
export class ColorPicker extends SgColorPicker {}

/** Container Component */
export class Container extends SgContainer {}

/** Date Picker Component */
export class DatePicker extends SgDatePicker {}

/** Dialog Component */
export class Dialog extends SgDialog {}

/** Dropdown Component */
export class Dropdown extends SgDropdown {}

/** Dropdown Item Component */
export class DropdownItem extends SgDropdownItem {}

/** Dropdown Menu Component */
export class DropdownMenu extends SgDropdownMenu {}

/** Footer Component */
export class Footer extends SgFooter {}

/** Form Component */
export class Form extends SgForm {}

/** Form Item Component */
export class FormItem extends SgFormItem {}

/** Header Component */
export class Header extends SgHeader {}

/** Input Component */
export class Input extends SgInput {}

/** Input Number Component */
export class InputNumber extends SgInputNumber {}

/** Main Component */
export class Main extends SgMain {}

/** Menu that provides navigation for your website */
export class Menu extends SgMenu {}

/** Menu Item Component */
export class MenuItem extends SgMenuItem {}

/** Menu Item Group Component */
export class MenuItemGroup extends SgMenuItemGroup {}

/** Dropdown Select Option Component */
export class Option extends SgOption {}

/** Dropdown Select Option Group Component */
export class OptionGroup extends SgOptionGroup {}

/** Pagination Component */
export class Pagination extends SgPagination {}

/** Popover Component */
export class Popover extends SgPopover {}

/** Progress Component */
export class Progress extends SgProgress {}

/** Rate Component */
export class Rate extends SgRate {}

/** Radio Component */
export class Radio extends SgRadio {}

/** Radio Button Component */
export class RadioButton extends SgRadioButton {}

/** Radio Group Component */
export class RadioGroup extends SgRadioGroup {}

/** Row Layout Component */
export class Row extends SgRow {}

/** Dropdown Select Component */
export class Select extends SgSelect {}

/** Slider Component */
export class Slider extends SgSlider {}

/** Step Component */
export class Step extends SgStep {}

/** Steps Component */
export class Steps extends SgSteps {}

/** Submenu Component */
export class Submenu extends SgSubmenu {}

/** Switch Component */
export class Switch extends SgSwitch {}

/** Table Component */
export class Table extends SgTable {}

/** Table Column Component */
export class TableColumn extends SgTableColumn {}

/** Tabs Component */
export class Tabs extends SgTabs {}

/** Tab Pane Component */
export class TabPane extends SgTabPane {}

/** Tag Component */
export class Tag extends SgTag {}

/** Timeline Component */
export class Timeline extends SgTimeline {}

/** Timeline Item Component */
export class TimelineItem extends SgTimelineItem {}

/** TimePicker Component */
export class TimePicker extends SgTimePicker {}

/** TimeSelect Component */
export class TimeSelect extends SgTimeSelect {}

/** Tooltip Component */
export class Tooltip extends SgTooltip {}

/** Transfer Component */
export class Transfer extends SgTransfer {}

/** Tree Component */
export class Tree<K = any, D = TreeData> extends SgTree<K, D> {}

/** Upload Component */
export class Upload extends SgUpload {}

/** Divider Component */
export class Divider extends SgDivider {}

/** Link Component */
export class Link extends SgLink {}

/** Image Component */
export class Image extends SgImage {}

/** Icon Component */
export class Icon extends SgIcon {}

/** Calendar Component */
export class Calendar extends SgCalendar {}

/** Backtop Component */
export class Backtop extends SgBacktop {}

/** InfiniteScroll Directive */
export const InfiniteScroll: PluginObject<SgInfiniteScroll>;

/** PageHeader Component */
export class PageHeader extends SgPageHeader {}

/** Avatar Component */
export class Avatar extends SgAvatar {}

/** Drawer Component */
export class Drawer extends SgDrawer {}

/** Popconfirm Component */
export class Popconfirm extends SgPopconfirm {}

/** Skeleton Component */
export class Skeleton extends SgSkeleton {}

/** Skeleton Item Component */
export class SkeletonItem extends SgSkeletonItem {}

/** CascaderPanel Component */
export class CascaderPanel extends SgCascaderPanel {}

/** Empty Component */
export class Empty extends SgEmpty {}

/** Spinner Component */
export class Spinner extends SgSpinner {}

/** Description Component */
export class Descriptions extends SgDescriptions {}

/** Description Item Component */
export class DescriptionsItem extends SgDescriptionsItem {}

/** Result Component */
export class Result extends SgResult {}

/** Statistic Component */
export class Statistic extends SgStatistic {}
