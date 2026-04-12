<template>
  <footer class="footer">
    <div class="container">
      <a href="https://github.com/guo-weijie/sg-ui" class="footer-main-link" target="_blank">{{ langConfig.repo }}</a>
      <a href="https://github.com/guo-weijie/sg-ui/releases" class="footer-main-link" target="_blank">{{
        langConfig.changelog
      }}</a>
    </div>
  </footer>
</template>

<style lang="scss">
.footer {
  background-color: var(--background-color-page);
  width: 100%;
  padding: var(--base-value);
  box-sizing: border-box;
  border-top: 1px solid var(--border-color-base);

  .container {
    box-sizing: border-box;
    width: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    h4 {
      font-size: 18px;
      color: var(--color-text-primary);
      line-height: 1;
      margin: 0 0 15px 0;
    }

    .footer-main-link {
      display: block;
      margin: 0;
      line-height: 2;
      font-size: 14px;
      color: var(--color-text-regular);

      &:hover {
        color: var(--color-text-primary);
      }
    }
  }
}

@media (max-width: 1140px) {
  .footer {
    height: auto;
  }
}

@media (max-width: 768px) {
  .footer {
    .footer-main {
      margin-bottom: 30px;
    }
  }
}
</style>

<script type="text/babel">
import compoLang from '../i18n/component.json';

export default {
  computed: {
    lang() {
      return this.$route.path.split('/')[1] || 'zh-CN';
    },

    langConfig() {
      return compoLang.filter((config) => config.lang === this.lang)[0]['footer'];
    }
  }
};
</script>
