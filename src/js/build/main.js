(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Gallery = function () {
  _createClass(Gallery, null, [{
    key: 'getInstance',

    // singleton
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

    this.request().then(function (data) {
      return data;
    });
  }

  _createClass(Gallery, [{
    key: 'request',
    value: async function request() {
      try {
        var flickrApi = await fetch('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=12c6658dd3fc36b164fee653181086e4&text=garden&per_page=25&page=&format=json&nojsoncallback=1&auth_token=72157662469806357-7999e1dbe0d1fb6c&api_sig=6191a1acee2b8e4374ec6afd94a7ce60');
        var data = await flickrApi.json();
        return data;
      } catch (e) {
        return e;
      }
    }
  }]);

  return Gallery;
}();

exports.default = Gallery;

},{}],2:[function(require,module,exports){
'use strict';

var _gallery = require('./gallery');

var _gallery2 = _interopRequireDefault(_gallery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// waiting for the page loading
window.addEventListener('load', function () {
    var galleryApp = _gallery2.default.getInstance();
});

},{"./gallery":1}]},{},[2]);
