const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#8ff0d7',"@favortive-color":"#3135e4" },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};