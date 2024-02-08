import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Favorite from '../../pages/Favorite/Favorite';
import CreateNewTrip from '../../pages/CreateNewTrip/CreateNewTrip';
import FormikForm from '../Formik/FormikForm';

const TripMyDreamRoutes = () => (
  <Routes>
    <Route path='/favorite' element={<Favorite />} />
    <Route path='/new' element={<CreateNewTrip />} />
    <Route path='/formik' element={<FormikForm />} />
  </Routes>
);

export default TripMyDreamRoutes;
