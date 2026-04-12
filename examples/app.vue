<template>
  <div id="app" :class="{ 'is-component': isComponent }">
    <main-header v-if="lang !== 'play'"></main-header>
    <div class="main-cnt">
      <router-view></router-view>
    </div>
    <main-footer v-if="lang !== 'play' && !isComponent"></main-footer>
  </div>
</template>

<script>
import { use } from 'main/locale';
import zhLocale from 'main/locale/lang/zh-CN';
import enLocale from 'main/locale/lang/en';

const lang = location.hash.replace('#', '').split('/')[1] || 'zh-CN';
const localize = (lang) => {
  if (lang === 'zh-CN') {
    use(zhLocale);
  } else {
    use(enLocale);
  }
};
localize(lang);

export default {
  name: 'app',

  computed: {
    lang() {
      return this.$route.path.split('/')[1] || 'zh-CN';
    },
    isComponent() {
      return /^component-/.test(this.$route.name || '');
    }
  },

  watch: {
    lang(val) {
      localize(val);
    }
  },

  created() {
    // 从 localStorage 恢复用户主题偏好，如果没有则使用默认主题
    const savedTheme = localStorage.getItem('user-theme-preference');
    const theme = savedTheme || 'default-theme';
    document.documentElement.setAttribute('data-theme', theme);
  },

  mounted() {
    localize(this.lang);
  }
};
</script>
