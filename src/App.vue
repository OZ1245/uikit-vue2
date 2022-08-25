<template>
  <div id="app">
    <header class="header">
      <nav class="header__menu">
        <router-link to="/">Главная</router-link> |
        <router-link to="/input">Поле ввода Input</router-link>
      </nav>
    </header>

    <main class="main">
      <router-view/>
    </main>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
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

</style>
