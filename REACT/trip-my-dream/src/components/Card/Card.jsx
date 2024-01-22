import {
  Button, CardActions, CardContent, CardMedia, Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CardWrapper, DescriptionTypography } from './styled';
import ModalWindow from '../ModalWindow/ModalWindow';
import BaseModal from '../BaseModal/BaseModal';

const CardItem = ({
  id, image, title, description,
}) => {
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const handleGoToDetails = () => {
    navigate(`/country/${id}`);
  };

  return (
    <>
      <CardWrapper>
        <CardMedia
          sx={{ height: 140 }}
          image={image}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <DescriptionTypography variant="body2" color="text.secondary">
            {description}
          </DescriptionTypography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleOpenModal}>Details</Button>
          <Button size="small" onClick={handleGoToDetails}>Buy</Button>
        </CardActions>
      </CardWrapper>
      <ModalWindow isOpen={openModal} handleClose={handleCloseModal}>
        <BaseModal
          title={title}
          image={image}
          description={description}
          handleClose={handleCloseModal}
        />
      </ModalWindow>
    </>
  );
};

export default CardItem;
