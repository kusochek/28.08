import { TextField } from '@mui/material';
import React from 'react';
import { Controller } from 'react-hook-form';

const InputText = ({
  control, name, rules, label, defaultValue = '', ...props
}) => (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          fullWidth
          label={label}
          error={!!error}
          helperText={error ? error.message : null}
          margin='normal'
          {...props}
        />
      )}
    />
);

export default InputText;
