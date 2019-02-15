'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _storybookReadme = require('storybook-readme');

var _hello = require('./hello.index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Stories

// Vendors
(0, _react3.storiesOf)('Hello', module).add('default', (0, _storybookReadme.withReadme)(_hello.HelloReadme, function () {
  return _react2.default.createElement(_hello.Hello, null);
}));

// Component

//# sourceMappingURL=hello.stories.js.map