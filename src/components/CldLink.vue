<template>
  <component 
    :is="componentName"
    v-bind="direction"
    :class="[
      'cld-link',
      (type) ? `link--${type}` : false
    ]"
  >
    <slot>
      {{ title }}
    </slot>
  </component>
</template>

<script>
export default {
  name: 'CldLink',

  props: {
    link: {
      type: [ Object, String ],
      required: true,
    },
    external: {
      type: Boolean,
      required: false,
      default: false
    },
    title: {
      type: String,
      required: false,
      default: ''
    },
    /**
     * default
     * primary
     */
    type: {
      type: String,
      required: false,
      default: ''
    }
  },

  computed: {
    componentName() {
      if (this.external) {
        return 'a'
      }

      return 'router-link'
    },

    direction() {
      if (this.external) {
        return { href: this.link }
      }

      return { to: this.link }
    }
  }
}
</script>