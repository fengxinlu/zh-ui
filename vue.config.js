const path = require('path')
const fs = require('fs')
const join = path.join // 拼接路径

function resolve (dir) {
  return path.resolve(__dirname, dir)
}

function getEntries (path) {
  const files = fs.readdirSync(resolve(path))
  const entries = files.reduce((ret, item) => {
    const itemPath = join(path, item)
    const isDir = fs.statSync(itemPath).isDirectory()
    if (isDir) {
      ret[item] = resolve(join(itemPath, 'index.js'))
    } else {
      const [name] = item.split('.')
      ret[name] = resolve(`${itemPath}`)
    }
    return ret
  }, {})
  return entries
}
// 开发环境
const devConfig = {
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        '@': resolve('packages'),
        assets: resolve('examples/assets'),
        views: resolve('examples/views')
      }
    }
  },
  chainWebpack: config => {
    config.module
      .rule('js')
      .include
      .add('/packages')
      .end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        return options
      })
  },
  devServer: {
    port: 8091, // 固定端口
    hot: true, // 开启热更新
    open: 'Google Chrome'// 固定打开浏览器
  }
}

// 生产环境
const prodConfig = {
  configureWebpack: {
    entry: {
      ...getEntries('packages')
    },
    output: {
      filename: '[name]/index.js',
      libraryTarget: 'umd',
      library: 'zh-ui', // 类库导出
      umdNamedDefine: true
    },
    externals: { // 外部化对vue的依赖
      vue: {
        root: 'Vue',
        commonjs: 'vue',
        commonjs2: 'vue',
        amd: 'vue'
      }
    }
  },
  chainWebpack: config => {
    config.module
      .rule('js')
      .include
      .add('/packages')
      .end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        return options
      })
    config.module
      .rule('fonts')
      .use('url-loader')
      .tap(option => {
        option.fallback.options.name = 'static/fonts/[name].[hash:8].[ext]'
        return option
      })
    config.optimization.delete('splitChunks') // 因为每个组件是独立打包，不需要抽离每个组件的公共js出来。
    config.plugins.delete('copy') // 不要复制public文件夹内容到lib文件夹中。
    config.plugins.delete('html') // 只打包组件，不生成html页面。
    config.plugins.delete('preload') // 不生成html页面，所以这两个也没用。
    config.plugins.delete('prefetch')
    config.plugins.delete('hmr') // 删除热更新。
    config.entryPoints.delete('app') // 删除自动加上的入口App。
  },
  outputDir: 'lib',
  productionSourceMap: false,
  css: {
    sourceMap: true,
    extract: {
      filename: '[name]/index.css'// 在lib文件夹中建立style文件夹中，生成对应的css文件。
    }
  }
}

module.exports = process.env.NODE_ENV === 'development' ? devConfig : prodConfig
