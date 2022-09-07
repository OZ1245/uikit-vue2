<template>
  <article class="input-examples">
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
      v-model="input.password" 
      label="Пароль"
      type="password"
    />

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
      caption="Допустимый диапозон от -10 до 10"
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
      :copyButton="true"
    />
  </article>
</template>

<script>
import CldInput from '@/components/CldInput'

export default {
  name: 'InputViewExamples',

  components: {
    CldInput
  },

  data() {
    return {
      input: {
        default: '',
        password: '',
        number: '',
        numberMinMax: 0,
        numberButtons: 0,
        textarea: '',
      },
    }
  }
}
</script>