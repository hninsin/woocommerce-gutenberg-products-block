this.wc=this.wc||{},this.wc.blocksCheckout=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=32)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t,r){var n;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)&&n.length){var i=o.apply(null,n);i&&e.push(i)}else if("object"===a)for(var s in n)r.call(n,s)&&n[s]&&e.push(s)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},function(e,t){!function(){e.exports=this.wp.components}()},function(e,t){!function(){e.exports=this.wp.i18n}()},function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){!function(){e.exports=this.wc.wcSettings}()},function(e,t){!function(){e.exports=this.React}()},function(e,t){function r(){return e.exports=r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},e.exports.default=e.exports,e.exports.__esModule=!0,r.apply(this,arguments)}e.exports=r,e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,r){var n=r(21);e.exports=function(e,t){if(null==e)return{};var r,o,a=n(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){function r(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?(e.exports=r=function(e){return typeof e},e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=r=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.default=e.exports,e.exports.__esModule=!0),r(t)}e.exports=r,e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){!function(){e.exports=this.wc.wcBlocksData}()},function(e,t){!function(){e.exports=this.wp.data}()},function(e,t){function r(t){return e.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports.default=e.exports,e.exports.__esModule=!0,r(t)}e.exports=r,e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){!function(){e.exports=this.wp.deprecated}()},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,r){var n=r(24);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,r){var n=r(9).default,o=r(10);e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?o(e):t},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,r){var n=r(25),o=r(26),a=r(27),i=r(29);e.exports=function(e,t){return n(e)||o(e,t)||a(e,t)||i()},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){},function(e,t){e.exports=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){},function(e,t){},function(e,t){function r(t,n){return e.exports=r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},e.exports.default=e.exports,e.exports.__esModule=!0,r(t,n)}e.exports=r,e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(e){if(Array.isArray(e))return e},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(e,t){var r=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=r){var n,o,a=[],i=!0,s=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(e){s=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(s)throw o}}return a}},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,r){var n=r(28);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){},function(e,t){},function(e,t,r){"use strict";r.r(t),r.d(t,"TotalsItem",(function(){return B})),r.d(t,"Subtotal",(function(){return $})),r.d(t,"TotalsTaxes",(function(){return G})),r.d(t,"TotalsFees",(function(){return W})),r.d(t,"mustContain",(function(){return z})),r.d(t,"returnTrue",(function(){return q})),r.d(t,"updateCartFromApi",(function(){return H})),r.d(t,"useSlot",(function(){return me})),r.d(t,"createSlotFill",(function(){return he})),r.d(t,"__experimentalRegisterCheckoutFilters",(function(){return Oe})),r.d(t,"__experimentalApplyCheckoutFilter",(function(){return Se})),r.d(t,"ExperimentalOrderMeta",(function(){return Ee})),r.d(t,"ExperimentalDiscountsMeta",(function(){return Te})),r.d(t,"ExperimentalOrderShippingPackages",(function(){return Ce})),r.d(t,"Panel",(function(){return Ke})),r.d(t,"SlotFillProvider",(function(){return X.SlotFillProvider})),r.d(t,"Button",(function(){return Ge})),r.d(t,"Label",(function(){return qe}));var n=r(0),o=r(1),a=r.n(o),i=r(7),s=r.n(i),c=r(4),u=r.n(c),l=r(8),p=r.n(l),f=r(6),m=r.n(f);function d(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(){}function x(){}x.resetWarningCache=y;var O=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e){e.exports=function(){function e(e,t,r,n,o,a){if("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"!==a){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:x,resetWarningCache:y};return r.PropTypes=r,r}()}));function S(){}function w(e){return!!(e||"").match(/\d/)}function j(e){return null==e}function _(e){return e.replace(/[-[\]/{}()*+?.\\^$|]/g,"\\$&")}function E(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r="-"===e[0],n=r&&t,o=(e=e.replace("-","")).split("."),a=o[0],i=o[1]||"";return{beforeDecimal:a,afterDecimal:i,hasNagation:r,addNegation:n}}function P(e,t,r){for(var n="",o=r?"0":"",a=0;a<=t-1;a++)n+=e[a]||o;return n}function k(e,t){if(e.value=e.value,null!==e){if(e.createTextRange){var r=e.createTextRange();return r.move("character",t),r.select(),!0}return e.selectionStart||0===e.selectionStart?(e.focus(),e.setSelectionRange(t,t),!0):(e.focus(),!1)}}function N(e,t,r){return Math.min(Math.max(e,t),r)}function T(e){return Math.max(e.selectionStart,e.selectionEnd)}var F={thousandSeparator:O.oneOfType([O.string,O.oneOf([!0])]),decimalSeparator:O.string,allowedDecimalSeparators:O.arrayOf(O.string),thousandsGroupStyle:O.oneOf(["thousand","lakh","wan"]),decimalScale:O.number,fixedDecimalScale:O.bool,displayType:O.oneOf(["input","text"]),prefix:O.string,suffix:O.string,format:O.oneOfType([O.string,O.func]),removeFormatting:O.func,mask:O.oneOfType([O.string,O.arrayOf(O.string)]),value:O.oneOfType([O.number,O.string]),defaultValue:O.oneOfType([O.number,O.string]),isNumericString:O.bool,customInput:O.elementType,allowNegative:O.bool,allowEmptyFormatting:O.bool,allowLeadingZeros:O.bool,onValueChange:O.func,onKeyDown:O.func,onMouseUp:O.func,onChange:O.func,onFocus:O.func,onBlur:O.func,type:O.oneOf(["text","tel","password"]),isAllowed:O.func,renderText:O.func,getInputRef:O.oneOfType([O.func,O.shape({current:O.any})])},M={displayType:"input",decimalSeparator:".",thousandsGroupStyle:"thousand",fixedDecimalScale:!1,prefix:"",suffix:"",allowNegative:!0,allowEmptyFormatting:!1,allowLeadingZeros:!1,isNumericString:!1,type:"text",onValueChange:S,onChange:S,onKeyDown:S,onMouseUp:S,onFocus:S,onBlur:S,isAllowed:function(){return!0}},D=function(e){function t(e){var r,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,r=!(o=v(t).call(this,e))||"object"!=typeof o&&"function"!=typeof o?b(n):o;var a=e.defaultValue;r.validateProps();var i=r.formatValueProp(a);return r.state={value:i,numAsString:r.removeFormatting(i)},r.selectionBeforeInput={selectionStart:0,selectionEnd:0},r.onChange=r.onChange.bind(b(r)),r.onKeyDown=r.onKeyDown.bind(b(r)),r.onMouseUp=r.onMouseUp.bind(b(r)),r.onFocus=r.onFocus.bind(b(r)),r.onBlur=r.onBlur.bind(b(r)),r}var r,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(t,e),r=t,(n=[{key:"componentDidUpdate",value:function(e){this.updateValueIfRequired(e)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.focusTimeout)}},{key:"updateValueIfRequired",value:function(e){var t=this.props,r=this.state,n=this.focusedElm,o=r.value,a=r.numAsString,i=void 0===a?"":a;if(e!==t){this.validateProps();var s=this.formatNumString(i),c=j(t.value)?s:this.formatValueProp(),u=this.removeFormatting(c),l=parseFloat(u),p=parseFloat(i);(isNaN(l)&&isNaN(p)||l===p)&&s===o&&(null!==n||c===o)||this.updateValue({formattedValue:c,numAsString:u,input:n})}}},{key:"getFloatString",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=this.props.decimalScale,r=this.getSeparators(),n=r.decimalSeparator,o=this.getNumberRegex(!0),a="-"===e[0];a&&(e=e.replace("-","")),n&&0===t&&(e=e.split(n)[0]);var i=(e=(e.match(o)||[]).join("").replace(n,".")).indexOf(".");return-1!==i&&(e="".concat(e.substring(0,i),".").concat(e.substring(i+1,e.length).replace(new RegExp(_(n),"g"),""))),a&&(e="-"+e),e}},{key:"getNumberRegex",value:function(e,t){var r=this.props,n=r.format,o=r.decimalScale,a=this.getSeparators().decimalSeparator;return new RegExp("\\d"+(!a||0===o||t||n?"":"|"+_(a)),e?"g":void 0)}},{key:"getSeparators",value:function(){var e=this.props.decimalSeparator,t=this.props,r=t.thousandSeparator,n=t.allowedDecimalSeparators;return!0===r&&(r=","),n||(n=[e,"."]),{decimalSeparator:e,thousandSeparator:r,allowedDecimalSeparators:n}}},{key:"getMaskAtIndex",value:function(e){var t=this.props.mask,r=void 0===t?" ":t;return"string"==typeof r?r:r[e]||" "}},{key:"getValueObject",value:function(e,t){var r=parseFloat(t);return{formattedValue:e,value:t,floatValue:isNaN(r)?void 0:r}}},{key:"validateProps",value:function(){var e=this.props.mask,t=this.getSeparators(),r=t.decimalSeparator,n=t.thousandSeparator;if(r===n)throw new Error("\n          Decimal separator can't be same as thousand separator.\n          thousandSeparator: ".concat(n,' (thousandSeparator = {true} is same as thousandSeparator = ",")\n          decimalSeparator: ').concat(r," (default value for decimalSeparator is .)\n       "));if(e&&("string"===e?e:e.toString()).match(/\d/g))throw new Error("\n          Mask ".concat(e," should not contain numeric character;\n        "))}},{key:"setPatchedCaretPosition",value:function(e,t,r){k(e,t),setTimeout((function(){e.value===r&&k(e,t)}),0)}},{key:"correctCaretPosition",value:function(e,t,r){var n=this.props,o=n.prefix,a=n.suffix,i=n.format;if(""===e)return 0;if(t=N(t,0,e.length),!i){var s="-"===e[0];return N(t,o.length+(s?1:0),e.length-a.length)}if("function"==typeof i)return t;if("#"===i[t]&&w(e[t]))return t;if("#"===i[t-1]&&w(e[t-1]))return t;var c=i.indexOf("#");t=N(t,c,i.lastIndexOf("#")+1);for(var u=i.substring(t,i.length).indexOf("#"),l=t,p=t+(-1===u?0:u);l>c&&("#"!==i[l]||!w(e[l]));)l-=1;return!w(e[p])||"left"===r&&t!==c||t-l<p-t?w(e[l])?l+1:l:p}},{key:"getCaretPosition",value:function(e,t,r){var n,o,a=this.props.format,i=this.state.value,s=this.getNumberRegex(!0),c=(e.match(s)||[]).join(""),u=(t.match(s)||[]).join("");for(n=0,o=0;o<r;o++){var l=e[o]||"",p=t[n]||"";if((l.match(s)||l===p)&&("0"!==l||!p.match(s)||"0"===p||c.length===u.length)){for(;l!==t[n]&&n<t.length;)n++;n++}}return"string"!=typeof a||i||(n=t.length),n=this.correctCaretPosition(t,n)}},{key:"removePrefixAndSuffix",value:function(e){var t=this.props,r=t.format,n=t.prefix,o=t.suffix;if(!r&&e){var a="-"===e[0];a&&(e=e.substring(1,e.length));var i=(e=n&&0===e.indexOf(n)?e.substring(n.length,e.length):e).lastIndexOf(o);e=o&&-1!==i&&i===e.length-o.length?e.substring(0,i):e,a&&(e="-"+e)}return e}},{key:"removePatternFormatting",value:function(e){for(var t=this.props.format.split("#").filter((function(e){return""!==e})),r=0,n="",o=0,a=t.length;o<=a;o++){var i=t[o]||"",s=o===a?e.length:e.indexOf(i,r);if(-1===s){n=e;break}n+=e.substring(r,s),r=s+i.length}return(n.match(/\d/g)||[]).join("")}},{key:"removeFormatting",value:function(e){var t=this.props,r=t.format,n=t.removeFormatting;return e?(r?e="string"==typeof r?this.removePatternFormatting(e):"function"==typeof n?n(e):(e.match(/\d/g)||[]).join(""):(e=this.removePrefixAndSuffix(e),e=this.getFloatString(e)),e):e}},{key:"formatWithPattern",value:function(e){for(var t=this.props.format,r=0,n=t.split(""),o=0,a=t.length;o<a;o++)"#"===t[o]&&(n[o]=e[r]||this.getMaskAtIndex(r),r+=1);return n.join("")}},{key:"formatAsNumber",value:function(e){var t=this.props,r=t.decimalScale,n=t.fixedDecimalScale,o=t.prefix,a=t.suffix,i=t.allowNegative,s=t.thousandsGroupStyle,c=this.getSeparators(),u=c.thousandSeparator,l=c.decimalSeparator,p=-1!==e.indexOf(".")||r&&n,f=E(e,i),m=f.beforeDecimal,d=f.afterDecimal,h=f.addNegation;return void 0!==r&&(d=P(d,r,n)),u&&(m=function(e,t,r){var n=function(e){switch(e){case"lakh":return/(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g;case"wan":return/(\d)(?=(\d{4})+(?!\d))/g;case"thousand":default:return/(\d)(?=(\d{3})+(?!\d))/g}}(r),o=e.search(/[1-9]/);return o=-1===o?e.length:o,e.substring(0,o)+e.substring(o,e.length).replace(n,"$1"+t)}(m,u,s)),o&&(m=o+m),a&&(d+=a),h&&(m="-"+m),e=m+(p&&l||"")+d}},{key:"formatNumString",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=this.props,r=t.format,n=t.allowEmptyFormatting,o=e;return o=""!==e||n?"-"!==e||r?"string"==typeof r?this.formatWithPattern(o):"function"==typeof r?r(o):this.formatAsNumber(o):"-":""}},{key:"formatValueProp",value:function(e){var t=this.props,r=t.format,n=t.decimalScale,o=t.fixedDecimalScale,a=t.allowEmptyFormatting,i=this.props,s=i.value,c=i.isNumericString,u=!(s=j(s)?e:s)&&0!==s;return u&&a&&(s=""),u&&!a?"":("number"==typeof s&&(s=s.toString(),c=!0),"Infinity"===s&&c&&(s=""),c&&!r&&"number"==typeof n&&(s=function(e,t,r){if(-1!==["","-"].indexOf(e))return e;var n=-1!==e.indexOf(".")&&t,o=E(e),a=o.beforeDecimal,i=o.afterDecimal,s=o.hasNagation,c=parseFloat("0.".concat(i||"0")).toFixed(t).split("."),u=a.split("").reverse().reduce((function(e,t,r){return e.length>r?(Number(e[0])+Number(t)).toString()+e.substring(1,e.length):t+e}),c[0]),l=P(c[1]||"",Math.min(t,i.length),r),p=n?".":"";return"".concat(s?"-":"").concat(u).concat(p).concat(l)}(s,n,o)),c?this.formatNumString(s):this.formatInput(s))}},{key:"formatNegation",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=this.props.allowNegative,r=new RegExp("(-)"),n=new RegExp("(-)(.)*(-)"),o=r.test(e),a=n.test(e);return e=e.replace(/-/g,""),o&&!a&&t&&(e="-"+e),e}},{key:"formatInput",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=this.props.format;return t||(e=this.removePrefixAndSuffix(e),e=this.formatNegation(e)),e=this.removeFormatting(e),this.formatNumString(e)}},{key:"isCharacterAFormat",value:function(e,t){var r=this.props,n=r.format,o=r.prefix,a=r.suffix,i=r.decimalScale,s=r.fixedDecimalScale,c=this.getSeparators().decimalSeparator;return"string"==typeof n&&"#"!==n[e]||!(n||!(e<o.length||e>=t.length-a.length||i&&s&&t[e]===c))}},{key:"checkIfFormatGotDeleted",value:function(e,t,r){for(var n=e;n<t;n++)if(this.isCharacterAFormat(n,r))return!0;return!1}},{key:"correctInputValue",value:function(e,t,r){var n=this.props,o=n.format,a=n.allowNegative,i=n.prefix,s=n.suffix,c=n.decimalScale,u=this.getSeparators(),l=u.allowedDecimalSeparators,p=u.decimalSeparator,f=this.state.numAsString||"",m=this.selectionBeforeInput,d=m.selectionStart,h=m.selectionEnd,v=function(e,t){for(var r=0,n=0,o=e.length,a=t.length;e[r]===t[r]&&r<o;)r++;for(;e[o-1-n]===t[a-1-n]&&a-n>r&&o-n>r;)n++;return{start:r,end:o-n}}(t,r),g=v.start,b=v.end;if(!o&&g===b&&-1!==l.indexOf(r[d])){var y=0===c?"":p;return r.substr(0,d)+y+r.substr(d+1,r.length)}var x=o?0:i.length,O=t.length-(o?0:s.length);if(r.length>t.length||!r.length||g===b||0===d&&h===t.length||d===x&&h===O)return r;if(this.checkIfFormatGotDeleted(g,b,t)&&(r=t),!o){var S=this.removeFormatting(r),w=E(S,a),j=w.beforeDecimal,_=w.afterDecimal,P=w.addNegation,k=e<r.indexOf(p)+1;if(S.length<f.length&&k&&""===j&&!parseFloat(_))return P?"-":""}return r}},{key:"updateValue",value:function(e){var t=e.formattedValue,r=e.input,n=e.setCaretPosition,o=void 0===n||n,a=e.numAsString,i=e.caretPos,s=this.props.onValueChange,c=this.state.value;if(r)if(o){if(!i){var u=e.inputValue||r.value,l=T(r);r.value=t,i=this.getCaretPosition(u,t,l)}this.setPatchedCaretPosition(r,i,t)}else r.value=t;void 0===a&&(a=this.removeFormatting(t)),t!==c&&(this.setState({value:t,numAsString:a}),s(this.getValueObject(t,a)))}},{key:"onChange",value:function(e){var t=e.target,r=t.value,n=this.state,o=this.props,a=o.isAllowed,i=n.value||"",s=T(t);r=this.correctInputValue(s,i,r);var c=this.formatInput(r)||"",u=this.removeFormatting(c);a(this.getValueObject(c,u))||(c=i),this.updateValue({formattedValue:c,numAsString:u,inputValue:r,input:t}),o.onChange(e)}},{key:"onBlur",value:function(e){var t=this.props,r=this.state,n=t.format,o=t.onBlur,a=t.allowLeadingZeros,i=r.numAsString,s=r.value;if(this.focusedElm=null,clearTimeout(this.focusTimeout),!n){isNaN(parseFloat(i))&&(i=""),a||(i=function(e){if(!e)return e;var t="-"===e[0];t&&(e=e.substring(1,e.length));var r=e.split("."),n=r[0].replace(/^0+/,"")||"0",o=r[1]||"";return"".concat(t?"-":"").concat(n).concat(o?".".concat(o):"")}(i));var c=this.formatNumString(i);if(c!==s)return this.updateValue({formattedValue:c,numAsString:i,input:e.target,setCaretPosition:!1}),void o(e)}o(e)}},{key:"onKeyDown",value:function(e){var t,r=e.target,n=e.key,o=r.selectionStart,a=r.selectionEnd,i=r.value,s=void 0===i?"":i,c=this.props,u=c.decimalScale,l=c.fixedDecimalScale,p=c.prefix,f=c.suffix,m=c.format,d=c.onKeyDown,h=void 0!==u&&l,v=this.getNumberRegex(!1,h),g=new RegExp("-"),b="string"==typeof m;if(this.selectionBeforeInput={selectionStart:o,selectionEnd:a},"ArrowLeft"===n||"Backspace"===n?t=o-1:"ArrowRight"===n?t=o+1:"Delete"===n&&(t=o),void 0!==t&&o===a){var y=t,x=b?m.indexOf("#"):p.length,O=b?m.lastIndexOf("#")+1:s.length-f.length;if("ArrowLeft"===n||"ArrowRight"===n){var S="ArrowLeft"===n?"left":"right";y=this.correctCaretPosition(s,t,S)}else if("Delete"!==n||v.test(s[t])||g.test(s[t])){if("Backspace"===n&&!v.test(s[t]))if(o<=x+1&&"-"===s[0]&&void 0===m){var w=s.substring(1);this.updateValue({formattedValue:w,caretPos:y,input:r})}else if(!g.test(s[t])){for(;!v.test(s[y-1])&&y>x;)y--;y=this.correctCaretPosition(s,y,"left")}}else for(;!v.test(s[y])&&y<O;)y++;(y!==t||t<x||t>O)&&(e.preventDefault(),this.setPatchedCaretPosition(r,y,s)),e.isUnitTestRun&&this.setPatchedCaretPosition(r,y,s),d(e)}else d(e)}},{key:"onMouseUp",value:function(e){var t=e.target,r=t.selectionStart,n=t.selectionEnd,o=t.value,a=void 0===o?"":o;if(r===n){var i=this.correctCaretPosition(a,r);i!==r&&this.setPatchedCaretPosition(t,i,a)}this.props.onMouseUp(e)}},{key:"onFocus",value:function(e){var t=this;e.persist(),this.focusedElm=e.target,this.focusTimeout=setTimeout((function(){var r=e.target,n=r.selectionStart,o=r.selectionEnd,a=r.value,i=void 0===a?"":a,s=t.correctCaretPosition(i,n);s===n||0===n&&o===i.length||t.setPatchedCaretPosition(r,s,i),t.props.onFocus(e)}),0)}},{key:"render",value:function(){var e,t,r,n=this.props,o=n.type,a=n.displayType,i=n.customInput,s=n.renderText,c=n.getInputRef,u=n.format,l=this.state.value,p=(e=this.props,t=F,r={},Object.keys(e).forEach((function(n){t[n]||(r[n]=e[n])})),r),f=h({inputMode:function(e){return e||!(navigator.platform&&/iPhone|iPod/.test(navigator.platform))}(u)?"numeric":void 0},p,{type:o,value:l,onChange:this.onChange,onKeyDown:this.onKeyDown,onMouseUp:this.onMouseUp,onFocus:this.onFocus,onBlur:this.onBlur});if("text"===a)return s?s(l)||null:m.a.createElement("span",h({},p,{ref:c}),l);if(i){var d=i;return m.a.createElement(d,h({},f,{ref:c}))}return m.a.createElement("input",h({},f,{ref:c}))}}])&&d(r.prototype,n),o&&d(r,o),t}(m.a.Component);D.propTypes=F,D.defaultProps=M;var C=D,R=(r(22),["className","value","currency","onValueChange","displayType"]);function I(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function A(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?I(Object(r),!0).forEach((function(t){u()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):I(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var V=function(e){var t=e.className,r=e.value,o=e.currency,i=e.onValueChange,c=e.displayType,u=void 0===c?"text":c,l=p()(e,R),f="string"==typeof r?parseInt(r,10):r;if(!Number.isFinite(f))return null;var m=f/Math.pow(10,o.minorUnit);if(!Number.isFinite(m))return null;var d=a()("wc-block-formatted-money-amount","wc-block-components-formatted-money-amount",t),h=A(A(A({},l),function(e){return{thousandSeparator:e.thousandSeparator,decimalSeparator:e.decimalSeparator,decimalScale:e.minorUnit,fixedDecimalScale:!0,prefix:e.prefix,suffix:e.suffix,isNumericString:!0}}(o)),{},{value:void 0,currency:void 0,onValueChange:void 0}),v=i?function(e){var t=e.value*Math.pow(10,o.minorUnit);i(t)}:function(){};return Object(n.createElement)(C,s()({className:d,displayType:u},h,{value:m,onValueChange:v}))},U=(r(20),function(e){var t=e.value,r=e.currency;return Object(n.isValidElement)(t)?Object(n.createElement)("div",{className:"wc-block-components-totals-item__value"},t):Number.isFinite(t)?Object(n.createElement)(V,{className:"wc-block-components-totals-item__value",currency:r||{},value:t}):null}),B=function(e){var t=e.className,r=e.currency,o=e.label,i=e.value,s=e.description;return Object(n.createElement)("div",{className:a()("wc-block-components-totals-item",t)},Object(n.createElement)("span",{className:"wc-block-components-totals-item__label"},o),Object(n.createElement)(U,{value:i,currency:r}),Object(n.createElement)("div",{className:"wc-block-components-totals-item__description"},s))},L=r(3),K=r(5),$=function(e){var t=e.currency,r=e.values,o=e.className,a=r.total_items,i=r.total_items_tax,s=parseInt(a,10),c=parseInt(i,10);return Object(n.createElement)(B,{className:o,currency:t,label:Object(L.__)("Subtotal","woo-gutenberg-products-block"),value:Object(K.getSetting)("displayCartPricesIncludingTax",!1)?s+c:s})},G=(r(23),function(e){var t=e.currency,r=e.values,o=e.className,i=e.showRateAfterTaxName,s=r.total_tax,c=r.tax_lines;if(!Object(K.getSetting)("taxesEnabled",!0))return null;var u=Object(K.getSetting)("displayItemizedTaxes",!1),l=u&&c.length>0?Object(n.createElement)("div",{className:a()("wc-block-components-totals-taxes",o)},c.map((function(e,r){var o=e.name,a=e.rate,s=e.price,c="".concat(o).concat(i?" ".concat(a):"");return Object(n.createElement)(B,{key:"tax-line-".concat(r),className:"wc-block-components-totals-taxes__grouped-rate",currency:t,label:c,value:parseInt(s,10)})}))," "):null;return u?l:Object(n.createElement)(n.Fragment,null,Object(n.createElement)(B,{className:a()("wc-block-components-totals-taxes",o),currency:t,label:Object(L.__)("Taxes","woo-gutenberg-products-block"),value:parseInt(s,10),description:null}))}),W=function(e){var t=e.currency,r=e.cartFees,o=e.className;return Object(n.createElement)(n.Fragment,null,r.map((function(e){var r=e.id,i=e.name,s=e.totals,c=parseInt(s.total,10);if(!c)return null;var u=parseInt(s.total_tax,10);return Object(n.createElement)(B,{key:r,className:a()("wc-block-components-totals-fees",o),currency:t,label:i||Object(L.__)("Fee","woo-gutenberg-products-block"),value:Object(K.getSetting)("displayCartPricesIncludingTax",!1)?c+u:c})})))},z=function(e,t){if(!e.includes(t))throw Error(Object(L.sprintf)(Object(L.__)('Returned value must include %1$s, you passed "%2$s"',"woo-gutenberg-products-block"),e,t));return!0},q=function(){return!0},Y=r(11),Z=r(12),H=function(){var e=Object(Z.select)(Y.CART_STORE_KEY).getCartData,t=Object(Z.dispatch)(Y.CART_STORE_KEY),r=t.invalidateResolutionForStoreSelector,n=t.receiveCart;r("getCartData"),n(e())},J=r(14),Q=r.n(J),X=r(2),ee=r(15),te=r.n(ee),re=r(16),ne=r.n(re),oe=r(10),ae=r.n(oe),ie=r(17),se=r.n(ie),ce=r(18),ue=r.n(ce),le=r(13),pe=r.n(le);function fe(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=pe()(e);if(t){var o=pe()(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return ue()(this,r)}}var me,de=function(e){se()(r,e);var t=fe(r);function r(){var e;te()(this,r);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return e=t.call.apply(t,[this].concat(o)),u()(ae()(e),"state",{errorMessage:"",hasError:!1}),e}return ne()(r,[{key:"render",value:function(){var e=this.props.renderError,t=this.state,r=t.errorMessage;return t.hasError?"function"==typeof e?e(r):Object(n.createElement)("p",null,r):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return void 0!==e.statusText&&void 0!==e.status?{errorMessage:Object(n.createElement)(n.Fragment,null,Object(n.createElement)("strong",null,e.status),": "+e.statusText),hasError:!0}:{errorMessage:e.message,hasError:!0}}}]),r}(f.Component);me="function"==typeof X.useSlot?X.useSlot:"function"==typeof X.__experimentalUseSlot?X.__experimentalUseSlot:function(){return Q()("__experimentalUseSlot",{plugin:"woocommerce-gutenberg-products-block"}),{fills:new Array(2)}};var he=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=Object(X.createSlotFill)(e),o=r.Fill,a=r.Slot,i=function(e){var r=e.children;return Object(n.createElement)(o,null,(function(e){return n.Children.map(r,(function(r){return Object(n.createElement)(de,{renderError:K.CURRENT_USER_IS_ADMIN?t:function(){return null}},Object(n.cloneElement)(r,e))}))}))},c=function(e){return Object(n.createElement)(a,s()({},e,{bubblesVirtually:!0}))};return{Fill:i,Slot:c}},ve=r(9),ge=r.n(ve);function be(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ye(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?be(Object(r),!0).forEach((function(t){u()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):be(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var xe={},Oe=function(e,t){xe=ye(ye({},xe),{},u()({},e,t))},Se=function(e){var t=e.filterName,r=e.defaultValue,o=e.extensions,a=void 0===o?{}:o,i=e.arg,s=void 0===i?null:i,c=e.validation,u=void 0===c?q:c;return Object(n.useMemo)((function(){var e=function(e){return Object.keys(xe).map((function(t){return xe[t][e]})).filter(Boolean)}(t),n=r;return e.forEach((function(e){try{var t=e(n,a,s);if(ge()(t)!==ge()(n))throw new Error(Object(L.sprintf)(Object(L.__)("The type returned by checkout filters must be the same as the type they receive. The function received %1$s but returned %2$s.","woo-gutenberg-products-block"),ge()(n),ge()(t)));n=u(t)?t:n}catch(e){if(K.CURRENT_USER_IS_ADMIN)throw e;console.error(e)}})),n}),[t,r,a,s,u])},we=he("__experimentalOrderMeta"),je=we.Fill,_e=we.Slot;je.Slot=function(e){var t=e.className,r=e.extensions,o=e.cart;return Object(n.createElement)(_e,{className:a()(t,"wc-block-components-order-meta"),fillProps:{extensions:r,cart:o}})};var Ee=je,Pe=he("__experimentalDiscountsMeta"),ke=Pe.Fill,Ne=Pe.Slot;ke.Slot=function(e){var t=e.className,r=e.extensions,o=e.cart;return Object(n.createElement)(Ne,{className:a()(t,"wc-block-components-discounts-meta"),fillProps:{extensions:r,cart:o}})};var Te=ke,Fe=he("__experimentalOrderShippingPackages"),Me=Fe.Fill,De=Fe.Slot;Me.Slot=function(e){var t=e.className,r=e.collapsible,o=e.noResultsMessage,i=e.renderOption,s=e.extensions,c=e.cart,u=e.components,l=me("__experimentalOrderShippingPackages").fills.length>1;return Object(n.createElement)(De,{className:a()("wc-block-components-shipping-rates-control",t),fillProps:{collapsible:r,collapse:l,showItems:l,noResultsMessage:o,renderOption:i,extensions:s,cart:c,components:u}})};var Ce=Me,Re=r(19),Ie=r.n(Re),Ae=["srcElement","size"];function Ve(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var Ue=function(e){var t=e.srcElement,r=e.size,o=void 0===r?24:r,a=p()(e,Ae);return Object(n.isValidElement)(t)?Object(n.cloneElement)(t,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Ve(Object(r),!0).forEach((function(t){u()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ve(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({width:o,height:o},a)):null},Be=Object(n.createElement)(X.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},Object(n.createElement)("path",{d:"M12 8l-6 5.4 1 1.2 5-4.6 5 4.6 1-1.2z"})),Le=Object(n.createElement)(X.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},Object(n.createElement)("path",{d:"M17 9.4L12 14 7 9.4l-1 1.2 6 5.4 6-5.4z"})),Ke=(r(30),function(e){var t=e.children,r=e.className,o=e.initialOpen,i=void 0!==o&&o,s=e.hasBorder,c=void 0!==s&&s,u=e.title,l=e.titleTag,p=void 0===l?"div":l,f=Object(n.useState)(i),m=Ie()(f,2),d=m[0],h=m[1];return Object(n.createElement)("div",{className:a()(r,"wc-block-components-panel",{"has-border":c})},Object(n.createElement)(p,null,Object(n.createElement)("button",{"aria-expanded":d,className:"wc-block-components-panel__button",onClick:function(){return h(!d)}},Object(n.createElement)(Ue,{"aria-hidden":"true",className:"wc-block-components-panel__button-icon",srcElement:d?Be:Le}),u)),Object(n.createElement)("div",{className:"wc-block-components-panel__content",hidden:!d},t))}),$e=(r(31),["className","showSpinner","children"]),Ge=function(e){var t=e.className,r=e.showSpinner,o=void 0!==r&&r,i=e.children,c=p()(e,$e),u=a()("wc-block-components-button",t,{"wc-block-components-button--loading":o});return Object(n.createElement)(X.Button,s()({className:u},c),o&&Object(n.createElement)("span",{className:"wc-block-components-button__spinner","aria-hidden":"true"}),Object(n.createElement)("span",{className:"wc-block-components-button__text"},i))};function We(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ze(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?We(Object(r),!0).forEach((function(t){u()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):We(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var qe=function(e){var t,r=e.label,o=e.screenReaderLabel,i=e.wrapperElement,s=e.wrapperProps,c=void 0===s?{}:s,u=null!=r,l=null!=o;return!u&&l?(t=i||"span",c=ze(ze({},c),{},{className:a()(c.className,"screen-reader-text")}),Object(n.createElement)(t,c,o)):(t=i||n.Fragment,u&&l&&r!==o?Object(n.createElement)(t,c,Object(n.createElement)("span",{"aria-hidden":"true"},r),Object(n.createElement)("span",{className:"screen-reader-text"},o)):Object(n.createElement)(t,c,r))}}]);