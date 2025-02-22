<template>
  <div class="sg-page-header">
    <div class="sg-page-header__left" @click="$emit('back')">
      <i class="sg-icon-back"></i>
      <div class="sg-page-header__title">
        <slot name="title">{{ title }}</slot>
      </div>
    </div>
    <div class="sg-page-header__content">
      <slot name="content">{{ content }}</slot>
    </div>
  </div>
</template>

<script>
import { t } from 'sg-ui/src/locale';
export default {
  name: 'SgPageHeader',

  props: {
    title: {
      type: String,
      default() {
        return t('el.pageHeader.title');
      }
    },
    content: String
  }
};
</script>
