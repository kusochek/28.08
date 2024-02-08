import React, { useEffect, useMemo } from 'react';
import { CircularProgress } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import CardItem from '../../components/Card/Card';
import { CountriesWrapper } from './styled';
import { countriesThunk } from '../../store/sources/countries';

const Countries = () => {
  const {
    countries, loading, error, filter,
  } = useSelector((state) => state.countriesReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(countriesThunk.fetchCountries());
  }, [dispatch]);

  const filteredCountries = useMemo(
    () => countries?.filter((country) => country.country.toLowerCase().indexOf(filter.toLowerCase()) !== -1),
    [countries, filter],
  );

  if (loading) return <CircularProgress />;
  if (error) return <h2>Oops... Something gonna wrong!</h2>;

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
