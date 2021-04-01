/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/scss/main.scss":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/scss/main.scss ***!
  \*****************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html {\n  scroll-behavior: smooth;\n}\n\n#detail {\n  background: #e90e94;\n  background: linear-gradient(180deg, rgba(239, 181, 217, 0.8) 0%, rgba(169, 74, 168, 0.8) 100%);\n  background-attachment: fixed;\n  background-repeat: no-repeat;\n  margin: 0;\n  font-family: \"Changa\", sans-serif;\n}\n\n.m-l-40 {\n  margin-left: 40px;\n}\n\nsection {\n  position: relative;\n}\n\n.detail {\n  background-color: #fff;\n  margin: 100px auto 0;\n  display: grid;\n  max-width: 1200px;\n  justify-content: space-evenly;\n  padding: 50px 0;\n  position: relative;\n  border-bottom-right-radius: 8px;\n  border-bottom-left-radius: 8px;\n  grid-template-rows: auto;\n  grid-template-columns: [first] 50% [end] 50%;\n}\n@media only screen and (max-width: 767px) {\n  .detail {\n    display: block;\n  }\n}\n.detail::after {\n  content: \"\";\n  position: absolute;\n  border-top: 50px solid transparent;\n  border-left: 767px solid #fff;\n  top: -49px;\n  left: 0;\n  border-top-left-radius: 8px;\n}\n@media only screen and (max-width: 767px) {\n  .detail::after {\n    border-left: 100vw solid #fff;\n    border-bottom: 24px solid #fff;\n  }\n}\n.detail::before {\n  content: \"\";\n  position: absolute;\n  border-top: 50px solid transparent;\n  border-right: 767px solid #fff;\n  top: -49px;\n  right: 0;\n  border-top-right-radius: 8px;\n}\n@media only screen and (max-width: 767px) {\n  .detail::before {\n    border-right: 100vw solid #fff;\n    border-bottom: 24px solid #fff;\n  }\n}\n.detail .icon {\n  margin: 0 5px;\n  width: 25px;\n  height: 25px;\n}\n.detail .detail__home a img {\n  max-width: 60px;\n  max-height: 60px;\n  position: absolute;\n  top: -10px;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 99;\n}\n@media only screen and (max-width: 767px) {\n  .detail .detail__home a img {\n    top: -20px;\n  }\n}\n.detail .detail-img {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n}\n.detail .detail-img .detail-img__poke {\n  max-width: 300px;\n  max-height: 300px;\n}\n.detail .detail-content {\n  background-color: #fef6ea;\n  border-radius: 10px;\n  padding: 0 30px;\n  margin: 0 30px;\n  position: relative;\n  display: grid;\n  grid-auto-rows: auto;\n  grid-template-columns: [first] 50% [end] 50%;\n}\n.detail .detail-content h4 {\n  margin: 5px 0;\n}\n.detail .detail-content ul {\n  margin: 0;\n}\n.detail .detail-content ul li {\n  list-style-type: none;\n  text-transform: capitalize;\n}\n.detail .detail-content .detail__info-text {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  background-color: rgba(238, 130, 238, 0.97);\n  margin: 0;\n  border-radius: 10px;\n  visibility: hidden;\n}\n.detail .detail-content .detail__info-text p {\n  text-align: center;\n}\n.detail .detail-content .detail__info-text .detail__info-close {\n  display: flex;\n  margin: 10px 20px 0 auto;\n  cursor: pointer;\n  border: 2px solid;\n  justify-content: center;\n  width: 40px;\n  height: 30px;\n  border-radius: 5px;\n  padding: 5px;\n}\n.detail .detail-content .detail__info-text .detail__info-close:hover {\n  background-color: #000;\n  color: #fff;\n  border-color: #000;\n}\n.detail .detail-content .detail__name {\n  text-transform: capitalize;\n  font-size: 30px;\n  margin: 15px 0 0 0;\n  grid-column: 1/3;\n}\n.detail .detail-content .detail__height,\n.detail .detail-content .detail__weight {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.detail .detail-content .detail__type ul {\n  display: inline-block;\n}\n.detail .detail-content .detail__ability .detail__ability__name {\n  display: flex;\n}\n.detail .detail-content .detail__ability .detail__ability__name .icon {\n  cursor: pointer;\n}\n.detail .detail-content .gender {\n  max-height: 100px;\n}\n.detail .detail-content .gender .gender__icon {\n  height: 50px;\n  display: flex;\n}\n.detail .detail-content .gender p {\n  margin: 0;\n}\n\n.stats {\n  display: flex;\n  margin: auto;\n  text-align: center;\n  max-width: 1200px;\n  background-color: #fff;\n  border-radius: 8px;\n  margin: 30px auto;\n  padding: 40px;\n  box-sizing: border-box;\n}\n.stats .stats__left {\n  border-radius: 8px;\n  background-color: #c8c6ba;\n  box-sizing: border-box;\n  padding: 15px 45px;\n  margin: 15px;\n  width: 50%;\n}\n.stats .stats__left li {\n  list-style-type: none;\n}\n.stats .stats__left .stats__parrent {\n  display: flex;\n  padding: 0;\n  text-align: center;\n}\n.stats .stats__left .stats__parrent li {\n  padding: 0 5px;\n  width: 100%;\n}\n.stats .stats__left .stats__parrent li .stats__name {\n  padding: 0;\n  font-size: 1em;\n}\n.stats .stats__left .stats__parrent li ul {\n  padding: 0;\n  position: relative;\n  overflow: hidden;\n  background-color: #fff;\n}\n.stats .stats__left .stats__parrent li ul li {\n  padding: 0;\n  top: 100%;\n  height: 8px;\n}\n.stats .stats__left .stats__parrent li ul li:first-child {\n  background: linear-gradient(-180deg, #ee9ace 0%, #a94aa8 100%);\n  position: absolute;\n  height: 120%;\n  z-index: 1;\n}\n.stats .stats__left .stats__parrent li ul li:not(:first-child) {\n  background-color: transparent;\n  border-bottom: 10px solid #c8c6ba;\n  position: relative;\n  z-index: 2;\n}\n.stats .stats__right {\n  width: 50%;\n  margin: auto;\n}\n.stats .stats__right #mySVG {\n  border-radius: 200px;\n  fill: #fff;\n  stroke: #161515;\n}\n.stats .stats__right #mySVG:hover path {\n  stroke: #161515;\n  stroke-width: 2px;\n  fill: #161515;\n}\n.stats .stats__right svg path {\n  transition: 0.5s;\n}\n\n.evolutions {\n  display: grid;\n  max-width: 1200px;\n  margin: auto;\n  grid-template-rows: auto;\n  grid-template-columns: 33% 33% 33%;\n  background-color: #fef6ea;\n  justify-content: center;\n  text-align: center;\n  border-radius: 8px;\n  margin-bottom: 50px;\n}\n@media only screen and (max-width: 900px) {\n  .evolutions {\n    display: flex;\n    flex-wrap: wrap;\n  }\n}\n.evolutions .evolutions__content .icon {\n  position: absolute;\n  top: 42%;\n  right: -10%;\n  transform: translate(-50%, -50%);\n  width: 50px;\n  height: 50px;\n}\n@media only screen and (max-width: 900px) {\n  .evolutions .evolutions__content .icon {\n    position: absolute;\n    top: 50%;\n    right: -10%;\n    -webkit-transform: translate(-50%, -50%);\n    transform: translate(-50%, -50%);\n    width: 30px;\n    height: 30px;\n  }\n}\n.evolutions .evolutions__content {\n  position: relative;\n  padding: 30px;\n}\n.evolutions .evolutions__content .evolutions__img {\n  display: flex;\n  justify-content: center;\n}\n.evolutions .evolutions__content .evolutions__img img {\n  max-width: 200px;\n  max-height: 200px;\n  border: 6px solid #e1e0e0;\n  border-radius: 20px;\n  padding: 15px;\n  box-sizing: border-box;\n  transition: 0.4s;\n  cursor: pointer;\n}\n.evolutions .evolutions__content .evolutions__img img:hover {\n  border-color: rgba(160, 98, 159, 0.8);\n  padding: 0;\n}\n.evolutions .evolutions__content .evolution__name {\n  font-size: 16px;\n  letter-spacing: 2px;\n  text-transform: capitalize;\n  margin: 0;\n}\n.evolutions .evolutions__content ul {\n  display: flex;\n  justify-content: center;\n  padding: 0;\n  margin: 0;\n}\n.evolutions .evolutions__content ul li {\n  min-width: 60px;\n  list-style-type: none;\n  margin: 0 5px;\n  text-transform: capitalize;\n}\n\n.icon__type {\n  width: 50px;\n  height: 50px;\n}\n\nsvg path,\nsvg line,\nsvg polygon,\nsvg rect,\nsvg circle {\n  transition: 0.5s;\n}\n\nbody {\n  font-family: \"Changa\", sans-serif;\n}\n\n.header {\n  display: block;\n  text-align: center;\n  background-color: #7e8ec4;\n  padding: 10px;\n}\n.header .header__logo {\n  color: #fff;\n}\n\n.container .poke .poke__header {\n  margin: 20px 0;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n.container .poke .poke__header .poke__sort {\n  margin: 0 10px;\n}\n.container .poke .poke__header .poke__sort #sort {\n  width: 200px;\n  font-size: 15px;\n  padding: 3px 5px;\n  outline: none;\n}\n.container .poke .poke__header .poke__search {\n  justify-content: flex-end;\n  display: flex;\n  align-items: center;\n  margin: 0 10px;\n}\n.container .poke .poke__header .poke__search label {\n  font-size: 16px;\n  margin: 0 10px 0 0;\n}\n.container .poke .poke__header .poke__search input {\n  border: 1px solid #746969;\n  outline: none;\n  border-radius: 4px;\n  padding: 5px;\n  width: 210px;\n}\n.container .poke .poke__header .poke__search input::placeholder {\n  font-size: 14px;\n}\n.container .poke #container-poke {\n  display: flex;\n  flex-wrap: wrap;\n}\n.container .poke #container-poke .card {\n  padding: 10px;\n}\n.container .poke #container-poke .card div:first-child {\n  text-align: center;\n}\n.container .poke #container-poke .card .card-img-top {\n  padding: 5px 0;\n}\n.container .poke #container-poke .card .card-body {\n  padding: 1.25rem 1.25rem 0 1.25rem;\n  flex: none;\n}\n.container .poke #container-poke .card .card-body .card__name {\n  text-decoration: none;\n  color: #000;\n  transition: 0.4s;\n  font-size: 25px;\n}\n.container .poke #container-poke .card .card-body .card__name:hover {\n  color: #69abad;\n  transition: 0.4s;\n}\n.container .poke #container-poke .card .poke-box {\n  display: flex;\n  justify-content: space-between;\n}\n.container .poke #container-poke .card .poke-box ul {\n  padding-left: 20px;\n}\n.container .poke #container-poke .card .poke-box ul li {\n  list-style-type: none;\n  padding-left: 10px;\n}\n.container .poke #container-poke .img {\n  max-width: 200px;\n  height: 200px;\n  object-fit: contain;\n}\n.container #show-poke {\n  display: block;\n  text-align: center;\n  outline: none;\n  margin: auto;\n  border: 1px transparent;\n  border-radius: 30px;\n  background-color: #b2deec;\n  margin-top: 20px;\n  transition: 0.4s;\n  cursor: pointer;\n}\n.container #show-poke:hover {\n  background-color: #d4e6ec;\n  transition: 0.4s;\n}\n.container #show-poke img {\n  width: 50px;\n  height: 50px;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n.container .paging__button {\n  display: flex;\n  justify-content: flex-end;\n  display: none;\n}\n.container .paging__button #prev,\n.container .paging__button #next {\n  background-color: #889bdb;\n  color: #fff;\n  border: transparent;\n  padding: 6px;\n  cursor: pointer;\n  margin: 5px 10px;\n  transition: 0.4s;\n  outline: none;\n  line-height: 3px;\n  border-radius: 4px;\n}\n.container .paging__button #prev:hover,\n.container .paging__button #next:hover {\n  transition: 0.4s;\n  background-color: #acb8df;\n}\n.container .paging__button #prev .icon,\n.container .paging__button #next .icon {\n  width: 20px;\n  height: 20px;\n  padding: 2px;\n  fill: #fff;\n}\n\n#button {\n  display: inline-block;\n  background-color: #ff9800;\n  width: 50px;\n  height: 50px;\n  text-align: center;\n  border-radius: 4px;\n  position: fixed;\n  bottom: 30px;\n  right: 30px;\n  transition: background-color 0.3s, opacity 0.5s, visibility 0.5s;\n  opacity: 0;\n  visibility: hidden;\n  z-index: 1000;\n}\n#button .icon {\n  width: 20px;\n  height: 50px;\n}\n\n#button:hover {\n  cursor: pointer;\n  background-color: #333;\n}\n#button:hover .icon {\n  fill: #fff;\n}\n\n#button:active {\n  background-color: #555;\n}\n\n#button.show {\n  opacity: 1;\n  visibility: visible;\n}\n\n.default-type {\n  padding: 0 10px;\n  text-align: center;\n  color: #fff;\n  border-radius: 4px;\n  margin: 5px 0;\n}\n\n.fire {\n  background-color: #fc7216;\n}\n\n.flying {\n  background-color: #17cdfa;\n  background: linear-gradient(180deg, #17cdfa 50%, #bdb9b8 50%);\n}\n\n.bug {\n  background-color: rgba(2, 158, 2, 0.973);\n}\n\n.dark {\n  background-color: #302c35;\n}\n\n.dragon {\n  background-color: #f06311;\n  background: linear-gradient(180deg, #0f7ce2 50%, #f06311 50%);\n}\n\n.electric {\n  background-color: #d1d10a;\n}\n\n.fairy {\n  background-color: #fc8dc5;\n}\n\n.fighting {\n  background-color: #d37a07;\n}\n\n.ghost {\n  background-color: #4b1a83;\n}\n\n.grass {\n  background-color: #63d463;\n}\n\n.ground {\n  background-color: #e2df0a;\n  background: linear-gradient(180deg, #e2df0a 50%, #976405 50%);\n}\n\n.ice {\n  background-color: #12d6f8;\n}\n\n.normal {\n  background-color: #b4ada0;\n}\n\n.poison {\n  background-color: #d636d6;\n}\n\n.psychic {\n  background-color: #e43bb1;\n}\n\n.rock {\n  background-color: #676d0e;\n}\n\n.steel {\n  background-color: #e0e0cf;\n}\n\n.water {\n  background-color: #084ba3;\n}", "",{"version":3,"sources":["webpack://./src/scss/_detail.scss","webpack://./src/scss/main.scss","webpack://./src/scss/_style.scss","webpack://./src/scss/_global.scss"],"names":[],"mappings":"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","sourcesContent":["$background: #fefefe;\r\n$text: #4b507a;\r\n\r\n$cyan: #60daaa;\r\n$yellow: #fbca67;\r\n$orange: #ff8a30;\r\n$red: #f45e61;\r\n$purple: #6477b9;\r\n$blue: #0eb7da;\r\n// detail\r\nhtml {\r\n  scroll-behavior: smooth;\r\n}\r\n#detail {\r\n  background: rgb(233, 14, 148);\r\n  // background: linear-gradient(22deg, rgba(233, 14, 148, 0.8) 0%, rgba(193, 85, 191, 0.8) 100%);\r\n  background: linear-gradient(180deg, rgba(239, 181, 217, 0.8) 0%, rgba(169, 74, 168, 0.8) 100%);\r\n  background-attachment: fixed;\r\n  background-repeat: no-repeat;\r\n  margin: 0;\r\n  font-family: \"Changa\", sans-serif;\r\n}\r\n.m-l-40 {\r\n  margin-left: 40px;\r\n}\r\nsection {\r\n  position: relative;\r\n}\r\n.detail {\r\n  background-color: #fff;\r\n  margin: 100px auto 0;\r\n  display: grid;\r\n  max-width: 1200px;\r\n  justify-content: space-evenly;\r\n  padding: 50px 0;\r\n  position: relative;\r\n  border-bottom-right-radius: 8px;\r\n  border-bottom-left-radius: 8px;\r\n  grid-template-rows: auto;\r\n  grid-template-columns: [first] 50% [end] 50%;\r\n  @media only screen and (max-width: 767px) {\r\n    display: block;\r\n  }\r\n  &::after {\r\n    content: \"\";\r\n    position: absolute;\r\n    border-top: 50px solid transparent;\r\n    border-left: 767px solid #fff;\r\n    top: -49px;\r\n    left: 0;\r\n    border-top-left-radius: 8px;\r\n    @media only screen and (max-width: 767px) {\r\n      border-left: 100vw solid #fff;\r\n      border-bottom: 24px solid #fff;\r\n    }\r\n  }\r\n  &::before {\r\n    content: \"\";\r\n    position: absolute;\r\n    border-top: 50px solid transparent;\r\n    border-right: 767px solid #fff;\r\n    top: -49px;\r\n    right: 0;\r\n    border-top-right-radius: 8px;\r\n    @media only screen and (max-width: 767px) {\r\n      border-right: 100vw solid #fff;\r\n      border-bottom: 24px solid #fff;\r\n    }\r\n  }\r\n\r\n  .icon {\r\n    margin: 0 5px;\r\n    width: 25px;\r\n    height: 25px;\r\n  }\r\n  .detail__home {\r\n    a {\r\n      img {\r\n        max-width: 60px;\r\n        max-height: 60px;\r\n        position: absolute;\r\n        top: -10px;\r\n        left: 50%;\r\n        transform: translate(-50%, -50%);\r\n        z-index: 99;\r\n        @media only screen and (max-width: 767px) {\r\n          top: -20px;\r\n        }\r\n      }\r\n    }\r\n  }\r\n  .detail-img {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 100%;\r\n    .detail-img__poke {\r\n      max-width: 300px;\r\n      max-height: 300px;\r\n    }\r\n  }\r\n  .detail-content {\r\n    background-color: #fef6ea;\r\n    border-radius: 10px;\r\n    padding: 0 30px;\r\n    // width: 80%;\r\n    margin: 0 30px;\r\n    position: relative;\r\n    display: grid;\r\n    grid-auto-rows: auto;\r\n    grid-template-columns: [first] 50% [end] 50%;\r\n    // margin: 0 20px;\r\n    h4 {\r\n      margin: 5px 0;\r\n    }\r\n    ul {\r\n      margin: 0;\r\n      li {\r\n        list-style-type: none;\r\n        text-transform: capitalize;\r\n      }\r\n    }\r\n\r\n    .detail__info-text {\r\n      width: 100%;\r\n      height: 100%;\r\n      position: absolute;\r\n      left: 0;\r\n      top: 0;\r\n      background-color: rgba(238, 130, 238, 0.97);\r\n      margin: 0;\r\n      border-radius: 10px;\r\n      visibility: hidden;\r\n      p {\r\n        text-align: center;\r\n      }\r\n      .detail__info-close {\r\n        display: flex;\r\n        margin: 10px 20px 0 auto;\r\n        cursor: pointer;\r\n        border: 2px solid;\r\n        justify-content: center;\r\n        width: 40px;\r\n        height: 30px;\r\n        border-radius: 5px;\r\n        padding: 5px;\r\n        // transition: .4s;\r\n        &:hover {\r\n          background-color: #000;\r\n          color: #fff;\r\n          border-color: #000;\r\n          // transition: .4s;\r\n        }\r\n      }\r\n    }\r\n    .detail__name {\r\n      text-transform: capitalize;\r\n      font-size: 30px;\r\n      margin: 15px 0 0 0;\r\n      grid-column: 1 / 3;\r\n    }\r\n    .detail__height,\r\n    .detail__weight {\r\n      margin-top: 0;\r\n      margin-bottom: 0;\r\n    }\r\n    .detail__type {\r\n      // width: 100%;\r\n      ul {\r\n        display: inline-block;\r\n      }\r\n    }\r\n    .detail__ability {\r\n      // width: 100%;\r\n      .detail__ability__name {\r\n        display: flex;\r\n        .icon {\r\n          cursor: pointer;\r\n        }\r\n      }\r\n    }\r\n    .gender {\r\n      max-height: 100px;\r\n      .gender__icon {\r\n        height: 50px;\r\n        display: flex;\r\n      }\r\n      p {\r\n        margin: 0;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n// .genderless::after {\r\n//   // background-color: linear-gradient(81deg, rgba(246,0,175,0.9) 40%, rgba(0,135,246,0.9) 60%);\r\n//   fill: red;\r\n// }\r\n\r\n.stats {\r\n  display: flex;\r\n  margin: auto;\r\n  text-align: center;\r\n  max-width: 1200px;\r\n  background-color: #fff;\r\n  border-radius: 8px;\r\n  margin: 30px auto;\r\n  padding: 40px;\r\n  box-sizing: border-box;\r\n  .stats__left {\r\n    border-radius: 8px;\r\n    background-color: #c8c6ba;\r\n    box-sizing: border-box;\r\n    padding: 15px 45px;\r\n    margin: 15px;\r\n    width: 50%;\r\n    li {\r\n      list-style-type: none;\r\n    }\r\n    .stats__parrent {\r\n      display: flex;\r\n      padding: 0;\r\n      text-align: center;\r\n      li {\r\n        padding: 0 5px;\r\n        width: 100%;\r\n        .stats__name {\r\n          padding: 0;\r\n          font-size: 1em;\r\n        }\r\n        ul {\r\n          padding: 0;\r\n          position: relative;\r\n          overflow: hidden;\r\n          background-color: #fff;\r\n          li {\r\n            // width: 100%;\r\n            padding: 0;\r\n            // border-bottom: 2px solid rgb(235, 138, 11);\r\n            top: 100%;\r\n            height: 8px;\r\n            &:first-child {\r\n              background: linear-gradient(-180deg, rgb(238, 154, 206) 0%, rgba(169, 74, 168, 1) 100%);\r\n              position: absolute;\r\n              height: 120%;\r\n              z-index: 1;\r\n            }\r\n            &:not(:first-child) {\r\n              background-color: transparent;\r\n              border-bottom: 10px solid #c8c6ba;\r\n              position: relative;\r\n              z-index: 2;\r\n            }\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n  .stats__right {\r\n    width: 50%;\r\n    margin: auto;\r\n    #mySVG {\r\n      border-radius: 200px;\r\n      fill: #fff;\r\n      stroke: rgb(22, 21, 21);\r\n    }\r\n\r\n    #mySVG:hover path {\r\n      stroke: rgb(22, 21, 21) ;\r\n      stroke-width: 2px;\r\n      fill: rgb(22, 21, 21);\r\n    }\r\n\r\n    svg path {\r\n      transition: 0.5s;\r\n    }\r\n  }\r\n}\r\n\r\n.evolutions {\r\n  display: grid;\r\n  max-width: 1200px;\r\n  margin: auto;\r\n  grid-template-rows: auto;\r\n  grid-template-columns: 33% 33% 33%;\r\n  background-color: #fef6ea;\r\n  justify-content: center;\r\n  text-align: center;\r\n  border-radius: 8px;\r\n  margin-bottom: 50px;\r\n  @media only screen and (max-width: 900px) {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n  }\r\n  .evolutions__content .icon {\r\n    position: absolute;\r\n    top: 42%;\r\n    right: -10%;\r\n    transform: translate(-50%, -50%);\r\n    width: 50px;\r\n    height: 50px;\r\n\r\n    @media only screen and (max-width: 900px) {\r\n      position: absolute;\r\n      top: 50%;\r\n      right: -10%;\r\n      -webkit-transform: translate(-50%, -50%);\r\n      transform: translate(-50%, -50%);\r\n      width: 30px;\r\n      height: 30px;\r\n    }\r\n  }\r\n  .evolutions__content {\r\n    position: relative;\r\n    padding: 30px;\r\n    .evolutions__img {\r\n      display: flex;\r\n      justify-content: center;\r\n      img {\r\n        max-width: 200px;\r\n        max-height: 200px;\r\n        border: 6px solid #e1e0e0;\r\n        border-radius: 20px;\r\n        padding: 15px;\r\n        box-sizing: border-box;\r\n        transition: 0.4s;\r\n        cursor: pointer;\r\n        &:hover {\r\n          border-color: rgba(160, 98, 159, 0.8);\r\n          // border-image-slice: 1;\r\n          // border-width: 5px;\r\n          // border-image-source: linear-gradient( rgba(233, 14, 148, 0.8) 0%, rgba(193, 85, 191, 0.8) 100%);\r\n          // transition: 0.4s;\r\n          padding: 0;\r\n        }\r\n      }\r\n    }\r\n    .evolution__name {\r\n      font-size: 16px;\r\n      letter-spacing: 2px;\r\n      // margin: 10px 0 5px;\r\n      text-transform: capitalize;\r\n      margin: 0;\r\n    }\r\n    ul {\r\n      display: flex;\r\n      justify-content: center;\r\n      padding: 0;\r\n      margin: 0;\r\n      li {\r\n        min-width: 60px;\r\n        list-style-type: none;\r\n        margin: 0 5px;\r\n        text-transform: capitalize;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n.icon__type {\r\n  width: 50px;\r\n  height: 50px;\r\n}\r\nsvg path,\r\nsvg line,\r\nsvg polygon,\r\nsvg rect,\r\nsvg circle {\r\n  transition: 0.5s;\r\n}\r\n","html {\n  scroll-behavior: smooth;\n}\n\n#detail {\n  background: #e90e94;\n  background: linear-gradient(180deg, rgba(239, 181, 217, 0.8) 0%, rgba(169, 74, 168, 0.8) 100%);\n  background-attachment: fixed;\n  background-repeat: no-repeat;\n  margin: 0;\n  font-family: \"Changa\", sans-serif;\n}\n\n.m-l-40 {\n  margin-left: 40px;\n}\n\nsection {\n  position: relative;\n}\n\n.detail {\n  background-color: #fff;\n  margin: 100px auto 0;\n  display: grid;\n  max-width: 1200px;\n  justify-content: space-evenly;\n  padding: 50px 0;\n  position: relative;\n  border-bottom-right-radius: 8px;\n  border-bottom-left-radius: 8px;\n  grid-template-rows: auto;\n  grid-template-columns: [first] 50% [end] 50%;\n}\n@media only screen and (max-width: 767px) {\n  .detail {\n    display: block;\n  }\n}\n.detail::after {\n  content: \"\";\n  position: absolute;\n  border-top: 50px solid transparent;\n  border-left: 767px solid #fff;\n  top: -49px;\n  left: 0;\n  border-top-left-radius: 8px;\n}\n@media only screen and (max-width: 767px) {\n  .detail::after {\n    border-left: 100vw solid #fff;\n    border-bottom: 24px solid #fff;\n  }\n}\n.detail::before {\n  content: \"\";\n  position: absolute;\n  border-top: 50px solid transparent;\n  border-right: 767px solid #fff;\n  top: -49px;\n  right: 0;\n  border-top-right-radius: 8px;\n}\n@media only screen and (max-width: 767px) {\n  .detail::before {\n    border-right: 100vw solid #fff;\n    border-bottom: 24px solid #fff;\n  }\n}\n.detail .icon {\n  margin: 0 5px;\n  width: 25px;\n  height: 25px;\n}\n.detail .detail__home a img {\n  max-width: 60px;\n  max-height: 60px;\n  position: absolute;\n  top: -10px;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 99;\n}\n@media only screen and (max-width: 767px) {\n  .detail .detail__home a img {\n    top: -20px;\n  }\n}\n.detail .detail-img {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n}\n.detail .detail-img .detail-img__poke {\n  max-width: 300px;\n  max-height: 300px;\n}\n.detail .detail-content {\n  background-color: #fef6ea;\n  border-radius: 10px;\n  padding: 0 30px;\n  margin: 0 30px;\n  position: relative;\n  display: grid;\n  grid-auto-rows: auto;\n  grid-template-columns: [first] 50% [end] 50%;\n}\n.detail .detail-content h4 {\n  margin: 5px 0;\n}\n.detail .detail-content ul {\n  margin: 0;\n}\n.detail .detail-content ul li {\n  list-style-type: none;\n  text-transform: capitalize;\n}\n.detail .detail-content .detail__info-text {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  background-color: rgba(238, 130, 238, 0.97);\n  margin: 0;\n  border-radius: 10px;\n  visibility: hidden;\n}\n.detail .detail-content .detail__info-text p {\n  text-align: center;\n}\n.detail .detail-content .detail__info-text .detail__info-close {\n  display: flex;\n  margin: 10px 20px 0 auto;\n  cursor: pointer;\n  border: 2px solid;\n  justify-content: center;\n  width: 40px;\n  height: 30px;\n  border-radius: 5px;\n  padding: 5px;\n}\n.detail .detail-content .detail__info-text .detail__info-close:hover {\n  background-color: #000;\n  color: #fff;\n  border-color: #000;\n}\n.detail .detail-content .detail__name {\n  text-transform: capitalize;\n  font-size: 30px;\n  margin: 15px 0 0 0;\n  grid-column: 1/3;\n}\n.detail .detail-content .detail__height,\n.detail .detail-content .detail__weight {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.detail .detail-content .detail__type ul {\n  display: inline-block;\n}\n.detail .detail-content .detail__ability .detail__ability__name {\n  display: flex;\n}\n.detail .detail-content .detail__ability .detail__ability__name .icon {\n  cursor: pointer;\n}\n.detail .detail-content .gender {\n  max-height: 100px;\n}\n.detail .detail-content .gender .gender__icon {\n  height: 50px;\n  display: flex;\n}\n.detail .detail-content .gender p {\n  margin: 0;\n}\n\n.stats {\n  display: flex;\n  margin: auto;\n  text-align: center;\n  max-width: 1200px;\n  background-color: #fff;\n  border-radius: 8px;\n  margin: 30px auto;\n  padding: 40px;\n  box-sizing: border-box;\n}\n.stats .stats__left {\n  border-radius: 8px;\n  background-color: #c8c6ba;\n  box-sizing: border-box;\n  padding: 15px 45px;\n  margin: 15px;\n  width: 50%;\n}\n.stats .stats__left li {\n  list-style-type: none;\n}\n.stats .stats__left .stats__parrent {\n  display: flex;\n  padding: 0;\n  text-align: center;\n}\n.stats .stats__left .stats__parrent li {\n  padding: 0 5px;\n  width: 100%;\n}\n.stats .stats__left .stats__parrent li .stats__name {\n  padding: 0;\n  font-size: 1em;\n}\n.stats .stats__left .stats__parrent li ul {\n  padding: 0;\n  position: relative;\n  overflow: hidden;\n  background-color: #fff;\n}\n.stats .stats__left .stats__parrent li ul li {\n  padding: 0;\n  top: 100%;\n  height: 8px;\n}\n.stats .stats__left .stats__parrent li ul li:first-child {\n  background: linear-gradient(-180deg, #ee9ace 0%, #a94aa8 100%);\n  position: absolute;\n  height: 120%;\n  z-index: 1;\n}\n.stats .stats__left .stats__parrent li ul li:not(:first-child) {\n  background-color: transparent;\n  border-bottom: 10px solid #c8c6ba;\n  position: relative;\n  z-index: 2;\n}\n.stats .stats__right {\n  width: 50%;\n  margin: auto;\n}\n.stats .stats__right #mySVG {\n  border-radius: 200px;\n  fill: #fff;\n  stroke: #161515;\n}\n.stats .stats__right #mySVG:hover path {\n  stroke: #161515;\n  stroke-width: 2px;\n  fill: #161515;\n}\n.stats .stats__right svg path {\n  transition: 0.5s;\n}\n\n.evolutions {\n  display: grid;\n  max-width: 1200px;\n  margin: auto;\n  grid-template-rows: auto;\n  grid-template-columns: 33% 33% 33%;\n  background-color: #fef6ea;\n  justify-content: center;\n  text-align: center;\n  border-radius: 8px;\n  margin-bottom: 50px;\n}\n@media only screen and (max-width: 900px) {\n  .evolutions {\n    display: flex;\n    flex-wrap: wrap;\n  }\n}\n.evolutions .evolutions__content .icon {\n  position: absolute;\n  top: 42%;\n  right: -10%;\n  transform: translate(-50%, -50%);\n  width: 50px;\n  height: 50px;\n}\n@media only screen and (max-width: 900px) {\n  .evolutions .evolutions__content .icon {\n    position: absolute;\n    top: 50%;\n    right: -10%;\n    -webkit-transform: translate(-50%, -50%);\n    transform: translate(-50%, -50%);\n    width: 30px;\n    height: 30px;\n  }\n}\n.evolutions .evolutions__content {\n  position: relative;\n  padding: 30px;\n}\n.evolutions .evolutions__content .evolutions__img {\n  display: flex;\n  justify-content: center;\n}\n.evolutions .evolutions__content .evolutions__img img {\n  max-width: 200px;\n  max-height: 200px;\n  border: 6px solid #e1e0e0;\n  border-radius: 20px;\n  padding: 15px;\n  box-sizing: border-box;\n  transition: 0.4s;\n  cursor: pointer;\n}\n.evolutions .evolutions__content .evolutions__img img:hover {\n  border-color: rgba(160, 98, 159, 0.8);\n  padding: 0;\n}\n.evolutions .evolutions__content .evolution__name {\n  font-size: 16px;\n  letter-spacing: 2px;\n  text-transform: capitalize;\n  margin: 0;\n}\n.evolutions .evolutions__content ul {\n  display: flex;\n  justify-content: center;\n  padding: 0;\n  margin: 0;\n}\n.evolutions .evolutions__content ul li {\n  min-width: 60px;\n  list-style-type: none;\n  margin: 0 5px;\n  text-transform: capitalize;\n}\n\n.icon__type {\n  width: 50px;\n  height: 50px;\n}\n\nsvg path,\nsvg line,\nsvg polygon,\nsvg rect,\nsvg circle {\n  transition: 0.5s;\n}\n\nbody {\n  font-family: \"Changa\", sans-serif;\n}\n\n.header {\n  display: block;\n  text-align: center;\n  background-color: #7e8ec4;\n  padding: 10px;\n}\n.header .header__logo {\n  color: #fff;\n}\n\n.container .poke .poke__header {\n  margin: 20px 0;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n.container .poke .poke__header .poke__sort {\n  margin: 0 10px;\n}\n.container .poke .poke__header .poke__sort #sort {\n  width: 200px;\n  font-size: 15px;\n  padding: 3px 5px;\n  outline: none;\n}\n.container .poke .poke__header .poke__search {\n  justify-content: flex-end;\n  display: flex;\n  align-items: center;\n  margin: 0 10px;\n}\n.container .poke .poke__header .poke__search label {\n  font-size: 16px;\n  margin: 0 10px 0 0;\n}\n.container .poke .poke__header .poke__search input {\n  border: 1px solid #746969;\n  outline: none;\n  border-radius: 4px;\n  padding: 5px;\n  width: 210px;\n}\n.container .poke .poke__header .poke__search input::placeholder {\n  font-size: 14px;\n}\n.container .poke #container-poke {\n  display: flex;\n  flex-wrap: wrap;\n}\n.container .poke #container-poke .card {\n  padding: 10px;\n}\n.container .poke #container-poke .card div:first-child {\n  text-align: center;\n}\n.container .poke #container-poke .card .card-img-top {\n  padding: 5px 0;\n}\n.container .poke #container-poke .card .card-body {\n  padding: 1.25rem 1.25rem 0 1.25rem;\n  flex: none;\n}\n.container .poke #container-poke .card .card-body .card__name {\n  text-decoration: none;\n  color: #000;\n  transition: 0.4s;\n  font-size: 25px;\n}\n.container .poke #container-poke .card .card-body .card__name:hover {\n  color: #69abad;\n  transition: 0.4s;\n}\n.container .poke #container-poke .card .poke-box {\n  display: flex;\n  justify-content: space-between;\n}\n.container .poke #container-poke .card .poke-box ul {\n  padding-left: 20px;\n}\n.container .poke #container-poke .card .poke-box ul li {\n  list-style-type: none;\n  padding-left: 10px;\n}\n.container .poke #container-poke .img {\n  max-width: 200px;\n  height: 200px;\n  object-fit: contain;\n}\n.container #show-poke {\n  display: block;\n  text-align: center;\n  outline: none;\n  margin: auto;\n  border: 1px transparent;\n  border-radius: 30px;\n  background-color: #b2deec;\n  margin-top: 20px;\n  transition: 0.4s;\n  cursor: pointer;\n}\n.container #show-poke:hover {\n  background-color: #d4e6ec;\n  transition: 0.4s;\n}\n.container #show-poke img {\n  width: 50px;\n  height: 50px;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n.container .paging__button {\n  display: flex;\n  justify-content: flex-end;\n  display: none;\n}\n.container .paging__button #prev,\n.container .paging__button #next {\n  background-color: #889bdb;\n  color: #fff;\n  border: transparent;\n  padding: 6px;\n  cursor: pointer;\n  margin: 5px 10px;\n  transition: 0.4s;\n  outline: none;\n  line-height: 3px;\n  border-radius: 4px;\n}\n.container .paging__button #prev:hover,\n.container .paging__button #next:hover {\n  transition: 0.4s;\n  background-color: #acb8df;\n}\n.container .paging__button #prev .icon,\n.container .paging__button #next .icon {\n  width: 20px;\n  height: 20px;\n  padding: 2px;\n  fill: #fff;\n}\n\n#button {\n  display: inline-block;\n  background-color: #ff9800;\n  width: 50px;\n  height: 50px;\n  text-align: center;\n  border-radius: 4px;\n  position: fixed;\n  bottom: 30px;\n  right: 30px;\n  transition: background-color 0.3s, opacity 0.5s, visibility 0.5s;\n  opacity: 0;\n  visibility: hidden;\n  z-index: 1000;\n}\n#button .icon {\n  width: 20px;\n  height: 50px;\n}\n\n#button:hover {\n  cursor: pointer;\n  background-color: #333;\n}\n#button:hover .icon {\n  fill: #fff;\n}\n\n#button:active {\n  background-color: #555;\n}\n\n#button.show {\n  opacity: 1;\n  visibility: visible;\n}\n\n.default-type {\n  padding: 0 10px;\n  text-align: center;\n  color: #fff;\n  border-radius: 4px;\n  margin: 5px 0;\n}\n\n.fire {\n  background-color: #fc7216;\n}\n\n.flying {\n  background-color: #17cdfa;\n  background: linear-gradient(180deg, #17cdfa 50%, #bdb9b8 50%);\n}\n\n.bug {\n  background-color: rgba(2, 158, 2, 0.973);\n}\n\n.dark {\n  background-color: #302c35;\n}\n\n.dragon {\n  background-color: #f06311;\n  background: linear-gradient(180deg, #0f7ce2 50%, #f06311 50%);\n}\n\n.electric {\n  background-color: #d1d10a;\n}\n\n.fairy {\n  background-color: #fc8dc5;\n}\n\n.fighting {\n  background-color: #d37a07;\n}\n\n.ghost {\n  background-color: #4b1a83;\n}\n\n.grass {\n  background-color: #63d463;\n}\n\n.ground {\n  background-color: #e2df0a;\n  background: linear-gradient(180deg, #e2df0a 50%, #976405 50%);\n}\n\n.ice {\n  background-color: #12d6f8;\n}\n\n.normal {\n  background-color: #b4ada0;\n}\n\n.poison {\n  background-color: #d636d6;\n}\n\n.psychic {\n  background-color: #e43bb1;\n}\n\n.rock {\n  background-color: #676d0e;\n}\n\n.steel {\n  background-color: #e0e0cf;\n}\n\n.water {\n  background-color: #084ba3;\n}","// index\r\nbody {\r\n  font-family: \"Changa\", sans-serif;\r\n}\r\n.header {\r\n  display: block;\r\n  text-align: center;\r\n  background-color: rgb(126, 142, 196);\r\n  padding: 10px;\r\n  .header__logo {\r\n    color: #fff;\r\n  }\r\n}\r\n.container {\r\n  .poke {\r\n    .poke__header {\r\n      margin: 20px 0;\r\n      display: flex;\r\n      justify-content: flex-end;\r\n      align-items: center;\r\n      .poke__sort{\r\n        margin: 0 10px;\r\n        #sort{\r\n          width: 200px;\r\n          font-size: 15px;\r\n          padding: 3px 5px;\r\n          outline: none;\r\n        }\r\n      }\r\n      .poke__search {\r\n        justify-content: flex-end;\r\n        display: flex;\r\n        align-items: center;\r\n        margin: 0 10px;\r\n        label {\r\n          font-size: 16px;\r\n          margin: 0 10px 0 0;\r\n        }\r\n        input {\r\n          border: 1px solid #746969;\r\n          outline: none;\r\n          border-radius: 4px;\r\n          padding: 5px;\r\n          width: 210px;\r\n          &::placeholder {\r\n            font-size: 14px;\r\n          }\r\n        }\r\n      }\r\n    }\r\n\r\n    #container-poke {\r\n      display: flex;\r\n      flex-wrap: wrap;\r\n      .card {\r\n        // width: 300px;\r\n        // height: 300px;\r\n        padding: 10px;\r\n        & div:first-child {\r\n          text-align: center;\r\n        }\r\n        .card-img-top {\r\n          // background: #f5efe6;\r\n          padding: 5px 0;\r\n          // border-radius: 8px;\r\n        }\r\n        .card-body {\r\n          padding: 1.25rem 1.25rem 0 1.25rem;\r\n          flex: none;\r\n          .card__name {\r\n            text-decoration: none;\r\n            color: #000;\r\n            transition: 0.4s;\r\n            font-size: 25px;\r\n            &:hover {\r\n              color: rgb(105, 171, 173);\r\n              transition: 0.4s;\r\n            }\r\n          }\r\n        }\r\n        .poke-box {\r\n          display: flex;\r\n          justify-content: space-between;\r\n          ul {\r\n            padding-left: 20px;\r\n            li {\r\n              list-style-type: none;\r\n              padding-left: 10px;\r\n            }\r\n          }\r\n        }\r\n      }\r\n      .img {\r\n        max-width: 200px;\r\n        height: 200px;\r\n        object-fit: contain;\r\n      }\r\n    }\r\n  }\r\n  #show-poke {\r\n    display: block;\r\n    text-align: center;\r\n    outline: none;\r\n    margin: auto;\r\n    border: 1px transparent;\r\n    border-radius: 30px;\r\n    background-color: rgb(178, 222, 236);\r\n    margin-top: 20px;\r\n    transition: 0.4s;\r\n    &:hover {\r\n      background-color: rgb(212, 230, 236);\r\n      transition: 0.4s;\r\n    }\r\n    cursor: pointer;\r\n    img {\r\n      width: 50px;\r\n      height: 50px;\r\n      background-size: cover;\r\n      background-repeat: no-repeat;\r\n    }\r\n  }\r\n  .paging__button {\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    display: none;\r\n    #prev,\r\n    #next {\r\n      background-color: rgb(136, 155, 219);\r\n      color: #fff;\r\n      border: transparent;\r\n      padding: 6px;\r\n      cursor: pointer;\r\n      margin: 5px 10px;\r\n      transition: 0.4s;\r\n      outline: none;\r\n      // visibility: hidden;\r\n      line-height: 3px;\r\n      // border-radius: 30px;\r\n      border-radius: 4px;\r\n      &:hover {\r\n        transition: 0.4s;\r\n        background-color: rgb(172, 184, 223);\r\n      }\r\n      .icon {\r\n        width: 20px;\r\n        height: 20px;\r\n        padding: 2px;\r\n        fill: #fff;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n// button\r\n#button {\r\n  display: inline-block;\r\n  background-color: #ff9800;\r\n  width: 50px;\r\n  height: 50px;\r\n  text-align: center;\r\n  border-radius: 4px;\r\n  position: fixed;\r\n  bottom: 30px;\r\n  right: 30px;\r\n  transition: background-color 0.3s, opacity 0.5s, visibility 0.5s;\r\n  opacity: 0;\r\n  visibility: hidden;\r\n  z-index: 1000;\r\n  .icon {\r\n    width: 20px;\r\n    height: 50px;\r\n  }\r\n}\r\n// #button::after {\r\n//   content: \"\\f077\";\r\n//   font-family: FontAwesome;\r\n//   font-weight: normal;\r\n//   font-style: normal;\r\n//   font-size: 2em;\r\n//   line-height: 50px;\r\n//   color: #fff;\r\n// }\r\n#button:hover {\r\n  cursor: pointer;\r\n  background-color: #333;\r\n  .icon {\r\n    fill: #fff;\r\n  }\r\n}\r\n#button:active {\r\n  background-color: #555;\r\n}\r\n#button.show {\r\n  opacity: 1;\r\n  visibility: visible;\r\n}\r\n",".default-type {\r\n  padding: 0 10px;\r\n  text-align: center;\r\n  color: #fff;\r\n  border-radius: 4px;\r\n  margin: 5px 0;       \r\n\r\n}\r\n.fire {\r\n  background-color: rgb(252, 114, 22);\r\n}\r\n.flying {\r\n  background-color: rgb(23, 205, 250);\r\n  background: linear-gradient(180deg, rgb(23, 205, 250) 50%, #bdb9b8 50%);\r\n}\r\n.bug {\r\n  background-color: rgba(2, 158, 2, 0.973);\r\n}\r\n.dark {\r\n  background-color: rgb(48, 44, 53);\r\n}\r\n.dragon {\r\n  background-color: rgb(240, 99, 17);\r\n  background: linear-gradient(180deg, rgb(15, 124, 226) 50%, rgb(240, 99, 17) 50%);\r\n}\r\n.electric {\r\n  background-color: rgb(209, 209, 10);\r\n}\r\n.fairy {\r\n  background-color: rgb(252, 141, 197);\r\n}\r\n.fighting {\r\n  background-color: rgb(211, 122, 7);\r\n}\r\n.ghost {\r\n  background-color: rgb(75, 26, 131);\r\n}\r\n.grass {\r\n  background-color: rgb(99, 212, 99);\r\n}\r\n.ground {\r\n  background-color: rgb(226, 223, 10);\r\n  background: linear-gradient(180deg, rgb(226, 223, 10) 50%, rgb(151, 100, 5) 50%);\r\n}\r\n.ice {\r\n  background-color: rgb(18, 214, 248);\r\n}\r\n.normal {\r\n  background-color: rgb(180, 173, 160);\r\n}\r\n.poison {\r\n  background-color: rgb(214, 54, 214);\r\n}\r\n.psychic {\r\n  background-color: rgb(228, 59, 177);\r\n}\r\n.rock {\r\n  background-color: #676d0e;\r\n}\r\n.steel {\r\n  background-color: rgb(224, 224, 207);\r\n}\r\n.water {\r\n  background-color: rgb(8, 75, 163);\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/img/poke.png":
/*!**************************!*\
  !*** ./src/img/poke.png ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "img/poke.png");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./main.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/scss/main.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_main_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_main_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/modules/global.js":
/*!*******************************!*\
  !*** ./src/modules/global.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTypes": () => (/* binding */ createTypes),
/* harmony export */   "checkType": () => (/* binding */ checkType)
/* harmony export */ });

function createTypes(types, ul) {
  types.forEach(function (type) {
    let typeLi = document.createElement('li');
    typeLi.innerText = type['type']['name'];
    let typeValue = type['type']['name'];
    checkType(typeValue, typeLi);
    ul.append(typeLi);
  })
}

function checkType(type, li) {
  // console.log('type isssss', type);
  switch (type) {
    case 'fire':
      li.classList.add('fire', 'default-type');
      break;
    case 'flying':
      li.classList.add('flying', 'default-type');
      break;
    case 'bug':
      li.classList.add('bug', 'default-type');

      break;
    case 'dark':
      li.classList.add('dark', 'default-type');

      break;
    case 'dragon':
      li.classList.add('dragon', 'default-type');

      break;
    case 'electric':
      li.classList.add('electric', 'default-type');

      break;
    case 'fairy':
      li.classList.add('fairy', 'default-type');

      break;
    case 'fighting':
      li.classList.add('fighting', 'default-type');

      break;
    case 'ghost':
      li.classList.add('ghost', 'default-type');

      break;
    case 'grass':
      li.classList.add('grass', 'default-type');

      break;
    case 'ground':
      li.classList.add('ground', 'default-type');

      break;
    case 'ice':
      li.classList.add('ice', 'default-type');

      break;
    case 'normal':
      li.classList.add('normal', 'default-type');

      break;
    case 'poison':
      li.classList.add('poison', 'default-type');

      break;
    case 'psychic':
      li.classList.add('psychic', 'default-type');

      break;
    case 'rock':
      li.classList.add('rock', 'default-type');

      break;
    case 'steel':
      li.classList.add('steel', 'default-type');

      break;
    case 'water':
      li.classList.add('water', 'default-type');

      break;
    default:
      break;
  }
}





/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/detail.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_global_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/global.js */ "./src/modules/global.js");
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/main.scss */ "./src/scss/main.scss");
/* harmony import */ var _img_poke_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/poke.png */ "./src/img/poke.png");





let effectAbility = document.getElementsByClassName('detail__info-text')[0];

// localstorage
//get
const url = localStorage.getItem('url');
const offset = localStorage.getItem('offsetRequest');
const height = localStorage.getItem('height');
//set
console.log('offsetRequest', offset);
let link = document.getElementsByClassName('detail__link')[0];
link.addEventListener('click', function (e) {
  localStorage.setItem('offsetRespon', offset);
  localStorage.setItem('heightRespon', height);
})
let lv1 = document.getElementsByClassName('evolutions__content')[0];
let lv2 = document.getElementsByClassName('evolutions__content')[1];
let lv3 = document.getElementsByClassName('evolutions__content')[2];
let parrentImgLv1 = document.getElementsByClassName('evolutions__img')[0];
let parrentImgLv2 = document.getElementsByClassName('evolutions__img')[1];
let parrentImgLv3 = document.getElementsByClassName('evolutions__img')[2];
let gender = document.getElementsByClassName('gender__icon')[0];
let ulAbi = document.createElement('ul');
let ulType = document.createElement('ul');
let ulStat = document.createElement('ul');
let detailAbility = document.getElementsByClassName('detail__ability')[0];
let detailType = document.getElementsByClassName('detail__type')[0];
let detailName = document.getElementsByClassName('detail__name')[0];
let detailHeight = document.getElementsByClassName('detail__height')[0];
let detailWeight = document.getElementsByClassName('detail__weight')[0];
let detailInfo = document.getElementsByClassName('detail__ability__info')[0];
let detailCloseInfo = document.getElementsByClassName('detail__info-close')[0];
let detailStatsLeft = document.getElementsByClassName('stats__left')[0];
//svg
let triangle = document.getElementById("triangle");
let svg = document.getElementById('mySVG');
let length = triangle.getTotalLength();
triangle.style.strokeDasharray = length;
triangle.style.strokeDashoffset = length;
window.addEventListener("scroll", drawPoke);

function drawPoke() {
  let scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

  let draw = length * scrollpercent - 1000;
  // Reverse the drawing (when scrolling upwards)

  if (document.documentElement.scrollTop > 600) {
    svg.style.background = "linear-gradient(180deg, rgba(246,0,45,1) 40%,rgba(254,254,254,1)  60%)";
  }

  triangle.style.strokeDashoffset = length - draw;
}

let Detail = function () {

};

Detail.prototype = {
  load() {
    url && fetch(url)
      .then((resp) => resp.json())
      .then((result) => {
        const idPoke = localStorage.getItem('id');

        this.checkLv(idPoke, result);
        this.fetchGender1(result.name);
        this.render(result);
      });
  },
  checkLv(idPoke, pokemon) {
    // parseInt(idPoke);
    switch (idPoke % 3) {
      case 0:
        fetch(`https://pokeapi.co/api/v2/pokemon/${parseInt(idPoke) - parseInt(2)}/`)
          .then(res => res.json())
          .then(result => {

            this.renderEvolutions(idPoke, result, 1);
          })
        fetch(`https://pokeapi.co/api/v2/pokemon/${parseInt(idPoke) - parseInt(1)}/`)
          .then(res => res.json())
          .then(result => {
            this.renderEvolutions(idPoke, result, 2);

          })

        this.renderEvolutions(idPoke, pokemon, 3);

        break;
      case 1:

        this.renderEvolutions(idPoke, pokemon, 1);

        fetch(`https://pokeapi.co/api/v2/pokemon/${parseInt(idPoke) + parseInt(1)}/`)
          .then(res => res.json())
          .then(result => {
            this.renderEvolutions(idPoke, result, 2);

          })
        fetch(`https://pokeapi.co/api/v2/pokemon/${parseInt(idPoke) + parseInt(2)}/`)
          .then(res => res.json())
          .then(result => {
            this.renderEvolutions(idPoke, result, 3);
          })
        break;
      case 2:
        fetch(`https://pokeapi.co/api/v2/pokemon/${parseInt(idPoke) - parseInt(1)}/`)
          .then(res => res.json())
          .then(result => {
            this.renderEvolutions(idPoke, result, 1);

          })

        this.renderEvolutions(idPoke, pokemon, 2);

        fetch(`https://pokeapi.co/api/v2/pokemon/${parseInt(idPoke) + parseInt(1)}/`)
          .then(res => res.json())
          .then(result => {
            this.renderEvolutions(idPoke, result, 3);

          })
        break;

      default:
        break;
    }
  },
  fetchGender1(namePoke) {

    fetch(`https://pokeapi.co/api/v2/gender/1/`)
      .then(res => res.json())
      .then(result => {
        // createGender(result.name , result.pokemon_species_details , namePoke);
        let pokeSpecies = result.pokemon_species_details;
        for (let x in pokeSpecies) {
          let name = pokeSpecies[x].pokemon_species.name;
          if (name === namePoke) {
            this.createGender(1);
          }
        }
      })

    fetch(`https://pokeapi.co/api/v2/gender/2/`)
      .then(res => res.json())
      .then(result => {
        // createGender(result.name , result.pokemon_species_details , namePoke);
        let pokeSpecies = result.pokemon_species_details;
        for (let x in pokeSpecies) {
          let name = pokeSpecies[x].pokemon_species.name;
          if (name === namePoke) {
            this.createGender(2);
          }
        }
      })

    fetch(`https://pokeapi.co/api/v2/gender/3/`)
      .then(res => res.json())
      .then(result => {
        let pokeSpecies = result.pokemon_species_details;
        for (let x in pokeSpecies) {
          let name = pokeSpecies[x].pokemon_species.name;
          if (name === namePoke) {
            this.createGender(3);
          }
        }
      })
  },
  renderEvolutions(id, pokemon, lv) {
    let tagImg = document.createElement('a');
    let imgPoke = document.createElement('img');
    imgPoke.setAttribute('src', `https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`);

    tagImg.append(imgPoke);
    tagImg.setAttribute('href', '#aloha');
    let namePoke = document.createElement('p');
    namePoke.classList.add('evolution__name');
    namePoke.append(pokemon.name);

    let ulEvo = document.createElement('ul');
    (0,_modules_global_js__WEBPACK_IMPORTED_MODULE_0__.createTypes)(pokemon.types, ulEvo);
    switch (lv) {
      case 1:
        parrentImgLv1.append(tagImg);
        lv1.append(parrentImgLv1, namePoke, ulEvo);
        break;
      case 2:
        parrentImgLv2.append(tagImg);
        lv2.append(parrentImgLv2, namePoke, ulEvo);
        break;
      case 3:
        parrentImgLv3.append(tagImg);
        lv3.append(parrentImgLv3, namePoke, ulEvo);
        break;
      default:
        break;
    }
    imgPoke.addEventListener('click', (e) => {
      let target = e.target;
      this.rerender(pokemon.id, pokemon);
    })
  },
  rerender(id, pokemon) {
    gender.innerHTML = "";
    ulAbi.innerHTML = "";
    ulType.innerHTML = "";
    ulStat.innerHTML = "";
    detailName.innerHTML = "";
    detailHeight.innerHTML = "";
    detailWeight.innerHTML = "";
    detailInfo.innerHTML = "";
    detailCloseInfo.innerHTML = "";
    // detailStatsLeft.innerHTML = "";
    this.render(pokemon);
    this.fetchGender1(pokemon.name);
    // if(window.scrollY!=0) {
    //   setTimeout(function() {
    //     window.scrollTo(0,window.scrollY == 0);
    //   }, 5);
    // }
  },
  createGender(id) {
    let male = '<svg class="icon"><use xlink:href="#male" /></svg>'
    let female = '<svg class="icon"><use xlink:href="#female" /></svg>'
    let genderless = '<p>Unknown</p>';
    switch (id) {
      case 1:
        gender.innerHTML += male;
        break;
      case 2:
        gender.innerHTML += female;
        break;
      case 3:
        gender.innerHTML += genderless;
        break;
      default:
        break;
    }
  },
  createAbilities(ability, ul) {
    ability.forEach(element => {
      let abilityLi = document.createElement('li');
      abilityLi.innerText = element['ability']['name'];
      ul.append(abilityLi);
    });
    this.fetchAbilityEffect(ability[0].ability.url);
  },
  fetchAbilityEffect(url) {
    fetch(url)
      .then(res => res.json())
      .then(result => {
        let effect = result.effect_entries[1]?.short_effect;
        this.createAbilityEffect(effect);
      })
  },
  createAbilityEffect(effect) {
    let pEffect = document.createElement('p');
    pEffect.innerHTML = effect;
    effectAbility.append(pEffect);
  },
  createStats(stat, ul) {
    let value = 15;
    stat.forEach(element => {
      let attribute = document.createElement('li');
      let ulBox = document.createElement('ul')
      let liBox = document.createElement('li');
      attribute.innerHTML = element['stat']['name'];
      // + " : " + element['base_stat']
      attribute.classList.add('stats__name');
      liBox.append(ulBox);
      for (let i = 1; i < value; i++) {
        let liNormal = document.createElement('li');

        ulBox.append(liNormal);
      }
      let liFirst = ulBox.firstChild;
      liFirst.setAttribute('data-value', Math.ceil(element['base_stat'] / 15));
      let dataValue = liFirst.getAttribute('data-value');
      ulBox.setAttribute('title', element['base_stat']);

      let valueTop = (100 / 15) * (15 - dataValue) + '%';
      liFirst.style.top = valueTop;
      // liFirst.setAttribute('style' , 'top' );
      liFirst.classList.add('first');

      liBox.append(attribute);

      ul.append(liBox);
      ul.classList.add('stats__parrent');
    })
  },
  render(pokemon) {

    let img = document.getElementsByClassName('detail-img__poke')[0];

    detailCloseInfo.addEventListener('click', function (e) {
      effectAbility.style.visibility = 'hidden';
    })
    detailInfo.addEventListener('click', function (e) {
      effectAbility.style.visibility = 'visible';
    })
    img.setAttribute('src', `https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`);

    (0,_modules_global_js__WEBPACK_IMPORTED_MODULE_0__.createTypes)(pokemon.types, ulType);
    this.createAbilities(pokemon.abilities, ulAbi);
    this.createStats(pokemon.stats, ulStat);

    detailName.append(pokemon.name);
    detailAbility.append(ulAbi);
    detailType.append(ulType);
    detailHeight.append(pokemon.height);
    detailWeight.append(pokemon.weight);
    detailStatsLeft.append(ulStat);
  }
};


const poke = new Detail();
poke.load();















})();

/******/ })()
;
//# sourceMappingURL=detail.js.map