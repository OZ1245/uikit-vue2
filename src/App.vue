<template>
  <div id="app">
    <component 
      :is="layout"
      class="layout layout--default"
    />
  </div>
</template>

<script>
export default {
  name: 'App',

  computed: {
    layout() {
      const layout = this.$route.meta.layout || 'DefaultLayout'
      return () => import(`@/layouts/${layout}.vue`)
    }
  },
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>