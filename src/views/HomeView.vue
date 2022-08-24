<template>
  <div class="home">
    <cld-input 
      v-model="input.default"
      label="Дефолт"
    />

    <cld-input 
      v-model="input.number"
      label="Только числа"
      type="number"
    />

    <cld-input 
      v-model="input.numberButtons"
      label="Числа с кнопкой"
      type="number"
      :buttons="true"
    />

    <cld-input 
      v-model="input.textarea"
      label="Текстовое поле"
      type="text"
    />
  </div>
</template>

<script>
import CldInput from "@/components/CldInput";

export default {
  name: "HomeView",

  components: {
    CldInput,
  },

  data() {
    return {
      input: {
        default: '',
        number: '',
        numberButtons: 0,
        textarea: '',
      },
    };
  },
};
</script>