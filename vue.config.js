
module.exports = {
  

   // proxy API requests during development
  devServer: {
    proxy: process.env.VUE_APP_API_HOST,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  },

  parallel: true,

  // output built static files to Laravel's public dir.
  // note the "build" script in package.json needs to be modified as well.
  outputDir: '../public',

  // modify the location of the generated HTML file.
  // make sure to do this only in production.
  indexPath: process.env.NODE_ENV === 'production'
    ? '../resources/views/index.blade.php'
    : 'index.html',

  configureWebpack: {
   devtool: 'source-map'
 },

  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "~@/scss/_mixins.scss";
          @import "~@/scss/_fonts.scss";
          @import "~@/scss/app.scss";
          `,
        outputStyle: "expanded",
      }
    },
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
