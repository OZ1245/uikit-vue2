<template>
  <div class="cld-tabs">
    <ul class="cld-tabs__header">
      <li
        v-for="(tab, i) in tabs"
        :key="`tab-bitton-${i}`" 
        :class="[
          'cld-tabs__tab',
          (value === tab.name) ? `cld-tabs__tab--active` : false
        ]"
      >
        <button 
          class="cld-tabs__button"
          @click="clickTabHandler(tab.name)"
        >
          {{ tab.title }}
        </button>
      </li>
    </ul>

    <div class="cld-tabs__body">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CldTabs',

  props: {
    value: {
      type: String,
      requred: true
    },
    tabs: {
      type: Array,
      requred: true
    }
  },

  methods: {
    clickTabHandler(name) {
      this.$emit('input', name)
    }
  }
}
</script>

<style lang="scss" scoped>
.cld-tabs {
  width: 100%;

  &__header {
    width: 100%;
    display: flex;
    padding: 0;
    margin: 0;

    list-style: none;
  }

  &__tab {
    &--active {
      .cld-tabs__button {
        position: relative;
        border-color: gray;

        &:not(&--disabled):not(&:disabled) {
          color: inherit;
          background: white;
        }

        &::after {
          @include Size(100%, 1px);

          position: absolute;
          left: 0;
          bottom: -1px;

          display: block;
          background: white;

          content: '';
        }
      }
    }
  }

  &__button {
    @include Size(auto);

    display: block;
    padding: 8px 16px;

    border: {
      width: 1px 1px 0 1px;
      style: solid;
      radius: 3px 3px 0 0;
      color: green;
    }

    cursor: pointer;

    &:not(&--disabled):not(&:disabled) {
      background: green;
      color: white;
    }

    &:hover {
      // TODO: Светлее
      &:not(&--disabled):not(&:disabled) {
        background: green;
        color: white;
      } 
    }
  }

  &__body {
    padding: 16px;
    border: {
      width: 1px;
      style: solid;
      color: gray;
      radius: 0 3px 3px 3px; 
    }
  }
}
</style>