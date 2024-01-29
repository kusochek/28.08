import { List } from '@mui/material';
import React, { useEffect } from 'react';
import TodoItem from './TodoItem';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodoThunk, fetchTodosThunk, updateTodoThunk } from '../store/todos/thunks';

const TodoList = () => {
  const { todos } = useSelector((state) => state.todosReducer);
  const dispatch = useDispatch();

  const fetchTodos = () => {
    dispatch(fetchTodosThunk());
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const deleteTodo = (id) => {
    dispatch(deleteTodoThunk(id));
  };

  const toggleTodo = (todo) => {
    dispatch(updateTodoThunk(todo.id, { ...todo, completed: !todo.completed }));
  };

  return (
    <List>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleDeleteActionClick={() => deleteTodo(todo.id)}
          handleItemClick={() => toggleTodo(todo)}
        />
      ))}
    </List>
  )
};

export default TodoList;
