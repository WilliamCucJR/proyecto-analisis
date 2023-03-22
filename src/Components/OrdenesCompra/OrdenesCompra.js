import { useState } from "react";
import React from "react";
import { useNavigate, useLocation } from "react-router";
import { Grid, Form, Button, Icon, Table } from "semantic-ui-react";
import "./OrdenesCompra.css";

export default function ComprasContent() {

  function back(){
    window.history.back();
  }

  return (
    <div className="compras-data-grid">
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
            <div className="text-container-compra">
              <span>
                <Icon name="shop" />
                <b> Órdenes de Compra</b>
              </span>
            </div>
          </Grid.Column>
          <Grid.Column width={3}>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <div className="container">
        <Grid columns="two">
          <Grid.Row>
            <Grid.Column>
              <h2>Crear / Editar Orden de Compra</h2>
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
                  <Form.Input
                    label="Puesto"
                    placeholder="Puesto"
                    width={8}
                  />
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
              <h2>Lista de Ordenes de Compra</h2>
              <Table celled>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>No. Orden</Table.HeaderCell>
                    <Table.HeaderCell>Estatus</Table.HeaderCell>
                    <Table.HeaderCell>Producto</Table.HeaderCell>
                    <Table.HeaderCell>Cantidad</Table.HeaderCell>
                    <Table.HeaderCell>Acciones</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  <Table.Row>
                    <Table.Cell>0000001</Table.Cell>
                    <Table.Cell><Icon name="warning" />Pendiente</Table.Cell>
                    <Table.Cell>Escritorios</Table.Cell>
                    <Table.Cell>50</Table.Cell>
                    <Table.Cell className="centered-button">
                        <Button color='yellow' icon><Icon name="edit outline" /></Button>
                        <Button color='red' icon><Icon name="trash alternate outline" /></Button>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row positive>
                    <Table.Cell>0000002</Table.Cell>
                    <Table.Cell>
                      <Icon name="checkmark" />
                      Aprovada
                    </Table.Cell>
                    <Table.Cell>Monitores</Table.Cell>
                    <Table.Cell>20</Table.Cell>
                    <Table.Cell className="centered-button">
                        <Button color='yellow' icon><Icon name="edit outline" /></Button>
                        <Button color='red' icon><Icon name="trash alternate outline" /></Button>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>0000003</Table.Cell>
                    <Table.Cell><Icon name="warning" />Pendiente</Table.Cell>
                    <Table.Cell>Pizarrones</Table.Cell>
                    <Table.Cell>78</Table.Cell>
                    <Table.Cell className="centered-button">
                        <Button color='yellow' icon><Icon name="edit outline" /></Button>
                        <Button color='red' icon><Icon name="trash alternate outline" /></Button>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row negative>
                    <Table.Cell>0000004</Table.Cell>
                    <Table.Cell>
                      <Icon name="x" />
                      Rechazada
                    </Table.Cell>
                    <Table.Cell>Sillas</Table.Cell>
                    <Table.Cell>12</Table.Cell>
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
