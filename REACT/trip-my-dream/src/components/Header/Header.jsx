import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HeaderTitle, HeaderWrapper } from './styled';

const Header = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <HeaderWrapper>
      <HeaderTitle onClick={handleClick}>
        Trip My Dream
      </HeaderTitle>
    </HeaderWrapper>
  );
};

export default Header;
