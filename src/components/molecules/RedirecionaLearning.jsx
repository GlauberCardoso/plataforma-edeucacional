import React from 'react';
import {Link } from 'react-router-dom';
import { Dialog, DialogContent, DialogTitle, Button } from '@mui/material';

export default function VerificacaoDialog(props) {
  const { open, handleClose } = props;
  const handleButtonClick = () => {
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Verificação bem-sucedida!</DialogTitle>
      <DialogContent>
        <p>Clique no botão abaixo para ser direcionado para o seu ambiente de aprendizado.</p>
          <Link to="/aprendizado" style={{ textDecoration: 'none' }}>
            <Button variant="contained" color="primary" onClick={handleButtonClick}>Confirma</Button>
          </Link>
      </DialogContent>
    </Dialog>
  );
}