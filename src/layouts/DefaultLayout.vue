<template>
  <div>
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
        <router-view />
      </main>
    </section>
  </div>
</template>

<script>
import DemoNavigation from '@/components/demo/DemoNavigation'

export default {
  name: 'DefaultLayout',

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
        // TODO: Add throttler function
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
  flex-shrink: 0;
  background-color: $cBgMain;
  border-right: 1px solid $cBorder;

  &._fixed {
    height: 100%;
    position: fixed;
    top: 0;
    z-index: 1;
  }
}

.main {
  width: 100%;
}

.example-code {
  code {
    padding: 8px;
    background-color: $cBgAdditional;
    border: {
      width: 1px;
      style: solid; 
      color: $cBorder;
      radius: 2px;
    };
  }
}

</style>