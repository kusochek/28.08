import { Button, FormGroup, FormControl } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { tripRules } from '../../constants/rules';
import InputText from '../../components/FormElements/InputText';
import { FormControlWrapper } from './styled';
import api from '../../api/services/countries';

const CreateNewTrip = () => {
  const { control, handleSubmit } = useForm();

  const onSubmit = async (values) => {
    await api.countryApi.create(values);
  };

  return (
    <FormControlWrapper>
      <FormControl>
        <FormGroup>
          <InputText control={control} name='country' rules={tripRules.country} label='Country' />
          <InputText control={control} name='city' rules={tripRules.city} label='City' />
          <InputText control={control} name='image' rules={tripRules.image} label='Image' />
          <InputText control={control} name='description' rules={tripRules.description} label='Description' />
        </FormGroup>
        <Button variant='outline' onClick={handleSubmit(onSubmit)}>Create</Button>
      </FormControl>
    </FormControlWrapper>
  );
};

export default CreateNewTrip;
