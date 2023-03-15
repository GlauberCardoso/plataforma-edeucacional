import React from "react";
import { Grid, OutlinedInput, Button } from "@mui/material";
import { CognitoUser } from "amazon-cognito-identity-js";
import Redireciona from "./RedirecionaLogin";

import UserPool from "../pages/cadastro/UserPool";

export default function CodigoVerificar(props) {
  const [code, setCode] = React.useState();
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const { email } = props;

  const handleVerification = async (event) => {
    event.preventDefault();

    const user = new CognitoUser({ Username: email, Pool: UserPool });

    user.confirmRegistration(code, true, function (err, result) {
      if (err) {
        console.log("Erro ao confirmar usuário: ", err);
        return;
      }

      if (result === "SUCCESS") {
        console.log("Usuário confirmado com sucesso: ", result);
        setDialogOpen(true);
      } else {
        alert("Confirmação de registro falhou: ", result);
      }
    });
  };

  const handleClose = () => {
    setDialogOpen(false);
  };

  return (
    <>
      <Redireciona open={dialogOpen} handleClose={handleClose} />
      <Grid item xs={12}>
        <OutlinedInput
          required
          fullWidth
          name="code"
          placeholder="Código de Verificação"
          type="text"
          id="code"
          value={code}
          onChange={(event) => setCode(event.target.value)}
        />
      </Grid>
      <Button
        fullWidth
        size="large"
        variant="outlined"
        onClick={handleVerification}
        sx={{ mt: 4, mb: 3 }}
      >
        VERIFICAR
      </Button>
    </>
  );
}
