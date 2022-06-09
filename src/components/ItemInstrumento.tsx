import { Card, Col, Row } from "react-bootstrap";
import '../css/itemInstrumento.css';

type InstrumentoParams = {
  id: number;
  instrumento: string;
  imagen: string;
  precio: number;
  costoEnvio: any;
  cantidadVendida: number;
};

export const ItemInstrumento = (args: InstrumentoParams) => {
  return (
    <>
      <Card className="margenesTarjeta">
        <Row>
          <Col>
            <Card.Link href={`detalle/${args.id}`}>
              <Card.Img
                variant="top"
                className="maxAltoImg"
                src={"http://localhost:3000/images/" + args.imagen}
              />
            </Card.Link>
          </Col>
          <Col>
            <Row>
              <Card.Text>{args.instrumento}</Card.Text>
            </Row>
            <Row>
              <Card.Text style={{ fontWeight: "bold", fontSize: "2rem" }}>
                ${args.precio}
              </Card.Text>
            </Row>
            <Row>
            { args.costoEnvio === "G"?
              <Card.Text className="envioGratis"><img src='http://localhost:3000/images/camion.png' alt="imagen1" width="35px" /> Envío gratis a todo el pais  </Card.Text>
             : <Card.Text className="costoEnvio">Costo de envio interior argentina $300  </Card.Text>
            }
            </Row>
            <Row>
              <Card.Text>{args.cantidadVendida} vendidos</Card.Text>
            </Row>
          </Col>
        </Row>
      </Card>
    </>
  );
};
