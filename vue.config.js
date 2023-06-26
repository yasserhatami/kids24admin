const { defineConfig } = require('@vue/cli-service')
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/assets/sass/main.scss";`
      }
    }
  },

  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  }
};
module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    vuetify: {}
  }
})
