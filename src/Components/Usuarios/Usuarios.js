import { Grid, Form, Button, Icon, Table } from "semantic-ui-react";
import "./Usuarios.css";

export default function Usuarios() {

  function back(){
    window.history.back();
  }

  return (
    <div className="usuarios-data-grid">
      <Grid columns="three">
        <Grid.Row>
          <Grid.Column width={3} textAlign="center">
            <div>
              <Button icon labelPosition="left" color="teal" size='large' onClick={back}>
                <Icon name="arrow left" />
                Atras
              </Button>
            </div>
          </Grid.Column>
          <Grid.Column textAlign="center" width={10}>
            <div className="text-container-usuarios">
              <span>
                <Icon name="users" />
                <b> Usuarios</b>
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
              <h2>Crear / Editar Usuario</h2>
              <Form>
                <Form.Group>
                  <Form.Input
                    label="Solicitante"
                    placeholder="Solicitante"
                    width={16}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Input
                    label="Departamento"
                    placeholder="Departamento"
                    width={8}
                  />
                  <Form.Input label="Puesto" placeholder="Puesto" width={8} />
                </Form.Group>
                <Form.Group>
                  <Form.Input
                    label="Producto"
                    placeholder="Producto"
                    width={8}
                  />
                  <Form.Input
                    label="Cantidad"
                    placeholder="Cantidad"
                    width={8}
                  />
                </Form.Group>

                <Button type="submit" color="teal">
                  Guardar
                </Button>
              </Form>
            </Grid.Column>
            <Grid.Column>
              <h2>Lista de Usuarios</h2>
              <Table celled>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>ID Usuario</Table.HeaderCell>
                    <Table.HeaderCell>Nombre</Table.HeaderCell>
                    <Table.HeaderCell>Estado</Table.HeaderCell>
                    <Table.HeaderCell>Puesto</Table.HeaderCell>
                    <Table.HeaderCell>Acciones</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  <Table.Row positive>
                    <Table.Cell>0000001</Table.Cell>

                    <Table.Cell>William Cuc</Table.Cell>
                    <Table.Cell>
                      <Icon name="checkmark" />
                      Alta
                    </Table.Cell>
                    <Table.Cell>Ejecutivo</Table.Cell>
                    <Table.Cell className="centered-button">
                        <Button color='yellow' icon><Icon name="edit outline" /></Button>
                        <Button color='red' icon><Icon name="trash alternate outline" /></Button>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row positive>
                    <Table.Cell>0000002</Table.Cell>

                    <Table.Cell>Keila Cuc</Table.Cell>
                    <Table.Cell>
                      <Icon name="checkmark" />
                      Alta
                    </Table.Cell>
                    <Table.Cell>Ejecutivo</Table.Cell>
                    <Table.Cell className="centered-button">
                        <Button color='yellow' icon><Icon name="edit outline" /></Button>
                        <Button color='red' icon><Icon name="trash alternate outline" /></Button>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row positive>
                    <Table.Cell>0000003</Table.Cell>

                    <Table.Cell>Pedro Lopez</Table.Cell>
                    <Table.Cell>
                      <Icon name="checkmark" />
                      Alta
                    </Table.Cell>
                    <Table.Cell>Asistende de Bodega</Table.Cell>
                    <Table.Cell className="centered-button">
                        <Button color='yellow' icon><Icon name="edit outline" /></Button>
                        <Button color='red' icon><Icon name="trash alternate outline" /></Button>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row negative>
                    <Table.Cell>0000004</Table.Cell>

                    <Table.Cell>Luis Perez</Table.Cell>
                    <Table.Cell>
                      <Icon name="x" />
                      Baja
                    </Table.Cell>
                    <Table.Cell>Ejecutivo</Table.Cell>
                    <Table.Cell className="centered-button">
                        <Button color='yellow' icon><Icon name="edit outline" /></Button>
                        <Button color='red' icon><Icon name="trash alternate outline" /></Button>
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
