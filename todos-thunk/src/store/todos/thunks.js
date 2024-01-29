import api from '../../api';

export const FETCH_TODOS = 'FETCH_TODOS';
export const UPDATE_TODO = 'UPDATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const CREATE_TODO = 'CREATE_TODO';

// action creator
export const fetchTodosAction = (payload) => ({
  type: FETCH_TODOS,
  payload,
});

export const updateTodoAction = (payload) => ({
  type: UPDATE_TODO,
  payload,
});

export const deleteTodoAction = (payload) => ({
  type: DELETE_TODO,
  payload,
});

export const createTodoAction = (payload) => ({
  type: CREATE_TODO,
  payload,
});


// thunks
export const fetchTodosThunk = () => {
  return async (dispatch) => {
    api.fetch().then((todos) => {
      dispatch(fetchTodosAction(todos));
    });
  }
};

export const updateTodoThunk = (id, params) => {
  return async (dispatch) => {
    api.update(id, params).then((todo) => {
      dispatch(updateTodoAction(todo));
    });
  }
};

export const deleteTodoThunk = (id) => {
  return async (dispatch) => {
    api.delete(id).then(() => {
      dispatch(deleteTodoAction(id));
    });
  }
};

export const createTodoThunk = (newTodo) => {
  return async (dispatch) => {
    api.create(newTodo).then((data) => {
      dispatch(createTodoAction(data));
    });
  };
};
