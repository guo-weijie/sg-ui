## Container
Container components for scaffolding basic structure of the page:

`<sg-container>`: wrapper container. When nested with a `<sg-header>` or `<sg-footer>`, all its child elements will be vertically arranged. Otherwise horizontally.

`<sg-header>`: container for headers.

`<sg-aside>`: container for side sections (usually a side nav).

`<sg-main>`: container for main sections.

`<sg-footer>`: container for footers.

:::tip
These components use flex for layout, so please make sure your browser supports it. Besides, `<sg-container>`'s direct child elements have to be one or more of the latter four components. And father element of the latter four components must be a `<sg-container>`.
:::

### Common layouts

:::demo
```html
<sg-container>
  <sg-header>Header</sg-header>
  <sg-main>Main</sg-main>
</sg-container>

<sg-container>
  <sg-header>Header</sg-header>
  <sg-main>Main</sg-main>
  <sg-footer>Footer</sg-footer>
</sg-container>

<sg-container>
  <sg-aside width="200px">Aside</sg-aside>
  <sg-main>Main</sg-main>
</sg-container>

<sg-container>
  <sg-header>Header</sg-header>
  <sg-container>
    <sg-aside width="200px">Aside</sg-aside>
    <sg-main>Main</sg-main>
  </sg-container>
</sg-container>

<sg-container>
  <sg-header>Header</sg-header>
  <sg-container>
    <sg-aside width="200px">Aside</sg-aside>
    <sg-container>
      <sg-main>Main</sg-main>
      <sg-footer>Footer</sg-footer>
    </sg-container>
  </sg-container>
</sg-container>

<sg-container>
  <sg-aside width="200px">Aside</sg-aside>
  <sg-container>
    <sg-header>Header</sg-header>
    <sg-main>Main</sg-main>
  </sg-container>
</sg-container>

<sg-container>
  <sg-aside width="200px">Aside</sg-aside>
  <sg-container>
    <sg-header>Header</sg-header>
    <sg-main>Main</sg-main>
    <sg-footer>Footer</sg-footer>
  </sg-container>
</sg-container>

<style>
  .sg-header, .sg-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .sg-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .sg-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .sg-container {
    margin-bottom: 40px;
  }
  
  .sg-container:nth-child(5) .sg-aside,
  .sg-container:nth-child(6) .sg-aside {
    line-height: 260px;
  }
  
  .sg-container:nth-child(7) .sg-aside {
    line-height: 320px;
  }
</style>
```
:::

### Example

:::demo
```html
<sg-container style="height: 500px; border: 1px solid #eee">
  <sg-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <sg-menu :default-openeds="['1', '3']">
      <sg-submenu index="1">
        <template slot="title"><i class="sg-icon-message"></i>Navigator One</template>
        <sg-menu-item-group>
          <template slot="title">Group 1</template>
          <sg-menu-item index="1-1">Option 1</sg-menu-item>
          <sg-menu-item index="1-2">Option 2</sg-menu-item>
        </sg-menu-item-group>
        <sg-menu-item-group title="Group 2">
          <sg-menu-item index="1-3">Option 3</sg-menu-item>
        </sg-menu-item-group>
        <sg-submenu index="1-4">
          <template slot="title">Option4</template>
          <sg-menu-item index="1-4-1">Option 4-1</sg-menu-item>
        </sg-submenu>
      </sg-submenu>
      <sg-submenu index="2">
        <template slot="title"><i class="sg-icon-menu"></i>Navigator Two</template>
        <sg-menu-item-group>
          <template slot="title">Group 1</template>
          <sg-menu-item index="2-1">Option 1</sg-menu-item>
          <sg-menu-item index="2-2">Option 2</sg-menu-item>
        </sg-menu-item-group>
        <sg-menu-item-group title="Group 2">
          <sg-menu-item index="2-3">Option 3</sg-menu-item>
        </sg-menu-item-group>
        <sg-submenu index="2-4">
          <template slot="title">Option 4</template>
          <sg-menu-item index="2-4-1">Option 4-1</sg-menu-item>
        </sg-submenu>
      </sg-submenu>
      <sg-submenu index="3">
        <template slot="title"><i class="sg-icon-setting"></i>Navigator Three</template>
        <sg-menu-item-group>
          <template slot="title">Group 1</template>
          <sg-menu-item index="3-1">Option 1</sg-menu-item>
          <sg-menu-item index="3-2">Option 2</sg-menu-item>
        </sg-menu-item-group>
        <sg-menu-item-group title="Group 2">
          <sg-menu-item index="3-3">Option 3</sg-menu-item>
        </sg-menu-item-group>
        <sg-submenu index="3-4">
          <template slot="title">Option 4</template>
          <sg-menu-item index="3-4-1">Option 4-1</sg-menu-item>
        </sg-submenu>
      </sg-submenu>
    </sg-menu>
  </sg-aside>
  
  <sg-container>
    <sg-header style="text-align: right; font-size: 12px">
      <sg-dropdown>
        <i class="sg-icon-setting" style="margin-right: 15px"></i>
        <sg-dropdown-menu slot="dropdown">
          <sg-dropdown-item>View</sg-dropdown-item>
          <sg-dropdown-item>Add</sg-dropdown-item>
          <sg-dropdown-item>Delete</sg-dropdown-item>
        </sg-dropdown-menu>
      </sg-dropdown>
      <span>Tom</span>
    </sg-header>
    
    <sg-main>
      <sg-table :data="tableData">
        <sg-table-column prop="date" label="Date" width="140">
        </sg-table-column>
        <sg-table-column prop="name" label="Name" width="120">
        </sg-table-column>
        <sg-table-column prop="address" label="Address">
        </sg-table-column>
      </sg-table>
    </sg-main>
  </sg-container>
</sg-container>

<style>
  .sg-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .sg-aside {
    color: #333;
  }
</style>

<script>
  export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      };
      return {
        tableData: Array(20).fill(item)
      }
    }
  };
</script>
```
:::

### Container Attributes
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| direction | layout direction for child elements | string | horizontal / vertical | vertical when nested with `sg-header` or `sg-footer`; horizontal otherwise |

### Header Attributes
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| height | height of the header | string | — | 60px |

### Aside Attributes
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| width | width of the side section | string | — | 300px |

### Footer Attributes
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| height | height of the footer | string | — | 60px |