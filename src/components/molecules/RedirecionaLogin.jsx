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
        <p>Seu registro foi confirmado com sucesso. Clique no botão abaixo para ser direcionado para a página de login.</p>
          <Link to="/login" style={{ textDecoration: 'none' }}>
            <Button variant="contained" color="primary" onClick={handleButtonClick}>Ir para a página de login</Button>
          </Link>
      </DialogContent>
    </Dialog>
  );
}
