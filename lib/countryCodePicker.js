(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["react-country-code-picker"] = factory();
	else
		root["react-country-code-picker"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonpreact_country_code_picker"] = window["webpackJsonpreact_country_code_picker"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.jsx","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/country-data.json":
/*!*******************************!*\
  !*** ./src/country-data.json ***!
  \*******************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, default */
/***/ (function(module) {

eval("module.exports = [{\"name\":\"United States\",\"dial_code\":\"+1\",\"code\":\"US\"},{\"name\":\"United Kingdom\",\"dial_code\":\"+44\",\"code\":\"GB\"},{\"name\":\"Afghanistan\",\"dial_code\":\"+93\",\"code\":\"AF\"},{\"name\":\"Aland Islands\",\"dial_code\":\"+358\",\"code\":\"AX\"},{\"name\":\"Albania\",\"dial_code\":\"+355\",\"code\":\"AL\"},{\"name\":\"Algeria\",\"dial_code\":\"+213\",\"code\":\"DZ\"},{\"name\":\"AmericanSamoa\",\"dial_code\":\"+1684\",\"code\":\"AS\"},{\"name\":\"Andorra\",\"dial_code\":\"+376\",\"code\":\"AD\"},{\"name\":\"Angola\",\"dial_code\":\"+244\",\"code\":\"AO\"},{\"name\":\"Anguilla\",\"dial_code\":\"+1264\",\"code\":\"AI\"},{\"name\":\"Antarctica\",\"dial_code\":\"+672\",\"code\":\"AQ\"},{\"name\":\"Antigua & Barbuda\",\"dial_code\":\"+1268\",\"code\":\"AG\"},{\"name\":\"Argentina\",\"dial_code\":\"+54\",\"code\":\"AR\"},{\"name\":\"Armenia\",\"dial_code\":\"+374\",\"code\":\"AM\"},{\"name\":\"Aruba\",\"dial_code\":\"+297\",\"code\":\"AW\"},{\"name\":\"Australia\",\"dial_code\":\"+61\",\"code\":\"AU\"},{\"name\":\"Austria\",\"dial_code\":\"+43\",\"code\":\"AT\"},{\"name\":\"Azerbaijan\",\"dial_code\":\"+994\",\"code\":\"AZ\"},{\"name\":\"Bahamas\",\"dial_code\":\"+1242\",\"code\":\"BS\"},{\"name\":\"Bahrain\",\"dial_code\":\"+973\",\"code\":\"BH\"},{\"name\":\"Bangladesh\",\"dial_code\":\"+880\",\"code\":\"BD\"},{\"name\":\"Barbados\",\"dial_code\":\"+1246\",\"code\":\"BB\"},{\"name\":\"Belarus\",\"dial_code\":\"+375\",\"code\":\"BY\"},{\"name\":\"Belgium\",\"dial_code\":\"+32\",\"code\":\"BE\"},{\"name\":\"Belize\",\"dial_code\":\"+501\",\"code\":\"BZ\"},{\"name\":\"Benin\",\"dial_code\":\"+229\",\"code\":\"BJ\"},{\"name\":\"Bermuda\",\"dial_code\":\"+1441\",\"code\":\"BM\"},{\"name\":\"Bhutan\",\"dial_code\":\"+975\",\"code\":\"BT\"},{\"name\":\"Bolivia\",\"dial_code\":\"+591\",\"code\":\"BO\"},{\"name\":\"Bosnia & Herzegovina\",\"dial_code\":\"+387\",\"code\":\"BA\"},{\"name\":\"Botswana\",\"dial_code\":\"+267\",\"code\":\"BW\"},{\"name\":\"Brazil\",\"dial_code\":\"+55\",\"code\":\"BR\"},{\"name\":\"British Indian Ocean Territory\",\"dial_code\":\"+246\",\"code\":\"IO\"},{\"name\":\"Brunei Darussalam\",\"dial_code\":\"+673\",\"code\":\"BN\"},{\"name\":\"Bulgaria\",\"dial_code\":\"+359\",\"code\":\"BG\"},{\"name\":\"Burkina Faso\",\"dial_code\":\"+226\",\"code\":\"BF\"},{\"name\":\"Burundi\",\"dial_code\":\"+257\",\"code\":\"BI\"},{\"name\":\"Cambodia\",\"dial_code\":\"+855\",\"code\":\"KH\"},{\"name\":\"Cameroon\",\"dial_code\":\"+237\",\"code\":\"CM\"},{\"name\":\"Canada\",\"dial_code\":\"+1\",\"code\":\"CA\"},{\"name\":\"Cape Verde\",\"dial_code\":\"+238\",\"code\":\"CV\"},{\"name\":\"Cayman Islands\",\"dial_code\":\"+ 345\",\"code\":\"KY\"},{\"name\":\"Central African Republic\",\"dial_code\":\"+236\",\"code\":\"CF\"},{\"name\":\"Chad\",\"dial_code\":\"+235\",\"code\":\"TD\"},{\"name\":\"Chile\",\"dial_code\":\"+56\",\"code\":\"CL\"},{\"name\":\"China\",\"dial_code\":\"+86\",\"code\":\"CN\"},{\"name\":\"Christmas Islands\",\"dial_code\":\"+61\",\"code\":\"CX\"},{\"name\":\"Cocos (Keeling) Isl.\",\"dial_code\":\"+61\",\"code\":\"CC\"},{\"name\":\"Colombia\",\"dial_code\":\"+57\",\"code\":\"CO\"},{\"name\":\"Comoros\",\"dial_code\":\"+269\",\"code\":\"KM\"},{\"name\":\"Congo - Brazzaville\",\"dial_code\":\"+242\",\"code\":\"CG\"},{\"name\":\"Congo - Kinshasa\",\"dial_code\":\"+243\",\"code\":\"CD\"},{\"name\":\"Cook Islands\",\"dial_code\":\"+682\",\"code\":\"CK\"},{\"name\":\"Costa Rica\",\"dial_code\":\"+506\",\"code\":\"CR\"},{\"name\":\"Cote d'Ivoire\",\"dial_code\":\"+225\",\"code\":\"CI\"},{\"name\":\"Croatia\",\"dial_code\":\"+385\",\"code\":\"HR\"},{\"name\":\"Cuba\",\"dial_code\":\"+53\",\"code\":\"CU\"},{\"name\":\"Cyprus\",\"dial_code\":\"+357\",\"code\":\"CY\"},{\"name\":\"Czech Republic\",\"dial_code\":\"+420\",\"code\":\"CZ\"},{\"name\":\"Denmark\",\"dial_code\":\"+45\",\"code\":\"DK\"},{\"name\":\"Djibouti\",\"dial_code\":\"+253\",\"code\":\"DJ\"},{\"name\":\"Dominica\",\"dial_code\":\"+1767\",\"code\":\"DM\"},{\"name\":\"Dominican Republic\",\"dial_code\":\"+1849\",\"code\":\"DO\"},{\"name\":\"Ecuador\",\"dial_code\":\"+593\",\"code\":\"EC\"},{\"name\":\"Egypt\",\"dial_code\":\"+20\",\"code\":\"EG\"},{\"name\":\"El Salvador\",\"dial_code\":\"+503\",\"code\":\"SV\"},{\"name\":\"Equatorial Guinea\",\"dial_code\":\"+240\",\"code\":\"GQ\"},{\"name\":\"Eritrea\",\"dial_code\":\"+291\",\"code\":\"ER\"},{\"name\":\"Estonia\",\"dial_code\":\"+372\",\"code\":\"EE\"},{\"name\":\"Ethiopia\",\"dial_code\":\"+251\",\"code\":\"ET\"},{\"name\":\"Falkland Isl. (Malvinas)\",\"dial_code\":\"+500\",\"code\":\"FK\"},{\"name\":\"Faroe Islands\",\"dial_code\":\"+298\",\"code\":\"FO\"},{\"name\":\"Fiji\",\"dial_code\":\"+679\",\"code\":\"FJ\"},{\"name\":\"Finland\",\"dial_code\":\"+358\",\"code\":\"FI\"},{\"name\":\"France\",\"dial_code\":\"+33\",\"code\":\"FR\"},{\"name\":\"French Guiana\",\"dial_code\":\"+594\",\"code\":\"GF\"},{\"name\":\"French Polynesia\",\"dial_code\":\"+689\",\"code\":\"PF\"},{\"name\":\"Gabon\",\"dial_code\":\"+241\",\"code\":\"GA\"},{\"name\":\"Gambia\",\"dial_code\":\"+220\",\"code\":\"GM\"},{\"name\":\"Georgia\",\"dial_code\":\"+995\",\"code\":\"GE\"},{\"name\":\"Germany\",\"dial_code\":\"+49\",\"code\":\"DE\"},{\"name\":\"Ghana\",\"dial_code\":\"+233\",\"code\":\"GH\"},{\"name\":\"Gibraltar\",\"dial_code\":\"+350\",\"code\":\"GI\"},{\"name\":\"Greece\",\"dial_code\":\"+30\",\"code\":\"GR\"},{\"name\":\"Greenland\",\"dial_code\":\"+299\",\"code\":\"GL\"},{\"name\":\"Grenada\",\"dial_code\":\"+1473\",\"code\":\"GD\"},{\"name\":\"Guadeloupe\",\"dial_code\":\"+590\",\"code\":\"GP\"},{\"name\":\"Guam\",\"dial_code\":\"+1671\",\"code\":\"GU\"},{\"name\":\"Guatemala\",\"dial_code\":\"+502\",\"code\":\"GT\"},{\"name\":\"Guernsey\",\"dial_code\":\"+44\",\"code\":\"GG\"},{\"name\":\"Guinea\",\"dial_code\":\"+224\",\"code\":\"GN\"},{\"name\":\"Guinea-Bissau\",\"dial_code\":\"+245\",\"code\":\"GW\"},{\"name\":\"Guyana\",\"dial_code\":\"+595\",\"code\":\"GY\"},{\"name\":\"Haiti\",\"dial_code\":\"+509\",\"code\":\"HT\"},{\"name\":\"Holy See\",\"dial_code\":\"+379\",\"code\":\"VA\"},{\"name\":\"Honduras\",\"dial_code\":\"+504\",\"code\":\"HN\"},{\"name\":\"Hong Kong\",\"dial_code\":\"+852\",\"code\":\"HK\"},{\"name\":\"Hungary\",\"dial_code\":\"+36\",\"code\":\"HU\"},{\"name\":\"Iceland\",\"dial_code\":\"+354\",\"code\":\"IS\"},{\"name\":\"India\",\"dial_code\":\"+91\",\"code\":\"IN\"},{\"name\":\"Indonesia\",\"dial_code\":\"+62\",\"code\":\"ID\"},{\"name\":\"Iran\",\"dial_code\":\"+98\",\"code\":\"IR\"},{\"name\":\"Iraq\",\"dial_code\":\"+964\",\"code\":\"IQ\"},{\"name\":\"Ireland\",\"dial_code\":\"+353\",\"code\":\"IE\"},{\"name\":\"Isle of Man\",\"dial_code\":\"+44\",\"code\":\"IM\"},{\"name\":\"Israel\",\"dial_code\":\"+972\",\"code\":\"IL\"},{\"name\":\"Italy\",\"dial_code\":\"+39\",\"code\":\"IT\"},{\"name\":\"Jamaica\",\"dial_code\":\"+1876\",\"code\":\"JM\"},{\"name\":\"Japan\",\"dial_code\":\"+81\",\"code\":\"JP\"},{\"name\":\"Jersey\",\"dial_code\":\"+44\",\"code\":\"JE\"},{\"name\":\"Jordan\",\"dial_code\":\"+962\",\"code\":\"JO\"},{\"name\":\"Kazakhstan\",\"dial_code\":\"+77\",\"code\":\"KZ\"},{\"name\":\"Kenya\",\"dial_code\":\"+254\",\"code\":\"KE\"},{\"name\":\"Kiribati\",\"dial_code\":\"+686\",\"code\":\"KI\"},{\"name\":\"Korea\",\"dial_code\":\"+850\",\"code\":\"KP\"},{\"name\":\"South Korea\",\"dial_code\":\"+82\",\"code\":\"KR\"},{\"name\":\"Kuwait\",\"dial_code\":\"+965\",\"code\":\"KW\"},{\"name\":\"Kyrgyzstan\",\"dial_code\":\"+996\",\"code\":\"KG\"},{\"name\":\"Laos\",\"dial_code\":\"+856\",\"code\":\"LA\"},{\"name\":\"Latvia\",\"dial_code\":\"+371\",\"code\":\"LV\"},{\"name\":\"Lebanon\",\"dial_code\":\"+961\",\"code\":\"LB\"},{\"name\":\"Lesotho\",\"dial_code\":\"+266\",\"code\":\"LS\"},{\"name\":\"Liberia\",\"dial_code\":\"+231\",\"code\":\"LR\"},{\"name\":\"Libyan Arab Jamahiriya\",\"dial_code\":\"+218\",\"code\":\"LY\"},{\"name\":\"Liechtenstein\",\"dial_code\":\"+423\",\"code\":\"LI\"},{\"name\":\"Lithuania\",\"dial_code\":\"+370\",\"code\":\"LT\"},{\"name\":\"Luxembourg\",\"dial_code\":\"+352\",\"code\":\"LU\"},{\"name\":\"Macao\",\"dial_code\":\"+853\",\"code\":\"MO\"},{\"name\":\"Macedonia\",\"dial_code\":\"+389\",\"code\":\"MK\"},{\"name\":\"Madagascar\",\"dial_code\":\"+261\",\"code\":\"MG\"},{\"name\":\"Malawi\",\"dial_code\":\"+265\",\"code\":\"MW\"},{\"name\":\"Malaysia\",\"dial_code\":\"+60\",\"code\":\"MY\"},{\"name\":\"Maldives\",\"dial_code\":\"+960\",\"code\":\"MV\"},{\"name\":\"Mali\",\"dial_code\":\"+223\",\"code\":\"ML\"},{\"name\":\"Malta\",\"dial_code\":\"+356\",\"code\":\"MT\"},{\"name\":\"Marshall Islands\",\"dial_code\":\"+692\",\"code\":\"MH\"},{\"name\":\"Martinique\",\"dial_code\":\"+596\",\"code\":\"MQ\"},{\"name\":\"Mauritania\",\"dial_code\":\"+222\",\"code\":\"MR\"},{\"name\":\"Mauritius\",\"dial_code\":\"+230\",\"code\":\"MU\"},{\"name\":\"Mayotte\",\"dial_code\":\"+262\",\"code\":\"YT\"},{\"name\":\"Mexico\",\"dial_code\":\"+52\",\"code\":\"MX\"},{\"name\":\"Micronesia\",\"dial_code\":\"+691\",\"code\":\"FM\"},{\"name\":\"Moldova\",\"dial_code\":\"+373\",\"code\":\"MD\"},{\"name\":\"Monaco\",\"dial_code\":\"+377\",\"code\":\"MC\"},{\"name\":\"Mongolia\",\"dial_code\":\"+976\",\"code\":\"MN\"},{\"name\":\"Montenegro\",\"dial_code\":\"+382\",\"code\":\"ME\"},{\"name\":\"Montserrat\",\"dial_code\":\"+1664\",\"code\":\"MS\"},{\"name\":\"Morocco\",\"dial_code\":\"+212\",\"code\":\"MA\"},{\"name\":\"Mozambique\",\"dial_code\":\"+258\",\"code\":\"MZ\"},{\"name\":\"Myanmar\",\"dial_code\":\"+95\",\"code\":\"MM\"},{\"name\":\"Namibia\",\"dial_code\":\"+264\",\"code\":\"NA\"},{\"name\":\"Nauru\",\"dial_code\":\"+674\",\"code\":\"NR\"},{\"name\":\"Nepal\",\"dial_code\":\"+977\",\"code\":\"NP\"},{\"name\":\"Netherlands\",\"dial_code\":\"+31\",\"code\":\"NL\"},{\"name\":\"Netherlands Antilles\",\"dial_code\":\"+599\",\"code\":\"AN\"},{\"name\":\"New Caledonia\",\"dial_code\":\"+687\",\"code\":\"NC\"},{\"name\":\"New Zealand\",\"dial_code\":\"+64\",\"code\":\"NZ\"},{\"name\":\"Nicaragua\",\"dial_code\":\"+505\",\"code\":\"NI\"},{\"name\":\"Niger\",\"dial_code\":\"+227\",\"code\":\"NE\"},{\"name\":\"Nigeria\",\"dial_code\":\"+234\",\"code\":\"NG\"},{\"name\":\"Niue\",\"dial_code\":\"+683\",\"code\":\"NU\"},{\"name\":\"Norfolk Islands\",\"dial_code\":\"+672\",\"code\":\"NF\"},{\"name\":\"Northern Mariana Isl.\",\"dial_code\":\"+1670\",\"code\":\"MP\"},{\"name\":\"Norway\",\"dial_code\":\"+47\",\"code\":\"NO\"},{\"name\":\"Oman\",\"dial_code\":\"+968\",\"code\":\"OM\"},{\"name\":\"Pakistan\",\"dial_code\":\"+92\",\"code\":\"PK\"},{\"name\":\"Palau\",\"dial_code\":\"+680\",\"code\":\"PW\"},{\"name\":\"Palestinian Territory\",\"dial_code\":\"+970\",\"code\":\"PS\"},{\"name\":\"Panama\",\"dial_code\":\"+507\",\"code\":\"PA\"},{\"name\":\"Papua New Guinea\",\"dial_code\":\"+675\",\"code\":\"PG\"},{\"name\":\"Paraguay\",\"dial_code\":\"+595\",\"code\":\"PY\"},{\"name\":\"Peru\",\"dial_code\":\"+51\",\"code\":\"PE\"},{\"name\":\"Philippines\",\"dial_code\":\"+63\",\"code\":\"PH\"},{\"name\":\"Pitcairn\",\"dial_code\":\"+872\",\"code\":\"PN\"},{\"name\":\"Poland\",\"dial_code\":\"+48\",\"code\":\"PL\"},{\"name\":\"Portugal\",\"dial_code\":\"+351\",\"code\":\"PT\"},{\"name\":\"Puerto Rico\",\"dial_code\":\"+1939\",\"code\":\"PR\"},{\"name\":\"Qatar\",\"dial_code\":\"+974\",\"code\":\"QA\"},{\"name\":\"Romania\",\"dial_code\":\"+40\",\"code\":\"RO\"},{\"name\":\"Russia\",\"dial_code\":\"+7\",\"code\":\"RU\"},{\"name\":\"Rwanda\",\"dial_code\":\"+250\",\"code\":\"RW\"},{\"name\":\"Reunion\",\"dial_code\":\"+262\",\"code\":\"RE\"},{\"name\":\"Saint Barthelemy\",\"dial_code\":\"+590\",\"code\":\"BL\"},{\"name\":\"Saint Helena\",\"dial_code\":\"+290\",\"code\":\"SH\"},{\"name\":\"Saint Kitts & Nevis\",\"dial_code\":\"+1869\",\"code\":\"KN\"},{\"name\":\"Saint Lucia\",\"dial_code\":\"+1758\",\"code\":\"LC\"},{\"name\":\"Saint Martin\",\"dial_code\":\"+590\",\"code\":\"MF\"},{\"name\":\"Saint Pierre & Miquelon\",\"dial_code\":\"+508\",\"code\":\"PM\"},{\"name\":\"Saint Vincent & Grenadines\",\"dial_code\":\"+1784\",\"code\":\"VC\"},{\"name\":\"Samoa\",\"dial_code\":\"+685\",\"code\":\"WS\"},{\"name\":\"San Marino\",\"dial_code\":\"+378\",\"code\":\"SM\"},{\"name\":\"Sao Tome & Principe\",\"dial_code\":\"+239\",\"code\":\"ST\"},{\"name\":\"Saudi Arabia\",\"dial_code\":\"+966\",\"code\":\"SA\"},{\"name\":\"Senegal\",\"dial_code\":\"+221\",\"code\":\"SN\"},{\"name\":\"Serbia\",\"dial_code\":\"+381\",\"code\":\"RS\"},{\"name\":\"Seychelles\",\"dial_code\":\"+248\",\"code\":\"SC\"},{\"name\":\"Sierra Leone\",\"dial_code\":\"+232\",\"code\":\"SL\"},{\"name\":\"Singapore\",\"dial_code\":\"+65\",\"code\":\"SG\"},{\"name\":\"Slovakia\",\"dial_code\":\"+421\",\"code\":\"SK\"},{\"name\":\"Slovenia\",\"dial_code\":\"+386\",\"code\":\"SI\"},{\"name\":\"Solomon Islands\",\"dial_code\":\"+677\",\"code\":\"SB\"},{\"name\":\"Somalia\",\"dial_code\":\"+252\",\"code\":\"SO\"},{\"name\":\"South Africa\",\"dial_code\":\"+27\",\"code\":\"ZA\"},{\"name\":\"South Sudan\",\"dial_code\":\"+211\",\"code\":\"SS\"},{\"name\":\"So. Georgia & So. Sandwich Isl.\",\"dial_code\":\"+500\",\"code\":\"GS\"},{\"name\":\"Spain\",\"dial_code\":\"+34\",\"code\":\"ES\"},{\"name\":\"Sri Lanka\",\"dial_code\":\"+94\",\"code\":\"LK\"},{\"name\":\"Sudan\",\"dial_code\":\"+249\",\"code\":\"SD\"},{\"name\":\"Suriname\",\"dial_code\":\"+597\",\"code\":\"SR\"},{\"name\":\"Svalbard & Jan Mayen\",\"dial_code\":\"+47\",\"code\":\"SJ\"},{\"name\":\"Swaziland\",\"dial_code\":\"+268\",\"code\":\"SZ\"},{\"name\":\"Sweden\",\"dial_code\":\"+46\",\"code\":\"SE\"},{\"name\":\"Switzerland\",\"dial_code\":\"+41\",\"code\":\"CH\"},{\"name\":\"Syrian Arab Republic\",\"dial_code\":\"+963\",\"code\":\"SY\"},{\"name\":\"Taiwan\",\"dial_code\":\"+886\",\"code\":\"TW\"},{\"name\":\"Tajikistan\",\"dial_code\":\"+992\",\"code\":\"TJ\"},{\"name\":\"Tanzania\",\"dial_code\":\"+255\",\"code\":\"TZ\"},{\"name\":\"Thailand\",\"dial_code\":\"+66\",\"code\":\"TH\"},{\"name\":\"Timor-Leste\",\"dial_code\":\"+670\",\"code\":\"TL\"},{\"name\":\"Togo\",\"dial_code\":\"+228\",\"code\":\"TG\"},{\"name\":\"Tokelau\",\"dial_code\":\"+690\",\"code\":\"TK\"},{\"name\":\"Tonga\",\"dial_code\":\"+676\",\"code\":\"TO\"},{\"name\":\"Trinidad & Tobago\",\"dial_code\":\"+1868\",\"code\":\"TT\"},{\"name\":\"Tunisia\",\"dial_code\":\"+216\",\"code\":\"TN\"},{\"name\":\"Turkey\",\"dial_code\":\"+90\",\"code\":\"TR\"},{\"name\":\"Turkmenistan\",\"dial_code\":\"+993\",\"code\":\"TM\"},{\"name\":\"Turks & Caicos Isl.\",\"dial_code\":\"+1649\",\"code\":\"TC\"},{\"name\":\"Tuvalu\",\"dial_code\":\"+688\",\"code\":\"TV\"},{\"name\":\"Uganda\",\"dial_code\":\"+256\",\"code\":\"UG\"},{\"name\":\"Ukraine\",\"dial_code\":\"+380\",\"code\":\"UA\"},{\"name\":\"United Arab Emirates\",\"dial_code\":\"+971\",\"code\":\"AE\"},{\"name\":\"Uruguay\",\"dial_code\":\"+598\",\"code\":\"UY\"},{\"name\":\"Uzbekistan\",\"dial_code\":\"+998\",\"code\":\"UZ\"},{\"name\":\"Vanuatu\",\"dial_code\":\"+678\",\"code\":\"VU\"},{\"name\":\"Venezuela\",\"dial_code\":\"+58\",\"code\":\"VE\"},{\"name\":\"Vietnam\",\"dial_code\":\"+84\",\"code\":\"VN\"},{\"name\":\"Virgin Isl., British\",\"dial_code\":\"+1284\",\"code\":\"VG\"},{\"name\":\"Virgin Isl., U.S.\",\"dial_code\":\"+1340\",\"code\":\"VI\"},{\"name\":\"Wallis & Futuna\",\"dial_code\":\"+681\",\"code\":\"WF\"},{\"name\":\"Yemen\",\"dial_code\":\"+967\",\"code\":\"YE\"},{\"name\":\"Zambia\",\"dial_code\":\"+260\",\"code\":\"ZM\"},{\"name\":\"Zimbabwe\",\"dial_code\":\"+263\",\"code\":\"ZW\"}];\n\n//# sourceURL=webpack://react-country-code-picker/./src/country-data.json?");

/***/ }),

/***/ "./src/icons.jsx":
/*!***********************!*\
  !*** ./src/icons.jsx ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar SearchIcon = function SearchIcon() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"svg\", {\n    width: \"14px\",\n    height: \"13px\",\n    viewBox: \"0 0 17 16\",\n    version: \"1.1\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"g\", {\n    stroke: \"none\",\n    strokeWidth: \"1\",\n    fill: \"none\",\n    fillRule: \"evenodd\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"g\", {\n    transform: \"translate(-116.000000, -114.000000)\",\n    fill: \"#3B4752\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"g\", {\n    transform: \"translate(112.857143, 110.000000)\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"path\", {\n    d: \"M11.042,15.9727 C9.725,15.9727 8.486,15.4597 7.555,14.5287 C5.633,12.6057 5.633,9.4777 7.555,7.5557 C8.486,6.6237 9.725,6.1107 11.042,6.1107 C12.359,6.1107 13.597,6.6237 14.529,7.5557 C16.451,9.4777 16.451,12.6057 14.529,14.5287 C13.597,15.4597 12.359,15.9727 11.042,15.9727 M19.707,18.2927 L16.707,15.2927 C16.668,15.2537 16.618,15.2367 16.574,15.2047 C18.622,12.4897 18.417,8.6147 15.943,6.1407 C14.589,4.7877 12.816,4.1107 11.042,4.1107 C9.268,4.1107 7.494,4.7877 6.141,6.1407 C3.434,8.8477 3.434,13.2367 6.141,15.9437 C7.494,17.2957 9.268,17.9727 11.042,17.9727 C12.51,17.9727 13.975,17.5017 15.205,16.5747 C15.236,16.6187 15.254,16.6677 15.293,16.7067 L18.293,19.7067 C18.488,19.9027 18.744,19.9997 19,19.9997 C19.256,19.9997 19.512,19.9027 19.707,19.7067 C20.098,19.3167 20.098,18.6837 19.707,18.2927\"\n  })))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchIcon);\n\n//# sourceURL=webpack://react-country-code-picker/./src/icons.jsx?");

/***/ }),

/***/ "./src/index.jsx":
/*!***********************!*\
  !*** ./src/index.jsx ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CountryCode; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _country_data_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./country-data.json */ \"./src/country-data.json\");\nvar _country_data_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./country-data.json */ \"./src/country-data.json\", 1);\n/* harmony import */ var _icons_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons.jsx */ \"./src/icons.jsx\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nvar CountryCode =\n/*#__PURE__*/\nfunction (_PureComponent) {\n  _inherits(CountryCode, _PureComponent);\n\n  function CountryCode() {\n    var _this;\n\n    _classCallCheck(this, CountryCode);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(CountryCode).call(this));\n\n    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), \"onSelect\", function (countryCode) {\n      if (countryCode) {\n        var searchValue = _this.state.searchValue;\n\n        if (searchValue) {\n          _this.setState({\n            searchValue: ''\n          });\n        }\n\n        var onChangeOfCountryCode = _this.props.onChangeOfCountryCode;\n\n        if (typeof onChangeOfCountryCode === 'function') {\n          onChangeOfCountryCode(countryCode);\n        }\n      }\n    });\n\n    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), \"onSearch\", function (event) {\n      var searchValue = event.target.value.toLowerCase();\n\n      _this.setState({\n        searchValue: searchValue\n      });\n    });\n\n    _this.state = {\n      searchValue: ''\n    };\n    return _this;\n  }\n\n  _createClass(CountryCode, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var searchValue = this.state.searchValue;\n      var countryCode = this.props.countryCode;\n\n      if (countryCode && !countryCode.startsWith('+')) {\n        countryCode = \"+\".concat(countryCode);\n      }\n\n      var countryCodeList = _country_data_json__WEBPACK_IMPORTED_MODULE_2__;\n\n      if (searchValue) {\n        countryCodeList = countryCodeList.filter(function (_ref) {\n          var name = _ref.name,\n              dial_code = _ref.dial_code;\n          return name.toLowerCase().startsWith(searchValue) || dial_code.includes(searchValue);\n        });\n      }\n\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"dropdown-field  ft-left intl-tel-input\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"dropdown-button\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n        type: \"button\",\n        \"data-toggle\": \"dropdown ex\",\n        className: \"button-default selected\"\n      }, countryCode, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n        className: \"drop-arrow\"\n      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"dropdownmenu bottom arrow-left\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"search-container\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"ignore-click\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icons_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n        type: \"text\",\n        value: searchValue,\n        name: \"Search\",\n        placeholder: \"Search Country\",\n        onChange: this.onSearch\n      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n        className: \"country-list\"\n      }, countryCodeList.map(function (eachList) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n          key: Math.random(),\n          className: \"country\",\n          onClick: function onClick() {\n            _this2.onSelect(eachList.dial_code);\n          }\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"code\", {\n          className: \"brand-bg\"\n        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"flag-box\"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"iti-flag \".concat(eachList.code.toLowerCase())\n        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"country-name\"\n        }, eachList.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"dial-code\"\n        }, eachList.dial_code));\n      }))));\n    }\n  }]);\n\n  return CountryCode;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"PureComponent\"]);\n\n_defineProperty(CountryCode, \"propTypes\", {\n  countryCode: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  onChangeOfCountryCode: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func\n});\n\n_defineProperty(CountryCode, \"defaultProps\", {\n  countryCode: undefined,\n  onChangeOfCountryCode: undefined\n});\n\n\n\n//# sourceURL=webpack://react-country-code-picker/./src/index.jsx?");

/***/ })

/******/ });
});