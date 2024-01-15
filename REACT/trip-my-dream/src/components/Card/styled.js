import { Card, Typography } from '@mui/material';
import styled from 'styled-components';

export const CardWrapper = styled(Card)`
  width: 350px;
`;

export const DescriptionTypography = styled(Typography)`
  max-height: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
`;
