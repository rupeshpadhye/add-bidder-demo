import React, { createContext, useContext, useState, useEffect, useReducer } from 'react';

// A type of promise-like that resolves synchronously and supports only one observer
const _iteratorSymbol = /*#__PURE__*/typeof Symbol !== "undefined" ? Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator")) : "@@iterator"; // Asynchronously iterate through an object's values
const _asyncIteratorSymbol = /*#__PURE__*/typeof Symbol !== "undefined" ? Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator")) : "@@asyncIterator"; // Asynchronously iterate on a value using it's async iterator if present, or its synchronous iterator if missing

function _catch(body, recover) {
  try {
    var result = body();
  } catch (e) {
    return recover(e);
  }

  if (result && result.then) {
    return result.then(void 0, recover);
  }

  return result;
} // Asynchronously await a promise and pass the result to a finally continuation

var initialContext = {
  advertisers: [],
  registerAdd: function registerAdd() {},
  addConversion: function addConversion() {}
};
var AppContext = createContext(initialContext);

var styles = {"add":"_2cHmE","add_label":"_3Ye3t","add_img":"_uRz1r","img_placeholder":"_26Ljj"};

var getAdvertisers = function getAdvertisers(count, exclude, clientId) {
  try {
    console.log('exclude', exclude);
    return Promise.resolve(fetch("https://add-bidder-qbtzze4rda-de.a.run.app" + "/advertisers?count=" + count + "&clientId=" + clientId)).then(function (response) {
      return response.json();
    });
  } catch (e) {
    return Promise.reject(e);
  }
};
var getAdvertise = function getAdvertise(advertiser, size) {
  try {
    return Promise.resolve(fetch("https://add-bidder-qbtzze4rda-de.a.run.app" + "/advertisers/" + advertiser + "/advertise?size=" + size + "&random=true")).then(function (response) {
      return response.json();
    });
  } catch (e) {
    return Promise.reject(e);
  }
};
var recordConversions = function recordConversions(uid) {
  try {
    return Promise.resolve(fetch("https://add-bidder-qbtzze4rda-de.a.run.app" + "/advertise/" + uid + "/conversion", {
      method: 'POST'
    })).then(function (response) {
      return response.ok;
    });
  } catch (e) {
    return Promise.reject(e);
  }
};

var ADD_DIMENSION = {
  banner: {
    width: 468,
    height: 60
  }
};

var Add = function Add(props) {
  var _useContext = useContext(AppContext),
      registerAdd = _useContext.registerAdd,
      advertisers = _useContext.advertisers,
      addConversion = _useContext.addConversion;

  var _useState = useState(),
      key = _useState[0],
      setKey = _useState[1];

  var _useState2 = useState(false),
      imageLoaded = _useState2[0],
      setImageLoaded = _useState2[1];

  var _useState3 = useState(),
      addInfo = _useState3[0],
      setAddInfo = _useState3[1];

  var size = props.size;
  var dimension = ADD_DIMENSION[size];

  var onAddClicked = function onAddClicked() {
    addInfo && addConversion(addInfo.uid);
  };

  var fetchAdvertise = function fetchAdvertise(advertiserAddMapping) {
    try {
      var _temp2 = _catch(function () {
        var advertiser = advertiserAddMapping.advertiser;
        return Promise.resolve(getAdvertise(advertiser, size)).then(function (response) {
          setAddInfo(response);
        });
      }, function (e) {
        console.error(e);
      });

      return Promise.resolve(_temp2 && _temp2.then ? _temp2.then(function () {}) : void 0);
    } catch (e) {
      return Promise.reject(e);
    }
  };

  useEffect(function () {
    var key = props.addKey || "" + Math.floor(Math.random() * 1000000);
    registerAdd(key);
    setKey(key);
  }, []);
  useEffect(function () {
    var advertiser = advertisers.find(function (a) {
      return a.addKey === key;
    });

    if (advertiser && !addInfo) {
      fetchAdvertise(advertiser);
    }
  }, [advertisers, key]);
  return React.createElement("a", {
    className: styles.add,
    style: {
      width: dimension.width,
      height: dimension.height,
      display: 'inline-block'
    },
    id: key,
    href: addInfo && addInfo.url,
    target: '_blank',
    rel: 'noreferrer',
    onClick: onAddClicked,
    "data-test-id": "add-block"
  }, imageLoaded && React.createElement("span", {
    "data-test-id": "add-block-placeholder",
    className: styles.add_label
  }, "Ad"), !imageLoaded ? React.createElement("img", {
    "data-test-id": "add-block-dummy-image",
    decoding: "async",
    src: "https://via.placeholder.com/" + dimension.width + "x" + dimension.height + ".png?text=AD"
  }) : null, addInfo && React.createElement("img", {
    decoding: "async",
    onLoad: function onLoad() {
      return setImageLoaded(true);
    },
    className: styles.add_img,
    src: addInfo.img,
    alt: addInfo.title,
    style: {
      visibility: imageLoaded ? 'visible' : 'hidden'
    },
    "data-test-id": "add-block-img"
  }));
};

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var AppReducer = (function (state, action) {
  var type = action.type,
      payload = action.payload;

  switch (type) {
    case 'GET_ADVERTISER_REQUEST':
      return _extends(_extends({}, state), {}, {
        addSlots: [].concat(state.addSlots, [payload])
      });

    case 'SET_ADVERTISERS':
      return _extends(_extends({}, state), {}, {
        advertisers: [].concat(state.advertisers, action.payload),
        addSlots: []
      });

    default:
      return state;
  }
});

var initialState = {
  advertisers: [],
  addSlots: []
};

var AddProvider = function AddProvider(_ref) {
  var clientId = _ref.clientId,
      children = _ref.children;

  var _useReducer = useReducer(AppReducer, initialState),
      state = _useReducer[0],
      dispatch = _useReducer[1];

  var advertisers = state.advertisers,
      addSlots = state.addSlots;

  var registerAdd = function registerAdd(key) {
    dispatch({
      type: 'GET_ADVERTISER_REQUEST',
      payload: key
    });
  };

  var addConversion = function addConversion(uid) {
    try {
      var _temp2 = _catch(function () {
        return Promise.resolve(recordConversions(uid)).then(function () {});
      }, function (err) {
        console.log(err);
      });

      return Promise.resolve(_temp2 && _temp2.then ? _temp2.then(function () {}) : void 0);
    } catch (e) {
      return Promise.reject(e);
    }
  };

  var fetchAdvisers = function fetchAdvisers(addSlots) {
    try {
      var _temp4 = _catch(function () {
        return Promise.resolve(getAdvertisers(addSlots.length, advertisers, clientId)).then(function (availableAdvertisers) {
          var advertisersMapToAdd = availableAdvertisers.map(function (a, index) {
            return {
              advertiser: a,
              addKey: addSlots[index]
            };
          });
          dispatch({
            type: 'SET_ADVERTISERS',
            payload: advertisersMapToAdd
          });
        });
      }, function (err) {
        console.log(err);
      });

      return Promise.resolve(_temp4 && _temp4.then ? _temp4.then(function () {}) : void 0);
    } catch (e) {
      return Promise.reject(e);
    }
  };

  useEffect(function () {
    if (!clientId) {
      console.error('clientId is required.');
    }
  }, []);
  useEffect(function () {
    if (clientId && addSlots.length > 0) {
      fetchAdvisers(addSlots);
    }
  }, [addSlots, clientId]);
  return React.createElement("div", null, React.createElement(AppContext.Provider, {
    value: {
      advertisers: advertisers,
      registerAdd: registerAdd,
      addConversion: addConversion
    }
  }, children));
};

export { Add, AddProvider };
//# sourceMappingURL=index.modern.js.map
