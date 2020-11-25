module.exports = {
  runtimeCompiler: true,
  // 注意：打包前需要将引用路径改为相对路径，否则打包后会显示空页面
  // 输出的根路径, 默认是"/", 为绝对路径，需要改成相对路径  "./"
  publicPath: './', 
  devServer: {
    port: 8080 //端口
  }
}