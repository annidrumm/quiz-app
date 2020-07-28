// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/js/nav.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Navigation = Navigation;

// Navigation
function Navigation() {
  var navHome = document.querySelector('#nav_home');
  var navBookmarks = document.querySelector('#nav_bookmark');
  var navCreate = document.querySelector('#nav_create');
  var navProfile = document.querySelector('#nav_profile'); // Pages

  var indexPage = document.querySelector('#home');
  var indexBookmarks = document.querySelector('#bookmarks');
  var indexCreate = document.querySelector('#create');
  var indexProfile = document.querySelector('#profile'); // Headlines

  var headerHome = document.querySelector('#header1');
  var headerBookmark = document.querySelector('#header2');
  var headerCreate = document.querySelector('#header3');
  var headerProfile = document.querySelector('#header4'); // Function

  var hideAllSections = function hideAllSections() {
    indexPage.classList.add('displaynone');
    indexBookmarks.classList.add('displaynone');
    indexCreate.classList.add('displaynone');
    indexProfile.classList.add('displaynone');
  };

  var inactiveAllSections = function inactiveAllSections() {
    navHome.classList.remove('svg-filled');
    navBookmarks.classList.remove('svg-filled');
    navCreate.classList.remove('svg-filled');
    navProfile.classList.remove('svg-filled');
  };

  var hideAllHeadlines = function hideAllHeadlines() {
    headerHome.classList.add('displaynone');
    headerBookmark.classList.add('displaynone');
    headerCreate.classList.add('displaynone');
    headerProfile.classList.add('displaynone');
  };

  navHome === null || navHome === void 0 ? void 0 : navHome.addEventListener('click', function () {
    hideAllSections();
    inactiveAllSections();
    hideAllHeadlines();
    headerHome.classList.remove('displaynone');
    indexPage.classList.remove('displaynone');
    navHome.classList.add('svg-filled');
  });
  navBookmarks === null || navBookmarks === void 0 ? void 0 : navBookmarks.addEventListener('click', function () {
    hideAllSections();
    inactiveAllSections();
    hideAllHeadlines();
    indexBookmarks.classList.remove('displaynone');
    navBookmarks.classList.add('svg-filled');
    headerBookmark.classList.remove('displaynone');
  });
  navCreate === null || navCreate === void 0 ? void 0 : navCreate.addEventListener('click', function () {
    hideAllSections();
    inactiveAllSections();
    hideAllHeadlines();
    indexCreate.classList.remove('displaynone');
    navCreate.classList.add('svg-filled');
    headerCreate.classList.remove('displaynone');
  });
  navProfile === null || navProfile === void 0 ? void 0 : navProfile.addEventListener('click', function () {
    hideAllSections();
    inactiveAllSections();
    hideAllHeadlines();
    indexProfile.classList.remove('displaynone');
    navProfile.classList.add('svg-filled');
    headerProfile.classList.remove('displaynone');
  });
}
},{}],"src/js/card.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Card = Card;
var placeholder = get('[data-js=placeholder]');

function Card() {
  var card = [{}, {}, {}];
  card.forEach(createCard);
}

function createCard(_ref) {
  var question = _ref.question,
      answer = _ref.answer,
      tags = _ref.tags;
  var newCard = createElement({
    type: 'section',
    className: 'card',
    text: ''
  });
  var headline = createElement({
    type: 'h2',
    className: 'card__headline',
    text: 'Question',
    target: newCard
  });
  var questionInput = createElement({
    type: 'paragraph',
    className: 'card__text card__text--question',
    text: question,
    target: newCard
  });
  var answerButton = createElement({
    type: 'button',
    className: 'card__answer-button',
    text: 'Show Answer',
    target: newCard
  });
  answerButton.addEventListener('click', function () {
    this.classList.toggle('active');
    var content = this.nextElementSibling;

    if (content.style.display === 'block') {
      content.style.display = 'none';
      answerButton.textContent = 'Show answer';
    } else {
      content.style.display = 'block';
      answerButton.textContent = 'Hide answer';
    }
  });
  var answerInput = createElement({
    type: 'paragraph',
    className: 'content displaynone',
    text: answer,
    target: newCard
  });
  var ul = createElement({
    type: 'ul',
    className: 'tag-list',
    text: '',
    target: newCard
  });
  var tag1 = createElement({
    type: 'li',
    className: 'tag-list li',
    text: tags,
    target: ul
  });
}

function createElement() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref2$type = _ref2.type,
      type = _ref2$type === void 0 ? 'section' : _ref2$type,
      _ref2$className = _ref2.className,
      className = _ref2$className === void 0 ? '' : _ref2$className,
      _ref2$text = _ref2.text,
      text = _ref2$text === void 0 ? '' : _ref2$text,
      _ref2$target = _ref2.target,
      target = _ref2$target === void 0 ? placeholder : _ref2$target;

  var el = document.createElement(type);
  el.className = className;
  el.textContent = text;
  target.appendChild(el);
  return el;
}

function get(selector) {
  return document.querySelector(selector);
}
},{}],"src/js/bookmarks.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Bookmarks = Bookmarks;

function Bookmarks() {
  var bookmarkButton = document.querySelector('#bookmark1');
  bookmarkButton === null || bookmarkButton === void 0 ? void 0 : bookmarkButton.addEventListener('click', function () {
    return bookmarkButton.classList.toggle('card__bookmark-button--active');
  });
  var bookmarkButton2 = document.querySelector('#bookmark2');
  bookmarkButton2 === null || bookmarkButton2 === void 0 ? void 0 : bookmarkButton2.addEventListener('click', function () {
    return bookmarkButton2.classList.toggle('card__bookmark-button--active');
  });
  var bookmarkButton3 = document.querySelector('#bookmark3');
  bookmarkButton3 === null || bookmarkButton3 === void 0 ? void 0 : bookmarkButton3.addEventListener('click', function () {
    return bookmarkButton3.classList.toggle('card__bookmark-button--active');
  });
}
},{}],"src/js/form.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Form = Form;

var _card = require("./card");

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

function Form() {
  var question = document.querySelector('[data-js=question]');
  var answer = document.querySelector('[data-js=answer]');
  var tags = document.querySelector('[data-js=tags]');
  var fromSubmit = document.querySelector('.submit-button');
  fromSubmit === null || fromSubmit === void 0 ? void 0 : fromSubmit.addEventListener('submit', function (event) {
    question = (_readOnlyError("question"), question.value);
    answer = (_readOnlyError("answer"), answer.value);
    tags = (_readOnlyError("tags"), tags.value.split(',').map(function (tags) {
      return tags.trim();
    }));
    (0, _card.createCard)({
      question: question,
      answer: answer,
      tags: tags
    });
    event.preventDefault();
    resetForm();
  });
}
},{"./card":"src/js/card.js"}],"src/js/day-nightmode.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DayNightMode = DayNightMode;

function DayNightMode() {
  var darkMode = document.querySelector('.night__button');
  var body = document.querySelector('body');
  var lightMode = document.querySelector('.light__button');
  lightMode === null || lightMode === void 0 ? void 0 : lightMode.addEventListener('click', function () {
    body.classList.add('light-mode');
    darkMode.classList.remove('displaynone');
    lightMode.classList.add('displaynone');
  });
  darkMode === null || darkMode === void 0 ? void 0 : darkMode.addEventListener('click', function () {
    body.classList.remove('light-mode');
    lightMode.classList.remove('displaynone');
    darkMode.classList.add('displaynone');
  });
}
},{}],"src/js/index.js":[function(require,module,exports) {
"use strict";

var _nav = require("./nav");

var _card = require("./card");

var _bookmarks = require("./bookmarks");

var _form = require("./form");

var _dayNightmode = require("./day-nightmode");

document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    (0, _nav.Navigation)();
    (0, _card.Card)();
    (0, _bookmarks.Bookmarks)();
    (0, _form.Form)();
    (0, _dayNightmode.DayNightMode)();
  });
});
},{"./nav":"src/js/nav.js","./card":"src/js/card.js","./bookmarks":"src/js/bookmarks.js","./form":"src/js/form.js","./day-nightmode":"src/js/day-nightmode.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "62944" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/js/index.js"], null)
//# sourceMappingURL=/js.d818e0ef.js.map