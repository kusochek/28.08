import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Templates from './components/Templates/Templates';
import NotFound from './pages/NotFound/NotFound';
import Countries from './pages/Countries/Countries';
import TripMyDreamRoutes from './components/Routes/TripMyDreamRoutes';
import CountryDetails from './pages/CountryDetails/CountryDetails';

function App() {
  const [searchValue, setsearchValue] = useState('');

  const handleInputChange = (event) => {
    setsearchValue(event.target.value);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<NotFound />} />
        <Route element={<Templates handleInputChange={handleInputChange} />}>
          <Route path='/' element={<Countries searchValue={searchValue} />} />
          <Route path='/country/:countryId' element={<CountryDetails />} />
          <Route path='/tripmydream/*' element={<TripMyDreamRoutes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
