import { Grid, Form, Button, Icon, Table, Card } from "semantic-ui-react";
import "./Reporteria.css";

export default function Reporteria() {
  function back() {
    window.history.back();
  }
  return (
    <div className="reporteria-data-grid">
      <Grid columns="three">
        <Grid.Row>
          <Grid.Column width={3} textAlign="center">
            <div>
              <Button
                icon
                labelPosition="left"
                color="teal"
                size="large"
                onClick={back}
              >
                <Icon name="arrow left" />
                Atras
              </Button>
            </div>
          </Grid.Column>
          <Grid.Column textAlign="center" width={10}>
            <div className="text-container-compra">
              <span>
                <Icon name="file outline" />
                <b> Reportes</b>
              </span>
            </div>
          </Grid.Column>
          <Grid.Column width={3}></Grid.Column>
        </Grid.Row>
      </Grid>
      <div className="container">
        <Grid columns="five">
          <Grid.Row>
            <Grid.Column>
              <Card
                className="card"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 10,
                  borderRadius: 10,
                  on: "hover",
                }}
                name="reporteria"
              >
                <Icon
                  bordered
                  name="file pdf outline"
                  size="huge"
                  color="red"
                />
                <Card.Content>
                  <Card.Header>
                    <Icon name="cloud download" /> Reportería
                  </Card.Header>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column>
              <Card
                className="card"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 10,
                  borderRadius: 10,
                  on: "hover",
                }}
                name="reporteria"
              >
                <Icon
                  bordered
                  name="file pdf outline"
                  size="huge"
                  color="red"
                />
                <Card.Content>
                  <Card.Header>
                    <Icon name="cloud download" /> Reportería
                  </Card.Header>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column>
              <Card
                className="card"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 10,
                  borderRadius: 10,
                  on: "hover",
                }}
                name="reporteria"
              >
                <Icon
                  bordered
                  name="file excel outline"
                  size="huge"
                  color="green"
                />
                <Card.Content>
                  <Card.Header>
                    <Icon name="cloud download" /> Reportería
                  </Card.Header>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column>
              <Card
                className="card"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 10,
                  borderRadius: 10,
                  on: "hover",
                }}
                name="reporteria"
              >
                <Icon
                  bordered
                  name="file pdf outline"
                  size="huge"
                  color="red"
                />
                <Card.Content>
                  <Card.Header>
                    <Icon name="cloud download" /> Reportería
                  </Card.Header>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column>
              <Card
                className="card"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 10,
                  borderRadius: 10,
                  on: "hover",
                }}
                name="reporteria"
              >
                <Icon
                  bordered
                  name="file excel outline"
                  size="huge"
                  color="green"
                />
                <Card.Content>
                  <Card.Header>
                    <Icon name="cloud download" /> Reportería
                  </Card.Header>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Grid columns="five">
          <Grid.Row>
            <Grid.Column>
              <Card
                className="card"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 10,
                  borderRadius: 10,
                  on: "hover",
                }}
                name="reporteria"
              >
                <Icon
                  bordered
                  name="file excel outline"
                  size="huge"
                  color="green"
                />
                <Card.Content>
                  <Card.Header>
                    <Icon name="cloud download" /> Reportería
                  </Card.Header>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column>
              <Card
                className="card"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 10,
                  borderRadius: 10,
                  on: "hover",
                }}
                name="reporteria"
              >
                <Icon
                  bordered
                  name="file excel outline"
                  size="huge"
                  color="green"
                />
                <Card.Content>
                  <Card.Header>
                    <Icon name="cloud download" /> Reportería
                  </Card.Header>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column></Grid.Column>
            <Grid.Column></Grid.Column>
            <Grid.Column></Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </div>
  );
}
