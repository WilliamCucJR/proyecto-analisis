import { useState } from "react";
import React from "react";
import { useNavigate, useLocation } from "react-router";
import { Grid, Icon, Card } from "semantic-ui-react";
import "./ProveedoresContent.css";

export default function ProveedoresContent() {
  const currentPath = useLocation();
  const finalCurrentPath = currentPath.pathname.replace("/", "");

  const [activeItem, setActiveItem] = useState(finalCurrentPath);
  const navigate = useNavigate();

  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
    navigate(`/${name}`);
  };
  return (
    <div>
      <div className="content-title-proveedores">
      <Grid columns="three">
        <Grid.Row>
          <Grid.Column width={3} textAlign="center">
          </Grid.Column>
          <Grid.Column textAlign="center" width={10}>
            <div className="text-container-cotizaciones">
              <span>
                <Icon name="users" />
                <b> Proveedores</b>
              </span>
            </div>
          </Grid.Column>
          <Grid.Column width={3}>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      </div>
      <div className="cont-grid-proveedores">
        <Grid divided="vertically">
          <Grid.Row columns={1}>
            
            <Grid.Column>
              <Card
                onClick={handleItemClick}
                className="card"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 10,
                  borderRadius: 10,
                  on: "hover",
                }}
                name="cotizaciones"
              >
                <Icon
                  bordered
                  name="file outline"
                  size="massive"
                  color="grey"
                />
                <Card.Content>
                  <Card.Header>Cotizaciones</Card.Header>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </div>
    /* <div className="proveedores-content-grid">
      <div className="container">
        <Grid columns="one">
          <Grid.Row>
          <Grid.Column
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Card
                onClick={handleItemClick}
                className="card"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 10,
                  borderRadius: 10,
                  on: "hover",
                }}
                name="cotizaciones"
              >
                <Icon bordered name="file outline" size="massive" color="grey" />
                <Card.Content>
                  <Card.Header>Cotizaciones</Card.Header>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </div> */
  );
}
