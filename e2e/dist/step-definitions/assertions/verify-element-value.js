"use strict";

var _cucumber = require("@cucumber/cucumber");

var _webElementHelper = require("../../support/web-element-helper");

var _waitForBehavior = require("../../support/wait-for-behavior");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

(0, _cucumber.Then)(/^the "([^"]*)" should contain the text "(.*)"$/, /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(elementKey, expectedElementText) {
    var page, globalConfig, elementIdentifier;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          page = this.screen.page, globalConfig = this.globalConfig;
          console.log("the ".concat(elementKey, " should contain the ").concat(expectedElementText));
          elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
          _context2.next = 5;
          return (0, _waitForBehavior.waitFor)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var elementText;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return page.textContent(elementIdentifier);

                case 2:
                  elementText = _context.sent;
                  return _context.abrupt("return", elementText === null || elementText === void 0 ? void 0 : elementText.includes(expectedElementText));

                case 4:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          })));

        case 5:
        case "end":
          return _context2.stop();
      }
    }, _callee2, this);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
(0, _cucumber.Then)(/^the "([^"]*)" should equal the text "(.*)"$/, /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(elementKey, expectedElementText) {
    var page, globalConfig, elementIdentifier;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          page = this.screen.page, globalConfig = this.globalConfig;
          console.log("the ".concat(elementKey, " should equal the text ").concat(expectedElementText));
          elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
          _context4.next = 5;
          return (0, _waitForBehavior.waitFor)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var elementText;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return page.textContent(elementIdentifier);

                case 2:
                  elementText = _context3.sent;
                  return _context3.abrupt("return", elementText === expectedElementText);

                case 4:
                case "end":
                  return _context3.stop();
              }
            }, _callee3);
          })));

        case 5:
        case "end":
          return _context4.stop();
      }
    }, _callee4, this);
  }));

  return function (_x3, _x4, _x5) {
    return _ref3.apply(this, arguments);
  };
}());