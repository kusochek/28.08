import { Button, styled } from '@mui/material';
import React from 'react';

const StyledButton = styled(Button)(({ theme }) => ({
  marginRight: theme.spacing(2),
}));

const FilterButton = ({ changeFilter, currentFilter, filterName }) => (
  <StyledButton
    variant={filterName === currentFilter ? 'contained' : 'outlined'}
    onChange={() => changeFilter(filterName)}
  >
    {filterName}
  </StyledButton>
);

export default FilterButton;
