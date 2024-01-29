import { Button, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTodoThunk } from '../store/todos/thunks';

const TodoForm = () => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({ title: '' });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const clearForm = () => {
    setValues({ title: '' });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    const params = {
      title: values.title,
      completed: false,
    };

    dispatch(createTodoThunk(params));
    clearForm();
  };

  return (
    <form autoComplete="off" onSubmit={onFormSubmit}>
      <Grid container spacing={3}>
        <Grid item xs={10}>
          <TextField
            label="Title"
            name="title"
            value={values.title}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            size="small"
          />
        </Grid>
        <Grid item xs={2}>
          <Button type="submit" variant="contained" size="medium">
            Add
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default TodoForm;
