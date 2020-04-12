/*!
 * byui前端敏捷开发平台 : vue-admin-beautiful
 *  copyright:1204505056@qq.com 
 *  author: chuzhixin <1204505056@qq.com> 
 *  participants: 
 *  time: "2020-4-12 18:34:6"
 */
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[97],{

/***/ "./node_modules/_css-loader@3.5.2@css-loader/dist/cjs.js?!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js?!./node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js?!./src/styles/common.scss":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_css-loader@3.5.2@css-loader/dist/cjs.js??ref--8-oneOf-3-1!./node_modules/_postcss-loader@3.0.0@postcss-loader/src??ref--8-oneOf-3-2!./node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js??ref--8-oneOf-3-3!./src/styles/common.scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/_css-loader@3.5.2@css-loader/dist/runtime/api.js */ "./node_modules/_css-loader@3.5.2@css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "@charset \"UTF-8\";\n/* byui scss全局变量开始 */\n/*浅色风格开始*/\n/*浅色风格结束*/\n/*蓝色风格开始*/\n/*蓝色风格结束*/\n/*黑色风格开始*/\n/*黑色风格结束*/\n/* byui scss全局变量结束 */\n\n* {\n  padding: 0;\n  margin: 0;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\nbody,\nhtml {\n  margin: 0;\n  padding: 0;\n  font-family: Microsoft YaHei;\n  font-weight: 400;\n  -webkit-font-smoothing: antialiased;\n  -webkit-tap-highlight-color: transparent;\n  background: #f6f8f9;\n  position: relative;\n  height: 100%;\n}\n\n*,\n*:before,\n*:after {\n  outline: none;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\n.byui-clearfix:after {\n  content: \".\";\n  display: block;\n  height: 0;\n  clear: both;\n  visibility: hidden;\n}\n\nimg {\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\na {\n  text-decoration: none;\n  cursor: pointer;\n  color: #009688;\n}\n\n.byui-overflow {\n  overflow: hidden;\n}\n\n/* 滚动条样式,新版本滚动条默认使用el-scroll方式,请仔细阅读文档 */\n::-webkit-scrollbar {\n  width: 6px;\n  height: 6px;\n  background: transparent;\n}\n\n::-webkit-scrollbar-thumb {\n  background-color: rgba(144, 147, 153, 0.3);\n  border-radius: 10px;\n}\n\n::-webkit-scrollbar-thumb:hover {\n  background-color: rgba(144, 147, 153, 0.3);\n}", "",{"version":3,"sources":["common.scss","D:\\Development\\WebStormProjects\\vue-element-admin-beautiful/src\\styles\\variables.scss","D:\\Development\\WebStormProjects\\vue-element-admin-beautiful/src\\styles\\common.scss"],"names":[],"mappings":"AAAA,gBAAgB;ACChB,oBAAA;AACA,SAAA;AAMA,SAAA;AAEA,SAAA;AAMA,SAAA;AACA,SAAA;AAMA,SAAA;AA4BA,oBAAA;;ACjDA;EACE,UAAA;EACA,SAAA;EACA,8BAAA;UAAA,sBAAA;AFgBF;;AEbA;;EAEE,SAAA;EACA,UAAA;EACA,4BAAA;EACA,gBAAA;EACA,mCAAA;EACA,wCAAA;EACA,mBAAA;EACA,kBAAA;EACA,YAAA;AFgBF;;AEdA;;;EAGE,aAAA;EACA,8BAAA;UAAA,sBAAA;AFiBF;;AEdA;EACE,YAAA;EACA,cAAA;EACA,SAAA;EACA,WAAA;EACA,kBAAA;AFiBF;;AEdA;EACE,oBAAA;KAAA,iBAAA;AFiBF;;AEdA;EACE,qBAAA;EACA,eAAA;EACA,cDZgB;AD6BlB;;AEdA;EACE,gBAAA;AFiBF;;AEdA,wCAAA;AACA;EACE,UAAA;EACA,WAAA;EACA,uBAAA;AFiBF;;AEdA;EACE,0CAAA;EACA,mBAAA;AFiBF;;AEdA;EACE,0CAAA;AFiBF","file":"common.scss","sourcesContent":["@charset \"UTF-8\";\n/* byui scss全局变量开始 */\n/*浅色风格开始*/\n/*浅色风格结束*/\n/*蓝色风格开始*/\n/*蓝色风格结束*/\n/*黑色风格开始*/\n/*黑色风格结束*/\n/* byui scss全局变量结束 */\n:export {\n  menuText: #ffffff;\n  menuTextAcive: #ffffff;\n  menuBackground: #001529;\n  menuActiveBackground: #009688;\n  tagViewsActiveBackground: #009688;\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody,\nhtml {\n  margin: 0;\n  padding: 0;\n  font-family: Microsoft YaHei;\n  font-weight: 400;\n  -webkit-font-smoothing: antialiased;\n  -webkit-tap-highlight-color: transparent;\n  background: #f6f8f9;\n  position: relative;\n  height: 100%;\n}\n\n*,\n*:before,\n*:after {\n  outline: none;\n  box-sizing: border-box;\n}\n\n.byui-clearfix:after {\n  content: \".\";\n  display: block;\n  height: 0;\n  clear: both;\n  visibility: hidden;\n}\n\nimg {\n  object-fit: cover;\n}\n\na {\n  text-decoration: none;\n  cursor: pointer;\n  color: #009688;\n}\n\n.byui-overflow {\n  overflow: hidden;\n}\n\n/* 滚动条样式,新版本滚动条默认使用el-scroll方式,请仔细阅读文档 */\n::-webkit-scrollbar {\n  width: 6px;\n  height: 6px;\n  background: transparent;\n}\n\n::-webkit-scrollbar-thumb {\n  background-color: rgba(144, 147, 153, 0.3);\n  border-radius: 10px;\n}\n\n::-webkit-scrollbar-thumb:hover {\n  background-color: rgba(144, 147, 153, 0.3);\n}","@charset \"utf-8\";\r\n/* byui scss全局变量开始 */\r\n/*浅色风格开始*/\r\n$base-menu-background: #e7eaed;\r\n$base-menu-active-background: rgba(#1890ff, 0.5);\r\n$base-menu-text: #001529;\r\n$base-menu-text-active: #001529;\r\n$base-title: #001529;\r\n/*浅色风格结束*/\r\n\r\n/*蓝色风格开始*/\r\n$base-menu-background: #2a58ad;\r\n$base-menu-active-background: #22468a;\r\n$base-menu-text: #ffffff;\r\n$base-menu-text-active: #ffffff;\r\n$base-title: #ffffff;\r\n/*蓝色风格结束*/\r\n/*黑色风格开始*/\r\n$base-menu-background: #001529;\r\n$base-menu-active-background: #009688;\r\n$base-menu-text: #ffffff;\r\n$base-menu-text-active: #ffffff;\r\n$base-title: #ffffff;\r\n/*黑色风格结束*/\r\n$base-font-size-small: 12px;\r\n$base-font-size-default: 14px;\r\n$base-font-size-big: 16px;\r\n$base-font-size-bigger: 18px;\r\n$base-font-size-max: 22px;\r\n$base-color-header: $base-menu-background;\r\n$base-color-blue: #009688;\r\n$base-color-green: #67c23a;\r\n$base-color-white: #ffffff;\r\n$base-color-black: #000000;\r\n$base-color-yellow: #ffba00;\r\n$base-color-red: #ff4d4f;\r\n$base-color-gray: #97a8be;\r\n$base-main-width: 1279px;\r\n$base-border-radius: 2px;\r\n$base-border-color: #ebeef5;\r\n$base-form-width: 600px;\r\n$base-input-height: 32px;\r\n$base-pagination-height: 28px;\r\n$base-dialog-title-height: 40px;\r\n$base-padding: 15px;\r\n$base-box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);\r\n$base-font-color: #606266;\r\n$base-left-menu-width: 225px;\r\n$base-right-content-width: calc(100vw - 225px);\r\n$base-left-menu-width-min: 65px;\r\n$base-right-content-width-min: calc(100vw - 65px);\r\n/* byui scss全局变量结束 */\r\n:export {\r\n  menuText: $base-menu-text;\r\n  menuTextAcive: $base-menu-text-active;\r\n  menuBackground: $base-menu-background;\r\n  menuActiveBackground: $base-menu-active-background;\r\n  tagViewsActiveBackground: $base-color-blue;\r\n}\r\n","@import \"~@/styles/variables.scss\";\r\n@charset \"utf-8\";\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody,\nhtml {\n  margin: 0;\n  padding: 0;\n  font-family: Microsoft YaHei;\n  font-weight: 400;\n  -webkit-font-smoothing: antialiased;\n  -webkit-tap-highlight-color: transparent;\n  background: #f6f8f9;\n  position: relative;\n  height: 100%;\n}\n*,\n*:before,\n*:after {\n  outline: none;\n  box-sizing: border-box;\n}\n\n.byui-clearfix:after {\n  content: \".\";\n  display: block;\n  height: 0;\n  clear: both;\n  visibility: hidden;\n}\n\nimg {\n  object-fit: cover;\n}\n\na {\n  text-decoration: none;\n  cursor: pointer;\n  color: $base-color-blue;\n}\n\n.byui-overflow {\n  overflow: hidden;\n}\n\n/* 滚动条样式,新版本滚动条默认使用el-scroll方式,请仔细阅读文档 */\n::-webkit-scrollbar {\n  width: 6px;\n  height: 6px;\n  background: transparent;\n}\n\n::-webkit-scrollbar-thumb {\n  background-color: rgba(144, 147, 153, 0.3);\n  border-radius: 10px;\n}\n\n::-webkit-scrollbar-thumb:hover {\n  background-color: rgba(144, 147, 153, 0.3);\n}\n"]}]);
// Exports
exports.locals = {
	"menuText": "#ffffff",
	"menuTextAcive": "#ffffff",
	"menuBackground": "#001529",
	"menuActiveBackground": "#009688",
	"tagViewsActiveBackground": "#009688"
};
module.exports = exports;


/***/ }),

/***/ "./src/styles/common.scss":
/*!********************************!*\
  !*** ./src/styles/common.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/_css-loader@3.5.2@css-loader/dist/cjs.js??ref--8-oneOf-3-1!../../node_modules/_postcss-loader@3.0.0@postcss-loader/src??ref--8-oneOf-3-2!../../node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js??ref--8-oneOf-3-3!./common.scss */ "./node_modules/_css-loader@3.5.2@css-loader/dist/cjs.js?!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js?!./node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js?!./src/styles/common.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/_vue-style-loader@4.1.2@vue-style-loader/lib/addStylesClient.js */ "./node_modules/_vue-style-loader@4.1.2@vue-style-loader/lib/addStylesClient.js").default
var update = add("8a0cc338", content, false, {"sourceMap":true,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ })

}]);
//# sourceMappingURL=97.js.map