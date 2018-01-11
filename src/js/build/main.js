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
     * @param {any} params 
     * @returns 
     * @memberof Gallery
     */
    value: function getInstance(_apiKey) {
      if (!Gallery._instance) {
        Gallery._instance = new Gallery(_apiKey);
        return Gallery._instance;
      } else {
        throw 'the class Gallery was already created';
      }
    }

    /**
     * Creates an instance of Gallery.
     * @param {String} _apiKey 
     * @param {any} params 
     * @memberof Gallery
     */

  }]);

  function Gallery(_apiKey) {
    var _this = this;

    _classCallCheck(this, Gallery);

    console.log(_apiKey);
    this.apiKey = _apiKey;
    this.apiRequest(this.apiKey).then(function (data) {
      // TemplateGallery.homeGallery(data);
      _this.gallery(data);
    });
  }

  _createClass(Gallery, [{
    key: 'apiRequest',
    value: async function apiRequest(_apiKey) {
      try {
        var flickrApi = await fetch('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + _apiKey + '&text=garden&per_page=25&page=&format=json&nojsoncallback=1');
        var _data2 = await flickrApi.json();
        return _data2;
      } catch (e) {
        return e;
      }
    }
  }, {
    key: 'gallery',
    value: function gallery(_data) {
      var gallery = data.photos.photo;
      // const photos = await fetch();
      gallery.map(function (photo) {
        console.log(photo.id);
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
    key: 'homeGallery',
    value: function homeGallery(data) {
      console.log('function loaded');
      var printContainer = document.querySelector('.gallery ul');
      // let template = `<h1>Hello</h1>`;

      // const template = data.map(x => console.log(data));


      // printContainer.insertAdjacentHTML('beforeend', template.id)
      // photos.forEach(element => {
      //   console.log(element);
      // });
      // console.log(data);

      // printContainer.insertAdjacentHTML('beforeend', template);
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
    // Initiating Gallery
    var galleryApp = _gallery2.default.getInstance(apiKey);
});

},{"./gallery":1}]},{},[3]);
