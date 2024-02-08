import React from 'react';
import { TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { StyledFieldWrapper, StyledLink, StyledSidebarWrapper } from './styled';
import { countriesAction } from '../../store/sources/countries';

const SideBar = () => {
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    dispatch(countriesAction.filterAction(event.target.value));
  };

  return (
    <StyledSidebarWrapper>
      <StyledFieldWrapper>
        <TextField
          fullWidth
          variant='outlined'
          label='Search Trip'
          placeholder='Search...'
          onChange={handleInputChange}
        />
      </StyledFieldWrapper>
      <StyledLink to={'/tripmydream/favorite'}>Favorite</StyledLink>
      <StyledLink to={'/tripmydream/new'}>Create new</StyledLink>
      <StyledLink to={'/tripmydream/formik'}>Formik</StyledLink>
    </StyledSidebarWrapper>
  );
};

export default SideBar;
