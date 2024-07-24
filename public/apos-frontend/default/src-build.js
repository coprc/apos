/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./modules/asset/ui/src/index.js":
/*!***************************************!*\
  !*** ./modules/asset/ui/src/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  // Your own project level JS may go here
  console.log('Hello World');
});


/***/ }),

/***/ "./node_modules/apostrophe/modules/@apostrophecms/admin-bar/ui/src/index.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/apostrophe/modules/@apostrophecms/admin-bar/ui/src/index.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * If the page delivers a logged-out content but we know from session storage that a user is logged-in,
 * we force-refresh the page to bypass the cache, in order to get the logged-in content (with admin UI).
 */
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  const isLoggedOutPageContent = !(apos.login && apos.login.user);
  const isLoggedInCookie = apos.util.getCookie(`${self.apos.shortName}.loggedIn`) === 'true';

  if (!isLoggedOutPageContent || !isLoggedInCookie) {
    sessionStorage.setItem('aposRefreshedPages', '{}');

    return;
  }

  const refreshedPages = JSON.parse(sessionStorage.aposRefreshedPages || '{}');

  // Avoid potential refresh loops
  if (!refreshedPages[location.href]) {
    refreshedPages[location.href] = true;
    sessionStorage.setItem('aposRefreshedPages', JSON.stringify(refreshedPages));

    console.info('Received logged-out content from cache while logged-in, refreshing the page');

    location.reload();
  }
};


/***/ }),

/***/ "./node_modules/apostrophe/modules/@apostrophecms/util/ui/src/http.js":
/*!****************************************************************************!*\
  !*** ./node_modules/apostrophe/modules/@apostrophecms/util/ui/src/http.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  // Adds the apos.http client, which has the same API
  // as the server-side apos.http client, although it may
  // not have exactly the same features available.
  // This is a lean, IE11-friendly implementation.

  const busyActive = {};
  const apos = window.apos;
  apos.http = {};

  // Send a POST request. Note that POST body data should be in
  // `options.body`. See `apos.http.remote` for details.
  // You do NOT have to pass a callback unless you must support IE11
  // and do not want to include a promise polyfill in your build.

  apos.http.post = function(url, options, callback) {
    return apos.http.remote('POST', url, options, callback);
  };

  // Send a GET request. Note that query string data may be in
  // `options.qs`. See `apos.http.remote` for details.
  // You do NOT have to pass a callback unless you must support IE11
  // and do not want to include a promise polyfill in your build.
  apos.http.get = function(url, options, callback) {
    return apos.http.remote('GET', url, options, callback);
  };

  // Send a PATCH request. Note that PATCH body data should be in
  // `options.body`. See `apos.http.remote` for details.
  // You do NOT have to pass a callback unless you must support IE11
  // and do not want to include a promise polyfill in your build.
  apos.http.patch = function(url, options, callback) {
    return apos.http.remote('PATCH', url, options, callback);
  };

  // Send a PUT request. Note that PUT body data should be in
  // `options.body`. See `apos.http.remote` for details.
  // You do NOT have to pass a callback unless you must support IE11
  // and do not want to include a promise polyfill in your build.
  apos.http.put = function(url, options, callback) {
    return apos.http.remote('PUT', url, options, callback);
  };

  // Send a DELETE request. See `apos.http.remote` for details.
  // You do NOT have to pass a callback unless you must support IE11
  // and do not want to include a promise polyfill in your build.
  apos.http.delete = function(url, options, callback) {
    return apos.http.remote('DELETE', url, options, callback);
  };

  // Send an HTTP request with the given method to the given URL and return the response body.
  //
  // The callback is optional as long as Promise support is present in the browser, directly or as
  // a polyfill. If a callback is used it will receive `(err, result)` where `result` is the
  // return value described below.
  //
  // Accepts the following options:
  //
  // `qs` (pass object; builds a query string, does not support recursion)
  // `send`: by default, `options.body` is sent as JSON if it is an object and it is not a
  // `FormData` object. If `send` is set to `json`, it is always sent as JSON.
  // `body` (request body, not for GET; if an object or array, sent as JSON, otherwise sent as-is, unless
  // the `send` option is set)
  // `parse` (can be 'json` to always parse the response body as JSON, otherwise the response body is
  // parsed as JSON only if the content-type is application/json)
  // `headers` (an object containing header names and values)
  // `draft` (if true, always add aposMode=draft to the query string, creating one if needed)
  // `fullResponse` (if true, return an object with `status`, `headers` and `body`
  // properties, rather than returning the body directly; the individual `headers` are canonicalized
  // to lowercase names. If there are duplicate headers after canonicalization only the
  // last value is returned. If a header appears multiple times an array is returned for it)
  // `downloadProgress` (may be a function accepting `received` and `total` parameters. May never be called. If
  // called, `received` will be the bytes sent so far, and `total` will be the total bytes to be
  // received. If the total is unknown, it will be `null`)
  // `uploadProgress` (may be a function accepting `sent` and `total` parameters. May never be called. If
  // called, `sent` will be the bytes sent so far, and `total` will be the total bytes to be
  // sent. If the total is unknown, it will be `null`)
  // `prefix`: If explicitly set to `false`, do not automatically prefix the URL,
  // even if the site has a site-wide prefix or locale prefix.
  // It can become handy when the given url is already prefixed,
  // which is the case when using the document's computed `_url` field for instance.
  //
  // If the status code is >= 400 an error is thrown. The error object will be
  // similar to a `fullResponse` object, with a `status` property.
  //
  // If the URL is site-relative (starts with /) it will be requested from
  // the apostrophe site itself.

  // Just before the XMLHTTPRequest is sent this method emits an
  // `apos-before-post` event on `document.body` (where `post` changes
  // to match the method, in lower case). The event object
  // has `uri`, `data` and `request` properties. `request` is the
  // XMLHTTPRequest object. You can use this to set custom headers
  // on all lean requests, etc.

  apos.http.remote = function(method, url, options, callback) {
    if (!callback) {
      if (!window.Promise) {
        throw new Error('If you wish to receive a promise from apos.http methods in older browsers you must have a Promise polyfill. If you do not want to provide one, pass a callback instead.');
      }
      return new window.Promise(function(resolve, reject) {
        if (!url) {
          return reject(new Error('url is not defined'));
        }
        return apos.http.remote(method, url, options, function(err, result) {
          if (err) {
            return reject(err);
          }
          return resolve(result);
        });
      });
    }

    if (!url) {
      return callback(new Error('url is not defined'));
    }

    if (apos.prefix && options.prefix !== false) {
      // Prepend the prefix if the URL is absolute:
      if (url.substring(0, 1) === '/') {
        url = apos.prefix + url;
      }
    }

    let query;
    let qat;

    // Intentional true / falsey check for determining
    // what set of docs the request is interested in
    if (options.draft != null) {
      if (options.qs) {
        // Already assumes no query parameters baked into URL, so OK to
        // just extend qs
        options.qs = options.draft
          ? apos.util.assign({ aposMode: 'draft' }, options.qs)
          : apos.util.assign({ aposMode: 'published' }, options.qs);
      } else {
        // Careful, there could be existing query parameters baked into url
        qat = url.indexOf('?');
        if (qat !== -1) {
          query = apos.http.parseQuery(url.substring(qat));
        } else {
          query = {};
        }
        query.aposMode = options.draft ? 'draft' : 'published';
        url = apos.http.addQueryToUrl(url, query);
      }
    }

    const busyName = options.busy === true ? 'busy' : options.busy;
    const xmlhttp = new XMLHttpRequest();
    let data = options.body;
    let keys;
    let i;

    if (options.qs) {
      url = apos.http.addQueryToUrl(url, options.qs);
    }
    if (options.busy) {
      if (!busyActive[busyName]) {
        busyActive[busyName] = 0;
        if (apos.bus) {
          apos.bus.$emit('busy', {
            active: true,
            name: busyName
          });
        }
      }
      // keep track of nested calls
      busyActive[busyName]++;
    }
    xmlhttp.open(method, url);
    const formData = window.FormData && (data instanceof window.FormData);
    const sendJson = (options.send === 'json') || (options.body && ((typeof options.body) === 'object') && !formData);
    if (sendJson) {
      xmlhttp.setRequestHeader('Content-Type', 'application/json');
    }
    if (options.headers) {
      keys = Object.keys(options.headers);
      for (i = 0; (i < keys.length); i++) {
        xmlhttp.setRequestHeader(keys[i], options.headers[keys[i]]);
      }
    }
    apos.util.emit(document.body, 'apos-before-' + method.toLowerCase(), {
      uri: url,
      data: options.body,
      request: xmlhttp
    });
    if (sendJson) {
      data = JSON.stringify(options.body);
    } else {
      data = options.body;
    }
    xmlhttp.addEventListener('load', function() {
      let data = null;
      const responseHeader = this.getResponseHeader('Content-Type');
      if (responseHeader || (options.parse === 'json')) {
        if ((options.parse === 'json') || (responseHeader.match(/^application\/json/))) {
          try {
            data = JSON.parse(this.responseText);
          } catch (e) {
            return callback(e);
          }
        } else {
          data = this.responseText;
        }
      }

      if (xmlhttp.status < 400) {
        if (options.fullResponse) {
          return callback(null, {
            body: data,
            status: xmlhttp.status,
            headers: getHeaders()
          });
        } else {
          return callback(null, data);
        }
      } else {
        const error = new Error((data && data.message) || (data && data.name) || 'Error');
        error.status = xmlhttp.status;
        error.name = (data && data.name);
        error.body = data;
        error.headers = getHeaders();
        return callback(error);
      }
    });
    xmlhttp.addEventListener('abort', function(evt) {
      return callback(evt);
    });
    xmlhttp.addEventListener('error', function(evt) {
      return callback(evt);
    });
    if (options.downloadProgress) {
      xmlhttp.addEventListener('progress', function(evt) {
        options.downloadProgress(evt.loaded, evt.lengthComputable ? evt.total : null);
      });
    }
    if (xmlhttp.upload && options.uploadProgress) {
      xmlhttp.upload.addEventListener('progress', function(evt) {
        options.uploadProgress(evt.loaded, evt.lengthComputable ? evt.total : null);
      });
    }
    xmlhttp.addEventListener('loadend', function (evt) {
      if (options.busy) {
        busyActive[busyName]--;
        if (!busyActive[busyName]) {
          // if no nested calls, disable the "busy" state
          if (apos.bus) {
            apos.bus.$emit('busy', {
              active: false,
              name: busyName
            });
          }
        }
      }
    });
    xmlhttp.send(data);

    function getHeaders() {
      const headers = xmlhttp.getAllResponseHeaders();
      if (!headers) {
        return {};
      }
      // Per MDN
      const arr = headers.trim().split(/[\r\n]+/);
      // Create a map of header names to values
      const headerMap = {};
      arr.forEach(function (line) {
        const parts = line.split(': ');
        const header = parts.shift();
        if (!header) {
          return;
        }
        const value = parts.shift();
        // Optional support for fetching arrays of headers with the same name
        // could be added at a later time if anyone really cares. Usually
        // just a source of bugs
        headerMap[header.toLowerCase()] = value;
      });
      return headerMap;
    }
  };

  // Parse a query string. You can pass with or without the
  // leading ?. Don't pass the entire URL. Supports objects,
  // arrays and nesting with the classic PHP/Java bracket syntax.
  // If a key is set with no = it is considered null, per
  // the java convention. Good for use with window.location.search.

  apos.http.parseQuery = function(query) {
    query = query.replace(/^\?/, '');
    const data = {};
    const pairs = query.split('&');
    pairs.forEach(function(pair) {
      let parts;
      if (pair.indexOf('=') === -1) {
        patch(pair, null);
      } else {
        parts = pair.split('=');
        if (parts) {
          patch(parts[0], parts[1]);
        }
      }
    });
    return data.root || {};
    function patch(key, value) {
      let match;
      let parentKey = 'root';
      let context = data;
      key = decodeURIComponent(key);
      const path = key.split('[');
      path.forEach(function(subKey) {
        if (subKey === ']') {
          if (!Array.isArray(context[parentKey])) {
            context[parentKey] = [];
          }
          context = context[parentKey];
          parentKey = context.length;
        } else if (subKey.match(/^\d+]/)) {
          match = subKey.match(/^\d+/);
          if (!Array.isArray(context[parentKey])) {
            context[parentKey] = [];
          }
          context = context[parentKey];
          parentKey = parseInt(match);
        } else {
          match = subKey.replace(']', '');
          if (!context[parentKey]) {
            context[parentKey] = {};
          }
          context = context[parentKey];
          parentKey = match;
        }
      });
      value = (value === null) ? value : decodeURIComponent(value);
      if (Array.isArray(context[parentKey])) {
        context[parentKey].push(value);
      } else if (context[parentKey] !== undefined) {
        context[parentKey] = [ context[parentKey], value ];
      } else {
        context[parentKey] = value;
      }
    }
  };

  // Adds query string data to url. Supports nested structures with objects
  // and arrays, in a way compatible with qs and most other parsers including
  // those baked into PHP frameworks etc. If the URL already contains a query
  // it is discarded and replaced with the new one. All non-query parts of the
  // URL remain unchanged.

  apos.http.addQueryToUrl = function(url, data) {
    let hash = '';
    const hashAt = url.indexOf('#');
    if (hashAt !== -1) {
      hash = url.substring(hashAt);
      url = url.substring(0, hashAt);
    }
    url = url.replace(/\?.*$/, '');
    let i;
    let flat;
    if ((data != null) && ((typeof data) === 'object')) {
      flat = flatten('', data);
      for (i = 0; (i < flat.length); i++) {
        const key = flat[i][0];
        const val = flat[i][1];
        if (i > 0) {
          url += '&';
        } else {
          url += '?';
        }
        if (val == null) {
          // Java-style distinction between null and empty string
          url += encodeURIComponent(key);
        } else {
          url += encodeURIComponent(key) + '=' + encodeURIComponent(val);
        }
      }
    }
    return url + hash;
    function flatten(path, data) {
      let flat = [];
      let keys;
      let i;
      if (Array.isArray(data)) {
        for (i = 0; (i < data.length); i++) {
          insert(i, data[i]);
        }
      } else {
        keys = Object.keys(data);
        for (i = 0; (i < keys.length); i++) {
          insert(keys[i], data[keys[i]]);
        }
      }
      return flat;
      function insert(key, datum) {
        if ((datum != null) && ((typeof datum) === 'object')) {
          flat = flat.concat(flatten(path.length ? path + '[' + key + ']' : key, datum));
        } else {
          flat.push([ path.length ? path + '[' + key + ']' : key, datum ]);
        }
      }
    }
  };
});


/***/ }),

/***/ "./node_modules/apostrophe/modules/@apostrophecms/util/ui/src/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/apostrophe/modules/@apostrophecms/util/ui/src/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ "./node_modules/apostrophe/modules/@apostrophecms/util/ui/src/util.js");
/* harmony import */ var _http_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http.js */ "./node_modules/apostrophe/modules/@apostrophecms/util/ui/src/http.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  (0,_util_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_http_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
});


/***/ }),

/***/ "./node_modules/apostrophe/modules/@apostrophecms/util/ui/src/util.js":
/*!****************************************************************************!*\
  !*** ./node_modules/apostrophe/modules/@apostrophecms/util/ui/src/util.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Adds minimal services to the apos object replacing
// functionality widget players can't live without,
// and provides the `runPlayers` method to run all players
// once if not run previously.
//
// Also schedules that method to run automatically when
// the DOM is ready.
//
// Adds apos to window if not already present.
//
// This is a lean, IE11-friendly implementation.

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {

  const apos = window.apos;
  apos.util = {};

  // emit a custom event on the specified DOM element in a cross-browser way.
  // If `data` is present, the properties of `data` will be available on the event object
  // in your event listeners. For events unrelated to the DOM, we often emit on
  // `document.body` and call `addEventListener` on `document.body` elsewhere.
  //
  // "Where is `apos.util.on`?" You don't need it, use `addEventListener`, which is
  // standard.

  apos.util.emit = function(el, name, data) {
    let event;
    try {
      // Modern. We can't sniff for this, we can only try it. IE11
      // has it but it's not a constructor and throws an exception
      event = new window.CustomEvent(name);
    } catch (e) {
      // bc for IE11
      event = document.createEvent('Event');
      event.initEvent(name, true, true);
    }
    apos.util.assign(event, data || {});
    el.dispatchEvent(event);
  };

  // Fetch the cookie by the given name
  apos.util.getCookie = function(name) {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match && match[2];
  };

  // Remove a CSS class, if present.
  // http://youmightnotneedjquery.com/

  apos.util.removeClass = function(el, className) {
    if (el.classList) {
      el.classList.remove(className);
    } else {
      el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
  };

  // Add a CSS class, if missing.
  // http://youmightnotneedjquery.com/

  apos.util.addClass = function(el, className) {
    if (el.classList) {
      el.classList.add(className);
    } else {
      el.className += ' ' + className;
    }
  };

  // A wrapper for the native closest() method of DOM elements,
  // where available, otherwise a polyfill for IE9+. Returns the
  // closest ancestor of el that matches selector, where
  // el itself is considered the closest possible ancestor.

  apos.util.closest = function(el, selector) {
    if (el.closest) {
      return el.closest(selector);
    }
    // Polyfill per https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
    if (!Element.prototype.matches) {
      Element.prototype.matches = Element.prototype.msMatchesSelector ||
        Element.prototype.webkitMatchesSelector;
    }
    Element.prototype.closest = function(s) {
      let el = this;
      if (!document.documentElement.contains(el)) {
        return null;
      }
      do {
        if (el.matches(s)) {
          return el;
        }
        el = el.parentElement || el.parentNode;
      } while (el !== null && el.nodeType === 1);
      return null;
    };
    return el.closest(selector);
  };

  // Like Object.assign. Uses Object.assign where available.
  // (Takes us back to IE9)

  apos.util.assign = function(obj1, obj2 /*,  obj3... */) {
    if (Object.assign) {
      return Object.assign.apply(Object, arguments);
    }
    let i, j, keys, key;
    for (i = 1; (i < arguments.length); i++) {
      keys = Object.keys(arguments[i]);
      for (j = 0; (j < keys.length); j++) {
        key = keys[j];
        obj1[key] = arguments[i][key];
      }
    }
    return obj1;
  };

  // Map of widget players. Adding one is as simple as:
  // window.apos.util.widgetPlayers['widget-name'] = function(el, data, options) {}
  //
  // Use the widget's name, like "apostrophe-images", NOT the name of its module.
  //
  // Your player receives the DOM element of the widget and the
  // pre-parsed `data` and `options` objects associated with it,
  // as objects. el is NOT a jQuery object, because jQuery is not pushed
  // (we push no libraries in the lean world).
  //
  // Your player should add any needed javascript effects to
  // THAT ONE WIDGET and NO OTHER. Don't worry about finding the
  // others, we will do that for you and we guarantee only one call per widget.

  apos.util.widgetPlayers = {};

  // Run the given function whenever the DOM has new changes that
  // may require attention. The passed function will be
  // called when the DOM is ready on initial page load, and also
  // when the main content area has been refreshed by the editor.
  // Note that you don't need this for widgets; see widget players.

  // NOTE: onReadyAndRefresh has been aliased to apos.util.onReady,
  // which is the recommended way to call this functionality.
  // onReadyAndRefresh will be deprecated in the next major version.

  apos.util.onReadyAndRefresh = function(fn) {
    onReady(fn);
    // Allow Apostrophe to create the bus first
    setTimeout(function() {
      apos.bus && apos.bus.$on('refreshed', fn);
    }, 0);
    function onReady(fn) {
      if (document.readyState !== 'loading') {
        setTimeout(fn, 0);
      } else if (document.addEventListener) {
        document.addEventListener('DOMContentLoaded', fn);
      } else {
        document.attachEvent('onreadystatechange', function() {
          if (document.readyState !== 'loading') {
            fn();
          }
        });
      }
    }
  };

  // Alias for onReadyAndRefresh, the recommended way to use and document this functionality
  apos.util.onReady = apos.util.onReadyAndRefresh.bind(apos.util.onReadyAndRefresh);

  // Run all the players that haven't been run. Invoked for you at DOMready
  // time. You may also invoke it if you just AJAXed in some content and
  // have reason to suspect there could be widgets in there. You may pass:
  //
  // * Nothing at all - entire document is searched for new widgets to enhance, or
  // * A DOM element - new widgets to enhance are found within this scope only.
  //
  // To register a widget player for the `apostrophe-images` widget, write:
  //
  // `apos.util.widgetPlayers['apostrophe-images'] = function(el, data, options) { ... }`
  //
  // `el` is a DOM element, not a jQuery object. Otherwise identical to
  // traditional Apostrophe widget players. `data` contains the properties
  // of the widget itself, `options` contains the options that were
  // passed to it at the area level.
  //
  // Your player is guaranteed to run only once per widget. Hint:
  // DON'T try to find all the widgets. DO just enhance `el`.
  // This is a computer science principle known as "separation of concerns."

  apos.util.runPlayers = function(el) {
    const players = apos.util.widgetPlayers;
    const playerList = Object.keys(players);

    for (let i = 0; i < playerList.length; i++) {
      const playerOpts = players[playerList[i]];
      const playerEls = (el || document).querySelectorAll(playerOpts.selector);

      playerEls.forEach(function (el) {
        if (el.aposWidgetPlayed) {
          return;
        }
        // Use an actual property, not a DOM attribute or
        // "data" prefix property, to avoid the problem of
        // elements cloned from innerHTML appearing to have
        // been played too
        el.aposWidgetPlayed = true;
        playerOpts.player(el);
      });
    }
  };

  // Schedule runPlayers to run as soon as the document is ready, and also
  // when the page is partially refreshed by the editor.

  if (!apos.bus) {
    apos.util.onReadyAndRefresh(function() {
      apos.util.runPlayers();
    });
  }

  // Given an attachment field value,
  // return the file URL. If options.size is set, return the URL for
  // that size (one-sixth, one-third, one-half, two-thirds, full, max).
  // full is "full width" (1140px), not the original.
  //
  // If you don't pass the options object, or options does not
  // have a size property, you'll get the URL of the original.
  // IMPORTANT: FOR IMAGES, THIS MAY BE A VERY LARGE FILE, NOT
  // WHAT YOU WANT. Set `size` appropriately!
  //
  // You can also pass a crop object (the crop must already exist).

  apos.util.attachmentUrl = function(file, options) {
    let path = apos.uploadsUrl + '/attachments/' + file._id + '-' + file.name;
    if (!options) {
      options = {};
    }
    // NOTE: the crop must actually exist already, you can't just invent them
    // browser-side without the crop API ever having come into play. If the
    // width is 0 the user hit save in the cropper without cropping, use
    // the regular version
    let crop;
    if (options.crop && options.crop.width) {
      crop = options.crop;
    } else if (file.crop && file.crop.width) {
      crop = file.crop;
    }
    if (crop) {
      path += '.' + crop.left + '.' + crop.top + '.' + crop.width + '.' + crop.height;
    }
    let effectiveSize;
    if ((!options.size) || (options.size === 'original')) {
      effectiveSize = false;
    } else {
      effectiveSize = options.size;
    }
    if (effectiveSize) {
      path += '.' + effectiveSize;
    }
    return path + '.' + file.extension;
  };

  // Given an asset path such as `/modules/modulename/images/file.png`, this
  // method will return a URL for it. This is used when frontend JavaScript
  // code needs to access static assets shipped in the `public` subdirectory of
  // individual modules. Currently `path` must begin with `/modules/` followed
  // by a module name; other namespaces may exist later. The remainder of the
  // path, such as `/images/file.png` in the above example, must currespond
  // to a file that exists in the `public` subdirectory of the named module.
  //
  // Asset paths of this type are also automatically supported by CSS and
  // SCSS files in the project when using `url()`.

  apos.util.assetUrl = function(path) {
    return apos.assetBaseUrl + path;
  };

  // Returns true if the uri references the same site (same host and port) as the
  // current page. Cross-browser implementation, valid at least back to IE11.
  // Regarding port numbers, this will match as long as the URIs are consistent
  // about not explicitly specifying the port number when it is 80 (HTTP) or 443 (HTTPS),
  // which is generally the case.

  apos.util.sameSite = function(uri) {
    const matches = uri.match(/^(https?:)?\/\/([^/]+)/);
    if (!matches) {
      // If URI is not absolute or protocol-relative then it is always same-origin
      return true;
    }
    return window.location.host === matches[2];
  };
});


/***/ }),

/***/ "./node_modules/apostrophe/modules/@apostrophecms/video-widget/ui/src/index.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/apostrophe/modules/@apostrophecms/video-widget/ui/src/index.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  apos.util.widgetPlayers['@apostrophecms/video'] = {
    selector: '[data-apos-video-widget]',
    player: function(el) {
      const videoUrl = el.getAttribute('data-apos-video-url');
      let queryResult;

      if (!videoUrl) {
        return;
      }

      queryAndPlay(el, {
        url: videoUrl
      });

      function queryAndPlay(el, options) {
        apos.util.removeClass(el, 'apos-oembed-invalid');
        apos.util.addClass(el, 'apos-oembed-busy');
        if (!options.url) {
          return fail('undefined');
        }
        return query(options, function(err, result) {
          queryResult = result;
          if (err || (options.type && (result.type !== options.type))) {
            return fail(err || 'inappropriate');
          }
          apos.util.removeClass(el, 'apos-oembed-busy');
          return play(el, result);
        });
      }

      function query(options, callback) {
        const opts = {
          qs: {
            url: options.url
          }
        };
        return apos.http.get('/api/v1/@apostrophecms/oembed/query', opts, callback);
      }

      function play(el, result) {
        const shaker = document.createElement('div');
        shaker.innerHTML = result.html;
        const inner = shaker.firstChild;
        inner.setAttribute('data-apos-video-canvas', '');
        el.innerHTML = '';
        if (!inner) {
          return;
        }
        inner.removeAttribute('width');
        inner.removeAttribute('height');
        el.append(inner);
        // wait for CSS width to be known
        setTimeout(function() {
          // If oembed results include width and height we can get the
          // video aspect ratio right
          if (result.width && result.height) {
            inner.style.width = '100%';
            resizeVideo(inner);
            // If we need to initially size the video, also resize it on window
            // resize.
            window.addEventListener('resize', resizeHandler);
          } else {
            // No, so assume the oembed HTML code is responsive.
          }
        }, 0);
      }

      function resizeVideo(canvasEl) {
        canvasEl.style.height = ((queryResult.height / queryResult.width) * canvasEl.offsetWidth) + 'px';
      };

      function resizeHandler() {
        if (document.contains(el)) {
          resizeVideo(el.querySelector('[data-apos-video-canvas]'));
        } else {
          window.removeEventListener('resize', resizeHandler);
        }
      }

      function fail(err) {
        apos.util.removeClass(el, 'apos-oembed-busy');
        apos.util.addClass(el, 'apos-oembed-invalid');
        console.error(err);
        if (err !== 'undefined') {
          el.innerHTML = '<p>Error loading video</p>';
        } else {
          el.innerHTML = '';
        }
      }
    }
  };
});


/***/ }),

/***/ "./modules/asset/ui/src/index.scss":
/*!*****************************************!*\
  !*** ./modules/asset/ui/src/index.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/apostrophe/modules/@apostrophecms/image-widget/ui/src/index.scss":
/*!***************************************************************************************!*\
  !*** ./node_modules/apostrophe/modules/@apostrophecms/image-widget/ui/src/index.scss ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
/*!******************************************!*\
  !*** ./apos-build/default/src-import.js ***!
  \******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_ravindra_Misc_apos_app_node_modules_apostrophe_modules_apostrophecms_util_ui_src_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/apostrophe/modules/@apostrophecms/util/ui/src/index.js */ "./node_modules/apostrophe/modules/@apostrophecms/util/ui/src/index.js");
/* harmony import */ var _Users_ravindra_Misc_apos_app_node_modules_apostrophe_modules_apostrophecms_admin_bar_ui_src_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/apostrophe/modules/@apostrophecms/admin-bar/ui/src/index.js */ "./node_modules/apostrophe/modules/@apostrophecms/admin-bar/ui/src/index.js");
/* harmony import */ var _Users_ravindra_Misc_apos_app_node_modules_apostrophe_modules_apostrophecms_video_widget_ui_src_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/apostrophe/modules/@apostrophecms/video-widget/ui/src/index.js */ "./node_modules/apostrophe/modules/@apostrophecms/video-widget/ui/src/index.js");
/* harmony import */ var _Users_ravindra_Misc_apos_app_modules_asset_ui_src_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/asset/ui/src/index.js */ "./modules/asset/ui/src/index.js");
/* harmony import */ var _Users_ravindra_Misc_apos_app_node_modules_apostrophe_modules_apostrophecms_image_widget_ui_src_index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/apostrophe/modules/@apostrophecms/image-widget/ui/src/index.scss */ "./node_modules/apostrophe/modules/@apostrophecms/image-widget/ui/src/index.scss");
/* harmony import */ var _Users_ravindra_Misc_apos_app_modules_asset_ui_src_index_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/asset/ui/src/index.scss */ "./modules/asset/ui/src/index.scss");
(function() {
    window.apos = window.apos || {};
    var data = document.body && document.body.getAttribute('data-apos');
    Object.assign(window.apos, JSON.parse(data || '{}'));
    if (data) {
      document.body.removeAttribute('data-apos');
    }
    if (window.apos.modules) {
      for (const module of Object.values(window.apos.modules)) {
        if (module.alias) {
          window.apos[module.alias] = module;
        }
      }
    }
})();















(0,_Users_ravindra_Misc_apos_app_node_modules_apostrophe_modules_apostrophecms_util_ui_src_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_Users_ravindra_Misc_apos_app_node_modules_apostrophe_modules_apostrophecms_admin_bar_ui_src_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_Users_ravindra_Misc_apos_app_node_modules_apostrophe_modules_apostrophecms_video_widget_ui_src_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_Users_ravindra_Misc_apos_app_modules_asset_ui_src_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
/******/ })()
;
//# sourceMappingURL=src-build.js.map