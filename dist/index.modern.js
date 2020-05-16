import React, { createContext, useContext, useState, useEffect, useReducer } from 'react';

const initialContext = {
  advertisers: [],
  registerAdd: () => {},
  addConversion: () => {}
};
const AppContext = createContext(initialContext);

var styles = {"add":"_styles-module__add__2cHmE","add_label":"_styles-module__add_label__3Ye3t","add_img":"_styles-module__add_img__uRz1r","img_placeholder":"_styles-module__img_placeholder__26Ljj"};

const advertisers = [{
  advertiser: 'add1'
}, {
  advertiser: 'add2'
}];
const adds = {
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
const getAdvertisers = (count, exclude) => {
  console.log(count, exclude);
  return Promise.resolve(advertisers);
};
const getAdvertise = (advertiserInfo, size) => {
  console.log(size);
  return Promise.resolve(adds[advertiserInfo.advertiser]);
};
const recordConversions = uid => {
  console.log(uid);
  return Promise.resolve();
};

const ADD_DIMENSION = {
  banner: {
    width: 468,
    height: 60
  }
};

const Add = props => {
  const {
    registerAdd,
    advertisers,
    addConversion
  } = useContext(AppContext);
  const [key, setKey] = useState();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [addInfo, setAddInfo] = useState();
  const {
    size
  } = props;
  const dimension = ADD_DIMENSION[size];

  const onAddClicked = () => {
    addInfo && addConversion(addInfo.uid);
  };

  const fetchAdvertise = async advertiser => {
    try {
      const response = await getAdvertise(advertiser, size);
      setAddInfo(response);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    const key = `${Math.floor(Math.random() * 1000000)}`;
    registerAdd(key);
    setKey(key);
  }, []);
  useEffect(() => {
    const advertiser = advertisers.find(a => a.addKey === key);

    if (advertiser && !addInfo) {
      fetchAdvertise(advertiser);
    }
  }, [advertisers]);
  return React.createElement("a", {
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
  }, imageLoaded && React.createElement("span", {
    className: styles.add_label
  }, "Ad"), !imageLoaded ? React.createElement("img", {
    src: `https://via.placeholder.com/${dimension.width}x${dimension.height}.png?text=AD`
  }) : null, addInfo && React.createElement("img", {
    onLoad: () => setImageLoaded(true),
    className: styles.add_img,
    src: addInfo.img,
    alt: addInfo.title,
    style: {
      visibility: imageLoaded ? 'visible' : 'hidden'
    }
  }));
};

var AppReducer = ((state, action) => {
  const {
    type,
    payload
  } = action;

  switch (type) {
    case 'GET_ADVERTISER_REQUEST':
      return { ...state,
        addSlots: [...state.addSlots, payload]
      };

    case 'SET_ADVERTISERS':
      return { ...state,
        advertisers: [...state.advertisers, ...action.payload],
        addSlots: []
      };

    default:
      return state;
  }
});

const initialState = {
  advertisers: [],
  addSlots: []
};

const AddProvider = ({
  clientId,
  children
}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const {
    advertisers,
    addSlots
  } = state;

  const registerAdd = key => {
    dispatch({
      type: 'GET_ADVERTISER_REQUEST',
      payload: key
    });
  };

  const addConversion = async uid => {
    try {
      await recordConversions(uid);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchAdvisers = async addSlots => {
    try {
      const availableAdvertisers = await getAdvertisers(addSlots.length, advertisers.map(a => a.advertiser));
      const advertisersMapToAdd = availableAdvertisers.map((a, index) => {
        return { ...a,
          addKey: addSlots[index]
        };
      });
      console.log(advertisersMapToAdd);
      dispatch({
        type: 'SET_ADVERTISERS',
        payload: advertisersMapToAdd
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (!clientId) {
      console.error('clientId is required.');
    }

    if (clientId && addSlots.length > 0) {
      fetchAdvisers(addSlots);
    }
  }, [addSlots]);
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
