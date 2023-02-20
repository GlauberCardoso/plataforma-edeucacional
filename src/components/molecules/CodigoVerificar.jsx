import React from "react";
import { Grid, OutlinedInput, Button } from "@mui/material";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";

import UserPool from "../pages/cadastro/UserPool";

export default function CodigoVerificar(props) {
  const [code, setCode] = React.useState();
  const { email, password } = props;

  const handleVerification = async (event) => {
    event.preventDefault();

    const user = new CognitoUser({ Username: email, Pool: UserPool });

    const authenticationDetails = new AuthenticationDetails({
      Username: email,
      Password: password,
    });

    user.authenticateUser(authenticationDetails, {
      onSuccess: function(result) {
        user.getAttributeVerificationCode("email", {
          onSuccess: function() {
            user.verifyAttribute('email', code, {
              onSuccess: function() {
                console.log("E-mail confirmado com sucesso");
              },
              onFailure: function(err) {
                console.log("Erro ao confirmar e-mail: ", err);
              }
            });
          },
          onFailure: function(err) {
            console.log("Erro ao enviar código de verificação: ", err);
          }
        });
      },
      onFailure: function(err) {
        console.log("Erro ao autenticar usuário: ", err);
      }
    });
  };

  return (
    <>
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
