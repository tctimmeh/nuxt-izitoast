const path = require('path')

module.exports = function nuxtToast (moduleOptions) {
  const options = Object.assign({}, this.options.izitoast, moduleOptions)

  this.options.css.push('izitoast/dist/css/iziToast.css')

  this.addPlugin({
    src: path.resolve(__dirname, 'plugin.js'),
    options
  })
}

module.exports.meta = require('./package.json')
