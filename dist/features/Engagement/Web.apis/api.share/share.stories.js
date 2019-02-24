'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _storybookReadme = require('storybook-readme');

var _shareExample = require('./share.examples/share.example.simple');

var _shareExample2 = _interopRequireDefault(_shareExample);

var _share = require('./share.index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Stories


// Component
(0, _react3.storiesOf)('Share', module).add('default', (0, _storybookReadme.withReadme)(_share.ShareReadme, function () {
  return _react2.default.createElement(_shareExample2.default, null);
})); // Vendors

//# sourceMappingURL=share.stories.js.map