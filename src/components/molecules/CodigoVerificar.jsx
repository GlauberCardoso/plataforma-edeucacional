import React from 'react';
import { Grid, OutlinedInput, Button } from '@mui/material';
import { CognitoUser } from "amazon-cognito-identity-js";

import UserPool from '../pages/cadastro/UserPool';

export default function CodigoVerificar(props) {
 const [code,setCode] = React.useState();
 const { email} = props;

 const handleVerification = async (event) => {
    event.preventDefault();

    const user = new CognitoUser({ Username: email, Pool: UserPool });

    user.confirmRegistration(code, true, (err, result) => {
      if (err) {
        console.log("Deu errado: ", err);
        alert("erro")
      } else {
        console.log("Deu certo: ", result);
        alert("foi")
      }
    });
  };

  return (
    <>
    <Grid item xs={12} onSubmit={handleVerification}>
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
                
                type="submit"
                fullWidth
                size="large"
                variant= "outlined"
                sx={{ mt: 4, mb: 3 }}
              >
                VERIFICAR
              </Button>
              </>
)};
