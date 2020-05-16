function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

// A type of promise-like that resolves synchronously and supports only one observer

const _iteratorSymbol = /*#__PURE__*/ typeof Symbol !== "undefined" ? (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))) : "@@iterator";

const _asyncIteratorSymbol = /*#__PURE__*/ typeof Symbol !== "undefined" ? (Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator"))) : "@@asyncIterator";

// Asynchronously call a function and send errors to recovery continuation
function _catch(body, recover) {
	try {
		var result = body();
	} catch(e) {
		return recover(e);
	}
	if (result && result.then) {
		return result.then(void 0, recover);
	}
	return result;
}

var initialContext = {
  advertisers: [],
  registerAdd: function registerAdd() {},
  addConversion: function addConversion() {}
};
var AppContext = React.createContext(initialContext);

var styles = {"add":"_styles-module__add__2cHmE","add_label":"_styles-module__add_label__3Ye3t","add_img":"_styles-module__add_img__uRz1r","img_placeholder":"_styles-module__img_placeholder__26Ljj"};

var advertisers = [{
  advertiser: 'add1'
}, {
  advertiser: 'add2'
}];
var adds = {
  add1: {
    uid: 'uid-1',
    img: 'https://firebasestorage.googleapis.com/v0/b/renteasy-3ce44.appspot.com/o/1000-1.jpg?alt=media&token=9350dae5-990c-43a1-99ee-594d74533b39',
    url: 'https://www.amazon.com/Rupesh-Padhye-Rent-Easy/dp/B01M5IDOYG/ref=sr_1_1?s=mobile-apps&ie=UTF8&qid=1530965429&sr=1-1&keywords=rent+easy'
  },
  add2: {
    uid: 'uid-1',
    img: 'https://firebasestorage.googleapis.com/v0/b/renteasy-3ce44.appspot.com/o/1000-3.jpg?alt=media&token=0a737b2b-98a8-44da-91bc-41dd21d2b906',
    url: 'https://www.amazon.com/Rupesh-Padhye-Rent-Easy/dp/B01M5IDOYG/ref=sr_1_1?s=mobile-apps&ie=UTF8&qid=1530965429&sr=1-1&keywords=rent+easy'
  },
  add3: {
    uid: 'uid-1',
    img: 'https://firebasestorage.googleapis.com/v0/b/renteasy-3ce44.appspot.com/o/1000-3.jpg?alt=media&token=0a737b2b-98a8-44da-91bc-41dd21d2b906',
    url: 'https://www.amazon.com/Rupesh-Padhye-Rent-Easy/dp/B01M5IDOYG/ref=sr_1_1?s=mobile-apps&ie=UTF8&qid=1530965429&sr=1-1&keywords=rent+easy'
  }
};
var getAdvertisers = function getAdvertisers(count, exclude) {
  console.log(count, exclude);
  return Promise.resolve(advertisers);
};
var getAdvertise = function getAdvertise(advertiserInfo, size) {
  console.log(size);
  return Promise.resolve(adds[advertiserInfo.advertiser]);
};
var recordConversions = function recordConversions(uid) {
  console.log(uid);
  return Promise.resolve();
};

var ADD_DIMENSION = {
  banner: {
    width: 468,
    height: 60
  }
};

var Add = function Add(props) {
  var _useContext = React.useContext(AppContext),
      registerAdd = _useContext.registerAdd,
      advertisers = _useContext.advertisers,
      addConversion = _useContext.addConversion;

  var _useState = React.useState(),
      key = _useState[0],
      setKey = _useState[1];

  var _useState2 = React.useState(false),
      imageLoaded = _useState2[0],
      setImageLoaded = _useState2[1];

  var _useState3 = React.useState(),
      addInfo = _useState3[0],
      setAddInfo = _useState3[1];

  var size = props.size;
  var dimension = ADD_DIMENSION[size];

  var onAddClicked = function onAddClicked() {
    addInfo && addConversion(addInfo.uid);
  };

  var fetchAdvertise = function fetchAdvertise(advertiser) {
    try {
      var _temp2 = _catch(function () {
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

  React.useEffect(function () {
    var key = "" + Math.floor(Math.random() * 1000000);
    registerAdd(key);
    setKey(key);
  }, []);
  React.useEffect(function () {
    var advertiser = advertisers.find(function (a) {
      return a.addKey === key;
    });

    if (advertiser && !addInfo) {
      fetchAdvertise(advertiser);
    }
  }, [advertisers]);
  return React__default.createElement("a", {
    className: styles.add,
    style: {
      width: dimension.width,
      height: dimension.height,
      display: 'inline-block'
    },
    key: key,
    href: addInfo && addInfo.url,
    target: '_blank',
    rel: 'noreferrer',
    onClick: onAddClicked
  }, imageLoaded && React__default.createElement("span", {
    className: styles.add_label
  }, "Ad"), !imageLoaded ? React__default.createElement("img", {
    src: "https://via.placeholder.com/" + dimension.width + "x" + dimension.height + ".png?text=AD"
  }) : null, addInfo && React__default.createElement("img", {
    onLoad: function onLoad() {
      return setImageLoaded(true);
    },
    className: styles.add_img,
    src: addInfo.img,
    alt: addInfo.title,
    style: {
      visibility: imageLoaded ? 'visible' : 'hidden'
    }
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

  var _useReducer = React.useReducer(AppReducer, initialState),
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
        return Promise.resolve(getAdvertisers(addSlots.length, advertisers.map(function (a) {
          return a.advertiser;
        }))).then(function (availableAdvertisers) {
          var advertisersMapToAdd = availableAdvertisers.map(function (a, index) {
            return _extends(_extends({}, a), {}, {
              addKey: addSlots[index]
            });
          });
          console.log(advertisersMapToAdd);
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

  React.useEffect(function () {
    if (!clientId) {
      console.error('clientId is required.');
    }

    if (clientId && addSlots.length > 0) {
      fetchAdvisers(addSlots);
    }
  }, [addSlots]);
  return React__default.createElement("div", null, React__default.createElement(AppContext.Provider, {
    value: {
      advertisers: advertisers,
      registerAdd: registerAdd,
      addConversion: addConversion
    }
  }, children));
};

exports.Add = Add;
exports.AddProvider = AddProvider;
//# sourceMappingURL=index.js.map
