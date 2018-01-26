'use strict';

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

var _router = require('./router');

var _router2 = _interopRequireDefault(_router);

var _elementUi = require('element-ui');

var _elementUi2 = _interopRequireDefault(_elementUi);

require('jquery');

require('element-ui/lib/theme-chalk/index.css');

require('./assets/base.css');

require('./assets/font-awesome-4.7.0/css/font-awesome.min.css');

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.prototype.http = _axios2.default; // The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

_vue2.default.use(_elementUi2.default);

_vue2.default.config.productionTip = false;

/* eslint-disable no-new */
new _vue2.default({
  el: '#app',
  router: _router2.default,
  components: { App: _App2.default },
  template: '<App/>'
});
//# sourceMappingURL=main.js.map