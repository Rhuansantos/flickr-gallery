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

    // singleton design pattern
    value: function getInstance() {
      if (!Gallery._instance) {
        Gallery._instance = new Gallery();
        return Gallery._instance;
      } else {
        throw 'the class Gallery was already created';
      }
    }
  }]);

  function Gallery() {
    _classCallCheck(this, Gallery);

    this.apiRequest().then(function (data) {
      return data;
    });
  }

  _createClass(Gallery, [{
    key: 'apiRequest',
    value: async function apiRequest() {
      try {
        var flickrApi = await fetch('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=12c6658dd3fc36b164fee653181086e4&text=garden&per_page=25&page=&format=json&nojsoncallback=1&auth_token=72157662469806357-7999e1dbe0d1fb6c&api_sig=6191a1acee2b8e4374ec6afd94a7ce60');
        var data = await flickrApi.json();
        _gallery_template2.default.homeGallery(data);
        return data;
      } catch (e) {
        return e;
      }
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

      var template = data.map(function (x) {
        return console.log(data);
      });

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// waiting for the page loading
window.addEventListener('load', function () {
    var galleryApp = _gallery2.default.getInstance();
});

},{"./gallery":1}]},{},[3]);
