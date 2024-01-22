import React, {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import { CircularProgress } from '@mui/material';
import CardItem from '../../components/Card/Card';
import { CountriesWrapper } from './styled';
import api from '../../api/services/countries';

const Countries = ({ searchValue }) => {
  const [loading, setLoading] = useState(true);
  const [countries, setCountries] = useState([]);

  const fetchCountries = useCallback(async () => {
    try {
      const countriesResponse = await api.countriesApi.fetch();

      setCountries(countriesResponse);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCountries();
  }, [fetchCountries]);

  const filteredCountries = useMemo(
    () => countries.filter((country) => country.country.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1),
    [countries, searchValue],
  );

  if (loading) return <CircularProgress />;

  return (
    <CountriesWrapper>
      {filteredCountries.map((country) => (
        <CardItem
          key={country.id}
          id={country.id}
          title={country.country}
          description={country.description}
          image={country.image}
        />
      ))}
    </CountriesWrapper>
  );
};

export default Countries;
