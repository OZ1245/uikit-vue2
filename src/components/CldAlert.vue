<template>
  <article 
    :class="[
      'cld-alert',
      `cld-alert--${type}`
    ]"
  >
    <div class="cld-alert__header">
      <template v-if="title">
        <information-circle-icon />
        <p class="cld-alert__title">
          {{ title }}
        </p>
      </template>
      <x-icon
        v-if="closeButton"
        class="cld-alert__close-icon"
        @click="clickHandler"
      />
    </div>
    <p class="cld-alert__message">
      {{ message }}
    </p>
  </article>
</template>

<script>
import { InformationCircleIcon, XIcon } from "@vue-hero-icons/outline"

export default {
  name: 'CldAlert',

  components: {
    InformationCircleIcon,
    XIcon
  },

  props: {
    type: {
      type: String,
      required: false,
      default: 'neutral'
    },
    title: {
      type: String,
      required: false,
      default() {
        if (this.type === 'neutral') {
          return 'Сообщение'
        }

        if (this.type === 'info') {
          return 'Информация'
        }

        if (this.type === 'success') {
          return 'Успех'
        }

        if (this.type === 'warning') {
          return 'Предупреждение'
        }

        if (this.type === 'danger') {
          return 'Ошибка'
        }

        return ''
      }
    },
    closeButton: {
      type: Boolean,
      required: false,
      default: false
    },
    message: {
      type: String,
      required: false,
      default: ''
    }
  },

  methods: {
    clickHandler() {
      this.$emit('close')
    }
  }
}
</script>