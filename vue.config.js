module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "~@/scss/_mixins.scss";
          @import "~@/scss/_fonts.scss";
          @import "~@/scss/app.scss";
          `,
      }
    },
  },

  devServer: {
    watchOptions: {
      poll: true
    }
  },

  // chainWebpack: (config) => {
  //   const svgRule = config.module.rule('svg');

  //   svgRule.uses.clear();

  //   svgRule
  //     .use('vue-svg-loader')
  //     .loader('vue-svg-loader');
  // },

  configureWebpack: {
   devtool: 'source-map'
 },

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false
    }
  }
};
