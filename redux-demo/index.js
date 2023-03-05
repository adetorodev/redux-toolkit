const redux = require("redux");

const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;

const CAKE_ORDERED = "CAKE_ODERED";
const CAKE_RESTORED = "CAKE_RESTORED";
const ICECREAM_ORDERED = "ICECREAM_ODERED";
const ICECREAM_RESTORED = "ICECREAM_RESTORED";

function orderCake() {
  return {
    type: CAKE_ORDERED,
    payload: 1,
  };
}

function restoredCake(qty = 1) {
  return {
    type: CAKE_RESTORED,
    payload: qty,
  };
}

function oderedIcecream(qty = 1) {
  return {
    type: ICECREAM_ORDERED,
    payload: qty,
  };
}

function restoredIcrecream(qty = 1) {
  return {
    type: ICECREAM_RESTORED,
    payload: qty,
  };
}

const initialState = {
  numOfCake: 10,
  numOfIcecream: 20,
};

// (previouSate, action) => newState

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCake: state.numOfCake - 1,
      };
    case CAKE_RESTORED:
      return {
        ...state,
        numOfCake: state.numOfCake + action.payload,
      };
    case ICECREAM_ORDERED:
      return {
        ...state,
        numOfIcecream: state.numOfIcecream - 1,
      };
    case ICECREAM_RESTORED:
      return {
        ...state,
        numOfIcecream: state.numOfIcecream + action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);
console.log("initial state", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("Update state", store.getState())
);

// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(restoredCake(3));

const actions = bindActionCreators({ orderCake, restoredCake, oderedIcecream, restoredIcrecream }, store.dispatch);
actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.restoredCake(5);
actions.oderedIcecream()
actions.oderedIcecream()
actions.restoredIcrecream(8)
unsubscribe();

//  nothing happens
// store.dispatch(orderCake());
// store.dispatch(orderCake());
