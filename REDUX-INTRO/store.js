import redux from 'redux';

// ACTION TYPES
const COUNT_ACTION_INC = 'COUNT_ACTION_INC';
const COUNT_ACTION_DEC = 'COUNT_ACTION_DEC';
const COUNT_ACTION_SET = 'COUNT_ACTION_SET';

// ACTION CREATORS
const actionInc = () => ({ type: COUNT_ACTION_INC });
const actionDec = () => ({ type: COUNT_ACTION_DEC });
const actionSet = (payload) => ({ type: COUNT_ACTION_SET, payload });

const initialState = {
  count: 0,
  todos: [],
  isLoading: true,
};

const store = redux.createStore(reducer, initialState);

// reducer
function reducer(state, { type, payload }) {
  switch (type) {
    case COUNT_ACTION_INC: 
      return { ...state, count: state.count + 1 };
    case COUNT_ACTION_DEC:
      return { ...state, count: state.count - 1 };
    case COUNT_ACTION_SET:
      return { ...state, count: payload };
    default:
      return state;
  }
}

// dispatchers
console.log(store.getState());
store.dispatch(actionInc());
console.log(store.getState());
store.dispatch(actionInc());
console.log(store.getState());
store.dispatch(actionDec());
console.log(store.getState());
store.dispatch(actionSet(10));
console.log(store.getState());
store.dispatch(actionSet(9));
console.log(store.getState());
