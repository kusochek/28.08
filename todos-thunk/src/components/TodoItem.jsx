import React from 'react';
import { Divider, ListItem, ListItemIcon, ListItemSecondaryAction, ListItemText } from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';

const TodoItem = ({ todo, handleDeleteActionClick, handleItemClick }) => (
  <>
    <ListItem button onClick={handleItemClick}>
      <ListItemIcon>
        {todo.completed ? <CheckIcon /> : <CheckBoxOutlineBlankIcon />}
      </ListItemIcon>
      <ListItemText primary={todo.title} />
      <ListItemSecondaryAction onClick={handleDeleteActionClick}>
        <DeleteIcon />
      </ListItemSecondaryAction>
    </ListItem>
    <Divider />
  </>
);

export default TodoItem
