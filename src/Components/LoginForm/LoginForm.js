import { Button, Form, Grid, Header, Segment, Image } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "./LoginForm.css";
import Logo from "../../img/logo.jpeg";

export default function LoginForm() {
  return (
    <div className="body-login">
      <div className="contenedor-login">
        <Segment stacked>
          <Image src={Logo} alt="Logo" width="350" className="centered" />
          <Grid style={{ height: "40%" }} verticalAlign="middle">
            <Grid.Column style={{ minWidth: 450 }}>
              <Header color="teal" textAlign="center"></Header>
              <Form size="large">
                <span>Usuario:</span>
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="Usuario"
                />
                <span>Contraseña:</span>
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Contraseña"
                  type="password"
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
