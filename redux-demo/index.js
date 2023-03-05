const CAKE_ORDERED = "CAKE_ODERED";

function orderCake() {
  return {
    type: CAKE_ORDERED,
    quantity: 1,
  };
}

const initialState = {
    numOfCake: 10
}



// (previouSate, action) => newState

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case CAKE_ORDERED:
            return {
                numOfCake: state.numOfCake - 1,
            }
        default: 
            return state
    }
}