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
  }
};