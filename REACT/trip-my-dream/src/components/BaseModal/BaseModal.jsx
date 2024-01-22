import { Typography } from '@mui/material';
import React from 'react';
import { DescriptionTypography } from '../Card/styled';
import { BaseModalWrapper, CloseWrapper } from './styled';

const BaseModal = ({
  title, image, description, handleClose,
}) => (
  <BaseModalWrapper>
    <CloseWrapper onClick={handleClose} className="close">
      <img src="/static/images/close.svg" alt="close" />
    </CloseWrapper>
    <img
      src={image}
      title={title}
    />
    <Typography gutterBottom variant="h5" component="div">
      {title}
    </Typography>
    <DescriptionTypography variant="body2" color="text.secondary">
      {description}
    </DescriptionTypography>
  </BaseModalWrapper>
);

export default BaseModal;
