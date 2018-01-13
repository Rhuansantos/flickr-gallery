(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _gallery_template = require('./gallery_template');

var _gallery_template2 = _interopRequireDefault(_gallery_template);

var _util = require('./util');

var _util2 = _interopRequireDefault(_util);

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
        if (data.stat === 'fail') {
          _gallery_template2.default.error('Ops, something went wrong :(');
        }
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
      this.apiRequest('flickr.photos.search', '&text=' + this.searchInput, '&per_page=25', '&safe_search=3', '&content_type=1'
      // '&page=10'
      ).then(function (res) {
        var photos = res.photos.photo;
        if (photos.length === 0) {
          _gallery_template2.default.error('Sorry, no results found, try another keyword!');
        }
        photos.map(function (p) {
          var photoRequest = _this.apiRequest('flickr.photos.getSizes', '&photo_id=' + p.id).then(function (_pictures) {
            var quality = _pictures.sizes.size.length - 1; // grab original size
            _gallery_template2.default.home(_pictures.sizes.size[quality].source);
          });
        });
      }).then(function (x) {
        return _util2.default.loaded();
      });
    }
  }]);

  return Gallery;
}();

exports.default = Gallery;

},{"./gallery_template":2,"./util":4}],2:[function(require,module,exports){
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
      var template = '\n    <li>\n      <div class="bg-photos" style="background-image: url(' + _data + ')"></div>\n    </li>';
      printContainer.insertAdjacentHTML('beforeend', template);
    }
  }, {
    key: 'cleanContent',
    value: function cleanContent() {
      var printContainer = document.querySelector('.gallery ul');
      printContainer.innerHTML = null;
    }
  }, {
    key: 'error',
    value: function error(_message) {
      var printContainer = document.querySelector('.gallery ul');
      var template = '<h1 class="alert-no-results">' + _message + '</h1>';
      printContainer.insertAdjacentHTML('beforeend', template);
    }
  }]);

  return TemplateGallery;
}();

exports.default = TemplateGallery;

},{}],3:[function(require,module,exports){
'use strict';

var _gallery = require('./gallery');

var _gallery2 = _interopRequireDefault(_gallery);

var _util = require('./util');

var _util2 = _interopRequireDefault(_util);

var _gallery_template = require('./gallery_template');

var _gallery_template2 = _interopRequireDefault(_gallery_template);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// waiting for the page loading
window.addEventListener('load', function () {

    _util2.default.startTime();

    // API KEY
    var apiKey = "a31291fbb92c2078dc081e40fa6ab76c";
    var searchForm = document.querySelector('.searchForm').addEventListener('submit', function (e) {
        e.preventDefault();
        var searchInput = document.querySelector('.searchInput').value;
        if (searchInput !== '') {
            _gallery_template2.default.cleanContent();
            var galleryApp = _gallery2.default.getInstance(apiKey, searchInput);
        } else {
            _gallery_template2.default.cleanContent();
            var emoji = String.fromCodePoint(0x1F605);
            _gallery_template2.default.error('Don\'t be shy! just type on the search ' + emoji);
        }
    });
});

},{"./gallery":1,"./gallery_template":2,"./util":4}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Util = function () {
    function Util() {
        _classCallCheck(this, Util);
    }

    _createClass(Util, null, [{
        key: 'loading',
        value: function loading() {
            console.log('loading');
        }
    }, {
        key: 'loaded',
        value: function loaded() {
            console.log('loaded');
        }
    }, {
        key: 'startTime',
        value: function startTime() {

            var checkTime = function checkTime(i) {
                if (i < 10) {
                    i = "0" + i;
                }; // add zero in front of numbers < 10
                return i;
            };

            var today = new Date();
            var h = today.getHours();
            var m = today.getMinutes();
            var ampm = h >= 12 ? 'pm' : 'am';
            // let s = today.getSeconds();
            m = checkTime(m);
            // s = checkTime(s);
            document.querySelector('.time').innerHTML = h + ":" + m + " " + ampm;
            var t = setTimeout(Util.startTime, 1000);
        }
    }]);

    return Util;
}();

exports.default = Util;

},{}]},{},[3]);
