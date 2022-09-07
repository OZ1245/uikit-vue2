<template>
  <div class="cld-tabs">
    <ul class="cld-tabs__header">
      <template v-for="(tab, i) in tabs">
        <li
          :key="`tab-bitton-${i}`" 
          class="cld-tabs__tab"
        >
          <button 
            class="cld-tabs__button"
            @click="clickTabHandler(tab.name)"
          >
            {{ tab.title }}
          </button>
        </li>
      </template>
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