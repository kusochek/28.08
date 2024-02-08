import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Templates from './components/Templates/Templates';
import NotFound from './pages/NotFound/NotFound';
import Countries from './pages/Countries/Countries';
import TripMyDreamRoutes from './components/Routes/TripMyDreamRoutes';
import CountryDetails from './pages/CountryDetails/CountryDetails';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<NotFound />} />
          <Route element={<Templates />}>
            <Route path='/' element={<Countries />} />
            <Route path='/country/:countryId' element={<CountryDetails />} />
            <Route path='/tripmydream/*' element={<TripMyDreamRoutes />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
