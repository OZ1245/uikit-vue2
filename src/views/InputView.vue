<template>
  <div class="input-page">
    <cld-input 
      v-model="input.default"
      label="Дефолт"
    />

    <highlight-code lang="html">
      <pre>
        &lt;cld-input 
          v-model="input.default"
          label="Дефолт"
        /&gt;
      </pre>
    </highlight-code>

    <hr/>

    <cld-input 
      v-model="input.number"
      label="Только числа"
      type="number"
    />

    <hr/>
    
    <cld-input 
      v-model="input.numberMinMax"
      label="Диапозон"
      type="number"
      min="-10"
      max="10"
    />

    <hr/>

    <cld-input 
      v-model="input.numberButtons"
      label="Числа со счетчиками"
      type="number"
      :buttons="true"
    />

    <hr/>

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
        numberMinMax: 0,
        numberButtons: 0,
        textarea: '',
      },
    };
  },
};
</script>