<template>
  <div id="app">
    <header
      ref="header" 
      class="header"
    >
      <nav class="header__menu">
        <router-link to="/">Главная</router-link>
      </nav>
    </header>

    <section class="container">
      <aside
        ref="aside"
        class="aside"
      >
        <demo-navigation />
      </aside>

      <main
        ref="main" 
        class="main"
      >
        <router-view/>
      </main>
    </section>
  </div>
</template>

<script>
import DemoNavigation from '@/components/demo/DemoNavigation'

export default {
  name: 'App',

  components: {
    DemoNavigation
  },

  data() {
    return {
      scrollTop: null
    }
  },

  mounted() {
    this.setOffsets()

    window.addEventListener('scroll', (event) => {
      this.$nextTick(() => {
        this.scrollTop = event.target.scrollingElement.scrollTop
        this.setOffsets()
      })
    })
  },

  methods: {
    setOffsets() {
      const $header = this.$refs.header
      const $aside = this.$refs.aside
      const $main = this.$refs.main

      console.log('$aside.offsetTop:', $aside.offsetTop)
      console.log('this.scrollTop:', this.scrollTop)
      console.log('$header.offsetHeight:', $header.offsetHeight)

      if ($aside.offsetTop < this.scrollTop) {
        $aside.classList.add('_fixed')
        $main.style.marginLeft = `${$aside.offsetWidth}px`
      }

      if ($header.offsetHeight >= this.scrollTop) {
        $aside.classList.remove('_fixed')
        $main.style.marginLeft = `inherit`
      }
    }
  }
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

  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.header {
  width: 100%;
  flex-basis: 100%;
  flex-shrink: 0;
  border-bottom: 1px solid gray;
}
  
.header__menu {
  text-align: center;
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.container {
  display: flex;
  flex-grow: 1;
  height: 100%;
}

.aside {
  width: 100%;
  max-width: 200px;
  border-right: 1px solid gray;

  &._fixed {
    height: 100%;
    position: fixed;
    top: 0;
  }
}

.main {
  width: 100%;
}

</style>
