// You can extend default webpack build here. Read more on docs: https://github.com/DivanteLtd/vue-storefront/blob/master/doc/Working%20with%20webpack.md
module.exports = function (config, { isClient, isDev }) {
  config.default.resolve.alias = Object.assign({ vue: 'vue/dist/vue.js' }, config.default.resolve.alias)
  return config
}
