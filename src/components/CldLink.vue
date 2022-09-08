<template>
  <component 
    :is="componentName"
    v-bind="direction"
    :class="[
      'cld-link',
      (type) ? `cld-link--${type}` : false
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

<style lang="scss" scoped>
.cld-link {
  position: relative;
  display: inline-block;
  text-decoration: none;
  transition: color .3s;
  cursor: pointer;

  &:after {
    @include Size(0, 1px);

    position: absolute;
    left: 0;
    bottom: 0;

    display: inline-block;

    content: '';
    transition: width .3s;
  }

  &:hover {
    transition: color .15s;

    &::after {
      width: 100%;
      transition: width .15s;
    }
  }

  &--primary {
    color: green;

    &::after {
      background: green;
    }

    &:hover {
      color: dark(green, 50%);
    }
  }
}
</style>