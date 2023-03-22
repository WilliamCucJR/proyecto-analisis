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
    <div className="proveedores-content-grid">
      <div className="container">
        <Grid columns="one">
          <Grid.Row>
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
                <Icon bordered name="file outline" size="massive" color="grey" />
                <Card.Content>
                  <Card.Header>Cotizaciones</Card.Header>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </div>
  );
}
