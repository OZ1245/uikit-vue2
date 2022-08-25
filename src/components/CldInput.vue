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
          v-if="type === 'number' && buttons"
          type="button"
          @click="increment"
        >
          +
        </button>
      </template>
    </div>

    <span 
      v-if="message"
      :class="[
        'cld-input__message', 
        `cld-input__message--${messageType}`
      ]"
    >
      {{ message }}
    </span>
  </div>
</template>

<script>
export default {
  name: "CldInput",

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

    message: {
      type: String,
      required: false,
      default: "",
    },

    messageType: {
      type: String,
      required: false,
      default: 'neutral',
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
    }
  },

  computed: {
    inputType() {
      if (this.type === 'string') {
        return 'text'
      }

      return this.type
    },

    ref() {
      if (!this.refName) {
        return `${this.name}-${this._uid}`
      }

      return this.refName
    }
  },

  mounted() {
    if (this.type === 'number' && this.buttons && (typeof this.value === 'string')) {
      console.error('--- components -> cld-input ---');
      console.error('Need set value!');
      console.error('input:', this.$refs[this.ref]);
    }
  },

  methods: {
    inputHandler(e) {
      // console.log('--- components -> cld-input -> input-handler method ---')
      let value = e.target.value

      if (this.type === 'number') {
        if (this.min && +e.target.value < +this.min) {
            value = this.min 
        }

        if (this.max && +e.target.value > +this.max) {
          value = this.max 
        }
      }

      this.$emit('input', value)
    },

    decrement() {
      this.$emit('input', +this.value - this.step)
    },

    increment() {
      this.$emit('input', +this.value + this.step)
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