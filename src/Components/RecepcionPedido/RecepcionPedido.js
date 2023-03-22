import { useState } from "react";
import {
  Grid,
  Form,
  Button,
  Icon,
  Select,
  Input,
  TextArea,
} from "semantic-ui-react";
import SemanticDatepicker from "react-semantic-ui-datepickers";
import "react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css";
import "./RecepcionPedido.css";

export default function RecepcionPedido() {
  function back() {
    window.history.back();
  }

  const genderOptions = [
    { key: "m", text: "000001", value: "male" },
    { key: "f", text: "000002", value: "female" },
    { key: "o", text: "000003", value: "other" },
  ];

  const [date, setDate] = useState(null);
  const [dates, setDates] = useState([]);
  const handleDateChange = (event, data) => setDate(data.value);
  const handleDatesChange = (event, data) => setDates(data.value);

  return (
    <div className="pedidos-data-grid">
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
            <div className="text-container-pedidos">
              <span>
                <Icon name="shop" />
                <b> Recepción de Pedido</b>
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
              <Form>
                <Form.Group widths="equal">
                  <Form.Field
                    control={Select}
                    options={genderOptions}
                    label={{
                      children: "Orden No.",
                      htmlFor: "form-select-control-gender",
                    }}
                    placeholder="Gender"
                    search
                    searchInput={{ id: "form-select-control-gender" }}
                  />
                  <Form.Field
                    id="form-input-control-first-name"
                    control={Input}
                    label="Proveedor"
                    placeholder="Proveedor"
                  />
                  <SemanticDatepicker
                    onChange={handleDateChange}
                    label="Fecha"
                  />
                </Form.Group>
                <Form.Group widths="equal">
                  <Form.Field
                    id="form-input-control-first-name"
                    control={Input}
                    label="Quien entrega?"
                    placeholder="Quien entrega?"
                  />
                  <Form.Field
                    id="form-input-control-first-name"
                    control={Input}
                    label="Quien recibe?"
                    placeholder="Quien recibe?"
                  />
                  <Form.Field
                    id="form-input-control-last-name"
                    control={Input}
                    label="Hora"
                    placeholder="Hora"
                    width={3}
                  />
                </Form.Group>
                <Form.Group widths="equal">
                  <Form.Field
                    id="form-input-control-first-name"
                    control={Input}
                    label="Producto"
                    placeholder="Producto"
                  />
                  <Form.Field
                    id="form-input-control-first-name"
                    control={Input}
                    label="Código"
                    placeholder="Código"
                  />
                  <Form.Field
                    id="form-input-control-first-name"
                    control={Input}
                    label="Cantidad"
                    placeholder="Cantidad"
                  />
                  <Form.Field
                    id="form-input-control-last-name"
                    control={Input}
                    label="No. Factura"
                    placeholder="No. Factura"
                  />
                </Form.Group>

                <Form.Field
                  id="form-textarea-control-opinion"
                  control={TextArea}
                  label="Observaciones"
                  placeholder="Observaciones"
                />
                <Form.Field
                  id="form-button-control-public"
                  control={Button}
                  content="Guardar"
                  color="teal"
                />
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </div>
  );
}
