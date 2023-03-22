import { Grid, Form, Button, Icon, Table } from "semantic-ui-react";
import "./Inventario.css";

export default function Inventario() {
  function back() {
    window.history.back();
  }

  return (
    <div className="inventario-data-grid">
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
            <div className="text-container-inventario">
              <span>
                <Icon name="clipboard list" />
                <b> Inventario</b>
              </span>
            </div>
          </Grid.Column>
          <Grid.Column width={3}></Grid.Column>
        </Grid.Row>
      </Grid>
      <div className="container">
        <Grid columns="two">
          <Grid.Row>
            <Grid.Column>
              <h2>Crear / Editar Producto</h2>
              <Form>
                <Form.Group>
                  <Form.Input
                    label="Nombre del producto"
                    placeholder="Nombre del producto"
                    width={16}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Input
                    label="Categoría"
                    placeholder="Categoría"
                    width={8}
                  />
                  <Form.Input
                    label="Cantidad"
                    placeholder="Cantidad"
                    width={8}
                  />
                </Form.Group>
                <Form.TextArea
                  label="Descripción"
                  placeholder="Descripción..."
                />
                <Button type="submit" color="teal">
                  Guardar
                </Button>
              </Form>
            </Grid.Column>
            <Grid.Column>
              <h2>Lista de Productos</h2>
              <Table celled>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Producto</Table.HeaderCell>
                    <Table.HeaderCell>Categoría</Table.HeaderCell>
                    <Table.HeaderCell>Cantidad</Table.HeaderCell>
                    <Table.HeaderCell>Acciones</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  <Table.Row>
                    <Table.Cell>Lapicero</Table.Cell>
                    <Table.Cell>Oficina</Table.Cell>
                    <Table.Cell>200</Table.Cell>
                    <Table.Cell className="centered-button">
                      <Button color="yellow" icon>
                        <Icon name="edit outline" />
                      </Button>
                      <Button color="red" icon>
                        <Icon name="trash alternate outline" />
                      </Button>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Escritorio</Table.Cell>
                    <Table.Cell>Oficina</Table.Cell>
                    <Table.Cell>100</Table.Cell>
                    <Table.Cell className="centered-button">
                      <Button color="yellow" icon>
                        <Icon name="edit outline" />
                      </Button>
                      <Button color="red" icon>
                        <Icon name="trash alternate outline" />
                      </Button>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Sillas</Table.Cell>
                    <Table.Cell>Oficina</Table.Cell>
                    <Table.Cell>300</Table.Cell>
                    <Table.Cell className="centered-button">
                      <Button color="yellow" icon>
                        <Icon name="edit outline" />
                      </Button>
                      <Button color="red" icon>
                        <Icon name="trash alternate outline" />
                      </Button>
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
