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
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg');

    svgRule.uses.clear();

    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader');
  },
};