/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../\u0000#src/index.js":
/*!*************************!*\
  !*** ../ #src/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slick-carousel */ \"../node_modules/slick-carousel/slick/slick.js\");\n/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/scss/style.scss */ \"../\\u0000#src/scss/style.scss\");\n\n\n\n\n\n\n//-------------header menu scroll\n// $(function () {\n//     $('.header-nav-menu').on('click', 'a', function (event) {\n//         event.preventDefault();\n//         let anchor = $(this).attr('href');\n//         let top = $(anchor).offset().top;\n//         $('body,html').animate({scrollTop: top}, 500)\n//     });\n//     $('.footer-nav-menu').on('click', 'a', function (event) {\n//         event.preventDefault();\n//         let anchor = $(this).attr('href');\n//         let top = $(anchor).offset().top;\n//         $('body,html').animate({scrollTop: top}, 500)\n//     });\n//\n// });\n\ndocument.querySelectorAll('.header-nav-menu__link, .footer-nav-menu__link').forEach(elem => elem.addEventListener('click', function (event) {\n    event.preventDefault();\n\n    let elemAnchor = document.querySelector(this.getAttribute('href'));\n\n    elemAnchor.scrollIntoView({block: \"center\", behavior: \"smooth\"});\n\n}));\n//--------------------------SMALL arrow down\njquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.header-arrow__down').on('click', function (event) {\n        event.preventDefault();\n        let anchor = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent().attr('href');\n        let top = jquery__WEBPACK_IMPORTED_MODULE_0___default()(anchor).offset().top;\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()('body,html').animate({scrollTop: top}, 500)\n    })\n});\n\n//=========================================================\n//\njquery__WEBPACK_IMPORTED_MODULE_0___default()(document).scroll(() => {\n    if(jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop() > 150) {\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.header-nav').addClass('header-nav--scroll');\n    }\n    else {\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.header-nav').removeClass('header-nav--scroll');\n    }\n});\n\n//-----------------------Header slider-----------------------------\njquery__WEBPACK_IMPORTED_MODULE_0___default()('.header-slider').slick(\n    {\n        infinite: true,\n        autoplay: true,\n        slidesToShow: 1,\n        slidesToScroll: 1,\n        vertical: true,\n        variableHeight: true,\n        arrows: false,\n        speed: 700,\n        dots: true,\n    }\n);\n\njquery__WEBPACK_IMPORTED_MODULE_0___default()('.news-slider').slick(\n    {\n        infinite: true,\n        autoplay: true,\n        slidesToShow: 3,\n        slidesToScroll: 1,\n        mobileFirst: true,\n        centerMode: true,\n        arrows: true,\n        speed: 500,\n        variableWidth: true,\n        variableHeight: true,\n        dots: true,\n        prevArrow:\"<img class='a-left control-c prev slick-prev' src='img/L.png' alt='arrow left' style='margin-right: 30px; cursor: pointer'>\",\n        nextArrow:\"<img class='a-right control-c next slick-next' src='img/R.png' alt='arrow right' style='margin-left: 30px; cursor: pointer'>\",\n\n        responsive: [\n            {\n                breakpoint: 1200,\n                settings: {\n                    slidesToShow: 2,\n                    speed: 1000,\n                }            },\n            {\n                breakpoint: 667,\n                settings: {\n                    slidesToShow: 1,\n                    speed: 1000,\n                }\n            }\n        ]\n    }\n);\n//-------------------------Parallax on scroll--------------------\nlet moveDirection;\nwindow.addEventListener('scroll',  function(e) {\n    // определяем направление скрола\n    moveDirection = this.oldScroll > this.scrollY;\n    this.oldScroll = this.scrollY;\n}\n);\n\nlet images = document.querySelectorAll('.we-do-wrapper-article__img');\n\nfunction parallax(event) {\n\n        if (!moveDirection) {\n                images[0].style.transform = `translate(16%, 70px)`;\n                images[0].style.transition = \"transform 1s\";\n                images[1].style.transform = `translate(-16%, 70px)`;\n                images[1].style.transition = \"transform 1s\";\n        }\n        else {\n                images[0].style.transform = `translate(0, 0)`;\n                images[0].style.transition = \"transform 1s\";\n                images[1].style.transform = `translate(0, 0)`;\n                images[1].style.transition = \"transform 1s\";\n        }\n}\n\ndocument.addEventListener('scroll', parallax);\n\n//======================do not show \"Read full info... if it's too short\nlet readInfo = document.querySelectorAll('.we-do-wrapper-article-info__button');\n\nlet text;\nreadInfo.forEach(elem => elem.addEventListener('click', function () {\n        let text = this.previousSibling.previousSibling;\n    if (this.children[0].innerText.toLowerCase() === \"more details\") {\n        this.children[0].innerText = \"less details\";\n        text.style.overflow = \"visible\";\n        text.style.height = \"100%\";\n    } else if (this.children[0].innerText.toLowerCase() === \"less details\") {\n        text.style.overflow = \"hidden\";\n        text.style.height = \"80px\";\n        this.children[0].innerText = \"more details\";\n        text.previousSibling.previousSibling.scrollIntoView({behavior: \"smooth\"});\n    }\n}));\n\n//----------------------------------Google map---------------------------\nfunction initMap() {\n        map = new google.maps.Map(document.querySelector('.map'), {\n                center: {lat: 40.653276055686185, lng: -73.93594976912938},\n                zoom: 12,\n                styles: [\n                        {\n                                \"elementType\": \"geometry\",\n                                \"stylers\": [\n                                        {\n                                                \"color\": \"#f5f5f5\"\n                                        }\n                                ]\n                        },\n                        {\n                                \"elementType\": \"labels.icon\",\n                                \"stylers\": [\n                                        {\n                                                \"visibility\": \"off\"\n                                        }\n                                ]\n                        },\n                        {\n                                \"elementType\": \"labels.text.fill\",\n                                \"stylers\": [\n                                        {\n                                                \"color\": \"#616161\"\n                                        }\n                                ]\n                        },\n                        {\n                                \"elementType\": \"labels.text.stroke\",\n                                \"stylers\": [\n                                        {\n                                                \"color\": \"#f5f5f5\"\n                                        }\n                                ]\n                        },\n                        {\n                                \"featureType\": \"administrative.land_parcel\",\n                                \"elementType\": \"labels.text.fill\",\n                                \"stylers\": [\n                                        {\n                                                \"color\": \"#bdbdbd\"\n                                        }\n                                ]\n                        },\n                        {\n                                \"featureType\": \"poi\",\n                                \"elementType\": \"geometry\",\n                                \"stylers\": [\n                                        {\n                                                \"color\": \"#eeeeee\"\n                                        }\n                                ]\n                        },\n                        {\n                                \"featureType\": \"poi\",\n                                \"elementType\": \"labels.text.fill\",\n                                \"stylers\": [\n                                        {\n                                                \"color\": \"#757575\"\n                                        }\n                                ]\n                        },\n                        {\n                                \"featureType\": \"poi.park\",\n                                \"elementType\": \"geometry\",\n                                \"stylers\": [\n                                        {\n                                                \"color\": \"#e5e5e5\"\n                                        }\n                                ]\n                        },\n                        {\n                                \"featureType\": \"poi.park\",\n                                \"elementType\": \"labels.text.fill\",\n                                \"stylers\": [\n                                        {\n                                                \"color\": \"#9e9e9e\"\n                                        }\n                                ]\n                        },\n                        {\n                                \"featureType\": \"road\",\n                                \"elementType\": \"geometry\",\n                                \"stylers\": [\n                                        {\n                                                \"color\": \"#ffffff\"\n                                        }\n                                ]\n                        },\n                        {\n                                \"featureType\": \"road.arterial\",\n                                \"elementType\": \"labels.text.fill\",\n                                \"stylers\": [\n                                        {\n                                                \"color\": \"#757575\"\n                                        }\n                                ]\n                        },\n                        {\n                                \"featureType\": \"road.highway\",\n                                \"elementType\": \"geometry\",\n                                \"stylers\": [\n                                        {\n                                                \"color\": \"#dadada\"\n                                        }\n                                ]\n                        },\n                        {\n                                \"featureType\": \"road.highway\",\n                                \"elementType\": \"labels.text.fill\",\n                                \"stylers\": [\n                                        {\n                                                \"color\": \"#616161\"\n                                        }\n                                ]\n                        },\n                        {\n                                \"featureType\": \"road.local\",\n                                \"elementType\": \"labels.text.fill\",\n                                \"stylers\": [\n                                        {\n                                                \"color\": \"#9e9e9e\"\n                                        }\n                                ]\n                        },\n                        {\n                                \"featureType\": \"transit.line\",\n                                \"elementType\": \"geometry\",\n                                \"stylers\": [\n                                        {\n                                                \"color\": \"#e5e5e5\"\n                                        }\n                                ]\n                        },\n                        {\n                                \"featureType\": \"transit.station\",\n                                \"elementType\": \"geometry\",\n                                \"stylers\": [\n                                        {\n                                                \"color\": \"#eeeeee\"\n                                        }\n                                ]\n                        },\n                        {\n                                \"featureType\": \"water\",\n                                \"elementType\": \"geometry\",\n                                \"stylers\": [\n                                        {\n                                                \"color\": \"#c9c9c9\"\n                                        }\n                                ]\n                        },\n                        {\n                                \"featureType\": \"water\",\n                                \"elementType\": \"labels.text.fill\",\n                                \"stylers\": [\n                                        {\n                                                \"color\": \"#9e9e9e\"\n                                        }\n                                ]\n                        }\n                ]\n        });\n        let marker = new google.maps.Marker({\n            position: {lat: 40.683314992328825, lng: -73.90941145054774},\n            icon: \"./img/marker.png\",\n            map: map\n        });\n}\n\n\n\n//# sourceURL=webpack:///../%00#src/index.js?");

/***/ }),

/***/ "../\u0000#src/scss/style.scss":
/*!********************************!*\
  !*** ../ #src/scss/style.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///../%00#src/scss/style.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	// It's empty as some runtime module handles the default behavior
/******/ 	__webpack_require__.x = x => {}
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			["../\u0000#src/index.js","vendors-node_modules_slick-carousel_slick_slick_js"]
/******/ 		];
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		var checkDeferredModules = x => {};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime, executeModules] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 		
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = x => {};
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		var startup = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = startup || (x => {});
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// run startup
/******/ 	return __webpack_require__.x();
/******/ })()
;