;(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    288: function(module, exports) {
      module.exports =
        "### Usage\r\n\r\n```js\r\nimport { Share } from '@bit/tenjojeremy.web-features.share'\r\n```\r\n\r\n### Properties\r\n\r\n| **propName** | **propType** | **defaultValue** | **isRequired** |\r\n| ------------ | ------------ | ---------------- | -------------- |\r\n| title        | string       | ''               | false          |\r\n| text         | string       | ''               | false          |\r\n| url          | string       | ''               | true           |\r\n\r\n```\r\nRequirements:\r\n    * Must be on mobile\r\n```\r\n\r\n### Information\r\n\r\n- Url: https://www.npmjs.com/package/@tenjo/api-share\r\n- Install: `yarn add @tenjo/api-share`\r\n\r\n#### Update\r\n\r\n- Export\r\n\r\n  - `yarn update --minor`\r\n  - or\r\n  - `yarn update --mayor`\r\n\r\n#### Remove\r\n\r\n`npm unpublish @tenjo/api-share --force`\r\n"
    },
    328: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      var _storybook_theming__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        329,
      )
      __webpack_exports__.a = Object(
        _storybook_theming__WEBPACK_IMPORTED_MODULE_0__.create,
      )({ base: 'light', colorSecondary: '#26C6DA' })
    },
    331: function(module, exports) {
      module.exports =
        '## Installation\n\n```sh\nyarn add @tenjo/communication-chat\n```\n\n### TODO\n\n- Add testing from On on one chats\n'
    },
    334: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      var C_Dev_Personal_Projects_Web_Features_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          16,
        ),
        C_Dev_Personal_Projects_Web_Features_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          C_Dev_Personal_Projects_Web_Features_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__,
        ),
        C_Dev_Personal_Projects_Web_Features_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          38,
        ),
        C_Dev_Personal_Projects_Web_Features_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          24,
        ),
        react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_3__,
        ),
        _share_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(93),
        ShareExample = function ShareExample() {
          var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__.useState)(
              '',
            ),
            _useState2 = Object(
              C_Dev_Personal_Projects_Web_Features_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.a,
            )(_useState, 2),
            resMsg = _useState2[0],
            setresMsg = _useState2[1],
            useShareFun = (function() {
              var _ref = Object(
                C_Dev_Personal_Projects_Web_Features_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.a,
              )(
                C_Dev_Personal_Projects_Web_Features_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(
                  function _callee() {
                    var _ref2, errorMessage
                    return C_Dev_Personal_Projects_Web_Features_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(
                      function _callee$(_context) {
                        for (;;)
                          switch ((_context.prev = _context.next)) {
                            case 0:
                              return (
                                (_context.next = 2),
                                Object(
                                  _share_index__WEBPACK_IMPORTED_MODULE_4__.a,
                                )(_share_index__WEBPACK_IMPORTED_MODULE_4__.b)
                              )
                            case 2:
                              ;(_ref2 = _context.sent),
                                (errorMessage = _ref2.errorMessage),
                                _ref2.success && setresMsg('Share Successful'),
                                errorMessage && setresMsg(errorMessage)
                            case 7:
                            case 'end':
                              return _context.stop()
                          }
                      },
                      _callee,
                    )
                  },
                ),
              )
              return function useShareFun() {
                return _ref.apply(this, arguments)
              }
            })()
          return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
            react__WEBPACK_IMPORTED_MODULE_3__.Fragment,
            null,
            react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
              'button',
              { onClick: useShareFun },
              'Share this',
            ),
            resMsg,
          )
        }
      ;(__webpack_exports__.a = ShareExample),
        (ShareExample.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'ShareExample',
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            'features\\Engagement\\Web.apis\\api.share\\share.examples\\share.example.simple.js'
          ] = {
            name: 'ShareExample',
            docgenInfo: ShareExample.__docgenInfo,
            path:
              'features\\Engagement\\Web.apis\\api.share\\share.examples\\share.example.simple.js',
          })
    },
    336: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      var C_Dev_Personal_Projects_Web_Features_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          16,
        ),
        C_Dev_Personal_Projects_Web_Features_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          C_Dev_Personal_Projects_Web_Features_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__,
        ),
        C_Dev_Personal_Projects_Web_Features_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          38,
        ),
        C_Dev_Personal_Projects_Web_Features_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          24,
        ),
        react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_3__,
        ),
        Input = function Input(_ref) {
          var errMsg = _ref.errMsg,
            errMesgStyle = _ref.errMesgStyle,
            showErrMsg = _ref.showErrMsg,
            placeholder = _ref.placeholder,
            _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
            _useState2 = Object(
              C_Dev_Personal_Projects_Web_Features_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.a,
            )(_useState, 2),
            input = _useState2[0],
            setInput = _useState2[1],
            updateInput = (function() {
              var _ref2 = Object(
                C_Dev_Personal_Projects_Web_Features_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.a,
              )(
                C_Dev_Personal_Projects_Web_Features_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(
                  function _callee(e) {
                    return C_Dev_Personal_Projects_Web_Features_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(
                      function _callee$(_context) {
                        for (;;)
                          switch ((_context.prev = _context.next)) {
                            case 0:
                              setInput(e.target.value)
                            case 1:
                            case 'end':
                              return _context.stop()
                          }
                      },
                      _callee,
                    )
                  },
                ),
              )
              return function updateInput(_x) {
                return _ref2.apply(this, arguments)
              }
            })()
          return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
            react__WEBPACK_IMPORTED_MODULE_3__.Fragment,
            null,
            react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
              'input',
              { value: input, onChange: updateInput, placeholder: placeholder },
            ),
            showErrMsg &&
              react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                'p',
                { style: errMesgStyle },
                errMsg,
              ),
          )
        }
      ;(Input.defaultProps = {
        placeholder: '',
        showErrMsg: null,
        errMesgStyle: {},
        errMsg: '',
      }),
        (__webpack_exports__.a = Object(
          react__WEBPACK_IMPORTED_MODULE_3__.memo,
        )(Input)),
        (Input.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Input',
          props: {
            placeholder: {
              defaultValue: { value: "''", computed: !1 },
              required: !1,
            },
            showErrMsg: {
              defaultValue: { value: 'null', computed: !1 },
              required: !1,
            },
            errMesgStyle: {
              defaultValue: { value: '{}', computed: !1 },
              required: !1,
            },
            errMsg: {
              defaultValue: { value: "''", computed: !1 },
              required: !1,
            },
          },
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            'features\\Forms\\Ui\\Input\\Input.index.js'
          ] = {
            name: 'Input',
            docgenInfo: Input.__docgenInfo,
            path: 'features\\Forms\\Ui\\Input\\Input.index.js',
          })
    },
    337: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__,
        ),
        Button = function Button(props) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            null,
            'Button Bit',
          )
        }
      ;(__webpack_exports__.a = Object(react__WEBPACK_IMPORTED_MODULE_0__.memo)(
        Button,
      )),
        (Button.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Button',
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            'features\\Misc\\Button\\Button.index.js'
          ] = {
            name: 'Button',
            docgenInfo: Button.__docgenInfo,
            path: 'features\\Misc\\Button\\Button.index.js',
          })
    },
    338: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      var slicedToArray = __webpack_require__(24),
        react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        prop_types = __webpack_require__(1),
        chat_propTypes_Input = function Input(_ref) {
          var onChange = _ref.onChange,
            onFocus = _ref.onFocus,
            _useState = Object(react.useState)(''),
            _useState2 = Object(slicedToArray.a)(_useState, 2),
            inputMessageValue = _useState2[0],
            setInputMessageValue = _useState2[1]
          return react_default.a.createElement('input', {
            type: 'text',
            onChange: function handleChange(_ref2) {
              var value = _ref2.target.value
              setInputMessageValue(value), onChange(value)
            },
            value: inputMessageValue,
            onFocus: onFocus,
          })
        },
        defaultProps = {
          senderIds: [],
          CurrentUserComp: function CurrentUserComp(_ref3) {
            var message = _ref3.message
            return react_default.a.createElement('div', null, message)
          },
          OtherUserComp: function OtherUserComp(_ref4) {
            var message = _ref4.message
            return react_default.a.createElement('div', null, message)
          },
          onReachedTop: null,
          InputComp: function InputComp(props) {
            return react_default.a.createElement(chat_propTypes_Input, props)
          },
          wrapperStyles: {},
          messagesData: [],
          previousMessageData: [],
          fetchingPreviousMessageData: !1,
          LoadingComp: function LoadingComp() {
            return react_default.a.createElement('div', null, 'Loading...')
          },
          onSubmit: null,
        },
        taggedTemplateLiteral = (prop_types.array,
        prop_types.func,
        prop_types.func,
        prop_types.func,
        prop_types.func,
        prop_types.object,
        Object(prop_types.arrayOf)(
          Object(prop_types.shape)({
            id: Object(prop_types.oneOfType)([
              prop_types.string,
              prop_types.number,
            ]),
            userId: Object(prop_types.oneOfType)([
              prop_types.string,
              prop_types.number,
            ]),
          }),
        ).isRequired,
        Object(prop_types.arrayOf)(
          Object(prop_types.shape)({
            id: Object(prop_types.oneOfType)([
              prop_types.string,
              prop_types.number,
            ]),
            userId: Object(prop_types.oneOfType)([
              prop_types.string,
              prop_types.number,
            ]),
          }),
        ).isRequired,
        prop_types.bool,
        prop_types.func,
        prop_types.func,
        __webpack_require__(73)),
        styled_components_browser_esm = __webpack_require__(74)
      function _templateObject5() {
        var data = Object(taggedTemplateLiteral.a)([
          '\n  position: absolute;\n  bottom: 20px;\n  left: 0;\n  right: 0;\n  margin: auto;\n  display: flex;\n  justify-content: center;\n',
        ])
        return (
          (_templateObject5 = function _templateObject5() {
            return data
          }),
          data
        )
      }
      function _templateObject4() {
        var data = Object(taggedTemplateLiteral.a)([
          '\n  display: flex;\n  justify-content: flex-end;\n',
        ])
        return (
          (_templateObject4 = function _templateObject4() {
            return data
          }),
          data
        )
      }
      function _templateObject3() {
        var data = Object(taggedTemplateLiteral.a)([
          '\n  display: flex;\n  justify-content: flex-start;\n',
        ])
        return (
          (_templateObject3 = function _templateObject3() {
            return data
          }),
          data
        )
      }
      function _templateObject2() {
        var data = Object(taggedTemplateLiteral.a)([
          '\n  height: 100%;\n  overflow: scroll;\n  padding-bottom: 50px;\n  box-sizing: border-box;\n',
        ])
        return (
          (_templateObject2 = function _templateObject2() {
            return data
          }),
          data
        )
      }
      function _templateObject() {
        var data = Object(taggedTemplateLiteral.a)([
          '\n  position: relative;\n  height: 300px;\n  overflow: hidden;\n',
        ])
        return (
          (_templateObject = function _templateObject() {
            return data
          }),
          data
        )
      }
      var ChatWrapper = styled_components_browser_esm.a.form(_templateObject()),
        ChatList = styled_components_browser_esm.a.div(_templateObject2()),
        CurrentUserCompWrapper = styled_components_browser_esm.a.div(
          _templateObject3(),
        ),
        OtherUserCompWrapper = styled_components_browser_esm.a.div(
          _templateObject4(),
        ),
        InputCompWrapper = styled_components_browser_esm.a.div(
          _templateObject5(),
        ),
        chat_index_Chat = function Chat(_ref) {
          var senderIds = _ref.senderIds,
            CurrentUserComp = _ref.CurrentUserComp,
            OtherUserComp = _ref.OtherUserComp,
            onReachedTop = _ref.onReachedTop,
            InputComp = _ref.InputComp,
            wrapperStyles = _ref.wrapperStyles,
            messagesData = _ref.messagesData,
            previousMessageData = _ref.previousMessageData,
            fetchingPreviousMessageData = _ref.fetchingPreviousMessageData,
            LoadingComp = _ref.LoadingComp,
            inputCompStyles = _ref.inputCompStyles,
            onSubmit = _ref.onSubmit,
            ChatList_Ref = Object(react.useRef)(null),
            _useState = Object(react.useState)(''),
            _useState2 = Object(slicedToArray.a)(_useState, 2),
            inputMessageValue = _useState2[0],
            setInputMessageValue = _useState2[1]
          Object(react.useEffect)(
            function() {
              return (
                scrollToBottom(), addEventListeners(), removeEventListeners()
              )
            },
            [addEventListeners, removeEventListeners, scrollToBottom],
          )
          var addEventListeners = function addEventListeners() {
              onReachedTop &&
                ChatList_Ref.current.addEventListener(
                  'scroll',
                  handleScroll,
                  !0,
                )
            },
            removeEventListeners = function removeEventListeners() {
              ChatList_Ref.current.removeEventListener('scroll', handleScroll)
            },
            scrollToBottom = function scrollToBottom() {
              return (ChatList_Ref.current.scrollTop =
                ChatList_Ref.current.scrollHeight)
            },
            handleScroll = function handleScroll() {
              0 === ChatList_Ref.current.scrollTop && onReachedTop()
            },
            loadMessages = function loadMessages(data) {
              return data.map(function(msg) {
                return senderIds.includes(msg.userId)
                  ? react_default.a.createElement(
                      CurrentUserCompWrapper,
                      { key: msg.id },
                      react_default.a.createElement(CurrentUserComp, msg),
                    )
                  : react_default.a.createElement(
                      OtherUserCompWrapper,
                      { key: msg.id },
                      react_default.a.createElement(OtherUserComp, msg),
                    )
              })
            }
          return react_default.a.createElement(
            ChatWrapper,
            {
              styles: wrapperStyles,
              onSubmit: function handleOnSubmit(e) {
                e.preventDefault(),
                  '' !== inputMessageValue &&
                    (onSubmit(inputMessageValue), scrollToBottom())
              },
            },
            react_default.a.createElement(
              ChatList,
              { ref: ChatList_Ref },
              loadMessages(previousMessageData),
              fetchingPreviousMessageData &&
                react_default.a.createElement(LoadingComp, null),
              loadMessages(messagesData),
            ),
            react_default.a.createElement(
              InputCompWrapper,
              null,
              react_default.a.createElement(InputComp, {
                styles: inputCompStyles,
                onChange: function messageInputOnChange(message) {
                  return setInputMessageValue(message)
                },
                onFocus: scrollToBottom,
              }),
            ),
          )
        }
      chat_index_Chat.defaultProps = defaultProps
      var chat_index = Object(react.memo)(chat_index_Chat)
      ;(chat_index_Chat.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'Chat',
        composes: ['./chat.propTypes'],
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            'features\\Comunication\\Chat\\chat.index.js'
          ] = {
            name: 'Chat',
            docgenInfo: chat_index_Chat.__docgenInfo,
            path: 'features\\Comunication\\Chat\\chat.index.js',
          })
      var chat_default_mockData = [
          { id: 1, userId: 1, message: 'Hello' },
          { id: 262356, userId: 1, message: 'Hello Back' },
          { id: 265345, userId: 1, message: 'Hello Back THank you ' },
          { id: 23456566, userId: 2, message: 'Hello Back THank you ' },
          { id: 234563345456, userId: 2, message: 'Hello Back THank you ' },
          { id: 2345563456, userId: 1, message: 'Hello Back THank you ' },
          { id: 234564365, userId: 2, message: 'Hello Back THank you ' },
          { id: 23456345, userId: 1, message: 'Hello Back THank you ' },
          { id: 27899787, userId: 2, message: 'Hello Back THank you ' },
          { id: 2789079, userId: 2, message: 'Hello Back THank you ' },
          { id: 27890789, userId: 1, message: 'Hello Back THank you ' },
          { id: 17890, userId: 1, message: 'Hello Back THank you ' },
          { id: 2789073389, userId: 1, message: 'Hello Back THank you ' },
          { id: 27890, userId: 2, message: 'Hello Back THank you ' },
        ],
        chat_default_example_CurrentUserComp = function CurrentUserComp(_ref) {
          var message = _ref.message
          return react_default.a.createElement('p', null, message)
        },
        chat_default_example_OtherUserComp = function OtherUserComp(_ref2) {
          var message = _ref2.message
          return react_default.a.createElement('p', null, message)
        },
        chat_default_example_LoadingComponent = function LoadingComponent() {
          return react_default.a.createElement('p', null, 'Loading....')
        },
        chat_default_example_Example = function Example() {
          var _useState = Object(react.useState)(chat_default_mockData),
            _useState2 = Object(slicedToArray.a)(_useState, 2),
            data = _useState2[0],
            setData = _useState2[1],
            addMessage = function addMessage(message) {
              var newData = data,
                newMessage = {
                  id: Math.random(),
                  userId: '1',
                  message: message,
                }
              newData.push(newMessage), setData(newData)
            }
          return react_default.a.createElement(
            'div',
            { className: 'App' },
            react_default.a.createElement('h1', null, 'Add Other user message'),
            react_default.a.createElement(
              'button',
              { onClick: addMessage },
              'Add Message',
            ),
            react_default.a.createElement('h1', null, 'Component'),
            react_default.a.createElement(chat_index, {
              messagesData: data,
              senderIds: [1],
              CurrentUserComp: chat_default_example_CurrentUserComp,
              OtherUserComp: chat_default_example_OtherUserComp,
              onReachedTop: function onReachedTop() {
                return console.log('reachedTop')
              },
              previousMessageData: [],
              LoadingComp: chat_default_example_LoadingComponent,
              onSubmit: addMessage,
            }),
          )
        }
      __webpack_exports__.a = chat_default_example_Example
      ;(chat_default_example_Example.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'Example',
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            'features\\Comunication\\Chat\\Examples\\Default\\chat.default.example.js'
          ] = {
            name: 'Example',
            docgenInfo: chat_default_example_Example.__docgenInfo,
            path:
              'features\\Comunication\\Chat\\Examples\\Default\\chat.default.example.js',
          })
    },
    341: function(module, exports, __webpack_require__) {
      __webpack_require__(342),
        __webpack_require__(420),
        (module.exports = __webpack_require__(421))
    },
    421: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var _storybook_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
              20,
            ),
            _storybook_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              328,
            )
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.addParameters)({
            options: {
              name: 'Web Features',
              theme: _storybook_theme__WEBPACK_IMPORTED_MODULE_1__.a,
              panelPosition: 'right',
              showPanel: !1,
            },
          })
          var req = __webpack_require__(580)
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)(
            function loadStories() {
              req.keys().forEach(function(filename) {
                return req(filename)
              })
            },
            module,
          )
        }.call(this, __webpack_require__(83)(module))
    },
    580: function(module, exports, __webpack_require__) {
      var map = {
        './Comunication/Chat/chat.stories.js': 581,
        './Engagement/Web.apis/api.share/share.stories.js': 609,
        './Forms/Ui/Input/Input.stories.js': 738,
        './Misc/Button/Button.stories.js': 739,
      }
      function webpackContext(req) {
        var id = webpackContextResolve(req)
        return __webpack_require__(id)
      }
      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'")
          throw ((e.code = 'MODULE_NOT_FOUND'), e)
        }
        return map[req]
      }
      ;(webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map)
      }),
        (webpackContext.resolve = webpackContextResolve),
        (module.exports = webpackContext),
        (webpackContext.id = 580)
    },
    581: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__,
            ),
            _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              20,
            ),
            storybook_readme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
              136,
            ),
            _README_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(331),
            _README_md__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
              _README_md__WEBPACK_IMPORTED_MODULE_3__,
            ),
            _Examples_Default_chat_default_example__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
              338,
            )
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
            'Chat',
            module,
          ).add(
            'default',
            Object(storybook_readme__WEBPACK_IMPORTED_MODULE_2__.withReadme)(
              _README_md__WEBPACK_IMPORTED_MODULE_3___default.a,
              function() {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _Examples_Default_chat_default_example__WEBPACK_IMPORTED_MODULE_4__.a,
                  null,
                )
              },
            ),
          )
        }.call(this, __webpack_require__(83)(module))
    },
    609: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__,
            ),
            _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              20,
            ),
            storybook_readme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
              136,
            ),
            _share_examples_share_example_simple__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
              334,
            ),
            _share_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(93)
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
            'Share',
            module,
          ).add(
            'default',
            Object(storybook_readme__WEBPACK_IMPORTED_MODULE_2__.withReadme)(
              _share_index__WEBPACK_IMPORTED_MODULE_4__.c,
              function() {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _share_examples_share_example_simple__WEBPACK_IMPORTED_MODULE_3__.a,
                  null,
                )
              },
            ),
          )
        }.call(this, __webpack_require__(83)(module))
    },
    738: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__,
            ),
            _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              20,
            ),
            _Input_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(336)
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
            'Input',
            module,
          ).add('default', function() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _Input_index__WEBPACK_IMPORTED_MODULE_2__.a,
              {
                errMessage: 'err message',
                placeholder: 'this is a plcaholder',
              },
            )
          })
        }.call(this, __webpack_require__(83)(module))
    },
    739: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__,
            ),
            _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              20,
            ),
            _Button_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
              337,
            )
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
            'Button',
            module,
          ).add('with text', function() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _Button_index__WEBPACK_IMPORTED_MODULE_2__.a,
              null,
            )
          })
        }.call(this, __webpack_require__(83)(module))
    },
    93: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      var share_readme = __webpack_require__(288),
        share_readme_default = __webpack_require__.n(share_readme),
        regenerator = __webpack_require__(16),
        regenerator_default = __webpack_require__.n(regenerator),
        asyncToGenerator = __webpack_require__(38),
        objectSpread = __webpack_require__(339),
        esm_extends = __webpack_require__(335),
        lib = __webpack_require__(94),
        share_schema = (function() {
          var _ref2 = Object(asyncToGenerator.a)(
            regenerator_default.a.mark(function _callee(_ref) {
              var values, shareSchema
              return regenerator_default.a.wrap(function _callee$(_context) {
                for (;;)
                  switch ((_context.prev = _context.next)) {
                    case 0:
                      return (
                        (values = Object(esm_extends.a)({}, _ref)),
                        (shareSchema = Object(lib.object)().shape({
                          title: Object(lib.string)(),
                          text: Object(lib.string)(),
                          url: Object(lib.string)(),
                        })),
                        (_context.next = 4),
                        shareSchema.isValid(Object(objectSpread.a)({}, values))
                      )
                    case 4:
                      return _context.abrupt('return', _context.sent)
                    case 5:
                    case 'end':
                      return _context.stop()
                  }
              }, _callee)
            }),
          )
          return function validateAgainstshareSchema(_x) {
            return _ref2.apply(this, arguments)
          }
        })(),
        share_init = (function() {
          var _ref = Object(asyncToGenerator.a)(
            regenerator_default.a.mark(function _callee(data) {
              var errorMessage_Web_Share_Fail, errorMessage_Schema_Fail
              return regenerator_default.a.wrap(
                function _callee$(_context) {
                  for (;;)
                    switch ((_context.prev = _context.next)) {
                      case 0:
                        if (
                          (null,
                          'Fail: Web Share is not supported',
                          (errorMessage_Web_Share_Fail =
                            'Fail: Sorry there was an issue with webshare please open big-web-features'),
                          (errorMessage_Schema_Fail =
                            'Fail: Data has to be object {title, text, url} all strings'),
                          navigator.share)
                        ) {
                          _context.next = 6
                          break
                        }
                        return _context.abrupt('return', {
                          errorMessage: 'Fail: Web Share is not supported',
                        })
                      case 6:
                        return (_context.next = 8), share_schema(data)
                      case 8:
                        if (_context.sent) {
                          _context.next = 11
                          break
                        }
                        return _context.abrupt('return', {
                          errorMessage: errorMessage_Schema_Fail,
                        })
                      case 11:
                        return (
                          (_context.prev = 11),
                          (_context.next = 14),
                          navigator.share(data)
                        )
                      case 14:
                        return _context.abrupt('return', { success: !0 })
                      case 17:
                        return (
                          (_context.prev = 17),
                          (_context.t0 = _context.catch(11)),
                          _context.abrupt('return', {
                            errorMessage: ''
                              .concat(errorMessage_Web_Share_Fail, ' : ')
                              .concat(_context.t0),
                          })
                        )
                      case 20:
                      case 'end':
                        return _context.stop()
                    }
                },
                _callee,
                null,
                [[11, 17]],
              )
            }),
          )
          return function shareFunction(_x) {
            return _ref.apply(this, arguments)
          }
        })(),
        share_mockData = {
          title: 'My awesome post!',
          text: 'This post may or may not contain the answer to the universe',
          url: window.location.href,
        }
      __webpack_require__.d(__webpack_exports__, 'a', function() {
        return share_init
      }),
        __webpack_require__.d(__webpack_exports__, 'c', function() {
          return share_readme_default.a
        }),
        __webpack_require__.d(__webpack_exports__, 'b', function() {
          return share_mockData
        })
    },
  },
  [[341, 1, 2]],
])
//# sourceMappingURL=main.4404001f7daa65686af9.bundle.js.map
