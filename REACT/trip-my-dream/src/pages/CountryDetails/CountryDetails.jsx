import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import api from '../../api/services/countries';
import { CountryWrapper } from './styled';

const CountryDetails = () => {
  const { countryId } = useParams();
  const [loading, setLoading] = useState(true);
  const [country, setCountry] = useState();

  const fetchCountry = useCallback(async () => {
    try {
      const countryResponse = await api.countryApi.fetch(countryId);

      setCountry(countryResponse);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [countryId]);

  useEffect(() => {
    fetchCountry();
  }, [fetchCountry]);

  if (loading) return <CircularProgress />;

  return (
    <CountryWrapper>
      <img src={country.image} alt={country.country} />
      <h1>{country.country}</h1>
      <p>{country.description}</p>
    </CountryWrapper>
  );
};

export default CountryDetails;
