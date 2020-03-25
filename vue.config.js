module.exports = {
  chainWebpack: config => {
    config.module
      .rule('eslint')
      .use('eslint-loader')
      .loader('eslint-loader')
      .tap(options => {
        options.fix = true
        return options
      })
  },
  publicPath: './',
  devServer: {
    proxy: {
      '/api': {
        target: 'https://www.easy-mock.com/mock/5e72eaf9c733a41f19e703a0/robot',
        changeOrigin: true,
        secure: false,
        logLevel: 'debug',
        auth: '2471cacdb621dff5f5c46eff6ce1e555'
      }
    }
  }
}
