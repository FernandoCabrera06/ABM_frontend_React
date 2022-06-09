import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Instrumento from "../model/Instrumento";
import { Col, Container, Nav, Row } from "react-bootstrap";
import { Navigation } from "./Navigation";
import '../css/itemInstrumento.css';
import { getInstrumentoXIdFectch } from "../services/FuncionesAPI";

export const DetalleInstrumento = () => {
  const {idInstrumento} = useParams();
  const [instrumento, setInstrumento] = useState<Instrumento>();
  


 const getInstrumento = async() => {
      let instrumentoSelect:Instrumento| undefined =await getInstrumentoXIdFectch(Number(idInstrumento));
      setInstrumento(instrumentoSelect);
  }
  useEffect(()=>{
     
      getInstrumento();
  }, []);
 

  return (
    <>
      <Navigation></Navigation>
      <Container>
        <Row>
          <Col>
            <br />
            <img alt="instrumento" className="minAltoImg" src={"http://localhost:3000/images/" + instrumento?.imagen}></img>
          </Col>
          <Col>
            <Row>
              <Col>
                <h5>{instrumento?.cantidadVendida} vendidos</h5>
              </Col>
            </Row>
            <Row>
              <Col>
                <h2>{instrumento?.instrumento}</h2>
                <br />
              </Col>
            </Row>
            <Row>
              <Col>
                <h1 style={{ fontFamily: "arial" }}>$ {instrumento?.precio}</h1>
                <br />
              </Col>
            </Row>
            <Row>
              <Col>
                <h5>Marca: {instrumento?.marca}</h5>
              </Col>
            </Row>
            <Row>
              <Col>
                <h5>Modelo: {instrumento?.modelo}</h5>
                <br />
              </Col>
            </Row>
            <Row>
              <Col>
                <h5>Costo de Envío:</h5>
              </Col>
            </Row>
            <Row>
              { instrumento?.costoEnvio == "G"?
              <Col className="envioGratis"><img src='http://localhost:3000/images/camion.png' alt="imagen1" width="35px" /> Envío gratis a todo el pais  </Col>
             : <Col className="costoEnvio"> Costo de envio interior argentina $300  </Col>
              }
                <br />              
            </Row>
          </Col>
        </Row>
        <Col>
          <Row>
            <Col>
              <h5>Descripción:</h5>
            </Col>
          </Row>
          <Row>
            <Col>
              <h5>{instrumento?.descripcion}</h5>
            </Col>
          </Row>
        </Col>
        <Row>
          <Col>
            <Nav.Link href="/listaInstrumentos">
              <h3>Volver</h3>
            </Nav.Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};
