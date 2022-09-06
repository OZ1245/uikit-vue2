<template>
  <div 
    v-show="cldNotice_isShow"
    :class="[
      'cld-notice',
      `cld-notice--${position}`,
    ]"
  >
    <cld-alert
      :type="type" 
      :title="title"
      :close-button="closeButton"
      class="cld-notice__alert"
      @close="closeHandler"
    >
      <slot>
        {{ message }}
      </slot>
    </cld-alert>
  </div>
</template>

<script>
import CldAlert from '@/components/CldAlert'

export default {
  name: 'CldNotice',

  components: {
    CldAlert
  },

  data() {
    return {
      cldNotice_isShow: false,
      cldNotice_timer: null,

      position: 'top-right',
      type: 'neutral',
      title: 'Сообщение',
      closeButton: true,
      message: '',
      duration: 6000
    }
  },

  mounted() {
    this.startTimer()
  },

  methods: {
    closeHandler() {
      this.close()
    },

    close() {
      this.cldNotice_isShow = false
    },

    clearTimer() {
      clearTimeout(this.cldNotice_timer)
    },

    startTimer() {
      if (this.duration > 0) {
        this.cldNotice_timer = setTimeout(() => {
          if (this.cldNotice_isShow) {
            this.close();
          }
        }, this.duration);
      }
    },
  }
}
</script>