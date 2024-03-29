import { Grid } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
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
      <Outlet />
    </Grid>
  </Grid>
);

export default Templates;
