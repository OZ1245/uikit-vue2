const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // TODO:
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/scss/_mixins.scss";
        `
      }
    }
  }
})
