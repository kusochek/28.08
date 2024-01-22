import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Favorite from '../../pages/Favorite/Favorite';
import CreateNewTrip from '../../pages/CreateNewTrip/CreateNewTrip';

const TripMyDreamRoutes = () => (
  <Routes>
    <Route path='/favorite' element={<Favorite />} />
    <Route path='/new' element={<CreateNewTrip />} />
  </Routes>
);

export default TripMyDreamRoutes;
