import { Grid, Form, Button, Icon, Table } from "semantic-ui-react";
import "./Productos.css";

export default function Productos() {
    return(
        <div className="productos-data-grid">
      <div className="text-container-productos">
        <span>
            <Icon name="box" />
          <b> Productos</b>
        </span>
      </div>
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
                    width={16}
                  />
                </Form.Group>
                <Form.TextArea label='Descripción' placeholder='Descripción...' />
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
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  <Table.Row>
                    <Table.Cell>Lapicero</Table.Cell>
                    <Table.Cell>Oficina</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Escritorio</Table.Cell>
                    <Table.Cell>Oficina</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Sillas</Table.Cell>
                    <Table.Cell>Oficina</Table.Cell>
                  </Table.Row>
                  
                </Table.Body>
              </Table>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </div>
    )
};
