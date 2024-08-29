(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modal-social-share"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/scripts/components/header/modal-social-share.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/scripts/components/header/modal-social-share.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "modal-social-share",
  data: function data() {
    return {
      isOpened: false
    };
  },
  props: ['buttons', 'title'],
  components: {
    'social-share': function socialShare() {
      return Promise.all(/*! import() | social-share */[__webpack_require__.e("vendors"), __webpack_require__.e("social-share")]).then(__webpack_require__.bind(null, /*! @/components/shared/social-share.vue */ "./src/scripts/components/shared/social-share.vue"));
    }
  },
  methods: {
    toggleIcons: function toggleIcons(e) {
      e.preventDefault();
      e.stopImmediatePropagation();
      this.isOpened = !this.isOpened;
    }
  },
  mounted: function mounted() {
    var _this = this;

    document.querySelector('body').addEventListener('click', function (e) {
      //close modal by outside click
      if (!e.target.closest('.modal-social-share__modal') && _this.isOpened) {
        _this.isOpened = false;
      }
    }, false);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/scripts/components/header/modal-social-share.vue?vue&type=template&id=646b91b0&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/scripts/components/header/modal-social-share.vue?vue&type=template&id=646b91b0& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "modal-social-share" }, [
    _c("div", { staticClass: "header__share" }, [
      _c(
        "button",
        { attrs: { title: _vm.title }, on: { click: _vm.toggleIcons } },
        [
          _c("i", { staticClass: "icon-share icon-round" }),
          _c("span", { staticClass: "sr-only" }, [
            _vm._v(_vm._s(_vm.t("Header.OpenShare")))
          ])
        ]
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal-social-share__modal",
        class: { "modal-social-share__modal--open": _vm.isOpened }
      },
      [_c("social-share", { attrs: { buttons: _vm.buttons } })],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/scripts/components/header/modal-social-share.vue":
/*!**************************************************************!*\
  !*** ./src/scripts/components/header/modal-social-share.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal_social_share_vue_vue_type_template_id_646b91b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-social-share.vue?vue&type=template&id=646b91b0& */ "./src/scripts/components/header/modal-social-share.vue?vue&type=template&id=646b91b0&");
/* harmony import */ var _modal_social_share_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-social-share.vue?vue&type=script&lang=js& */ "./src/scripts/components/header/modal-social-share.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _modal_social_share_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _modal_social_share_vue_vue_type_template_id_646b91b0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _modal_social_share_vue_vue_type_template_id_646b91b0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/scripts/components/header/modal-social-share.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/scripts/components/header/modal-social-share.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./src/scripts/components/header/modal-social-share.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_modal_social_share_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./modal-social-share.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/scripts/components/header/modal-social-share.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_modal_social_share_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/scripts/components/header/modal-social-share.vue?vue&type=template&id=646b91b0&":
/*!*********************************************************************************************!*\
  !*** ./src/scripts/components/header/modal-social-share.vue?vue&type=template&id=646b91b0& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modal_social_share_vue_vue_type_template_id_646b91b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./modal-social-share.vue?vue&type=template&id=646b91b0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/scripts/components/header/modal-social-share.vue?vue&type=template&id=646b91b0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modal_social_share_vue_vue_type_template_id_646b91b0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modal_social_share_vue_vue_type_template_id_646b91b0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=modal-social-share.5fadd66eb478f80dccb2.js.map