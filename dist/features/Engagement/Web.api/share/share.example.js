'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }(); // Vendors


//


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _share = require('./share.index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var ShareExample = function ShareExample() {
  // State
  var _useState = (0, _react.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      resMsg = _useState2[0],
      setresMsg = _useState2[1];

  // Functions


  var useShareFun = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var _ref2, errorMessage, success;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0, _share.Share)(_share.ShareMockData);

            case 2:
              _ref2 = _context.sent;
              errorMessage = _ref2.errorMessage;
              success = _ref2.success;


              if (success) setresMsg('Share Successful');
              if (errorMessage) setresMsg(errorMessage);

            case 7:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function useShareFun() {
      return _ref.apply(this, arguments);
    };
  }();

  // Template
  return _react2.default.createElement(
    _react.Fragment,
    null,
    _react2.default.createElement(
      'button',
      { onClick: useShareFun },
      'Share this'
    ),
    resMsg
  );
};

exports.default = ShareExample;

//# sourceMappingURL=share.example.js.map