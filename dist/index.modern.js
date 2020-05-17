import React, { createContext, useContext, useState, useEffect, useReducer } from 'react';

const initialContext = {
  advertisers: [],
  registerAdd: () => {},
  addConversion: () => {}
};
const AppContext = createContext(initialContext);

var styles = {"add":"_styles-module__add__2cHmE","add_label":"_styles-module__add_label__3Ye3t","add_img":"_styles-module__add_img__uRz1r","img_placeholder":"_styles-module__img_placeholder__26Ljj"};

const getAdvertisers = async (count, exclude, clientId) => {
  console.log('exclude', exclude);
  const response = await fetch(`${"http://localhost:3001"}/advertisers?count=${count}&clientId=${clientId}`);
  return response.json();
};
const getAdvertise = async (advertiser, size) => {
  const response = await fetch(`${"http://localhost:3001"}/advertisers/${advertiser}/advertise?size=${size}&random=true`);
  return response.json();
};
const recordConversions = async (uid, clientId) => {
  const response = await fetch(`${"http://localhost:3001"}/advertise/${uid}/conversion`, {
    method: 'POST',
    body: JSON.stringify({
      clientId
    })
  });
  return response.ok;
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

  const fetchAdvertise = async advertiserAddMapping => {
    try {
      const {
        advertiser
      } = advertiserAddMapping;
      const response = await getAdvertise(advertiser, size);
      setAddInfo(response);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    const key = props.addKey || `${Math.floor(Math.random() * 1000000)}`;
    registerAdd(key);
    setKey(key);
  }, []);
  useEffect(() => {
    const advertiser = advertisers.find(a => a.addKey === key);

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
    src: `https://via.placeholder.com/${dimension.width}x${dimension.height}.png?text=AD`
  }) : null, addInfo && React.createElement("img", {
    decoding: "async",
    onLoad: () => setImageLoaded(true),
    className: styles.add_img,
    src: addInfo.img,
    alt: addInfo.title,
    style: {
      visibility: imageLoaded ? 'visible' : 'hidden'
    },
    "data-test-id": "add-block-img"
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
      await recordConversions(uid, clientId);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchAdvisers = async addSlots => {
    try {
      const availableAdvertisers = await getAdvertisers(addSlots.length, advertisers, clientId);
      const advertisersMapToAdd = availableAdvertisers.map((a, index) => {
        return {
          advertiser: a,
          addKey: addSlots[index]
        };
      });
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
  }, []);
  useEffect(() => {
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
