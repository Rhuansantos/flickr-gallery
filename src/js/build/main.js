(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _gallery_template = require('./gallery_template');

var _gallery_template2 = _interopRequireDefault(_gallery_template);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Gallery = function () {
  _createClass(Gallery, null, [{
    key: 'getInstance',

    /**
     * @static
     * @param {String} _apiKey 
     * @returns the instance
     * Singleton design pattern
     * @memberof Gallery
     * if the gallery has already insert content clean it and make the new request
     */
    value: function getInstance(_apiKey, _search) {
      if (!Gallery._instance) {
        Gallery._instance = new Gallery(_apiKey, _search);
        return Gallery._instance;
      } else {
        _gallery_template2.default.cleanContent();
        Gallery._instance = new Gallery(_apiKey, _search);
        return Gallery._instance;
      }
    }
    /**
     * Creates an instance of Gallery.
     * @param {String} _apiKey 
     * @memberof Gallery
    */

  }]);

  function Gallery(_apiKey, _search) {
    _classCallCheck(this, Gallery);

    // Global configuration
    this.apiKey = '&api_key=' + _apiKey;
    this.searchInput = _search;
    this.format = '&format=json&nojsoncallback=1'; // default format JSON
    this.search(); // Default function
  }
  /**
   * @param {API Methods} _method 
   * @param {any parameters from the API} _params 
   * @return data from the call
   */


  _createClass(Gallery, [{
    key: 'apiRequest',
    value: async function apiRequest(_method) {
      var params = [];

      for (var _len = arguments.length, _params = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        _params[_key - 1] = arguments[_key];
      }

      params.push.apply(params, _params);
      var apiParams = params.join('');
      try {
        var flickrApi = await fetch('\n      https://api.flickr.com/services/rest/?method=' + _method + this.apiKey + apiParams + this.format);
        var data = await flickrApi.json();
        return data;
      } catch (e) {
        return e;
      }
    }
  }, {
    key: 'search',
    value: function search() {
      var _this = this;

      // Method, ...params
      // params reference https://www.flickr.com/services/api/flickr.photos.search.html
      var gallery = [];
      this.apiRequest('flickr.photos.search', '&text=' + this.searchInput, '&per_page=25', '&safe_search=3').then(function (res) {
        var photos = res.photos.photo;
        photos.map(function (p) {
          var photoRequest = _this.apiRequest('flickr.photos.getSizes', '&photo_id=' + p.id).then(function (_pictures) {
            return _gallery_template2.default.home(_pictures.sizes.size[5].source);
          });
        });
      });
    }
  }]);

  return Gallery;
}();

exports.default = Gallery;

},{"./gallery_template":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TemplateGallery = function () {
  function TemplateGallery() {
    _classCallCheck(this, TemplateGallery);
  }

  _createClass(TemplateGallery, null, [{
    key: 'home',
    value: function home(_data) {
      var printContainer = document.querySelector('.gallery ul');
      var template = '<img src="' + _data + '"/>';
      printContainer.insertAdjacentHTML('beforeend', template);
    }
  }, {
    key: 'cleanContent',
    value: function cleanContent() {
      var printContainer = document.querySelector('.gallery ul');
      printContainer.innerHTML = null;
    }
  }]);

  return TemplateGallery;
}();

exports.default = TemplateGallery;

},{}],3:[function(require,module,exports){
'use strict';

var _gallery = require('./gallery');

var _gallery2 = _interopRequireDefault(_gallery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// waiting for the page loading
window.addEventListener('load', function () {
    // API KEY
    var apiKey = "a31291fbb92c2078dc081e40fa6ab76c";

    // const searchInput = document.querySelector('.search').submit();

    // console.log(searchInput);
    var searchForm = document.querySelector('.searchForm');
    searchForm.addEventListener('submit', function (e) {
        var searchInput = document.querySelector('.searchInput').value;
        e.preventDefault();
        console.log(searchInput);
        // alert('ok');

        var galleryApp = _gallery2.default.getInstance(apiKey, searchInput);
    });
});

},{"./gallery":1}]},{},[3]);
