module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
            @import "@/style/variables/_variables.scss";
            @import "@/style/mixins/_mixins.scss";
          `,
      },
    },
  },
};
