"use strict";

var _dotenv = _interopRequireDefault(require("dotenv"));

var _cucumberHtmlReporter = _interopRequireDefault(require("cucumber-html-reporter"));

var _parseEnv = require("../env/parseEnv");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv.default.config({
  path: (0, _parseEnv.env)('COMMON_CONFIG_FILE')
});

var options = {
  theme: 'bootstrap',
  storeScreenshots: true,
  reportSuiteAsScenarios: true,
  launchReport: false
};

_cucumberHtmlReporter.default.generate(options);