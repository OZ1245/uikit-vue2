<template>
  <div 
    class="cld-input"
    :tabindex="tabindex"
  >
    <label 
      v-if="label"
      :for="name" 
      class="cld-input__label"
    >
      {{ label }}
    </label>

    <div class="cld-input__wrap">
      <template v-if="type === 'text'">
        <textarea 
          :value="value"
          :name="name" 
          :cols="(cols) ? cols : false" 
          :rows="(rows) ? rows : false"
          :ref="ref"
          class="cld-input__textarea"
          @input="inputHandler"
        />
        <button
          v-if="copyButton"
          @click="copyText"
        >
          <clipboard-copy-icon />
        </button>
      </template>

      <template v-else>
        <button
          v-if="type === 'number' && buttons"
          type="button"
          @click="decrement"
        >
          -
        </button>
        <input 
          :value="value" 
          :type="inputType"
          :name="name" 
          :ref="ref"
          :min="(min) ? min : false" 
          :max="(max) ? max : false"
          class="cld-input__input" 
          @input="inputHandler"
        />
        <button
          v-if="type === 'password'"
          title="Показать/скрыть пароль"
          @click="showPassword = !showPassword"
        >
          <component :is="eye" />
        </button>
        <button
          v-if="type === 'number' && buttons"
          type="button"
          @click="increment"
        >
          +
        </button>
      </template>
    </div>

    <span 
      v-if="cldInput_message || cldInput_showMessage"
      :class="[
        'cld-input__message', 
        `cld-input__message--${cldInput_messageType}`
      ]"
    >
      {{ cldInput_message }}
    </span>

    <span
      v-if="caption"
      class="cld-input__caption"
    >
      {{ caption }}
    </span>
  </div>
</template>

<script>
import { EyeIcon, EyeOffIcon, ClipboardCopyIcon } from "@vue-hero-icons/outline"

export default {
  name: "CldInput",

  components: {
    EyeIcon,
    EyeOffIcon,
    ClipboardCopyIcon
  },

  props: {
    value: {
      type: [ String, Number ],
    },

    name: {
      type: String,
      required: false,
      default: 'cld-input',
    },

    label: {
      type: String,
      required: false,
      default: ''
    },

    /**
     * Allow types:
     * string = [type="text"]
     * text = <textarea>
     * password = [type="password"]
     * number = [type="number"] 
     */
    type: {
      type: String,
      required: false,
      default: "string",
    },

    cols: {
      type: Number,
      required: false,
      default: 0
    },

    rows: {
      type: Number,
      required: false,
      default: 0
    },

    showMessage: {
      type: Boolean,
      required: false,
      default: false
    },

    refName: {
      type: String,
      required: false,
      default: ''
    },

    tabindex: {
      type: Number,
      required: false,
      default: 0
    },

    buttons: {
      type: Boolean,
      required: false,
      default: false
    },

    step: {
      type: Number,
      required: false,
      default: 1
    },

    min: {
      type: String,
      required: false,
      default: '',
    },

    max: {
      type: String,
      required: false,
      default: '',
    },

    caption: {
      type: String,
      required: false,
      default: ''
    },

    copyButton: {
      type: Boolean,
      required: false,
      default: false
    }
  },

  data() {
    return {
      cldInput_showPassword: false,
      cldInput_showMessage: this.showMessage,
      cldInput_message: null,
      cldInput_messageType: 'neutral',
    }
  },

  computed: {
    inputType() {
      if (this.type === 'string') {
        return 'text'
      }

      if (this.showPassword) {
        return 'text'
      }

      return this.type
    },

    ref() {
      if (!this.refName) {
        return `${this.name}-${this._uid}`
      }

      return this.refName
    },

    eye() {
      return `eye-${this.inputType === 'text' ? 'off-' : ''}icon`
    },
  },

  mounted() {
    if (this.type === 'number' && this.buttons && (typeof this.value === 'string')) {
      console.error('--- components -> cld-input ---')
      console.error('Need set value!')
      console.error('input:', this.$refs[this.ref])
      this.cldInput_message = `Установитe значение по-умолчанию!`
    }
  },

  methods: {
    inputHandler(e) {
      // console.log('--- components -> cld-input -> input-handler method ---')
      this.cldInput_message = ''
      this.cldInput_showMessage = false

      let value = e.target.value

      if (this.type === 'number') {
        if (this.min && parseInt(value) < parseInt(this.min)) {
          value = parseInt(this.min) 
          this.cldInput_message = `Минимальное допустимое значение: ${this.min}`
        }

        if (this.max && parseInt(value) > parseInt(this.max)) {
          value = parseInt(this.max) 
          this.cldInput_message = `Максимальное допустимое значение: ${this.max}`
        }
      }

      this.$emit('input', value)
    },

    decrement() {
      this.$emit('input', +this.value - this.step)
    },

    increment() {
      this.$emit('input', +this.value + this.step)
    },

    copyText() {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(this.value)
          .then(() => {
            if (this.value.length) {
              // TODO: Уведомление
              console.warn('Текст скопирован')
            }
          })
          .catch((error) => {
            console.error(error)
          })
      } else {
        // Если navigation.clipboard API не поддерживается браузером
        const $input = this.$refs[this.ref]
        $input.select()
        document.execCommand('copy')
        console.log($input.value)
        console.warn('Текст скопирован')
      }
    },

    // Тестовая функция
    getClipboardData() {
      navigator.clipboard.readText()
        .then(text => text)
        .catch((error) => {
          // возможно, пользователь не дал разрешение на чтение данных из буфера обмена
          console.error(error);
        })
    }
  }
};
</script>

<style lang="scss" scoped>
.cld-input__input {
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
  }

  &[type="number"] {
    -moz-appearance: textfield; /* Firefox */
  }


}
</style>