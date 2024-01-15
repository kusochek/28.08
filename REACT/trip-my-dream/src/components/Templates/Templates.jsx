import { Grid } from '@mui/material';
import React from 'react';
import Header from '../Header/Header';
import Countries from '../../pages/Countries/Countries';
import SideBar from '../SideBar/SideBar';

const Templates = () => (
  <Grid container>
    <Grid item xs={12}>
      <Header />
    </Grid>
    <Grid item xs={3}>
      <SideBar />
    </Grid>
    <Grid item xs={9}>
      <Countries />
    </Grid>
  </Grid>
);

export default Templates;
