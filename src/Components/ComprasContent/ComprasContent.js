import { useState } from "react";
import React from "react";
import { useNavigate, useLocation } from "react-router";
import { Grid, Icon, Card } from "semantic-ui-react";
import "./ComprasContent.css";

export default function ComprasContent() {
  const currentPath = useLocation();
  const finalCurrentPath = currentPath.pathname.replace("/", "");

  const [activeItem, setActiveItem] = useState(finalCurrentPath);
  const navigate = useNavigate();

  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
    navigate(`/${name}`);
  };
  return (
    <div className="compras-content-grid">
      <div className="container">
        <Grid columns="three">
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
                name="inventario"
              >
                <Icon
                  bordered
                  name="clipboard list"
                  size="massive"
                  color="grey"
                />
                <Card.Content>
                  <Card.Header>Inventario</Card.Header>
                </Card.Content>
              </Card>
            </Grid.Column>
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
                name="ordenes-compra"
              >
                <Icon bordered name="shop" size="massive" color="grey" />
                <Card.Content>
                  <Card.Header>Ordenes de Compra</Card.Header>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </div>
  );
}
