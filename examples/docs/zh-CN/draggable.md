## Draggable 拖动

### 基本用法 单列拖动

:::demo

```html
当前状态: {{drag ? '拖动中' : '拖动结束'}}<br><br>
<sg-draggable
        v-model="myArray"
        chosen-class="chosen"
        :force-fallback="true"
        group="people"
        :animation="300"
        handleSelector=".item3"
        draggable-selector=".item"
        @start="onStart"
        @end="onEnd">
    <div class="item"
         v-for="(element, index) in myArray"
         :key="index">
        <span class="item3">点击我拖动————————{{element.id}}   </span>
        <span>{{element.name}}</span>
    </div>
</sg-draggable>
<script>
    export default {
        data() {
            return {
                drag: false,
                myArray: [
                    {people: 'cn', id: 1, name: 'www.itxst.com'},
                    {people: 'cn', id: 2, name: 'www.baidu.com'},
                    {people: 'cn', id: 3, name: 'www.taobao.com'},
                    {people: 'us', id: 4, name: 'www.google.com'}
                ]
            };
        },
        methods: {
            onStart() {
                this.drag = true;
            },
            onEnd() {
                this.drag = false;
            }
        }
    };
</script>
<style lang="scss">
    .item {
        padding: 6px;
        background-color: #fdfdfd;
        border: solid 1px #eee;
        margin-bottom: 10px;
        cursor: move;
    }

    .item:hover {
        background-color: #f1f1f1;
        cursor: move;
    }

    .chosen {
        border: solid 2px #3089dc !important;
    }
</style>
```

:::

### 两列或多列之间相互拖动

:::demo

```html
<!--使用draggable组件-->
<sg-row :gutter="20">
    <sg-col :span="8">
        <div class="board-column todo">
            <div class="board-column-header">Todo</div>
            <sg-draggable
                    class="board-column-content"
                    v-model="list1"
                    :group="group"
                    :animation="300"
                    dragClass="dragClass"
                    ghostClass="ghostClass"
                    chosenClass="chosenClass"
                    draggable-selector=".board-item"
                    @start="onStart"
                    @end="onEnd">
                <transition-group>
                    <div v-for="element in list1" :key="element.id" class="board-item">
                        {{ element.name }} {{ element.id }}
                    </div>
                </transition-group>
            </sg-draggable>
        </div>
    </sg-col>
    <sg-col :span="8">
        <div class="board-column working">
            <div class="board-column-header">Working</div>
            <sg-draggable
                    class="board-column-content"
                    v-model="list2"
                    :group="group"
                    :animation="300"
                    dragClass="dragClass"
                    ghostClass="ghostClass"
                    chosenClass="chosenClass"
                    draggable-selector=".board-item"
                    @start="onStart"
                    @end="onEnd">
                <transition-group>
                    <div v-for="element in list2" :key="element.id" class="board-item">
                        {{ element.name }} {{ element.id }}
                    </div>
                </transition-group>
            </sg-draggable>
        </div>
    </sg-col>
    <sg-col :span="8">
        <div class="board-column done">
            <div class="board-column-header">Done</div>
            <sg-draggable
                    class="board-column-content"
                    v-model="list3"
                    :group="group"
                    :animation="300"
                    dragClass="dragClass"
                    ghostClass="ghostClass"
                    chosenClass="chosenClass"
                    draggable-selector=".board-item"
                    @start="onStart"
                    @end="onEnd">
                <transition-group>
                    <div v-for="element in list3" :key="element.id" class="board-item">
                        {{ element.name }} {{ element.id }}
                    </div>
                </transition-group>
            </sg-draggable>
        </div>
    </sg-col>
</sg-row>
<br><br>
list1: {{list1}}<br><br>
list2: {{list2}}<br><br>
list3: {{list3}}<br>
<script>
    export default {
        data() {
            return {
                drag: false,
                group: 'mission',
                list1: [
                    {name: 'Mission', id: 1},
                    {name: 'Mission', id: 2},
                    {name: 'Mission', id: 3},
                    {name: 'Mission', id: 4}
                ],
                list2: [
                    {name: 'Mission', id: 5},
                    {name: 'Mission', id: 6},
                    {name: 'Mission', id: 7}
                ],
                list3: [
                    {name: 'Mission', id: 8},
                    {name: 'Mission', id: 9},
                    {name: 'Mission', id: 10}
                ]
            };
        },
        methods: {
            onStart() {
                this.drag = true;
            },
            onEnd() {
                this.drag = false;
            }
        }
    };
</script>
<style lang="scss">
    /*定义要拖拽元素的样式*/
    .ghostClass {
        background-color: blue !important;
    }

    .chosenClass {
        background-color: red !important;
        opacity: 1 !important;
    }

    .dragClass {
        background-color: blueviolet !important;
        opacity: 1 !important;
        box-shadow: none !important;
        outline: none !important;
        background-image: none !important;
    }

    .todo {

    .board-column-header {
        background: #4A9FF9;
    }

    }
    .working {

    .board-column-header {
        background: #f9944a;
    }

    }
    .done {

    .board-column-header {
        background: #2ac06d;
    }

    }
    .board-column-content {
        height: auto;
        overflow: hidden;
        border: 10px solid transparent;
        min-height: 60px;
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        align-items: center;

    .board-item {
        cursor: pointer;
        width: 100%;
        height: 64px;
        margin: 5px 0;
        background-color: #fff;
        text-align: left;
        line-height: 54px;
        padding: 5px 10px;
        box-sizing: border-box;
        box-shadow: 0px 1px 3px 0 rgba(0, 0, 0, 0.2);
    }

    }
</style>
```

:::

### Attribute

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value / v-model | 数据 | array | — | — |
| group | 分组 | string | — | — |
| animation | 拖动时的动画效果 ms | number | — | — |
| drag-class | 拖动元素的样式，你的自定义样式可能需要加!important才能生效，并把forceFallback属性设置成true | string | — | — |
| ghost-class | 设置拖动元素的占位符类名,你的自定义样式可能需要加!important才能生效，并把force-fallback属性设置成true | string | — | — |
| ghost-class | 设置拖动元素的占位符类名,你的自定义样式可能需要加!important才能生效，并把force-fallback属性设置成true | string | — | — |
| chosen-class | 被选中目标的样式，你的自定义样式可能需要加!important才能生效，并把force-fallback属性设置成true | string | — | — |
| force-fallback | 默认false，忽略HTML5的拖拽行为，因为h5里有个属性也是可以拖动 | boolean | — | false |
| handle-selector | :handle-selector=".mover" 只有当鼠标移动到css为mover类的元素上才能拖动 优先级大于draggable-selector | string | — | — |
| draggable-selector | :draggable-selector=".item" 那些元素是可以被拖动的 | string | — | .item |
| disabled | 是否启用拖拽组件 | boolean | — | false |

### Methods

| 方法名 | 说明 | 参数 | 
|----------- |-------------- |-------------- | 
| start | 开始拖动 | 事件e |
| end | 拖到结束 | 事件e |

### Slot

| name | 说明 |
|------|--------|
| header | 标头 |
| footer | 页脚 |
