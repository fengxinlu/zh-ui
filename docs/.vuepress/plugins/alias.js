module.exports = (options, context) => ({
  chainWebpack (config) {
    config.resolve.alias.set('styles', `${process.cwd()}/styles`)
  }
})