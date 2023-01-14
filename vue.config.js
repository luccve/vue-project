const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
});

module.exports = {
  publicPath: "/vertice/",
};

// module.exports = {
//   devServer: {
//     proxy: "http://127.0.0.1:5000/" || "https://luccve.github.io/",
//   },
// };
