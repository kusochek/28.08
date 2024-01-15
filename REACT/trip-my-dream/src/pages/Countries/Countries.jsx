import React, { useCallback, useEffect, useState } from 'react';
import CardItem from '../../components/Card/Card';
import { CountriesWrapper } from './styled';
import countriesApi from '../../api/services/countries';

const Countries = () => {
  const [countries, setCountries] = useState([]);

  const fetchCountries = useCallback(async () => {
    const countriesResponse = await countriesApi.fetch();

    setCountries(countriesResponse);
  }, []);

  useEffect(() => {
    fetchCountries();
  }, [fetchCountries]);

  return (
    <CountriesWrapper>
      {countries.map((country) => (
        <CardItem
          key={country.id}
          title={country.country}
          description={country.description}
          image={country.image}
        />
      ))}
    </CountriesWrapper>
  );
};

export default Countries;
