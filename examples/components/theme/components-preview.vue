<style lang="scss">
.component-preview {
  padding-right: 10px;

  &:last-of-type {
    padding-bottom: 20px;
  }

  h4 {
    font-size: 20px;
    margin: 40px 0 20px;
    color: #909399
  }

  .demo-item {
    margin-top: 10px;
    margin-right: 40px;
  }

  .demo-line {
    margin: 15px 0;
  }

  .sg-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .sg-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }

  .sg-avatar:not(:last-child) {
    margin-right: 20px;
  }

  .avatar-demo {
    display: flex;
    align-items: center;
  }
}
</style>
<template>
  <div class="component-preview">
    <h4>Button</h4>
    <sg-row class="demo-line">
      <sg-button>Default</sg-button>
      <sg-button type="primary">Primary</sg-button>
      <sg-button type="success">Success</sg-button>
      <sg-button type="info">Info</sg-button>
      <sg-button type="warning">Warning</sg-button>
      <sg-button type="danger">Danger</sg-button>
    </sg-row>
    <sg-row class="demo-line">
      <sg-button plain>Plain</sg-button>
      <sg-button type="primary" plain>Primary</sg-button>
      <sg-button type="success" plain>Success</sg-button>
      <sg-button type="info" plain>Info</sg-button>
      <sg-button type="warning" plain>Warning</sg-button>
      <sg-button type="danger" plain>Danger</sg-button>
    </sg-row>
    <sg-row class="demo-line">
      <sg-button round>Round</sg-button>
      <sg-button type="primary" round>Primary</sg-button>
      <sg-button type="success" round>Success</sg-button>
      <sg-button type="info" round>Info</sg-button>
      <sg-button type="warning" round>Warning</sg-button>
      <sg-button type="danger" round>Danger</sg-button>
    </sg-row>
    <sg-row class="demo-line">
      <sg-button icon="sg-icon-search" circle></sg-button>
      <sg-button type="primary" icon="sg-icon-edit" circle></sg-button>
      <sg-button type="success" icon="sg-icon-check" circle></sg-button>
      <sg-button type="info" icon="sg-icon-message" circle></sg-button>
      <sg-button type="warning" icon="sg-icon-star-off" circle></sg-button>
      <sg-button type="danger" icon="sg-icon-delete" circle></sg-button>
    </sg-row>
    <sg-row class="demo-line">
      <sg-button>Default</sg-button>
      <sg-button size="medium">Medium</sg-button>
      <sg-button size="small">Small</sg-button>
      <sg-button size="mini">Mini</sg-button>
    </sg-row>
    <h4>Radio</h4>
    <sg-row class="demo-line">
      <sg-radio v-model="radio" label="1">Option A</sg-radio>
      <sg-radio v-model="radio" label="2">Option B</sg-radio>
    </sg-row>
    <sg-row class="demo-line">
      <sg-radio-group v-model="radio1">
        <sg-radio-button label="New York"></sg-radio-button>
        <sg-radio-button label="Washington"></sg-radio-button>
        <sg-radio-button label="Los Angeles"></sg-radio-button>
        <sg-radio-button label="Chicago"></sg-radio-button>
      </sg-radio-group>
    </sg-row>
    <sg-row class="demo-line">
      <sg-radio v-model="radio2" label="1" border>Option A</sg-radio>
      <sg-radio v-model="radio2" label="2" border>Option B</sg-radio>
    </sg-row>
    <h4>Checkbox</h4>
    <sg-row class="demo-line">
      <sg-checkbox v-model="checked">Option</sg-checkbox>
    </sg-row>
    <sg-row class="demo-line">
      <sg-checkbox-group v-model="checked1">
        <sg-checkbox-button v-for="city in ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']" :label="city"
          :key="city">{{ city }}</sg-checkbox-button>
      </sg-checkbox-group>
    </sg-row>
    <sg-row class="demo-line">
      <sg-checkbox v-model="checked2" label="Option1" border></sg-checkbox>
    </sg-row>
    <h4>Input</h4>
    <sg-row style="width: 180px">
      <sg-input placeholder="Please input" v-model="input"></sg-input>
    </sg-row>
    <h4>InputNumber</h4>
    <sg-row>
      <sg-input-number v-model="inputNumber" :min="1" :max="10"></sg-input-number>
    </sg-row>
    <h4>Select</h4>
    <sg-row>
      <sg-select v-model="selectValue" placeholder="Select">
        <sg-option v-for="item in selectOptions" :key="item.value" :label="item.label" :value="item.value"></sg-option>
      </sg-select>
    </sg-row>
    <h4>Cascader</h4>
    <sg-row>
      <sg-cascader :options="cascadeOptions" v-model="cascaderValue"></sg-cascader>
    </sg-row>
    <h4>Switch</h4>
    <sg-row>
      <sg-switch v-model="switchValue"></sg-switch>
      <sg-switch style="margin-left: 40px" v-model="switchValue" active-text="Pay by month" inactive-text="Pay by year">
      </sg-switch>
    </sg-row>
    <h4>Slider</h4>
    <sg-row style="width: 380px">
      <sg-slider v-model="slider"></sg-slider>
    </sg-row>
    <h4>DatePicker</h4>
    <sg-row>
      <sg-date-picker v-model="datePicker" type="date"></sg-date-picker>
    </sg-row>
    <h4>Rate</h4>
    <sg-row>
      <sg-rate class="demo-line" v-model="rate"></sg-rate>
      <sg-rate class="demo-line" v-model="rate" show-score text-color="#ff9900" score-template="{value} points">
      </sg-rate>
    </sg-row>
    <h4>Transfer</h4>
    <sg-row>
      <sg-transfer v-model="transfer" filterable :data="transferData">
        <sg-button class="transfer-footer" slot="left-footer" size="small">Operation</sg-button>
        <sg-button class="transfer-footer" slot="right-footer" size="small">Operation</sg-button>
      </sg-transfer>
    </sg-row>
    <h4>Table</h4>
    <sg-row>
      <sg-table :data="tableData" style="width: 70%">
        <sg-table-column prop="date" label="Date" width="180"></sg-table-column>
        <sg-table-column prop="name" label="Name" width="180"></sg-table-column>
        <sg-table-column prop="address" label="Address"></sg-table-column>
      </sg-table>
    </sg-row>
    <h4>Tag</h4>
    <sg-row>
      <sg-tag class="demo-item" closable>Tag One</sg-tag>
      <sg-tag class="demo-item" closable type="success">Tag Two</sg-tag>
      <sg-tag class="demo-item" closable type="info">Tag Three</sg-tag>
      <sg-tag class="demo-item" closable type="warning">Tag Four</sg-tag>
      <sg-tag class="demo-item" closable type="danger">Tag Five</sg-tag>
    </sg-row>
    <h4>Progress</h4>
    <sg-row style="width: 380px">
      <sg-progress :percentage="20"></sg-progress>
      <sg-progress :percentage="60" status="exception"></sg-progress>
      <sg-progress :percentage="100" status="success"></sg-progress>
    </sg-row>
    <h4>Tree</h4>
    <sg-row style="width: 380px">
      <sg-tree :data="treeData" :props="defaultTreeProps"></sg-tree>
    </sg-row>
    <h4>Pagination</h4>
    <sg-row>
      <sg-pagination layout="prev, pager, next" :total="1000"></sg-pagination>
    </sg-row>
    <h4>Badge</h4>
    <sg-row>
      <sg-badge :value="12" class="demo-item">
        <sg-button size="small">comments</sg-button>
      </sg-badge>
      <sg-badge :value="3" class="demo-item">
        <sg-button size="small">replies</sg-button>
      </sg-badge>
      <sg-badge :value="1" class="demo-item" type="primary">
        <sg-button size="small">comments</sg-button>
      </sg-badge>
      <sg-badge :value="2" class="demo-item" type="warning">
        <sg-button size="small">replies</sg-button>
      </sg-badge>
    </sg-row>
    <h4>Alert</h4>
    <sg-row style="width: 380px;">
      <sg-alert class="demo-item" title="success alert" type="success" show-icon></sg-alert>
      <sg-alert class="demo-item" title="info alert" type="info" close-text="Gotcha" show-icon></sg-alert>
      <sg-alert class="demo-item" title="warning alert" type="warning" show-icon></sg-alert>
      <sg-alert class="demo-item" title="error alert" type="error" description="more text description" show-icon>
      </sg-alert>
    </sg-row>
    <h4>Loading</h4>
    <sg-row>
      <sg-table :data="tableData" style="width: 90%" v-loading="true">
        <sg-table-column prop="date" label="Date" width="180"></sg-table-column>
        <sg-table-column prop="name" label="Name" width="180"></sg-table-column>
        <sg-table-column prop="address" label="Address"></sg-table-column>
      </sg-table>
    </sg-row>
    <h4>Message</h4>
    <sg-row>
      <div role="alert"
        class="demo-item sg-message sg-message--success sg-message-fade-leave-active sg-message-fade-leave-to"
        style="top: 0;left: 0;width: 100px; opacity: 1; position: relative;transform: none;"><i
          class="sg-message__icon sg-icon-success"></i>
        <p class="sg-message__content">Congrats, this is a success message.</p><!---->
      </div>
      <div role="alert"
        class="demo-item sg-message sg-message--warning sg-message-fade-leave-active sg-message-fade-leave-to"
        style="top: 0;left: 0;width: 100px; opacity: 1; position: relative;transform: none;"><i
          class="sg-message__icon sg-icon-warning"></i>
        <p class="sg-message__content">Warning, this is a warning message.</p><!---->
      </div>
      <div role="alert"
        class="demo-item sg-message sg-message--info sg-message-fade-leave-active sg-message-fade-leave-to"
        style="top: 0;left: 0;width: 100px; opacity: 1; position: relative;transform: none;"><i
          class="sg-message__icon sg-icon-info"></i>
        <p class="sg-message__content">This is a message.</p><!---->
      </div>
      <div role="alert"
        class="demo-item sg-message sg-message--error is-closable sg-message-fade-leave-active sg-message-fade-leave-to"
        style="top: 0;left: 0;width: 100px; opacity: 1; position: relative;transform: none;"><i
          class="sg-message__icon sg-icon-error"></i>
        <p class="sg-message__content">Oops, this is a error message.</p><i
          class="sg-message__closeBtn sg-icon-close"></i>
      </div>
    </sg-row>
    <h4>MessageBox</h4>
    <sg-row>
      <div class="sg-message-box">
        <div class="sg-message-box__header">
          <div class="sg-message-box__title"><!----><span>Warning</span></div><button type="button" aria-label="Close"
            class="sg-message-box__headerbtn"><i class="sg-message-box__close sg-icon-close"></i></button>
        </div>
        <div class="sg-message-box__content">
          <div class="sg-message-box__status sg-icon-warning"></div>
          <div class="sg-message-box__message">
            <p>This will permanently delete the file. Continue?</p>
          </div>
          <div class="sg-message-box__input" style="display: none;">
            <div class="sg-input"><!----><input type="text" autocomplete="off" placeholder=""
                class="sg-input__inner"><!----><!----><!----></div>
            <div class="sg-message-box__errormsg" style="visibility: hidden;"></div>
          </div>
        </div>
        <div class="sg-message-box__btns"><button type="button"
            class="sg-button sg-button--default sg-button--small"><!----><!----><span>
              Cancel
            </span></button><button type="button"
            class="sg-button sg-button--default sg-button--small sg-button--primary "><!----><!----><span>
              OK
            </span></button></div>
      </div>
    </sg-row>
    <h4>Notification</h4>
    <sg-row>
      <div role="alert" class="sg-notification right" style="position: relative; left: 0;"><!---->
        <div class="sg-notification__group"><span class="sg-notification__title">Notification</span>
          <div class="sg-notification__content">
            <div>This is a message </div>
          </div>
          <div class="sg-notification__closeBtn sg-icon-close"></div>
        </div>
      </div>
    </sg-row>
    <h4>Menu</h4>
    <sg-row>
      <sg-menu :default-active="menu" class="sg-menu-demo" mode="horizontal">
        <sg-menu-item index="1">Processing Center</sg-menu-item>
        <sg-submenu index="2">
          <template slot="title">Workspace</template>
          <sg-menu-item index="2-1">item one</sg-menu-item>
          <sg-menu-item index="2-2">item two</sg-menu-item>
          <sg-menu-item index="2-3">item three</sg-menu-item>
          <sg-submenu index="2-4">
            <template slot="title">item four</template>
            <sg-menu-item index="2-4-1">item one</sg-menu-item>
            <sg-menu-item index="2-4-2">item two</sg-menu-item>
            <sg-menu-item index="2-4-3">item three</sg-menu-item>
          </sg-submenu>
        </sg-submenu>
        <sg-menu-item index="3" disabled>Info</sg-menu-item>
        <sg-menu-item index="4">
          <a href="https://www.keep-silent.com" target="_blank">Orders</a>
        </sg-menu-item>
      </sg-menu>
      <sg-menu default-active="2" class="demo-line">
        <sg-submenu index="1">
          <template slot="title">
            <i class="sg-icon-location"></i>
            <span>Navigator One</span>
          </template>
          <sg-menu-item-group title="Group One">
            <sg-menu-item index="1-1">item one</sg-menu-item>
            <sg-menu-item index="1-2">item one</sg-menu-item>
          </sg-menu-item-group>
          <sg-menu-item-group title="Group Two">
            <sg-menu-item index="1-3">item three</sg-menu-item>
          </sg-menu-item-group>
          <sg-submenu index="1-4">
            <template slot="title">item four</template>
            <sg-menu-item index="1-4-1">item one</sg-menu-item>
          </sg-submenu>
        </sg-submenu>
        <sg-menu-item index="2">
          <i class="sg-icon-menu"></i>
          <span>Navigator Two</span>
        </sg-menu-item>
        <sg-menu-item index="3" disabled>
          <i class="sg-icon-document"></i>
          <span>Navigator Three</span>
        </sg-menu-item>
        <sg-menu-item index="4">
          <i class="sg-icon-setting"></i>
          <span>Navigator Four</span>
        </sg-menu-item>
      </sg-menu>
    </sg-row>
    <h4>Tabs</h4>
    <sg-row>
      <sg-tabs v-model="tab" class="demo-item">
        <sg-tab-pane label="User" name="first">User</sg-tab-pane>
        <sg-tab-pane label="Config" name="second">Config</sg-tab-pane>
        <sg-tab-pane label="Role" name="third">Role</sg-tab-pane>
        <sg-tab-pane label="Task" name="fourth">Task</sg-tab-pane>
      </sg-tabs>
      <sg-tabs type="card" class="demo-item">
        <sg-tab-pane label="User">User</sg-tab-pane>
        <sg-tab-pane label="Config">Config</sg-tab-pane>
        <sg-tab-pane label="Role">Role</sg-tab-pane>
        <sg-tab-pane label="Task">Task</sg-tab-pane>
      </sg-tabs>
    </sg-row>
    <h4>Dialog</h4>
    <sg-row>
      <div role="dialog" aria-modal="true" aria-label="Tips" class="sg-dialog" style="margin: 0">
        <div class="sg-dialog__header"><span class="sg-dialog__title">Tips</span><button type="button"
            aria-label="Close" class="sg-dialog__headerbtn"><i
              class="sg-dialog__close sg-icon sg-icon-close"></i></button></div>
        <div class="sg-dialog__body"><span>This is a message</span> </div>
        <div class="sg-dialog__footer"><span class="dialog-footer"><button type="button"
              class="sg-button sg-button--default"><!----><!----><span>Cancel</span></button> <button type="button"
              class="sg-button sg-button--primary"><!----><!----><span>Confirm</span></button></span></div>
      </div>
    </sg-row>
    <h4>Tooltip</h4>
    <sg-row>
      <div role="tooltip" x-placement="top" class="sg-tooltip__popper is-dark"
        style="position: relative; width: 40px;text-align: center;">Dark<div x-arrow="" class="popper__arrow"></div>
      </div>
      <div role="tooltip" x-placement="top" class="sg-tooltip__popper is-light"
        style="margin-top: 10px;position: relative; width: 40px;text-align: center;">Light<div x-arrow=""
          class="popper__arrow"></div>
      </div>
    </sg-row>
    <h4>Popover</h4>
    <sg-row>
      <div role="tooltip" x-placement="top" id="sg-popover-2936" aria-hidden="true"
        class="sg-popover sg-popper sg-popover--plain" tabindex="0" style="width: 200px; position: relative; ">
        <div class="sg-popover__title">Title</div>this is content, this is content, this is content<div x-arrow=""
          class="popper__arrow"></div>
      </div>
    </sg-row>
    <h4>Card</h4>
    <sg-row>
      <sg-card class="box-card">
        <div slot="header" class="clearfix">
          <span>Card name</span>
        </div>
      </sg-card>
    </sg-row>
    <h4>Carousel</h4>
    <sg-row>
      <sg-carousel height="150px">
        <sg-carousel-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
        </sg-carousel-item>
      </sg-carousel>
    </sg-row>
    <h4>Collapse</h4>
    <sg-row>
      <sg-collapse v-model="collapse">
        <sg-collapse-item title="Consistent" name="1">
          <div>Consistent with real life: in line with the process and logic of real life, and comply with languages and
            habits that the users are used to;</div>
        </sg-collapse-item>
        <sg-collapse-item title="Feedback" name="2">
          <div>Operation feedback: enable the users to clearly perceive their operations by style updates and
            interactive
            effects;</div>
        </sg-collapse-item>
      </sg-collapse>
    </sg-row>
    <h4>Avatar</h4>
    <sg-row class="demo-line avatar-demo">
      <sg-avatar icon="sg-icon-user-solid" />
      <sg-avatar> avatar </sg-avatar>
      <sg-avatar shape="square" fit="contain" :src="avatarData.url"></sg-avatar>
      <sg-avatar size="large"> large </sg-avatar>
      <sg-avatar size="medium"> medium </sg-avatar>
      <sg-avatar size="small"> small </sg-avatar>
    </sg-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      radio: '1',
      radio1: 'Washington',
      radio2: '1',
      checked: true,
      checked1: ['Shanghai'],
      checked2: true,
      input: 'Element',
      inputNumber: 1,
      selectOptions: [
        {
          value: 'Option1',
          label: 'Option1'
        },
        {
          value: 'Option2',
          label: 'Option2'
        },
        {
          value: 'Option3',
          label: 'Option3'
        },
        {
          value: 'Option4',
          label: 'Option4'
        },
        {
          value: 'Option5',
          label: 'Option5'
        }
      ],
      selectValue: '',
      cascadeOptions: [
        {
          value: 'guide',
          label: 'Guide',
          children: [
            {
              value: 'disciplines',
              label: 'Disciplines',
              children: [
                {
                  value: 'consistency',
                  label: 'Consistency'
                },
                {
                  value: 'feedback',
                  label: 'Feedback'
                }
              ]
            }
          ]
        },
        {
          value: 'resource',
          label: 'Resource',
          children: [
            {
              value: 'axure',
              label: 'Axure Components'
            },
            {
              value: 'sketch',
              label: 'Sketch Templates'
            },
            {
              value: 'docs',
              label: 'Design Documentation'
            }
          ]
        }
      ],
      cascaderValue: [],
      switchValue: true,
      slider: 28,
      datePicker: '',
      rate: null,
      transferData: (() => {
        const data = [];
        for (let i = 1; i <= 15; i++) {
          data.push({
            key: i,
            label: `Option ${i}`,
            disabled: i % 4 === 0
          });
        }
        return data;
      })(),
      transfer: [1, 4],
      tableData: [
        {
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        },
        {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        },
        {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        },
        {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }
      ],
      menu: '1',
      tab: 'first',
      collapse: ['1'],
      treeData: [{
        label: 'Level one 1',
        children: [{
          label: 'Level two 1-1',
          children: [{
            label: 'Level three 1-1-1'
          }]
        }]
      }, {
        label: 'Level one 2',
        children: [{
          label: 'Level two 2-1',
          children: [{
            label: 'Level three 2-1-1'
          }]
        }, {
          label: 'Level two 2-2',
          children: [{
            label: 'Level three 2-2-1'
          }]
        }]
      }, {
        label: 'Level one 3',
        children: [{
          label: 'Level two 3-1',
          children: [{
            label: 'Level three 3-1-1'
          }]
        }, {
          label: 'Level two 3-2',
          children: [{
            label: 'Level three 3-2-1'
          }]
        }]
      }],
      defaultTreeProps: {
        children: 'children',
        label: 'label'
      },
      avatarData: {
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
      }
    };
  }
};
</script>
