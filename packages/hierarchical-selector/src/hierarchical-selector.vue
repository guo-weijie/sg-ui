<template>
  <div class="hierarchical-selector">
    <!-- 已选区域 -->
    <div class="selected-area">
      <span class="label">已选:</span>
      <div class="selected-tags" ref="selectedTagsContainer">
        <sg-tag
          v-for="(item, index) in visibleSelectedItems"
          :key="item.id"
          :closable="true"
          @close="removeSelected(index)"
          class="selected-tag"
          size="small"
        >
          {{ item.label }}
        </sg-tag>
      </div>
      <!-- 右侧操作区 -->
      <div class="right-actions">
        <!-- 更多按钮（只在溢出时显示） -->
        <sg-button v-if="shouldShowSelectedMore" type="text" class="more-btn" @click="openSelectedModal">
          更多 ({{ selectedPath.length - visibleSelectedItems.length }}) <i class="sg-icon-arrow-right"></i>
        </sg-button>
        <!-- 搜索框（根据 filterable 属性控制显示） -->
        <sg-input
          v-if="filterable"
          v-model="searchKeyword"
          placeholder="搜索节点"
          prefix-icon="sg-icon-search"
          clearable
          size="small"
          class="search-input"
          :loading="searchLoading"
          @keyup.enter.native="handleRemoteSearch"
        ></sg-input>
        <sg-button size="small" type="success" @click="handleReset" class="reset-btn"> 重置 </sg-button>
      </div>
    </div>

    <div class="divider"></div>

    <!-- 动态层级区域 -->
    <div v-if="filteredLevels.length > 0" class="levels-container">
      <div v-for="(level, levelIndex) in filteredLevels" :key="levelIndex" class="level-block">
        <div class="selector-row">
          <span class="row-label">{{ level.label }}:</span>
          <div class="options-container">
            <div v-for="node in level.nodes" :key="node.id" class="option-item">
              <!-- 多选模式：显示勾选框 -->
              <template v-if="getSelectionMode(levelIndex) === 'multiple'">
                <sg-checkbox
                  :value="shouldCheckNode(node)"
                  :indeterminate="isIndeterminate(node, levelIndex)"
                  @change="handleCheckChange(node, levelIndex, $event)"
                  class="option-checkbox"
                >
                </sg-checkbox>
              </template>
              <!-- 文字（根据点击模式显示不同样式） -->
              <span
                class="option-label"
                :class="{
                  'is-loading': node.loading,
                  'is-clickable': true,
                  'is-selected': isChecked(node)
                }"
                @click="handleLabelClick(node, levelIndex)"
              >
                <i v-if="node.loading" class="sg-icon-loading"></i>
                <span>{{ node.name }}</span>
              </span>
            </div>
          </div>
          <!-- 展开/收起按钮（除了第一层区域，且只在节点溢出时显示） -->
          <sg-button
            v-if="levelIndex > 0 && shouldShowMoreButton(levelIndex)"
            type="text"
            class="expand-btn"
            :class="{ 'is-expanded': isExpanded(levelIndex) }"
            :title="isExpanded(levelIndex) ? '收起' : '展开'"
            @click="toggleExpand(levelIndex)"
          >
            <i :class="isExpanded(levelIndex) ? 'sg-icon-arrow-up' : 'sg-icon-arrow-down'"></i>
          </sg-button>
        </div>

        <!-- 展开面板（浮层：脱离文档流，从当前层级下方展开） -->
        <div v-if="isExpanded(levelIndex)" ref="expandPanel" class="expand-panel" :style="panelStyle">
          <div class="panel-body">
            <!-- 左侧：首字母索引 -->
            <div class="panel-letters">
              <div class="panel-letters-inner">
                <div
                  v-for="item in letterIndexList"
                  :key="item.letter"
                  class="letter-item"
                  :class="{ 'is-active': activeLetter === item.letter }"
                  @click="scrollToLetter(item.letter)"
                >
                  <span class="letter-text">{{ item.letter }}</span>
                  <span class="letter-count">{{ item.count }}</span>
                </div>
              </div>
            </div>

            <!-- 右侧：按首字母分组换行、组内卡片平铺的节点列表 -->
            <div class="panel-nodes" ref="panelNodes" @scroll="handleNodesScroll">
              <div v-for="group in letterGroups" :key="group.letter" class="node-group" :data-letter="group.letter">
                <div
                  v-for="node in group.nodes"
                  :key="node.id"
                  class="node-item"
                  :class="{ 'is-selected': isChecked(node) }"
                  @click="handlePanelItemClick(node, levelIndex)"
                >
                  <!-- 多选模式：勾选框 -->
                  <template v-if="getSelectionMode(levelIndex) === 'multiple'">
                    <sg-checkbox :value="shouldCheckNode(node)" @change="handleCheckChange(node, levelIndex, $event)">
                      <span class="node-name">{{ node.name }}</span>
                    </sg-checkbox>
                  </template>
                  <!-- 单选/不可选模式：点击文字 -->
                  <template v-else>
                    <span class="node-label" :class="{ 'is-selected': isChecked(node), 'is-loading': node.loading }">
                      <i v-if="node.loading" class="sg-icon-loading"></i>
                      <span class="node-name">{{ node.name }}</span>
                    </span>
                  </template>
                </div>
              </div>
              <!-- 无数据提示 -->
              <div v-if="letterGroups.length === 0" class="panel-empty">
                <i class="sg-icon-folder-opened"></i>
                <p>暂无节点数据</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 已选节点模态框 -->
    <sg-dialog :visible.sync="selectedModalVisible" title="已选节点" width="60%" :append-to-body="true">
      <div class="modal-content">
        <div v-for="(item, index) in selectedPath" :key="index" class="selected-modal-item">
          <sg-tag :closable="true" @close="removeSelected(index)" size="small">
            {{ item.label }}
          </sg-tag>
        </div>
      </div>
    </sg-dialog>
  </div>
</template>

<script>
import { pinyin } from 'pinyin-pro';

// 空状态复用对象，避免每次计算都创建新对象
const EMPTY_NODE_STATE = Object.freeze({ checked: false, indeterminate: false });
const EMPTY_ARRAY = Object.freeze([]);
// 首字母（拼音）解析结果缓存：同名节点的计算结果可复用
const LETTER_CACHE = new Map();

export default {
  name: 'SgHierarchicalSelector',

  /**
   * 公开方法：
   * - refreshNodeChildren(nodeId): 刷新指定节点的子节点（强制重新请求并覆盖缓存）
   *   参数：nodeId {String} - 节点 ID
   *   示例：this.$refs.selector.refreshNodeChildren('node-id')
   * - clearChildrenCache(nodeId): 清空子节点缓存
   *   参数：nodeId {String} [可选] - 节点 ID，不传则清空全部
   *   示例：this.$refs.selector.clearChildrenCache('node-id')
   */

  props: {
    // 初始层级数据（如区域）
    initialNodes: {
      type: Array,
      default: () => []
    },
    // 节点类型标签映射
    // key: 对应节点数据的 noteType；level: 仅用于排序
    // 格式：[{ key: 1, level: 1, label: '区域' }, { key: 2, level: 2, label: '厂站' }]
    nodeTypeLabels: {
      type: Array,
      default: () => [
        { key: 1, level: 1, label: '区域' },
        { key: 2, level: 2, label: '厂站' },
        { key: 5, level: 5, label: '采集点' },
        { key: 6, level: 7, label: '公式' },
        { key: 10, level: 6, label: '电表' },
        { key: 13, level: 3, label: '设备' },
        { key: 20, level: 4, label: '变压器' }
      ]
    },
    // 选择模式配置
    // 'single': 单选，'multiple': 多选，'none': 不可勾选
    // 可以传入对象按层级配置：{ 1: 'single', 2: 'multiple', 10: 'multiple', 6: 'multiple' }
    // 也可以传入字符串全局配置：'single' 或 'multiple'
    selectionMode: {
      type: [String, Object],
      default: 'single'
    },
    // 节点勾选联动配置
    // true: 启用联动（选中父节点自动选中所有子节点，取消父节点自动取消所有子节点）
    // false: 不联动
    // 可以传入对象按层级配置：{ 0: false, 1: true, 2: true }
    // 也可以传入布尔值全局配置
    cascadeSelect: {
      type: [Boolean, Object],
      default: true
    },
    // 是否显示搜索框
    filterable: {
      type: Boolean,
      default: false
    },
    // 是否启用远程搜索
    // 启用后，回车触发 search 会向外 emit 'remote-search' 事件，
    // 由父组件自行发起请求，并通过回调函数的参数回传结果：
    //   成功：callback(treeData)   （treeData 为 Array）
    //   失败：callback(null, error)
    // 本组件负责解析渲染与错误提示。
    remoteSearch: {
      type: Boolean,
      default: false
    },
    // 是否默认选中顶级节点的第一项
    autoSelectFirst: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      // 层级结构
      levels: [],
      // 选中的节点
      selectedNodes: [],
      // 当前展开面板的层级索引（-1 表示未展开）
      expandedLevelIndex: -1,
      // 展开面板浮层的定位样式（脱离文档流）
      panelStyle: {
        top: '-9999px',
        left: '-9999px'
      },
      // 滚动位置同步的 rAF 句柄
      scrollRaf: null,
      // 展开面板中当前高亮的首字母
      activeLetter: '',
      // 已选区域模态框
      selectedModalVisible: false,
      // 已选区域溢出标记
      selectedHasOverflow: false,
      // 可见的已选节点数量
      visibleCount: 0,
      // 主搜索框关键词
      searchKeyword: '',
      // 远程搜索加载状态
      searchLoading: false,
      // 远程搜索定时器
      searchTimer: null,
      // 远程搜索 loading 兜底定时器（防止父组件未回传结果时一直转圈）
      searchLoadingTimer: null,
      // 原始层级数据（用于恢复）
      originalLevels: [],
      // 子节点缓存：{ [nodeId]: { children, noteType, mixed } }
      // 已请求过子节点的节点会被记录（含空结果），再次点击直接复用，不再重复请求
      childrenCache: {}
    };
  },

  computed: {
    // 已选路径展示
    selectedPath() {
      return this.selectedNodes.map((node) => ({
        id: node.id,
        label: node.name,
        noteType: node.noteType,
        levelIndex: node.levelIndex
      }));
    },

    // 判断是否显示已选区域的更多按钮
    shouldShowSelectedMore() {
      return this.selectedHasOverflow && this.selectedPath.length > 0;
    },

    // 节点索引：id -> { node, levelIndex }，避免每次查找都遍历全部层级
    nodeIndexMap() {
      const map = new Map();
      this.levels.forEach((level, levelIndex) => {
        if (!level || !level.nodes) return;
        level.nodes.forEach((node) => {
          if (!map.has(node.id)) {
            map.set(node.id, { node, levelIndex });
          }
        });
      });
      return map;
    },

    // 父节点索引：parentId -> 子节点数组
    childrenMap() {
      const map = new Map();
      this.levels.forEach((level) => {
        if (!level || !level.nodes) return;
        level.nodes.forEach((node) => {
          if (node.parentId === undefined || node.parentId === null) return;
          const list = map.get(node.parentId);
          if (list) {
            list.push(node);
          } else {
            map.set(node.parentId, [node]);
          }
        });
      });
      return map;
    },

    // 已选节点 id 集合，替代 selectedNodes.some() 线性查找
    selectedIdSet() {
      return new Set(this.selectedNodes.map((node) => node.id));
    },

    // 全部节点的勾选状态：id -> { checked, indeterminate }
    // 统一自底向上计算一次并缓存，替代模板里反复递归判断（原实现存在指数级重复计算）
    nodeStateMap() {
      const childrenMap = this.childrenMap;
      const selectedIdSet = this.selectedIdSet;
      const nodeIndexMap = this.nodeIndexMap;
      const cache = new Map();

      const resolveState = (node, levelIndex, visiting) => {
        const cached = cache.get(node.id);
        if (cached) return cached;
        // 兜底防止脏数据导致的循环引用
        if (visiting.has(node.id)) return EMPTY_NODE_STATE;

        visiting.add(node.id);

        const children = childrenMap.get(node.id) || EMPTY_ARRAY;
        const directChecked = selectedIdSet.has(node.id);
        let checked = directChecked;
        let indeterminate = false;

        if (children.length > 0) {
          const states = children.map((child) => {
            const info = nodeIndexMap.get(child.id);
            return resolveState(child, info ? info.levelIndex : levelIndex + 1, visiting);
          });

          const markedCount = states.filter((item) => item.checked || item.indeterminate).length;
          const fullCount = states.filter((item) => item.checked).length;

          // 联动开启且子节点全部选中时，父节点自动置为选中
          if (!directChecked && this.getCascadeSelectConfig(levelIndex) && fullCount === children.length) {
            checked = true;
          }

          // 半选中仅多选模式生效
          if (this.getSelectionMode(levelIndex) !== 'single') {
            indeterminate = !checked && markedCount > 0 && markedCount < children.length;
          }
        }

        visiting.delete(node.id);

        const state = { checked, indeterminate };
        cache.set(node.id, state);
        return state;
      };

      nodeIndexMap.forEach(({ node, levelIndex }) => {
        resolveState(node, levelIndex, new Set());
      });

      return cache;
    },

    // 可见的已选节点（溢出时只显示前几个）
    visibleSelectedItems() {
      if (!this.selectedHasOverflow) {
        return this.selectedPath;
      }
      // 使用动态计算的可见数量
      return this.selectedPath.slice(0, this.visibleCount);
    },

    // 展开面板中当前层级的全部节点
    expandedLevelNodes() {
      if (this.expandedLevelIndex < 0 || !this.levels[this.expandedLevelIndex]) {
        return [];
      }
      return this.levels[this.expandedLevelIndex].nodes || [];
    },

    // 按首字母分组后的节点集合：[{ letter, nodes }]
    // 分组顺序：A-Z 升序，'#'(数字/其他) 排在最后
    letterGroups() {
      const groups = {};
      this.expandedLevelNodes.forEach((node) => {
        const letter = this.getNodeLetterKey(node.name);
        if (!groups[letter]) {
          groups[letter] = [];
        }
        groups[letter].push(node);
      });

      const letters = Object.keys(groups);
      const letterList = letters.filter((l) => l !== '#').sort();
      if (letters.includes('#')) {
        letterList.push('#');
      }

      return letterList.map((letter) => ({
        letter,
        nodes: groups[letter]
      }));
    },

    // 左侧首字母索引：[{ letter, count }]
    letterIndexList() {
      return this.letterGroups.map((group) => ({
        letter: group.letter,
        count: group.nodes.length
      }));
    },

    // 过滤后的层级节点（用于主搜索框）
    filteredLevels() {
      // 如果是远程搜索模式，直接使用 levels（已经从远程获取）
      if (this.remoteSearch) {
        return this.levels;
      }

      // 本地搜索模式
      if (!this.searchKeyword) {
        return this.levels;
      }

      const keyword = this.searchKeyword.toLowerCase();
      return this.levels.map((level) => ({
        ...level,
        nodes: level.nodes.filter((node) => {
          return node.name && node.name.toLowerCase().includes(keyword);
        })
      }));
    }
  },

  watch: {
    initialNodes: {
      handler(newVal) {
        if (newVal && newVal.length > 0 && this.levels.length === 0) {
          this.initLevels();
          // 如果启用了自动选中第一项，则选中顶级节点的第一个
          if (this.autoSelectFirst && newVal.length > 0) {
            this.$nextTick(() => {
              this.selectFirstNode();
            });
          }
        }
      },
      immediate: true
    },

    // 监听选中节点变化，检查溢出
    selectedNodes: {
      handler() {
        this.$nextTick(this.checkSelectedOverflow);
      },
      deep: true
    },

    // 监听层级变化，层级被截断或节点刷新时收起已失效的展开面板
    'levels.length'(newLen) {
      if (this.expandedLevelIndex >= newLen) {
        this.closeExpandPanel();
      }
    },

    // 层级数据变化后重新测量是否溢出（避免在渲染函数中产生副作用）
    levels() {
      this.$nextTick(this.checkAllLevelsOverflow);
    },

    // 本地搜索过滤后行内节点数量变化，需要重新测量
    searchKeyword() {
      this.$nextTick(this.checkAllLevelsOverflow);
    },

    // 展开层级节点变化时，重置高亮的首字母
    letterIndexList() {
      if (this.expandedLevelIndex < 0) return;
      if (!this.letterIndexList.some((item) => item.letter === this.activeLetter)) {
        this.activeLetter = this.letterIndexList.length ? this.letterIndexList[0].letter : '';
      }
    }
  },

  mounted() {
    // 浮层定位相关监听：窗口/容器变化、点击外部关闭
    document.addEventListener('click', this.handleDocumentClick, true);
    window.addEventListener('resize', this.handleResize);
    window.addEventListener('scroll', this.handleWindowScroll, true);
    // 首次渲染后测量各层级溢出情况
    this.$nextTick(this.checkAllLevelsOverflow);
  },

  beforeDestroy() {
    document.removeEventListener('click', this.handleDocumentClick, true);
    window.removeEventListener('resize', this.handleResize);
    window.removeEventListener('scroll', this.handleWindowScroll, true);
    if (this.scrollRaf) {
      cancelAnimationFrame(this.scrollRaf);
      this.scrollRaf = null;
    }
    if (this.searchTimer) {
      clearTimeout(this.searchTimer);
      this.searchTimer = null;
    }
  },

  methods: {
    // 初始化层级
    initLevels() {
      // 从第一个节点获取 noteType
      const firstNode = this.initialNodes[0];
      const nodeType = firstNode ? firstNode.noteType : 1;

      // 树数据重建，旧的子节点缓存已失效
      this.childrenCache = {};

      this.levels = [
        {
          label: this.getLabelByNoteType(nodeType),
          nodes: this.initialNodes.map((node) => ({
            ...node,
            loading: false
          })),
          hasMore: false, // 第一层没有更多按钮
          nodeType // 使用节点实际的 noteType
        }
      ];

      // 保存原始层级数据，用于远程搜索清空时恢复
      if (this.remoteSearch) {
        this.originalLevels = JSON.parse(JSON.stringify(this.levels));
      }
    },

    // 远程搜索处理
    handleRemoteSearch() {
      // 如果不是远程搜索模式，不处理
      if (!this.remoteSearch) {
        return;
      }

      const keyword = this.searchKeyword;

      // 清除之前的定时器
      if (this.searchTimer) {
        clearTimeout(this.searchTimer);
      }

      // 如果搜索关键词为空，恢复原始数据
      if (!keyword || keyword.trim() === '') {
        this.levels = JSON.parse(JSON.stringify(this.originalLevels));
        return;
      }

      // 防抖：300ms 后执行搜索
      this.searchTimer = setTimeout(() => {
        this.performRemoteSearch(keyword.trim());
      }, 300);
    },

    // 执行远程搜索：发送事件到父组件，由父组件发起请求，
    // 父组件通过回调函数把结果传回：callback(treeData) 成功、callback(null, error) 失败
    performRemoteSearch(keyword) {
      if (!this.remoteSearch) return;

      this.searchLoading = true;

      // 兜底定时器：若父组件未回传结果，超时后自动结束 loading，避免一直转圈
      if (this.searchLoadingTimer) {
        clearTimeout(this.searchLoadingTimer);
      }
      this.searchLoadingTimer = setTimeout(() => {
        this.searchLoading = false;
        this.searchLoadingTimer = null;
      }, 30000);

      // 通知父组件执行远程搜索，并等待其回传结果
      this.$emit('remote-search', keyword, (treeData, error) => {
        this.searchLoading = false;
        if (this.searchLoadingTimer) {
          clearTimeout(this.searchLoadingTimer);
          this.searchLoadingTimer = null;
        }

        // 父组件回传了错误
        if (error) {
          console.error('远程搜索失败:', error);
          this.$message.error(typeof error === 'string' ? error : '搜索失败，请重试');
          return;
        }

        // 解析树数据，构建层级
        if (treeData && Array.isArray(treeData)) {
          this.parseRemoteTreeData(treeData);
        }
      });
    },

    // 解析远程树数据
    parseRemoteTreeData(treeData) {
      // 清空当前层级
      this.levels = [];

      // 递归解析树数据
      const parseNode = (node, levelIndex = 0) => {
        // 确保节点有必要的字段
        const parsedNode = {
          id: node.id,
          name: node.name || node.label,
          loading: false,
          ...node
        };

        // 添加到对应层级
        if (!this.levels[levelIndex]) {
          const nodeType = this.getNodeTypeByLevel(levelIndex);
          this.levels[levelIndex] = {
            label: this.getLabelByNoteType(nodeType),
            nodes: [],
            hasMore: false,
            nodeType
          };
        }

        this.levels[levelIndex].nodes.push(parsedNode);

        // 递归处理子节点
        if (node.children && Array.isArray(node.children)) {
          node.children.forEach((child) => {
            parseNode(child, levelIndex + 1);
          });
        }
      };

      // 解析所有根节点
      treeData.forEach((rootNode) => {
        parseNode(rootNode, 0);
      });
    },

    // 根据层级索引获取节点类型（使用节点实际的 noteType）
    getNodeTypeByLevel(levelIndex) {
      const level = this.levels[levelIndex];
      if (level && level.nodeType !== undefined) {
        return level.nodeType;
      }
      // 默认返回
      return 1;
    },

    // 获取节点的勾选状态（从 nodeStateMap 中一次读取）
    getNodeState(node) {
      return this.nodeStateMap.get(node.id) || EMPTY_NODE_STATE;
    },

    // 判断节点是否被直接选中
    isChecked(node) {
      return this.selectedIdSet.has(node.id);
    },

    // 判断节点是否为半选中状态
    isIndeterminate(node, levelIndex) {
      if (this.getSelectionMode(levelIndex) === 'single') return false;
      return this.getNodeState(node).indeterminate;
    },

    // 判断节点是否应该显示为勾选状态（包括因为子节点全选而自动勾选）
    shouldCheckNode(node) {
      return this.getNodeState(node).checked;
    },

    // 判断节点是否有选中状态（直接选中、半选中、或自动选中）
    hasAnyCheckedState(node) {
      if (this.isChecked(node)) return true;
      const state = this.getNodeState(node);
      return state.checked || state.indeterminate;
    },

    // 根据父节点ID获取所有子节点
    getChildrenByParentId(parentId) {
      return this.childrenMap.get(parentId) || EMPTY_ARRAY;
    },

    // 获取指定层级的联动配置
    getCascadeSelectConfig(levelIndex) {
      if (typeof this.cascadeSelect === 'object') {
        return this.cascadeSelect[levelIndex] !== false;
      }
      return this.cascadeSelect !== false;
    },

    // 获取指定层级的选择模式
    // 获取选择模式
    getSelectionMode(levelIndex) {
      // 如果是对象配置，使用节点类型（noteType）配置
      if (typeof this.selectionMode === 'object') {
        // 从 levels 中获取当前层级的 nodeType
        const level = this.levels[levelIndex];

        if (!level || !level.nodeType) {
          return 'single';
        }

        const nodeType = level.nodeType;

        // 使用节点类型配置
        if (this.selectionMode[nodeType] !== undefined) {
          return this.selectionMode[nodeType];
        }

        return 'single';
      }

      return this.selectionMode;
    },

    // 创建带 getParentNode 方法的节点对象
    createNodeWithParent(node, levelIndex) {
      return {
        ...node,
        levelIndex,
        // 获取父节点的方法
        getParentNode: () => {
          if (node.parentId && levelIndex > 0) {
            const parentLevel = this.levels[levelIndex - 1];
            if (parentLevel && parentLevel.nodes) {
              return parentLevel.nodes.find((n) => n.id === node.parentId) || null;
            }
          }
          return null;
        }
      };
    },

    // 判断子节点是否为混合类型
    isMixedNodeTypes(children) {
      if (!children || children.length === 0) return false;
      const noteTypes = [...new Set(children.map((c) => c.noteType))];
      return noteTypes.length > 1;
    },

    // 在 levels 中查找节点
    findNodeInLevels(nodeId) {
      const found = this.nodeIndexMap.get(nodeId);
      return found ? { node: found.node, levelIndex: found.levelIndex } : { node: null, levelIndex: -1 };
    },

    // 设置节点加载状态
    setNodeLoading(nodeId, levelIndex, loading) {
      const nodeIndex = this.levels[levelIndex].nodes.findIndex((n) => n.id === nodeId);
      if (nodeIndex !== -1) {
        const currentNode = this.levels[levelIndex].nodes[nodeIndex];
        this.$set(this.levels[levelIndex].nodes, nodeIndex, {
          ...currentNode,
          loading
        });
      }
    },

    // 勾选框变化
    handleCheckChange(node, levelIndex, checked) {
      const mode = this.getSelectionMode(levelIndex);

      if (mode === 'none') return;

      let clickedNode = null;

      if (checked) {
        if (mode === 'single') {
          // 单选模式：清除同层级的其他选中项
          this.selectedNodes = this.selectedNodes.filter((n) => n.levelIndex !== levelIndex);
          clickedNode = this.createNodeWithParent(node, levelIndex);
          this.selectedNodes.push(clickedNode);
        } else {
          // 多选模式：直接添加
          const newNode = this.createNodeWithParent(node, levelIndex);
          this.selectedNodes.push(newNode);

          // 如果启用联动，自动选中所有子节点，并向上同步祖先节点状态
          if (this.getCascadeSelectConfig(levelIndex)) {
            this.selectAllChildren(node, levelIndex);
            this.updateAncestorsState({ ...node, levelIndex });
          }
        }
      } else {
        // 取消选中
        this.selectedNodes = this.selectedNodes.filter((n) => n.id !== node.id);

        // 如果启用联动，取消选中所有子节点
        if (this.getCascadeSelectConfig(levelIndex)) {
          this.deselectAllChildren(node, levelIndex);
        }

        // 单选模式：取消选中时，将祖先节点标记为半选中状态，不影响祖先节点选中状态
        if (mode === 'single' && this.getCascadeSelectConfig(levelIndex)) {
          this.markAncestorsAsIndeterminate({ ...node, levelIndex });
        } else if (mode === 'multiple' && this.getCascadeSelectConfig(levelIndex)) {
          // 多选模式：向上更新祖先节点的选中状态
          this.updateAncestorsState({ ...node, levelIndex });
        }
      }
      this.emitChange(clickedNode, levelIndex);
    },

    // 选中所有子节点（递归）
    selectAllChildren(node, levelIndex) {
      const children = this.getChildrenByParentId(node.id);
      const childLevelIndex = levelIndex + 1;

      children.forEach((child) => {
        if (!this.isChecked(child)) {
          this.selectedNodes.push(this.createNodeWithParent(child, childLevelIndex));
        }
        // 递归选中子节点的子节点
        this.selectAllChildren(child, childLevelIndex);
      });
    },

    // 取消选中所有子节点（递归）
    deselectAllChildren(node, levelIndex) {
      const children = this.getChildrenByParentId(node.id);
      const childLevelIndex = levelIndex + 1;

      children.forEach((child) => {
        this.selectedNodes = this.selectedNodes.filter((n) => n.id !== child.id);
        // 递归取消选中子节点的子节点
        this.deselectAllChildren(child, childLevelIndex);
      });
    },

    // 更新祖先节点的选中状态
    updateAncestorsState(node) {
      if (!this.getCascadeSelectConfig(node.levelIndex)) return;

      // 查找父节点
      const parentNode = this.findParentNode(node);

      if (!parentNode) return;

      const parentLevelIndex = node.levelIndex - 1;
      if (parentLevelIndex < 0) return;

      // 获取父节点的所有子节点
      const siblings = this.getChildrenByParentId(parentNode.id);

      // 检查所有兄弟节点的状态
      const allChecked = siblings.every((sibling) => this.shouldCheckNode(sibling));
      const anyChecked = siblings.some((sibling) => this.hasAnyCheckedState(sibling));

      if (allChecked) {
        // 所有子节点都选中，自动选中父节点
        if (!this.isChecked(parentNode)) {
          this.selectedNodes.push(this.createNodeWithParent(parentNode, parentLevelIndex));
        }
        // 继续向上更新
        this.updateAncestorsState(this.createNodeWithParent(parentNode, parentLevelIndex));
      } else if (!anyChecked) {
        // 所有子节点都不选中，取消父节点
        if (this.isChecked(parentNode)) {
          this.selectedNodes = this.selectedNodes.filter((n) => n.id !== parentNode.id);
        }
        // 继续向上更新
        this.updateAncestorsState(this.createNodeWithParent(parentNode, parentLevelIndex));
      } else {
        // 即使父节点是半选中，也要继续向上更新祖先节点
        this.updateAncestorsState(this.createNodeWithParent(parentNode, parentLevelIndex));
      }
    },

    // 查找节点的父节点
    findParentNode(node) {
      if (!node.parentId) return null;
      const found = this.nodeIndexMap.get(node.parentId);
      return found ? found.node : null;
    },

    // 将祖先节点标记为半选中状态
    markAncestorsAsIndeterminate(node) {
      // 查找父节点
      const parentNode = this.findParentNode(node);

      if (!parentNode) return;

      const parentLevelIndex = node.levelIndex - 1;
      if (parentLevelIndex < 0) return;

      // 将父节点设置为半选中状态
      this.$set(parentNode, 'indeterminate', true);
      this.$set(parentNode, 'checked', false);

      // 确保父节点不在 selectedNodes 中（如果之前被全选了）
      this.selectedNodes = this.selectedNodes.filter((n) => n.id !== parentNode.id);

      // 继续向上标记祖先节点
      this.markAncestorsAsIndeterminate(this.createNodeWithParent(parentNode, parentLevelIndex));
    },

    // 根据节点获取层级索引
    getLevelIndexByNode(node) {
      const found = this.nodeIndexMap.get(node.id);
      return found ? found.levelIndex : -1;
    },

    // 文字点击 - 加载子节点或选中节点
    handleLabelClick(node, levelIndex) {
      const mode = this.getSelectionMode(levelIndex);

      // 单选模式：先选中节点，清空后续层级，再加载子节点
      if (mode === 'single') {
        // 清除当前层级及之后的所有选中节点
        this.selectedNodes = this.selectedNodes.filter((n) => n.levelIndex < levelIndex);

        // 添加当前点击的节点（保留路径上的所有父节点）
        const clickedNode = this.createNodeWithParent(node, levelIndex);
        this.selectedNodes.push(clickedNode);

        // 清空该层级之后的所有层级
        this.levels = this.levels.slice(0, levelIndex + 1);

        this.emitChange(clickedNode);
      }

      // 多选模式：只加载子节点，不改变选中状态
      // （选中状态由 checkbox 控制）

      // none 模式：不可选中，但可以加载子节点

      // 已加载过子节点：直接复用缓存重建层级，不再发起请求
      if (this.applyCachedChildren(node, levelIndex)) {
        return;
      }

      this.requestChildren(node, levelIndex);
    },

    // 请求指定节点的子节点数据，写入缓存后重建后续层级
    requestChildren(node, levelIndex) {
      // 如果该节点正在加载，不重复加载
      if (node.loading) return;

      // 清空该层级之后的所有层级（多选和 none 模式也需要）
      this.levels = this.levels.slice(0, levelIndex + 1);

      // 显示加载状态
      this.setNodeLoading(node.id, levelIndex, true);

      try {
        // 发送事件请求子节点数据
        this.$emit('load-children', {
          node,
          levelIndex,
          callback: (children, noteType) => {
            // 异步回调到达后再复位加载状态，避免异步请求时状态提前消失
            this.setNodeLoading(node.id, levelIndex, false);

            const list = Array.isArray(children) ? children : [];
            const mixed = this.isMixedNodeTypes(list);

            // 缓存结果（含空结果），避免再次点击时重复请求
            this.setChildrenCache(node.id, list, noteType, mixed);

            if (list.length === 0) return;

            // 判断是否为混合类型并添加层级
            if (mixed) {
              this.addMultipleLevels(levelIndex + 1, list, node.id);
            } else {
              this.addLevel(levelIndex + 1, list, noteType, node.id);
            }
          }
        });
      } catch (error) {
        console.error('加载子节点失败:', error);
        this.setNodeLoading(node.id, levelIndex, false);
      }
    },

    // 判断指定节点是否已缓存过子节点数据
    hasChildrenCache(nodeId) {
      return Object.prototype.hasOwnProperty.call(this.childrenCache, nodeId);
    },

    // 写入子节点缓存
    setChildrenCache(nodeId, children, noteType, mixed) {
      this.$set(this.childrenCache, nodeId, {
        children: children || [],
        noteType,
        mixed: !!mixed
      });
    },

    // 清空子节点缓存（不传 nodeId 则清空全部）
    clearChildrenCache(nodeId) {
      if (nodeId === undefined || nodeId === null) {
        this.childrenCache = {};
        return;
      }
      this.$delete(this.childrenCache, nodeId);
    },

    // 复用已缓存的子节点数据重建后续层级，返回是否命中缓存
    applyCachedChildren(node, levelIndex) {
      if (!this.hasChildrenCache(node.id)) return false;

      const cached = this.childrenCache[node.id];

      // 截断该层级之后的所有层级
      this.levels = this.levels.slice(0, levelIndex + 1);

      // 缓存为空结果，说明该节点没有子节点
      if (!cached.children || cached.children.length === 0) return true;

      if (cached.mixed) {
        this.addMultipleLevels(levelIndex + 1, cached.children, node.id);
      } else {
        this.addLevel(levelIndex + 1, cached.children, cached.noteType, node.id);
      }

      return true;
    },

    // 根据 noteType 查找标签配置项（key 对应 noteType，level 仅用于排序）
    findLabelItemByNoteType(noteType) {
      return this.nodeTypeLabels.find((item) => {
        const key = item.key !== undefined ? item.key : item.level;
        return key === noteType;
      });
    },

    // 获取标签配置项的排序值（未配置时排最后）
    getLabelSortLevel(noteType) {
      const labelItem = this.findLabelItemByNoteType(noteType);
      if (labelItem && labelItem.level !== undefined) return labelItem.level;
      return Number.MAX_SAFE_INTEGER;
    },

    // 根据 noteType 获取标签
    getLabelByNoteType(noteType) {
      const labelItem = this.findLabelItemByNoteType(noteType);
      return labelItem ? labelItem.label : `未命名(${noteType})`;
    },

    // 添加新层级
    addLevel(levelIndex, children, noteType, parentId) {
      // 只移除该层级之后的所有层级（不清除选中状态）
      this.levels = this.levels.slice(0, levelIndex);

      this.levels.push({
        label: this.getLabelByNoteType(noteType),
        nodes: children.map((node) => ({
          ...node,
          loading: false,
          parentId
        })),
        nodeType: noteType // 使用 nodeType 而不是 noteType
      });

      // 不再触发 change 事件，由调用方决定是否需要通知父组件
      // this.emitChange()
    },

    // 添加多个层级（用于混合类型的子节点）
    addMultipleLevels(levelIndex, children, parentId) {
      // 按 noteType 分组
      const groupedByType = {};
      children.forEach((child) => {
        if (!groupedByType[child.noteType]) {
          groupedByType[child.noteType] = [];
        }
        groupedByType[child.noteType].push(child);
      });

      // 获取所有 noteType 并按 nodeTypeLabels 中的 level 排序
      const noteTypes = Object.keys(groupedByType).map(Number);
      const sortedNoteTypes = noteTypes.sort((a, b) => this.getLabelSortLevel(a) - this.getLabelSortLevel(b));

      // 只移除该层级之后的所有层级
      this.levels = this.levels.slice(0, levelIndex);

      // 依次添加每个类型的层级
      sortedNoteTypes.forEach((noteType) => {
        this.levels.push({
          label: this.getLabelByNoteType(noteType),
          nodes: groupedByType[noteType].map((node) => ({
            ...node,
            loading: false,
            parentId
          })),
          hasMore: false,
          nodeType: noteType // 使用 nodeType 而不是 noteType
        });
      });
    },

    // 移除后代节点
    removeDescendants(node) {
      // 递归查找并移除所有后代节点
      const descendantIds = this.findAllDescendants(node.id);

      // 从 selectedNodes 中移除这些后代节点
      this.selectedNodes = this.selectedNodes.filter((n) => !descendantIds.has(n.id));

      // 注意：不清空层级！
      // 层级应该保留，因为：
      // 1. 其他兄弟节点可能还在那个层级
      // 2. 用户可能想选择其他节点
      // 3. 只有当父节点被取消选中时，才需要清空子层级（这在 handleCheckChange 中处理）
    },

    // 查找所有后代节点的 ID（Set 结构，避免 includes 的线性查找）
    findAllDescendants(parentId) {
      const descendants = new Set();
      const children = this.getChildrenByParentId(parentId);

      children.forEach((child) => {
        descendants.add(child.id);
        // 递归查找子节点的后代
        this.findAllDescendants(child.id).forEach((id) => descendants.add(id));
      });

      return descendants;
    },

    // 清空指定层级之后的选中
    clearSelectionAfterLevel(levelIndex) {
      this.selectedNodes = this.selectedNodes.filter((n) => n.levelIndex <= levelIndex);
    },

    // 移除已选项
    removeSelected(index) {
      const node = this.selectedNodes[index];
      if (!node) return;

      // 移除该节点及其所有后代
      this.selectedNodes.splice(index, 1);
      this.removeDescendants(node);

      // 注意：单选模式下通过叉号移除节点时，不需要处理祖先节点
      // 因为祖先节点是路径上的父节点，它们不应该被移除
      // 只有多选模式下才需要联动更新祖先节点状态

      // 移除后代节点后，levels 已经被 removeDescendants 处理过了
      // 不需要再次截断 levels

      this.emitChange();
    },

    // 重置（保留层级结构，仅清空选中）
    handleReset() {
      // 收起展开面板
      this.closeExpandPanel();
      this.clearAllSelected();
    },

    // 发送变化事件
    emitChange(clickedNode = null, levelIndex = -1) {
      const changeData = {
        selectedNodes: this.selectedNodes,
        levels: this.levels
      };

      // 如果是单选模式且有点击节点，添加 clickedNode
      if (clickedNode) {
        changeData.clickedNode = clickedNode;
      }

      // 如果是多选模式，添加 checkedNodes（当前层级的所有已勾选节点）
      const currentLevelIndex = clickedNode ? clickedNode.levelIndex : levelIndex;
      if (currentLevelIndex >= 0 && this.getSelectionMode(currentLevelIndex) === 'multiple') {
        changeData.checkedNodes = this.selectedNodes.filter((n) => n.levelIndex === currentLevelIndex);
      }

      this.$emit('change', changeData);
    },

    // 刷新指定节点的子节点（强制重新请求并覆盖缓存）
    refreshNodeChildren(nodeId) {
      // 在 levels 中查找节点
      const { node: targetNode, levelIndex } = this.findNodeInLevels(nodeId);

      // 如果没有找到节点，返回
      if (!targetNode || levelIndex === -1) {
        console.warn(`未找到节点: ${nodeId}。请先点击该节点加载子节点后再刷新。`);
        return;
      }

      // 如果该节点正在加载，不重复加载
      if (targetNode.loading) {
        console.warn(`节点正在加载中: ${nodeId}`);
        return;
      }

      try {
        // 丢弃旧缓存，保证本次请求结果覆盖原数据
        this.clearChildrenCache(nodeId);
        this.requestChildren(targetNode, levelIndex);
      } catch (error) {
        console.error('刷新子节点失败:', error);
        this.setNodeLoading(nodeId, levelIndex, false);
      }
    },

    // 判断当前层级是否已展开
    isExpanded(levelIndex) {
      return this.expandedLevelIndex === levelIndex;
    },

    // 展开/收起当前层级下方的选择面板
    toggleExpand(levelIndex) {
      if (this.expandedLevelIndex === levelIndex) {
        this.closeExpandPanel();
        return;
      }
      this.expandedLevelIndex = levelIndex;
      this.activeLetter = this.letterIndexList.length ? this.letterIndexList[0].letter : '';

      // 浮层渲染后计算位置
      this.$nextTick(() => {
        this.updatePanelPosition();
      });
    },

    // 收起面板
    closeExpandPanel() {
      this.expandedLevelIndex = -1;
      this.activeLetter = '';
      this.panelStyle = { top: '-9999px', left: '-9999px' };
    },

    // 计算展开面板浮层的位置（基于当前层级行，脱离文档流）
    updatePanelPosition() {
      if (this.expandedLevelIndex < 0) return;

      const block = this.$el.querySelector(`.level-block:nth-child(${this.expandedLevelIndex + 1})`);
      if (!block) return;

      const row = block.querySelector('.selector-row');
      if (!row) return;

      const rect = row.getBoundingClientRect();

      // 行已滚出视口，直接收起
      if (rect.bottom < 0 || rect.top > window.innerHeight) {
        this.closeExpandPanel();
        return;
      }

      const panel = this.getPanelEl();
      const panelHeight = panel ? panel.offsetHeight : 360;
      const indent = 62; // 与行内 label 的宽度对齐
      const gap = 4;

      // 宽度：跟随行宽，最小 320，且不超过视口剩余空间
      const available = Math.max(window.innerWidth - rect.left - indent - 16, 240);
      const width = Math.min(Math.max(rect.width - indent, 320), available);

      // 默认展示在行下方，下方空间不足且上方空间足够时向上翻转
      let top = rect.bottom + gap;
      if (panelHeight + gap * 2 > window.innerHeight - rect.bottom && rect.top > panelHeight + gap * 2) {
        top = rect.top - panelHeight - gap;
      }

      this.panelStyle = {
        top: `${Math.round(top)}px`,
        left: `${Math.round(rect.left + indent)}px`,
        width: `${Math.round(width)}px`
      };
    },

    // 滚动时同步浮层位置（rAF 节流）
    handleWindowScroll() {
      if (this.expandedLevelIndex < 0) return;
      if (this.scrollRaf) return;
      this.scrollRaf = requestAnimationFrame(() => {
        this.scrollRaf = null;
        this.updatePanelPosition();
      });
    },

    // 点击浮层外部收起面板（点击展开按钮由按钮自身处理）
    handleDocumentClick(e) {
      if (this.expandedLevelIndex < 0) return;

      const panel = this.getPanelEl();
      if (panel && panel.contains(e.target)) return;

      if (e.target && e.target.closest && e.target.closest('.expand-btn')) return;

      this.closeExpandPanel();
    },

    // 获取节点名称的首字母（用于索引分组）
    // 中文取拼音首字母，英文字母取大写，数字及其他归为 '#'
    getNodeLetterKey(name) {
      const str = String(name || '').trim();
      if (!str) return '#';

      const cached = LETTER_CACHE.get(str);
      if (cached) return cached;

      return this.resolveLetterKey(str);
    },

    // 计算并缓存首字母（拼音转换较重，同名节点直接复用结果）
    resolveLetterKey(str) {
      const first = str.charAt(0);
      // 数字、符号等默认归入 '#'
      let letter = '#';

      if (/[\u4e00-\u9fa5]/.test(first)) {
        // 中文：转拼音首字母
        const arr = pinyin(first, { pattern: 'first', toneType: 'none', type: 'array' });
        const initial = arr && arr[0] ? String(arr[0]).charAt(0).toUpperCase() : '';
        if (/[A-Z]/.test(initial)) letter = initial;
      } else if (/[a-zA-Z]/.test(first)) {
        // 英文字母
        letter = first.toUpperCase();
      }

      LETTER_CACHE.set(str, letter);
      return letter;
    },

    // 统一处理 v-for 中 ref 可能为数组的情况
    resolveRef(name) {
      const ref = this.$refs[name];
      return Array.isArray(ref) ? ref[0] : ref;
    },

    // 获取展开面板元素
    getPanelEl() {
      return this.resolveRef('expandPanel');
    },

    // 获取右侧节点滚动容器
    getNodesContainer() {
      return this.resolveRef('panelNodes');
    },

    // 窗口尺寸变化：同步浮层位置并重新测量溢出
    handleResize() {
      this.updatePanelPosition();
      this.checkAllLevelsOverflow();
      this.checkSelectedOverflow();
    },

    // 点击首字母：滚动到该字母分组并高亮
    scrollToLetter(letter) {
      this.activeLetter = letter;
      this.$nextTick(() => {
        const container = this.getNodesContainer();
        const el = this.$el.querySelector(`.node-group[data-letter="${letter}"]`);
        if (!el || !container) return;
        container.scrollTop = el.offsetTop;
      });
    },

    // 列表滚动时同步高亮当前首字母
    handleNodesScroll() {
      const container = this.getNodesContainer();
      if (!container) return;

      const anchors = this.$el.querySelectorAll('.node-group[data-letter]');
      if (anchors.length === 0) return;

      const scrollTop = container.scrollTop;
      let current = anchors[0].getAttribute('data-letter');

      anchors.forEach((el) => {
        if (el.offsetTop <= scrollTop + 4) {
          current = el.getAttribute('data-letter');
        }
      });

      this.activeLetter = current;
    },

    // 展开面板中节点点击
    // 单选模式：选中后自动收起面板；多选模式：保持展开，由用户手动收起
    handlePanelItemClick(node, levelIndex) {
      const mode = this.getSelectionMode(levelIndex);

      // 多选模式由 checkbox 自己处理，避免重复触发
      if (mode === 'multiple') return;

      this.handleLabelClick(node, levelIndex);

      // 单选（及 none）模式：选择后自动收起
      if (this.expandedLevelIndex === levelIndex) {
        this.closeExpandPanel();
      }
    },

    // 判断是否显示更多按钮（节点溢出时）
    shouldShowMoreButton(levelIndex) {
      // 第一层不显示
      if (levelIndex === 0) return false;

      const level = this.levels[levelIndex];
      // 无节点或节点较少时不显示（经验值 <= 3）
      if (!level || level.nodes.length <= 3) return false;

      // 溢出标记由 checkOverflow 测量后写入
      return !!this.levels[levelIndex].hasOverflow;
    },

    // 检查所有层级的节点是否溢出
    checkAllLevelsOverflow() {
      this.levels.forEach((level, levelIndex) => {
        this.checkOverflow(levelIndex);
      });
    },

    // 检查指定层级的节点是否溢出（结果写入 level.hasOverflow）
    checkOverflow(levelIndex) {
      if (levelIndex <= 0) return;

      this.$nextTick(() => {
        const block = this.$el.querySelector(`.level-block:nth-child(${levelIndex + 1})`);
        if (!block) return;

        const row = block.querySelector('.selector-row');
        const container = row && row.querySelector('.options-container');
        const rowLabel = row && row.querySelector('.row-label');
        const expandBtn = block.querySelector('.expand-btn');

        if (!container) return;

        // 计算所有节点的总宽度（含节点之间的间距 gap: 12px）
        const items = container.querySelectorAll('.option-item');
        if (items.length === 0) return;
        let totalWidth = (items.length - 1) * 12;

        items.forEach((item) => {
          totalWidth += item.offsetWidth;
        });

        // 预留展开按钮与层级标签占用的宽度（按钮未渲染时使用经验值）
        const btnWidth = expandBtn ? expandBtn.offsetWidth + 16 : 48;
        const labelWidth = rowLabel ? rowLabel.offsetWidth + 12 : 62;

        // 判断是否溢出（节点总宽度 > 扣除标签与按钮后的可用宽度）
        const hasOverflow = totalWidth > row.clientWidth - labelWidth - btnWidth;

        // 更新溢出标记（仅在结果变化时更新，避免无意义的重渲染）
        if (this.levels[levelIndex] && this.levels[levelIndex].hasOverflow !== hasOverflow) {
          this.$set(this.levels[levelIndex], 'hasOverflow', hasOverflow);
        }
      });
    },

    // 检查已选区域是否溢出
    checkSelectedOverflow() {
      const container = this.$refs.selectedTagsContainer;
      if (!container) return;

      this.$nextTick(() => {
        // 如果没有选中节点，不溢出
        if (this.selectedPath.length === 0) {
          this.selectedHasOverflow = false;
          this.visibleCount = 0;
          return;
        }

        const selectedArea = container.parentElement;
        const rightActions = selectedArea.querySelector('.right-actions');

        // 计算右侧操作区的基础宽度（搜索框 + 重置按钮）
        let rightActionsBaseWidth = 0;
        if (rightActions) {
          // 获取搜索框和重置按钮的宽度
          const searchInput = rightActions.querySelector('.search-input');
          const resetBtn = rightActions.querySelector('.reset-btn');
          if (searchInput) rightActionsBaseWidth += searchInput.offsetWidth;
          if (resetBtn) rightActionsBaseWidth += resetBtn.offsetWidth;
          // 加上间距
          if (searchInput && resetBtn) rightActionsBaseWidth += 12;
        }

        // 如果可能溢出，需要预留“更多”按钮的宽度（约 60px）
        const moreBtnWidth = this.selectedPath.length > 1 ? 60 : 0;

        // 容器可用宽度 = 总宽度 - 右侧操作区 - 更多按钮（如果可能溢出）
        const availableWidth = selectedArea.clientWidth - rightActionsBaseWidth - moreBtnWidth;

        // 计算可以显示多少个 tag
        let totalWidth = 0;
        let visibleCount = 0;

        // 先尝试获取已渲染的标签
        const tags = container.querySelectorAll('.selected-tag');

        for (let i = 0; i < this.selectedPath.length; i++) {
          let tagWidth = 0;

          if (tags.length > 0 && i < tags.length) {
            // 使用已渲染的标签宽度
            tagWidth = tags[i].offsetWidth;
          } else {
            // 如果没有 DOM 元素，使用估算宽度
            // 通过已渲染标签的平均宽度估算
            if (tags.length > 0) {
              let totalTagWidth = 0;
              tags.forEach((tag) => {
                totalTagWidth += tag.offsetWidth;
              });
              tagWidth = totalTagWidth / tags.length;
            } else {
              // 完全首次，使用经验值
              tagWidth = 120;
            }
          }

          const gap = i > 0 ? 8 : 0; // gap: 8px

          if (totalWidth + gap + tagWidth <= availableWidth) {
            totalWidth += gap + tagWidth;
            visibleCount++;
          } else {
            break;
          }
        }

        const hasOverflow = visibleCount < this.selectedPath.length;

        this.selectedHasOverflow = hasOverflow;
        this.visibleCount = visibleCount;
      });
    },

    // 打开已选节点模态框
    openSelectedModal() {
      this.selectedModalVisible = true;
    },

    // 清空所有选中项
    clearAllSelected() {
      this.selectedNodes = [];

      // 重置所有节点的选中状态
      this.levels.forEach((level) => {
        level.nodes.forEach((node) => {
          this.$set(node, 'checked', false);
          this.$set(node, 'indeterminate', false);
        });
      });

      this.emitChange();

      // 重置溢出状态
      this.selectedHasOverflow = false;
      this.visibleCount = 0;
    },

    // 选中顶级节点的第一个
    selectFirstNode() {
      if (!this.levels || this.levels.length === 0) return;

      const firstLevel = this.levels[0];
      if (!firstLevel || !firstLevel.nodes || firstLevel.nodes.length === 0) return;

      const firstNode = firstLevel.nodes[0];
      const mode = this.getSelectionMode(0);

      if (mode === 'single') {
        // 单选模式：直接选中
        const clickedNode = this.createNodeWithParent(firstNode, 0);
        this.selectedNodes.push(clickedNode);
        this.emitChange(clickedNode, 0);
      } else if (mode === 'multiple') {
        // 多选模式：勾选
        this.handleCheckChange(firstNode, 0, true);
      }
    }
  }
};
</script>

<style scoped>
.hierarchical-selector {
  background: #fff;
  border: 1px solid #e8e8e8;
  border-radius: 4px;
  padding: 16px;
}

.selected-area {
  display: flex;
  align-items: center;
  min-height: 40px;
  margin-bottom: 16px;
}

.selected-area .label {
  color: #606266;
  margin-right: 12px;
  font-size: 14px;
  white-space: nowrap;
}

.selected-tags {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: 8px;
  overflow: hidden;
  min-width: 0;
}

.right-actions {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-left: auto;
  flex-shrink: 0;
}

.selected-tag {
  margin: 0;
}

.search-input {
  width: 200px;
}

.reset-btn {
  flex-shrink: 0;
}

.divider {
  height: 1px;
  background: #409eff;
  border: 1px dashed #409eff;
  margin: 12px 0;
  opacity: 0.5;
}

.levels-container {
  max-height: 600px;
  overflow-y: auto;
}

.selector-row {
  display: flex;
  align-items: center;
}

.row-label {
  color: #606266;
  font-size: 14px;
  min-width: 50px;
  margin-right: 12px;
  line-height: 32px;
  white-space: nowrap;
}

.options-container {
  flex: 1;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: 12px;
  overflow: hidden;
  min-width: 0;
}

.option-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  background: #f5f7fa;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  transition: all 0.3s;
}

.option-item:hover {
  border-color: #67c23a;
  background: #f0f9eb;
}

.option-checkbox {
  margin: 0;
  pointer-events: auto;
}

.option-checkbox ::v-deep .sg-checkbox__input {
  pointer-events: auto;
}

.option-label {
  cursor: pointer;
  user-select: none;
  color: #606266;
  font-size: 14px;
  transition: color 0.3s;
  white-space: nowrap;
}

.option-label.is-clickable:hover {
  color: #67c23a;
}

.option-label.is-selected {
  color: #67c23a;
  font-weight: 600;
}

.option-label.is-loading {
  color: #409eff;
}

.option-label .sg-icon-loading {
  margin-right: 4px;
  animation: rotating 1s linear infinite;
}

@keyframes rotating {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.more-btn {
  color: #67c23a;
  font-size: 14px;
  padding: 6px 12px;
  flex-shrink: 0;
  white-space: nowrap;
  margin: 0 8px;
}

.more-btn:hover {
  color: #85ce61;
}

/* 层级展开/收起按钮 */
.expand-btn {
  color: #606266;
  font-size: 16px;
  padding: 6px 10px;
  flex-shrink: 0;
  margin: 0 8px;
  transition: color 0.3s;
}

.expand-btn:hover,
.expand-btn.is-expanded {
  color: #67c23a;
}

.level-block {
  margin-bottom: 12px;
}

.level-block:last-child {
  margin-bottom: 0;
}

/* 展开面板：fixed 浮层，脱离文档流，不挤开下级层级 */
.expand-panel {
  position: fixed;
  z-index: 2000;
  padding: 16px;
  background: #fff;
  border: 1px solid #e4e7ed;
  border-radius: 4px;
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.12);
}

/* 面板主体：左侧字母索引 + 右侧节点列表 */
.panel-body {
  display: flex;
  gap: 12px;
}

/* 左侧首字母索引 */
.panel-letters {
  width: 76px;
  flex-shrink: 0;
  border-right: 1px solid #e4e7ed;
}

.panel-letters-inner {
  max-height: 320px;
  overflow-y: auto;
  padding-right: 8px;
}

.letter-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3px 8px;
  margin-bottom: 2px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 13px;
  color: #606266;
  transition:
    background 0.2s,
    color 0.2s;
}

.letter-item:hover {
  background: #f0f9eb;
  color: #67c23a;
}

.letter-item.is-active {
  background: #67c23a;
  color: #fff;
}

.letter-text {
  font-weight: 600;
}

.letter-count {
  font-size: 12px;
  opacity: 0.7;
}

/* 右侧节点列表（每个首字母一组，组内卡片平铺） */
.panel-nodes {
  position: relative;
  flex: 1;
  min-width: 0;
  max-height: 320px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}

/* 同一首字母的节点：组内平铺换行，组间留出外边距 */
.node-group {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  gap: 8px;
  margin-bottom: 16px;
}

.node-group:last-child {
  margin-bottom: 0;
}

.node-item {
  position: relative;
  display: flex;
  align-items: center;
  gap: 4px;
  width: calc(25% - 6px);
  min-width: 130px;
  padding: 8px 10px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  background: #fff;
  cursor: pointer;
  transition: all 0.2s;
}

.node-item:hover {
  border-color: #67c23a;
  background: #f0f9eb;
}

.node-item.is-selected {
  border-color: #67c23a;
  background: #f0f9eb;
}

.node-item .sg-checkbox {
  margin-right: 0;
  flex: 1;
  min-width: 0;
}

.node-item ::v-deep .sg-checkbox__label {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: middle;
}

.node-name {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.node-label {
  display: flex;
  align-items: center;
  gap: 4px;
  flex: 1;
  min-width: 0;
  font-size: 14px;
  color: #606266;
}

.node-label:hover {
  color: #67c23a;
}

.node-label.is-selected {
  color: #67c23a;
  font-weight: 600;
}

.node-label.is-loading {
  color: #409eff;
}

.panel-empty {
  width: 100%;
  text-align: center;
  padding: 40px 20px;
  color: #909399;
}

.panel-empty i {
  font-size: 48px;
  margin-bottom: 16px;
  display: block;
}

.panel-empty p {
  margin: 0;
  font-size: 14px;
}

/* 已选节点模态框样式 */
.modal-content {
  max-height: 60vh;
  overflow-y: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.selected-modal-item {
  display: inline-block;
  margin: 4px;
}
</style>
