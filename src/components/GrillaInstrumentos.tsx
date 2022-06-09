import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { deleteInstrumentoPorId, getInstrumentosJSONFetch } from "../services/FuncionesAPI";
import Instrumento from "../model/Instrumento";
import { Navigation } from "./Navigation";

export const GrillaInstrumentos = () => {

    const [instrumentos, setInstrumentos] = useState<Instrumento[]>([]);

 
  const getInstrumentos = async () =>{
    let datos:Instrumento[] = await getInstrumentosJSONFetch();
    setInstrumentos(datos);
}
useEffect(()=>{
    getInstrumentos();
},[] );

const deleteInstrumento = async (idInstrumento: number) => {
    await deleteInstrumentoPorId(idInstrumento);
    window.location.reload();
  };

  return (
    <>
      <Navigation></Navigation>
      <Container fluid="md">
        <br />
        <Button href={`/formulario/0`} variant="outline-primary">
          Nuevo
        </Button>
        <Row>
          <Col md={1}>
            <b>ID</b>
          </Col>
          <Col md={3}>
            <b>Nombre</b>
          </Col>
          <Col md={2}>
            <b>Marca</b>
          </Col>
          <Col md={2}>
            <b>Modelo</b>
          </Col>
          <Col md={2}>
            <b>Precio</b>
          </Col>
          <Col md={1}>
            <b>Modificar</b>
          </Col>
          <Col md={1}>
            <b>Eliminar</b>
          </Col>
        </Row>
        {instrumentos.map((instrumento: Instrumento) => (
          <Row key={instrumento.id}>
            <Col md={1}>{instrumento.id}</Col>
            <Col md={3}>{instrumento.instrumento}</Col>
            <Col md={2}>{instrumento.marca}</Col>
            <Col md={2}>{instrumento.modelo}</Col>
            <Col md={2}>{instrumento.precio}</Col>
            <Col md={1}>
              <Button
                variant="outline-warning"
                href={`/formulario/` + instrumento.id}
              >
                Modificar
              </Button>
            </Col>
            <Col md={1}>
              <Button
                variant="outline-danger"
                onClick={() => deleteInstrumento(instrumento.id)}
              >
                Eliminar
              </Button>
            </Col>
          </Row>
        ))}
      </Container>
    </>
  );
};
