<template>
  <div class="input-page">
    <div class="input-page__header">
      <h1 class="input-page__title">
        Поле ввода Input
      </h1>
    </div>

    <cld-tabs
      v-model="activeTabName" 
      :tabs="tabs"
    >
      <component :is="activeTabName"></component>
    </cld-tabs>
  </div>
</template>

<script>
import CldTabs from '@/components/CldTabs'
import Description from '@/components/demo/views/input/Description'
import Examples from '@/components/demo/views/input/Examples'

export default {
  name: "HomeView",

  components: {
    CldTabs,
    Description,
    Examples
  },

  data() {
    return {
      activeTabName: null,
      tabs: [
        {
          name: 'description',
          title: 'Описание',
        },
        {
          name: 'examples',
          title: 'Примеры'
        }
      ]
    };
  },

  mounted() {
    this.activeTabName = this.tabs[0].name
  }
};
</script>

<style lang="scss" scoped>
.input-page {
  width: 100%;
  padding: 16px;
}
</style>