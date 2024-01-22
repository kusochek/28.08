import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledSidebarWrapper = styled.div`
  box-shadow: #a1c1e8 1.95px 1.95px 2.6px;
  height: calc(100vh - 120px);
  width: 100%;
  padding: 50px 20px;
`;

export const StyledFieldWrapper = styled.div`
  margin-bottom: 20px;
`;

export const StyledLink = styled(Link)`
  display: block;
  color: #072a55;
  font-size: 30px;
  margin-bottom: 20px;
`;
