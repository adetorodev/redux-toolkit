const redux = require("redux");

const createStore = redux.createStore;

const CAKE_ORDERED = "CAKE_ODERED";
const CAKE_RESTORED = "CAKE_RESTORED";

function orderCake() {
  return {
    type: CAKE_ORDERED,
    payload: 1,
  };
}

function restoredCake(qty =1) {
    return {
      type: CAKE_RESTORED,
      payload: qty,
    };
  }

const initialState = {
  numOfCake: 10,
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
        numOfCake: state.numOfCake + action.payload
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

store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(restoredCake(3));

unsubscribe();


//  nothing happens
// store.dispatch(orderCake());
// store.dispatch(orderCake());
