import React from 'react';
import { TextField } from '@mui/material';
import { StyledFieldWrapper, StyledLink, StyledSidebarWrapper } from './styled';

const SideBar = ({ handleInputChange }) => (
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
  </StyledSidebarWrapper>
);

export default SideBar;
