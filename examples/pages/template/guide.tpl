<style lang='scss'>
  .page-guide {
    padding: 55px 30px 95px;
    box-sizing: border-box;

    .content {
      padding-left: 25px;
      margin-left: -1px;
      h2 {
        margin-bottom: 10px;
      }

      h3 {
        font-size: 22px;
        font-weight: normal;
        margin: 0 0 30px;
        color: var(--color-text-primary);
      }
      p {
        line-height: 1.6;
        font-size: 14px;
        color: var(--color-info);
      }
      ul {
        margin-bottom: 50px;
        padding-left: 0;
      }
      li {
        font-size: 14px;
        margin-bottom: 10px;
        color: var(--color-info-light);
        list-style: none;

        &:before {
          content: '';
          display: inline-block;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          vertical-align: middle;
          background-color: var(--color-info);
          margin-right: 5px;
        }

        strong {
          color: var(--color-info);
          font-weight: 400;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .page-guide {
      .content {
        padding-left: 0;
      }
    }
  }
</style>
<template>
  <div class="page-container page-guide">
    <sg-row>
      <sg-col :xs="24" :sm="5">
        <side-nav :data="navsData" :base="`/${ lang }/guide`"></side-nav>
      </sg-col>
      <sg-col :xs="24" :sm="19">
        <router-view class="content"></router-view>
      </sg-col>
    </sg-row>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        lang: this.$route.meta.lang,
        navsData: [
          {
            path: '/design',
            name: '<%= 1 >'
          },
          {
            path: '/nav',
            name: '<%= 2 >'
          }
        ]
      };
    }
  };
</script>
