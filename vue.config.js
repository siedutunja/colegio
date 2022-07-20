module.exports = {
  lintOnSave: false,
  runtimeCompiler: true,
  publicPath: '/colegio/',
  outputDir: 'colegio',
  configureWebpack: {
    resolve: {
       symlinks: false
    }
  },
  transpileDependencies: [
    '@coreui/utils',
    '@coreui/vue'
  ]
}
