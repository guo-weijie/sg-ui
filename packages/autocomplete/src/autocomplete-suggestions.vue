<template>
  <transition name="sg-zoom-in-top" @after-leave="doDestroy">
    <div v-show="showPopper" class="sg-autocomplete-suggestion sg-popper"
      :class="{ 'is-loading': !parent.hideLoading && parent.loading }" :style="{ width: dropdownWidth }" role="region">
      <sg-scrollbar tag="ul" wrap-class="sg-autocomplete-suggestion__wrap"
        view-class="sg-autocomplete-suggestion__list">
        <li v-if="!parent.hideLoading && parent.loading"><i class="sg-icon-loading"></i></li>
        <slot v-else>
        </slot>
      </sg-scrollbar>
    </div>
  </transition>
</template>
<script>
import Popper from 'sg-ui/src/utils/vue-popper';
import Emitter from 'sg-ui/src/mixins/emitter';
import SgScrollbar from 'sg-ui/packages/scrollbar';

export default {
  components: { SgScrollbar },
  mixins: [Popper, Emitter],

  componentName: 'SgAutocompleteSuggestions',

  data() {
    return {
      parent: this.$parent,
      dropdownWidth: ''
    };
  },

  props: {
    options: {
      default() {
        return {
          gpuAcceleration: false
        };
      }
    },
    id: String
  },

  methods: {
    select(item) {
      this.dispatch('SgAutocomplete', 'item-click', item);
    }
  },

  updated() {
    this.$nextTick(_ => {
      this.popperJS && this.updatePopper();
    });
  },

  mounted() {
    this.$parent.popperElm = this.popperElm = this.$el;
    this.referenceElm = this.$parent.$refs.input.$refs.input || this.$parent.$refs.input.$refs.textarea;
    this.referenceList = this.$el.querySelector('.sg-autocomplete-suggestion__list');
    this.referenceList.setAttribute('role', 'listbox');
    this.referenceList.setAttribute('id', this.id);
  },

  created() {
    this.$on('visible', (val, inputWidth) => {
      this.dropdownWidth = inputWidth + 'px';
      this.showPopper = val;
    });
  }
};
</script>
