<style lang="scss">
.page-theme-documentation {
  &:last-child {
    margin-bottom: 55px;
  }
  
  h2 {
    font-size: 28px;
    line-height: 28px;
    margin: 0 0 20px 0;
    color: var(--color-text-primary);
  }
  
  h3 {
    font-size: 20px;
    line-height: 20px;
    margin: 30px 0 15px 0;
    color: var(--color-text-primary);
  }
  
  p {
    line-height: 1.8;
    color: var(--color-text-regular);
    margin: 10px 0;
  }
  
  .section {
    margin-bottom: 50px;
    padding: 30px;
    background-color: var(--background-color-page);
    border-radius: 8px;
    border: 1px solid var(--border-color-lighter);
  }
  
  .theme-comparison {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin-top: 20px;
  }
  
  .theme-preview-card {
    padding: 20px;
    border-radius: 8px;
    border: 2px solid var(--border-color-base);
    transition: all 0.3s ease;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: var(--box-shadow-light);
    }
    
    .preview-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 15px;
      padding-bottom: 10px;
      border-bottom: 1px solid var(--border-color-lighter);
      
      h4 {
        margin: 0;
        font-size: 16px;
        color: var(--color-text-primary);
      }
      
      .theme-badge {
        padding: 4px 12px;
        border-radius: 12px;
        font-size: 12px;
        font-weight: bold;
      }
    }
    
    .preview-content {
      .color-palette {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin: 15px 0;
        
        .color-item {
          width: 40px;
          height: 40px;
          border-radius: 4px;
          border: 1px solid var(--border-color-light);
          cursor: pointer;
          position: relative;
          transition: transform 0.2s;
          
          &:hover {
            transform: scale(1.1);
          }
          
          &::after {
            content: attr(data-color);
            position: absolute;
            bottom: -20px;
            left: 50%;
            transform: translateX(-50%);
            font-size: 10px;
            white-space: nowrap;
            opacity: 0;
            transition: opacity 0.2s;
          }
          
          &:hover::after {
            opacity: 1;
          }
        }
      }
      
      .component-demo {
        margin-top: 15px;
        padding: 15px;
        background-color: var(--background-color-base);
        border-radius: 4px;
        
        .demo-buttons {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 10px;
        }
        
        .demo-tags {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }
      }
    }
  }
  
  .code-block {
    background-color: var(--background-color-base);
    border: 1px solid var(--border-color-lighter);
    border-radius: 4px;
    padding: 20px;
    margin: 15px 0;
    overflow-x: auto;
    
    pre {
      margin: 0;
      font-family: 'Consolas', 'Monaco', monospace;
      font-size: 13px;
      line-height: 1.6;
      color: var(--color-text-regular);
    }
    
    code {
      .comment {
        color: #999;
      }
      .keyword {
        color: #017572;
        font-weight: bold;
      }
      .string {
        color: #13ce66;
      }
      .variable {
        color: #ff4949;
      }
    }
  }
  
  .feature-list {
    list-style: none;
    padding: 0;
    margin: 15px 0;
    
    li {
      padding: 10px 0 10px 30px;
      position: relative;
      color: var(--color-text-regular);
      
      &::before {
        content: '✓';
        position: absolute;
        left: 0;
        color: var(--color-success);
        font-weight: bold;
      }
    }
  }
  
  .variable-table {
    width: 100%;
    border-collapse: collapse;
    margin: 15px 0;
    
    th, td {
      padding: 12px;
      text-align: left;
      border-bottom: 1px solid var(--border-color-lighter);
    }
    
    th {
      background-color: var(--background-color-base);
      color: var(--color-text-primary);
      font-weight: 600;
    }
    
    td {
      color: var(--color-text-regular);
    }
    
    code {
      background-color: var(--background-color-base);
      padding: 2px 6px;
      border-radius: 3px;
      font-family: monospace;
      font-size: 12px;
    }
  }
  .gradient_palette{
    display: flex;
  }
}
</style>

<template>
  <div class="page-container page-theme-documentation">
    <!-- 概述部分 -->
    <section class="section">
      <h2>主题系统架构</h2>
      <p>SG-UI 采用基于 CSS 自定义属性（CSS Variables）的动态主题系统，支持多主题无缝切换，无需重新编译样式。</p>
      
      <h3>核心特性</h3>
      <ul class="feature-list">
        <li>纯 CSS 实现，零 JavaScript 运行时开销</li>
        <li>支持无限主题扩展，只需定义新的 CSS 变量集</li>
        <li>使用 color-mix() 函数自动生成颜色渐变</li>
        <li>深色模式完全适配，所有组件视觉协调</li>
        <li>主题切换即时生效，无闪烁</li>
      </ul>
    </section>

    <!-- 主题对比预览 -->
    <section class="section">
      <h2>主题预览对比</h2>
      <p>以下是三个内置主题的实时效果对比：</p>
      
      <div class="theme-comparison">
        <!-- 默认浅色主题 -->
        <div class="theme-preview-card" data-theme="default-theme">
          <div class="preview-header">
            <h4>默认主题</h4>
            <span class="theme-badge" style="background: #017572; color: white;">Light</span>
          </div>
          <div class="preview-content">
            <div class="color-palette">
              <div class="color-item" style="background: #017572;" data-color="#017572"></div>
              <div class="color-item" style="background: #13ce66;" data-color="#13ce66"></div>
              <div class="color-item" style="background: #ffba00;" data-color="#ffba00"></div>
              <div class="color-item" style="background: #ff4949;" data-color="#ff4949"></div>
              <div class="color-item" style="background: #ffffff;" data-color="#fff"></div>
              <div class="color-item" style="background: #333333;" data-color="#333"></div>
            </div>
            <div class="component-demo">
              <div class="demo-buttons">
                <sg-button size="small" type="primary">主要</sg-button>
                <sg-button size="small" type="success">成功</sg-button>
                <sg-button size="small" type="warning">警告</sg-button>
              </div>
              <div class="demo-tags">
                <sg-tag size="small" type="primary">标签</sg-tag>
                <sg-tag size="small" type="success">标签</sg-tag>
              </div>
            </div>
          </div>
        </div>

        <!-- Theme2 浅绿主题 -->
        <div class="theme-preview-card" data-theme="theme2">
          <div class="preview-header">
            <h4>Theme2</h4>
            <span class="theme-badge" style="background: #15b07f; color: white;">Green</span>
          </div>
          <div class="preview-content">
            <div class="color-palette">
              <div class="color-item" style="background: #15b07f;" data-color="#15b07f"></div>
              <div class="color-item" style="background: #13ce66;" data-color="#13ce66"></div>
              <div class="color-item" style="background: #ffba00;" data-color="#ffba00"></div>
              <div class="color-item" style="background: #ff4949;" data-color="#ff4949"></div>
              <div class="color-item" style="background: #ffffff;" data-color="#fff"></div>
              <div class="color-item" style="background: #333333;" data-color="#333"></div>
            </div>
            <div class="component-demo">
              <div class="demo-buttons">
                <sg-button size="small" type="primary">主要</sg-button>
                <sg-button size="small" type="success">成功</sg-button>
                <sg-button size="small" type="warning">警告</sg-button>
              </div>
              <div class="demo-tags">
                <sg-tag size="small" type="primary">标签</sg-tag>
                <sg-tag size="small" type="success">标签</sg-tag>
              </div>
            </div>
          </div>
        </div>

        <!-- 深色主题 -->
        <div class="theme-preview-card" data-theme="dark">
          <div class="preview-header">
            <h4>深色模式</h4>
            <span class="theme-badge" style="background: #0a0a0f; color: #00bcd4; border: 1px solid #00bcd4;">Dark</span>
          </div>
          <div class="preview-content">
            <div class="color-palette">
              <div class="color-item" style="background: #00bcd4;" data-color="#00bcd4"></div>
              <div class="color-item" style="background: #00e676;" data-color="#00e676"></div>
              <div class="color-item" style="background: #ffc107;" data-color="#ffc107"></div>
              <div class="color-item" style="background: #ff5252;" data-color="#ff5252"></div>
              <div class="color-item" style="background: #0a0a0f;" data-color="#0a0a0f"></div>
              <div class="color-item" style="background: #ffffff;" data-color="#fff"></div>
            </div>
            <div class="component-demo">
              <div class="demo-buttons">
                <sg-button size="small" type="primary">主要</sg-button>
                <sg-button size="small" type="success">成功</sg-button>
                <sg-button size="small" type="warning">警告</sg-button>
              </div>
              <div class="demo-tags">
                <sg-tag size="small" type="primary">标签</sg-tag>
                <sg-tag size="small" type="success">标签</sg-tag>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CSS 变量体系 -->
    <section class="section">
      <h2>CSS 变量体系</h2>
      <p>主题系统通过分层级的 CSS 变量实现，从基础色到语义化变量，再到组件特定变量。</p>
      
      <h3>变量层级结构</h3>
      <table class="variable-table">
        <thead>
          <tr>
            <th>层级</th>
            <th>命名规范</th>
            <th>示例</th>
            <th>说明</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>基础色</td>
            <td><code>--color-[name]</code></td>
            <td><code>--color-primary</code></td>
            <td>原始颜色值，如品牌色、功能色</td>
          </tr>
          <tr>
            <td>渐变色</td>
            <td><code>--color-[name]-light-[n]</code></td>
            <td><code>--color-primary-light-5</code></td>
            <td>通过 color-mix 自动生成的渐变色阶（1-9）</td>
          </tr>
          <tr>
            <td>语义化</td>
            <td><code>--[category]-[property]</code></td>
            <td><code>--background-color-page</code></td>
            <td>具有明确用途的语义变量</td>
          </tr>
          <tr>
            <td>组件级</td>
            <td><code>--[component]-[element]-[property]</code></td>
            <td><code>--button-primary-bg-color</code></td>
            <td>组件特定的样式变量</td>
          </tr>
        </tbody>
      </table>

      <h3>核心变量分类</h3>
      <table class="variable-table">
        <thead>
          <tr>
            <th>分类</th>
            <th>变量前缀</th>
            <th>数量</th>
            <th>用途</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>颜色系统</td>
            <td><code>--color-*</code></td>
            <td>~50+</td>
            <td>品牌色、功能色、文字色、背景色</td>
          </tr>
          <tr>
            <td>边框系统</td>
            <td><code>--border-*</code></td>
            <td>~10+</td>
            <td>不同层级的边框颜色</td>
          </tr>
          <tr>
            <td>阴影系统</td>
            <td><code>--box-shadow-*</code></td>
            <td>~5+</td>
            <td>不同强度的阴影效果</td>
          </tr>
          <tr>
            <td>组件变量</td>
            <td><code>--[component]-*</code></td>
            <td>~200+</td>
            <td>各组件的专属样式变量</td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- 主题切换机制 -->
    <section class="section">
      <h2>主题切换机制</h2>
      <p>通过修改根元素的 <code>data-theme</code> 属性来切换主题，浏览器会自动应用对应的 CSS 变量定义。</p>
      
      <h3>实现原理</h3>
      <div class="code-block">
        <pre><code><span class="comment">&lt;!-- HTML 结构 --&gt;</span>
<span class="keyword">&lt;html</span> <span class="variable">data-theme</span>=<span class="string">"default-theme"</span><span class="keyword">&gt;</span>
  <span class="comment">&lt;!-- 页面内容 --&gt;</span>
<span class="keyword">&lt;/html&gt;</span>

<span class="comment">/* CSS 定义 */</span>
<span class="keyword">:root[data-theme='default-theme']</span> {
  <span class="variable">--color-primary</span>: <span class="string">#017572</span>;
  <span class="variable">--background-color-page</span>: <span class="string">#ffffff</span>;
  <span class="comment">/* ... 其他变量 */</span>
}

<span class="keyword">:root[data-theme='dark']</span> {
  <span class="variable">--color-primary</span>: <span class="string">#00bcd4</span>;
  <span class="variable">--background-color-page</span>: <span class="string">#0a0a0f</span>;
  <span class="comment">/* ... 其他变量 */</span>
}</code></pre>
      </div>

      <h3>JavaScript API</h3>
      <div class="code-block">
        <pre><code><span class="comment">// 切换主题</span>
<span class="keyword">function</span> <span class="variable">switchTheme</span>(themeName) {
  document.documentElement.setAttribute(<span class="string">'data-theme'</span>, themeName);
  localStorage.setItem(<span class="string">'theme'</span>, themeName);
}

<span class="comment">// 使用示例</span>
<span class="variable">switchTheme</span>(<span class="string">'dark'</span>);        <span class="comment">// 切换到深色模式</span>
<span class="variable">switchTheme</span>(<span class="string">'default-theme'</span>); <span class="comment">// 切换到默认主题</span>
<span class="variable">switchTheme</span>(<span class="string">'theme2'</span>);      <span class="comment">// 切换到 Theme2</span></code></pre>
      </div>

      <h3>主题持久化</h3>
      <div class="code-block">
        <pre><code><span class="comment">// 应用启动时恢复用户选择的主题</span>
<span class="keyword">const</span> savedTheme = localStorage.getItem(<span class="string">'theme'</span>) || <span class="string">'default-theme'</span>;
document.documentElement.setAttribute(<span class="string">'data-theme'</span>, savedTheme);</code></pre>
      </div>
    </section>

    <!-- Color-Mix 技术 -->
    <section class="section">
      <h2>Color-Mix 自动渐变</h2>
      <p>使用 CSS <code>color-mix()</code> 函数自动生成颜色渐变，减少手动定义颜色的工作量。</p>
      
      <h3>语法说明</h3>
      <div class="code-block">
        <pre><code><span class="comment">/* 基本语法 */</span>
<span class="variable">color-mix</span>(<span class="keyword">in srgb</span>, <span class="variable">color1</span>, <span class="variable">color2</span> <span class="variable">percentage</span>)

<span class="comment">/* 示例：生成主色的浅色版本 */</span>
<span class="variable">--color-primary-light-5</span>: <span class="variable">color-mix</span>(
  <span class="keyword">in srgb</span>, 
  <span class="variable">var(--color-white)</span>,     <span class="comment">/* 混合基色 */</span>
  <span class="variable">var(--color-primary)</span> <span class="variable">50%</span> <span class="comment">/* 主色占比 */</span>
);

<span class="comment">/* 深色模式使用黑色作为基色 */</span>
<span class="variable">--color-primary-light-5</span>: <span class="variable">color-mix</span>(
  <span class="keyword">in srgb</span>, 
  <span class="variable">var(--color-black)</span>,     <span class="comment">/* 深色模式用黑色 */</span>
  <span class="variable">var(--color-primary)</span> <span class="variable">50%</span>
);</code></pre>
      </div>

      <h3>渐变示例</h3>
      <div class="color-palette gradient_palette" style="margin-top: 20px;">
        <div v-for="i in 9" :key="i" 
             class="color-item" 
             :style="{ background: `var(--color-primary-light-${i})` }"
             :data-color="`light-${i}`"
             style="width: 50px; height: 50px;">
        </div>
      </div>
      <p style="text-align: center; margin-top: 30px; font-size: 12px; color: var(--color-text-secondary);">
        从左到右：light-1（最深） → light-9（最浅）
      </p>
    </section>

    <!-- 最佳实践 -->
    <section class="section">
      <h2>最佳实践</h2>
      
      <h3>1. 避免硬编码颜色</h3>
      <div class="code-block">
        <pre><code><span class="comment">/* ❌ 错误：硬编码颜色 */</span>
<span class="keyword">.my-component</span> {
  <span class="variable">color</span>: <span class="string">#333333</span>;
  <span class="variable">background</span>: <span class="string">#ffffff</span>;
}

<span class="comment">/* ✅ 正确：使用 CSS 变量 */</span>
<span class="keyword">.my-component</span> {
  <span class="variable">color</span>: <span class="variable">var(--color-text-primary)</span>;
  <span class="variable">background</span>: <span class="variable">var(--background-color-page)</span>;
}</code></pre>
      </div>

      <h3>2. Canvas 中使用 CSS 变量</h3>
      <div class="code-block">
        <pre><code><span class="comment">// ❌ 错误：Canvas 无法直接解析 CSS 变量</span>
ctx.fillStyle = <span class="string">'var(--color-primary)'</span>;

<span class="comment">// ✅ 正确：先解析为实际颜色值</span>
<span class="keyword">const</span> color = getComputedStyle(document.documentElement)
  .getPropertyValue(<span class="string">'--color-primary'</span>)
  .trim();
ctx.fillStyle = color;</code></pre>
      </div>

      <h3>3. 创建新主题</h3>
      <div class="code-block">
        <pre><code><span class="comment">/* 1. 创建主题文件 */</span>
<span class="comment">/* packages/theme-chalk/src/theme/theme-mytheme.scss */</span>

<span class="keyword">:root[data-theme='mytheme']</span> {
  <span class="comment">/* 定义基础色 */</span>
  <span class="variable">--color-primary</span>: <span class="string">#your-color</span>;
  <span class="variable">--color-primary-rgb</span>: <span class="string">r, g, b</span>;
  
  <span class="comment">/* 自动生成渐变 */</span>
  <span class="variable">--color-primary-light-1</span>: <span class="variable">color-mix</span>(<span class="keyword">in srgb</span>, <span class="variable">var(--color-white)</span>, <span class="variable">var(--color-primary)</span> <span class="variable">90%</span>);
  <span class="comment">/* ... light-2 到 light-9 */</span>
  
  <span class="comment">/* 定义其他必要变量 */</span>
  <span class="variable">--background-color-page</span>: <span class="string">#fff</span>;
  <span class="variable">--color-text-primary</span>: <span class="string">#333</span>;
  <span class="comment">/* ... 参考 theme-default.scss */</span>
}

<span class="comment">/* 2. 在入口文件中引入 */</span>
<span class="keyword">@import</span> <span class="string">'./theme/theme-mytheme.scss'</span>;

<span class="comment">/* 3. 切换主题 */</span>
<span class="variable">switchTheme</span>(<span class="string">'mytheme'</span>);</code></pre>
      </div>
    </section>

    <!-- 主题文件结构 -->
    <section class="section">
      <h2>主题文件结构</h2>
      <div class="code-block">
        <pre><code>packages/theme-chalk/src/
├── theme/
│   ├── theme-default.scss    <span class="comment"># 默认浅色主题</span>
│   ├── theme-theme2.scss     <span class="comment"># 浅绿色主题</span>
│   └── theme-dark.scss       <span class="comment"># 深色模式</span>
├── common/
│   └── var.scss              <span class="comment"># 通用变量（断点、z-index等）</span>
├── mixins/
│   └── mixins.scss           <span class="comment"># SCSS 混入</span>
├── [component].scss          <span class="comment"># 组件样式（使用 CSS 变量）</span>
└── index.scss                <span class="comment"># 主入口文件</span></code></pre>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ThemeDocumentation',
  mounted() {
    this.$nextTick(() => {
      window.scrollTo(0, 0);
    });
  }
};
</script>
