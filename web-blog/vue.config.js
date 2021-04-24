module.exports = {
  outputDir: 'blog',
  assetsDir: 'static',
  devServer: {
    open: true,
    port: 3008,
    proxy: {
      "/api": {
        target: "http://localhost:8080",
        changeOrigin: true,
        pathRewrite: {
          "/api": ""
        }
      }
    }
  },
  chainWebpack: config => { }
}