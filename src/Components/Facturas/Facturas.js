import { Grid, Form, Button, Icon, Table } from "semantic-ui-react";
import "./Facturas.css";

export default function Facturas() {
  function back() {
    window.history.back();
  }

  return (
    <div className="facturas-data-grid">
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
            <div className="text-container-facturas">
              <span>
                <Icon name="file alternate outline" />
                <b> Facturas</b>
              </span>
            </div>
          </Grid.Column>
          <Grid.Column width={3}></Grid.Column>
        </Grid.Row>
      </Grid>
      <div className="container">
        <Grid columns="one">
          <Grid.Row>
            <Grid.Column>
              <h2>Lista de Cotizaciones</h2>
              <Table celled>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>No. Cotización</Table.HeaderCell>
                    <Table.HeaderCell>Proveedor</Table.HeaderCell>
                    <Table.HeaderCell>No. Orden de compra</Table.HeaderCell>
                    <Table.HeaderCell>Estado</Table.HeaderCell>
                    <Table.HeaderCell>Acciones</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  <Table.Row>
                    <Table.Cell>0000001</Table.Cell>
                    <Table.Cell>Proveedor 1</Table.Cell>
                    <Table.Cell>0000001</Table.Cell>
                    <Table.Cell>
                      <Icon name="warning" />
                      Pendiente
                    </Table.Cell>
                    <Table.Cell className="centered-button">
                        <Button color='blue'><Icon name="eye" /> Ver</Button>
                        <Button color='yellow'><Icon name="edit outline" /> Editar</Button>
                        <Button  color='orange'><Icon name="trash alternate outline" /> Eliminar</Button>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row positive>
                    <Table.Cell>0000002</Table.Cell>
                    <Table.Cell>Proveedor 1</Table.Cell>
                    <Table.Cell>0000001</Table.Cell>
                    <Table.Cell>
                      <Icon name="checkmark" />
                      Aprovada
                    </Table.Cell>
                    <Table.Cell className="centered-button">
                        <Button color='blue'><Icon name="eye" /> Ver</Button>
                        <Button color='yellow'><Icon name="edit outline" /> Editar</Button>
                        <Button  color='orange'><Icon name="trash alternate outline" /> Eliminar</Button>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>0000003</Table.Cell>
                    <Table.Cell>Proveedor 1</Table.Cell>
                    <Table.Cell>0000002</Table.Cell>
                    <Table.Cell>
                      <Icon name="warning" />
                      Pendiente
                    </Table.Cell>
                    <Table.Cell className="centered-button">
                        <Button color='blue'><Icon name="eye" /> Ver</Button>
                        <Button color='yellow'><Icon name="edit outline" /> Editar</Button>
                        <Button  color='orange'><Icon name="trash alternate outline" /> Eliminar</Button>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row negative>
                    <Table.Cell>0000004</Table.Cell>
                    <Table.Cell>Proveedor 2</Table.Cell>
                    <Table.Cell>0000002</Table.Cell>
                    <Table.Cell>
                      <Icon name="x" />
                      Rechazada
                    </Table.Cell>
                    <Table.Cell className="centered-button">
                        <Button color='blue'><Icon name="eye" /> Ver</Button>
                        <Button color='yellow'><Icon name="edit outline" /> Editar</Button>
                        <Button  color='orange'><Icon name="trash alternate outline" /> Eliminar</Button>
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </div>
  );
}
