var avalon = require('./seed/modern') 

require('./filters/index')
require('./vdom/index')
require('./dom/modern')
require('./directives/modern')
require('./strategy/index')
require('./vmodel/next')
avalon.onComponentDispose = require('./component/dispose.modern')


module.exports = avalon