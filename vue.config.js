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
  devServer: {
    proxy: {
      "^/api": {
        target: "http://localhost:5000",
      },
    },
  },
};
