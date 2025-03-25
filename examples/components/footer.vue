<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-main">
        <h4>{{ langConfig.links }}</h4>
        <a href="https://github.com/guo-weijie/sg-ui" class="footer-main-link" target="_blank">{{ langConfig.repo }}</a>
        <a href="https://github.com/guo-weijie/sg-ui/releases" class="footer-main-link" target="_blank">{{
          langConfig.changelog
        }}</a>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
.footer {
  background-color: #f7fbfd;
  width: 100%;
  padding: 40px 150px;
  box-sizing: border-box;

  .container {
    box-sizing: border-box;
    width: auto;
  }

  .footer-main {
    font-size: 0;
    display: inline-block;
    vertical-align: top;
    margin-right: 110px;

    h4 {
      font-size: 18px;
      color: #333;
      line-height: 1;
      margin: 0 0 15px 0;
    }

    .footer-main-link {
      display: block;
      margin: 0;
      line-height: 2;
      font-size: 14px;
      color: #666;

      &:hover {
        color: #333;
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
