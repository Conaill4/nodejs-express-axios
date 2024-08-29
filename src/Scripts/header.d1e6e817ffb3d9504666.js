(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["header"],{

/***/ "./src/scripts/partials/header/country-banner.js":
/*!*******************************************************!*\
  !*** ./src/scripts/partials/header/country-banner.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CountryBanner; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/shared/api */ "./src/scripts/shared/api.js");
/* harmony import */ var _shared_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/shared/i18n */ "./src/scripts/shared/i18n.js");




/*
global window, document
*/

var CountryBanner = /*#__PURE__*/function () {
  function CountryBanner() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, CountryBanner);

    this.countryBannerSelector = '.country-banner';
    this.countryUserSelector = '.country-banner__user-country';
    this.countryBtnSelector = '.country-banner__dropdown-btn';
    this.countryDropdownSelector = '.country-banner__dropdown';
    this.countryTitleSelector = '.country-banner__dropdown-title';
    this.countryFlagSelector = '.country-banner__dropdown-btn > picture';
    this.countryOptionsSelector = '.country-banner__dropdown-option';
    this.countryArrowSelector = '.country-banner__dropdown-arrow';
    this.countryAcceptSelector = '.country-banner__accept';
    this.countryDeclineSelector = '.country-banner__decline > .link';
    this.countryCrossSelector = '.country-banner__cross';
    this.isOpen = false;
    this.initElements();

    if (this.countryBanner) {
      this.attachEventListeners();
      this.showBanner();
    }
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(CountryBanner, [{
    key: "initElements",
    value: function initElements() {
      this.countryBanner = document.querySelector(this.countryBannerSelector);
      this.countryUser = document.querySelector(this.countryUserSelector);
      this.countryBtn = document.querySelector(this.countryBtnSelector);
      this.countryDropdown = document.querySelector(this.countryDropdownSelector);
      this.countryOptions = document.querySelectorAll(this.countryOptionsSelector);
      this.btnTitle = document.querySelector(this.countryTitleSelector);
      this.btnFlag = document.querySelector(this.countryFlagSelector);
      this.btnArrow = document.querySelector(this.countryArrowSelector);
      this.countryAccept = document.querySelector(this.countryAcceptSelector);
      this.countryDecline = document.querySelector(this.countryDeclineSelector);
      this.countryCross = document.querySelector(this.countryCrossSelector);
    }
  }, {
    key: "toggleBanner",
    value: function toggleBanner() {
      if (this.isOpen) {
        this.countryBanner.classList.add('country-banner--hidden');
      } else {
        this.countryBanner.classList.remove('country-banner--hidden');
      }

      this.isOpen = !this.isOpen;
    }
  }, {
    key: "toggleDropdown",
    value: function toggleDropdown() {
      this.btnArrow.classList.toggle('icon-arrow--up');
      this.countryDropdown.classList.toggle('country-banner__dropdown--open');
    }
  }, {
    key: "changeCountry",
    value: function changeCountry(countryItem) {
      /* eslint-disable */
      var url = countryItem.dataset.url;
      var countryId = countryItem.dataset.countryId;
      var contentLink = countryItem.dataset.contentLink;
      /* eslint-enable */

      Object(_shared_api__WEBPACK_IMPORTED_MODULE_2__["request"])('post', url.substr(1), {
        countryId: countryId,
        contentLink: contentLink
      }).then(function (response) {
        window.location = response.data.returnUrl;
      });
    }
  }, {
    key: "showBanner",
    value: function showBanner() {
      var _this = this;

      if (this.countryBanner) {
        // eslint-disable-next-line prefer-destructuring
        var url = this.countryBanner.dataset.url;
        Object(_shared_api__WEBPACK_IMPORTED_MODULE_2__["request"])('get', url.substr(1)).then(function (response) {
          if (response.data.showBanner) {
            var countryId = response.data.userCountryIso.toLowerCase();

            _this.setBtnParams(document.querySelector("li[data-country-id='".concat(countryId, "']")));

            _this.countryUser.textContent = "".concat(Object(_shared_i18n__WEBPACK_IMPORTED_MODULE_3__["t"])('Header.Banner.QuestionPart1'), " ").concat(_this.btnTitle.textContent, " ").concat(Object(_shared_i18n__WEBPACK_IMPORTED_MODULE_3__["t"])('Header.Banner.QuestionPart2'));

            _this.toggleBanner();
          }
        });
      }
    }
  }, {
    key: "stayOnWebsite",
    value: function stayOnWebsite() {
      var _this2 = this;

      // eslint-disable-next-line prefer-destructuring
      var urlStay = this.countryBanner.dataset.urlStay;
      Object(_shared_api__WEBPACK_IMPORTED_MODULE_2__["request"])('post', urlStay.substr(1)).then(function () {
        _this2.toggleBanner();
      });
    }
  }, {
    key: "setBtnParams",
    value: function setBtnParams(option) {
      this.countryBtn.dataset.countryId = option.dataset.countryId;
      this.btnTitle.textContent = option.querySelector(this.countryTitleSelector).textContent;
      var icon = option.querySelector('picture');
      this.btnFlag.innerHTML = icon ? icon.innerHTML : '';
    }
  }, {
    key: "attachEventListeners",
    value: function attachEventListeners() {
      var _this3 = this;

      if (this.countryBtn) {
        this.countryBtn.addEventListener('click', function () {
          _this3.toggleDropdown();
        }, false);
      }

      if (this.countryOptions) {
        this.countryOptions.forEach(function (option) {
          option.addEventListener('click', function () {
            _this3.setBtnParams(option);

            _this3.toggleDropdown();
          }, false);
        });
      }

      if (this.countryAccept) {
        this.countryAccept.addEventListener('click', this.changeCountry.bind(this, this.countryBtn), false);
      }

      if (this.countryDecline) {
        this.countryDecline.addEventListener('click', function (e) {
          e.preventDefault();

          _this3.stayOnWebsite();
        }, false);
      }

      if (this.countryCross) {
        this.countryCross.addEventListener('click', function () {
          _this3.stayOnWebsite();
        }, false);
      }
    }
  }]);

  return CountryBanner;
}();



/***/ }),

/***/ "./src/scripts/partials/header/country-selector.js":
/*!*********************************************************!*\
  !*** ./src/scripts/partials/header/country-selector.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CountrySelector; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_responsive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/shared/responsive */ "./src/scripts/shared/responsive.js");
/* harmony import */ var _shared_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/shared/api */ "./src/scripts/shared/api.js");




/*
global window, document
*/

var CountrySelector = /*#__PURE__*/function () {
  function CountrySelector() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, CountrySelector);

    this.menuBtnSelector = '.js-mega-menu-btn';
    this.menuSelector = '.js-mega-menu';
    this.countryBtnSelector = '.js-country-selector';
    this.countryHolderSelector = '.country-selector';
    this.countrySelector = '.country-selector__inner';
    this.menuBackSelector = '.js-menu-back';
    this.menuItemsSelector = '.js-menu-items';
    this.modalSelector = '.country-selector__modal';
    this.modalDialogSelector = '.country-selector__modal-dialog';
    this.modalCloseSelector = '.country-selector__close';
    this.countriesSelector = '.country-selector__country';
    this.currentCountry = '.country-selector__country--selected';
    this.confirmBtnSelector = '.country-selector__confirm';
    this.initElements();
    this.attachEventListeners();
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(CountrySelector, [{
    key: "initElements",
    value: function initElements() {
      this.menuBtn = document.querySelector(this.menuBtnSelector);
      this.menu = document.querySelector(this.menuSelector);
      this.countryBtn = document.querySelector(this.countryBtnSelector);
      this.countryHolder = document.querySelector(this.countryHolderSelector);
      this.country = document.querySelector(this.countrySelector);
      this.menuBack = document.querySelector(this.menuBackSelector);
      this.modal = document.querySelector(this.modalSelector);
      this.modalDialog = document.querySelector(this.modalDialogSelector);
      this.modalClose = document.querySelector(this.modalCloseSelector);
      this.countries = document.querySelectorAll(this.countriesSelector);
      this.confirmBtn = document.querySelector(this.confirmBtnSelector);
    }
  }, {
    key: "changeCountry",
    value: function changeCountry(countryItem) {
      /* eslint-disable */
      var url = countryItem.dataset.url;
      var countryId = countryItem.dataset.countryId;
      var contentLink = countryItem.dataset.contentLink;
      /* eslint-enable */

      Object(_shared_api__WEBPACK_IMPORTED_MODULE_3__["request"])('post', url.substr(1), {
        countryId: countryId,
        contentLink: contentLink
      }).then(function (response) {
        window.location = response.data.returnUrl;
      });
    }
  }, {
    key: "attachEventListeners",
    value: function attachEventListeners() {
      var _this = this;

      if (this.countries) {
        this.countries.forEach(function (item) {
          item.addEventListener('click', function () {
            document.querySelector(_this.currentCountry).classList.remove(_this.currentCountry.substr(1));
            item.classList.add(_this.currentCountry.substr(1));

            if (Object(_shared_responsive__WEBPACK_IMPORTED_MODULE_2__["isMobile"])()) {
              _this.changeCountry(document.querySelector(_this.currentCountry));
            }
          }, false);
        });
      }

      if (this.confirmBtn) {
        this.confirmBtn.addEventListener('click', function (e) {
          e.preventDefault();

          _this.changeCountry(document.querySelector(_this.currentCountry));
        }, false);
      }

      if (this.menuBack) {
        this.menuBack.addEventListener('click', function () {
          _this.menu.classList.remove('mega-menu--country-selector-open');
        }, false);
      }

      if (this.menuBtn) {
        this.menuBtn.addEventListener('click', function () {
          _this.menu.classList.remove('mega-menu--country-selector-open');
        }, false);
      }

      if (this.countryBtn) {
        this.countryBtn.addEventListener('click', function (e) {
          e.preventDefault();

          if (Object(_shared_responsive__WEBPACK_IMPORTED_MODULE_2__["isMobile"])()) {
            _this.menu.classList.add('mega-menu--country-selector-open');
          } else {
            _this.modal.classList.add('country-selector__modal--open');
          }
        }, false);
      }

      if (this.modalClose) {
        this.modalClose.addEventListener('click', function (e) {
          e.preventDefault();
          e.stopImmediatePropagation();

          _this.modal.classList.remove('country-selector__modal--open');
        }, false);
      }

      Object(_shared_responsive__WEBPACK_IMPORTED_MODULE_2__["whenDesktop"])(function () {
        if (_this.country) _this.modalDialog.append(_this.country);
        if (_this.menu) _this.menu.classList.remove('mega-menu--open-sub-menu');
        if (_this.countryHolder) _this.countryHolder.classList.remove('country-selector--open');
      });
      Object(_shared_responsive__WEBPACK_IMPORTED_MODULE_2__["whenMobile"])(function () {
        if (_this.country) _this.countryHolder.append(_this.country);
        if (_this.modal) _this.modal.classList.remove('country-selector__modal--open');
      });
    }
  }]);

  return CountrySelector;
}();



/***/ }),

/***/ "./src/scripts/partials/header/index.js":
/*!**********************************************!*\
  !*** ./src/scripts/partials/header/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _partials_header_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/partials/header/menu */ "./src/scripts/partials/header/menu.js");
/* harmony import */ var _partials_header_country_selector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/partials/header/country-selector */ "./src/scripts/partials/header/country-selector.js");
/* harmony import */ var _partials_header_country_banner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/partials/header/country-banner */ "./src/scripts/partials/header/country-banner.js");
/* harmony import */ var _partials_header_search_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/partials/header/search-bar */ "./src/scripts/partials/header/search-bar.js");








var Header = /*#__PURE__*/function () {
  function Header() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Header);

    this.Menu = new _partials_header_menu__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this.CountrySelector = new _partials_header_country_selector__WEBPACK_IMPORTED_MODULE_4__["default"]();
    this.CountryBanner = new _partials_header_country_banner__WEBPACK_IMPORTED_MODULE_5__["default"]();
    this.SearchBar = new _partials_header_search_bar__WEBPACK_IMPORTED_MODULE_6__["default"]();
    this.attachEvenListeners();
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Header, [{
    key: "attachEvenListeners",
    value: function attachEvenListeners() {}
  }]);

  return Header;
}();


new vue__WEBPACK_IMPORTED_MODULE_2__["default"]({
  el: 'header',
  components: {
    'modal-social-share': function modalSocialShare() {
      return Promise.all(/*! import() | modal-social-share */[__webpack_require__.e("vendors"), __webpack_require__.e("modal-social-share")]).then(__webpack_require__.bind(null, /*! @/components/header/modal-social-share.vue */ "./src/scripts/components/header/modal-social-share.vue"));
    }
  },
  methods: {}
});
new Header();

/***/ }),

/***/ "./src/scripts/partials/header/menu.js":
/*!*********************************************!*\
  !*** ./src/scripts/partials/header/menu.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Menu; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_responsive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/shared/responsive */ "./src/scripts/shared/responsive.js");



/*
global document
*/

var Menu = /*#__PURE__*/function () {
  function Menu() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Menu);

    this.menuBtnSelector = '.js-mega-menu-btn';
    this.menuSelector = '.js-mega-menu';
    this.menuHolderSelector = '.js-mega-menu-holder';
    this.primaryMenuItemSelector = '.js-primary-menu-item';
    this.menuBackSelector = '.js-menu-back';
    this.menuBackHolderSelector = '.js-menu-back-holder';
    this.menuButtonsSelector = '.js-mega-menu-buttons';
    this.getInTouchContSelector = '.js-get-in-touch-container';
    this.getInTouchSelector = '.js-get-in-touch';
    this.countrySelector = '.js-country-selector';
    this.headerRightPanelSelector = '.js-header-right-panel';
    this.sectionalLinkSelector = '.js-sectional-link a';
    this.columnLinkSelector = '.js-secondary-column a';
    this.bodySelector = 'body';
    this.menuBtn = null;
    this.menu = null;
    this.isOpen = false;
    this.initElements();
    this.attachEvenListeners();
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Menu, [{
    key: "initElements",
    value: function initElements() {
      this.menuBtn = document.querySelector(this.menuBtnSelector);
      this.menu = document.querySelector(this.menuSelector);
      this.menuHolder = document.querySelector(this.menuHolderSelector);
      this.menuButtons = document.querySelector(this.menuButtonsSelector);
      this.menuBack = document.querySelector(this.menuBackSelector);
      this.getInTouchCont = document.querySelector(this.getInTouchContSelector);
      this.getInTouch = document.querySelector(this.getInTouchSelector);
      this.country = document.querySelector(this.countrySelector);
      this.headerRightPanel = document.querySelector(this.headerRightPanelSelector);
      this.body = document.querySelector(this.bodySelector);
      this.primaryMenuItems = document.querySelectorAll(this.primaryMenuItemSelector);
      this.sectionalLinks = document.querySelectorAll(this.sectionalLinkSelector);
      this.columnLinks = document.querySelectorAll(this.columnLinkSelector);
    }
  }, {
    key: "toggle",
    value: function toggle(e) {
      e.preventDefault();

      if (Object(_shared_responsive__WEBPACK_IMPORTED_MODULE_2__["isMobile"])()) {
        if (this.isOpen) {
          this.menuHolder.classList.remove('mega-menu__holder--open');
          this.menu.classList.remove('mega-menu--open');
          this.menuBtn.classList.add('icon-menu');
          this.menuBtn.classList.remove('icon-close');
          this.hideSecondary();
          this.body.classList.remove('lock-scroll');
        } else {
          this.menuHolder.classList.add('mega-menu__holder--open');
          this.menu.classList.add('mega-menu--open');
          this.menuBtn.classList.remove('icon-menu');
          this.menuBtn.classList.add('icon-close');
          this.body.classList.add('lock-scroll');
        }

        this.isOpen = !this.isOpen;
      }
    }
  }, {
    key: "toggleSecondary",
    value: function toggleSecondary(e) {
      if (this.menu.classList.contains('mega-menu--open-sub-menu')) this.hideSecondary(e);else this.showSecondary(e);
    }
  }, {
    key: "showSecondary",
    value: function showSecondary(e) {
      if (Object(_shared_responsive__WEBPACK_IMPORTED_MODULE_2__["isMobile"])()) {
        e.preventDefault();
      }

      var parentItem = e.target.classList.contains(this.primaryMenuItemSelector) ? e.target : e.target.closest(this.primaryMenuItemSelector);
      if (this.menu) this.menu.classList.add('mega-menu--open-sub-menu');
      parentItem.classList.add('mega-menu__primary-item--active');
      parentItem.querySelector(this.menuBackHolderSelector).append(this.menuBack);
    }
  }, {
    key: "hideSecondary",
    value: function hideSecondary(e) {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }

      if (this.menu) {
        this.menu.classList.remove('mega-menu--open-sub-menu');
        var activeItem = this.menu.querySelector('.mega-menu__primary-item--active');
        if (activeItem) activeItem.classList.remove('mega-menu__primary-item--active');
      }
    }
  }, {
    key: "attachEvenListeners",
    value: function attachEvenListeners() {
      var _this = this;

      if (this.menuBtn) {
        this.menuBtn.addEventListener('click', this.toggle.bind(this), false);
      }

      if (this.primaryMenuItems) {
        this.primaryMenuItems.forEach(function (item) {
          item.addEventListener('click', _this.toggleSecondary.bind(_this), false);
        });
      }

      if (this.menuBack) {
        this.menuBack.addEventListener('click', this.hideSecondary.bind(this), false);
      }

      if (this.sectionalLinks) {
        this.sectionalLinks.forEach(function (item) {
          item.addEventListener('click', function (e) {
            e.stopImmediatePropagation();
          }, false);
        });
      }

      if (this.columnLinks) {
        this.columnLinks.forEach(function (item) {
          item.addEventListener('click', function (e) {
            e.stopImmediatePropagation();
          }, false);
        });
      }

      if (this.country && this.menu) {
        this.country.addEventListener('click', function () {
          _this.menu.querySelector(_this.menuBackHolderSelector).append(_this.menuBack);
        });
      }

      Object(_shared_responsive__WEBPACK_IMPORTED_MODULE_2__["whenDesktop"])(function () {
        _this.hideSecondary();

        _this.body.classList.remove('lock-scroll'); // move mobile menu buttons to header


        if (_this.getInTouch) _this.getInTouchCont.append(_this.getInTouch);
        if (_this.country) _this.headerRightPanel.append(_this.country);
      });
      Object(_shared_responsive__WEBPACK_IMPORTED_MODULE_2__["whenMobile"])(function () {
        if (_this.isOpen) {
          _this.body.classList.add('lock-scroll');
        } // move header buttons to mobile menu


        if (_this.menuButtons) {
          if (_this.getInTouch) _this.menuButtons.append(_this.getInTouch);
          if (_this.country) _this.menuButtons.append(_this.country);
        }
      });
    }
  }]);

  return Menu;
}();



/***/ }),

/***/ "./src/scripts/partials/header/search-bar.js":
/*!***************************************************!*\
  !*** ./src/scripts/partials/header/search-bar.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SearchBar; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);



/*
global document
*/
var SearchBar = /*#__PURE__*/function () {
  function SearchBar() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, SearchBar);

    this.searchBarSelector = '.js-search__bar';
    this.searchBtnSelector = '.js-header__search';
    this.closeBtnSelector = '.js-search__btn-close';
    this.initElements();
    this.attachEventListeners();
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(SearchBar, [{
    key: "initElements",
    value: function initElements() {
      this.searchBar = document.querySelector(this.searchBarSelector);
      this.searchBtn = document.querySelector(this.searchBtnSelector);
      this.closeBtn = document.querySelector(this.closeBtnSelector);
    }
  }, {
    key: "toggleBar",
    value: function toggleBar() {
      if (this.searchBar) {
        this.searchBar.classList.toggle('search__bar--hidden');
      }
    }
  }, {
    key: "attachEventListeners",
    value: function attachEventListeners() {
      var _this = this;

      if (this.searchBtn) {
        this.searchBtn.addEventListener('click', function (e) {
          e.preventDefault();

          _this.toggleBar();
        });
      }

      if (this.closeBtn) {
        this.closeBtn.addEventListener('click', function (e) {
          e.preventDefault();

          _this.toggleBar();
        });
      }
    }
  }]);

  return SearchBar;
}();



/***/ }),

/***/ "./src/scripts/shared/responsive.js":
/*!******************************************!*\
  !*** ./src/scripts/shared/responsive.js ***!
  \******************************************/
/*! exports provided: whenDesktop, whenMobile, isDesktop, isMobile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenDesktop", function() { return whenDesktop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMobile", function() { return whenMobile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDesktop", function() { return isDesktop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMobile", function() { return isMobile; });
/* harmony import */ var enquire_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! enquire.js */ "./node_modules/enquire.js/src/index.js");
/* harmony import */ var enquire_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(enquire_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/config */ "./src/scripts/config.js");


/*
 global window
 */

var whenDesktop = function whenDesktop(matchFunction, unmatchFunction) {
  enquire_js__WEBPACK_IMPORTED_MODULE_0___default.a.register("screen and (min-width: ".concat(_config__WEBPACK_IMPORTED_MODULE_1__["default"].BREAKPOINT_MOBILE, "px)"), {
    match: function match() {
      matchFunction();
    },
    unmatch: function unmatch() {
      if (unmatchFunction) unmatchFunction();
    }
  });
};

var whenMobile = function whenMobile(matchFunction, unmatchFunction) {
  enquire_js__WEBPACK_IMPORTED_MODULE_0___default.a.register("screen and (max-width: ".concat(_config__WEBPACK_IMPORTED_MODULE_1__["default"].BREAKPOINT_MOBILE - 1, "px)"), {
    match: function match() {
      matchFunction();
    },
    unmatch: function unmatch() {
      if (unmatchFunction) unmatchFunction();
    }
  });
};

var isMobile = function isMobile() {
  return window.matchMedia("screen and (max-width: ".concat(_config__WEBPACK_IMPORTED_MODULE_1__["default"].BREAKPOINT_MOBILE - 1, "px)")).matches;
};

var isDesktop = function isDesktop() {
  return window.matchMedia("screen and (min-width: ".concat(_config__WEBPACK_IMPORTED_MODULE_1__["default"].BREAKPOINT_MOBILE, "px)")).matches;
};



/***/ })

}]);
//# sourceMappingURL=header.d1e6e817ffb3d9504666.js.map