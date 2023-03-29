import React, { useState } from "react";
import { Button, Form, Grid, Header, Segment, Image } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "./LoginForm.css";
import Logo from "../../img/logo.jpeg";

export default function LoginForm() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

 const handleSubmit = (event) => {
  event.preventDefault()

  let Username = event.target.Username.value;
  let Password = event.target.Password.value;

  const userSession = {
    Username: Username,
    Password: Password
  };

  localStorage.setItem('userSession', JSON.stringify(userSession));
  
 }

  return (
    <div className="body-login">
      <div className="contenedor-login">
        <Segment stacked>
          <Image src={Logo} alt="Logo" width="350" className="centered" />
          <Grid style={{ height: "40%" }} verticalAlign="middle">
            <Grid.Column style={{ minWidth: 450 }}>
              <Header color="teal" textAlign="center"></Header>
              <Form size="large" onSubmit={handleSubmit}> 
                <span>Usuario:</span>
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="Usuario"
                  name='Username'
                  value={username}
                  onChange={({target}) => setUsername(target.value)}
                />
                <span>Contraseña:</span>
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Contraseña"
                  type="password"
                  name='Password'
                  value={password}
                  onChange={({target}) => setPassword(target.value)}
                />

                <Button color="teal" fluid size="large">
                  Iniciar Sesión
                </Button>
              </Form>
            </Grid.Column>
          </Grid>
        </Segment>
      </div>
    </div>
  );
}
