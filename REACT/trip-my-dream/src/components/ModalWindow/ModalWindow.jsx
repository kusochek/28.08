import { Modal } from '@mui/material';
import React from 'react';

const ModalWindow = ({ children, isOpen, handleClose }) => (
  <Modal
    open={isOpen}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    {children}
  </Modal>
);

export default ModalWindow;
