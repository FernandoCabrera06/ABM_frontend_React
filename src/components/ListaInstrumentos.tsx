import Instrumento from "../model/Instrumento";
import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { ItemInstrumento } from "./ItemInstrumento";
import { Navigation } from "./Navigation";
import {
  getInstrumentosJSONFetch,
  getInstrumentosPorBusqueda,
} from "../services/FuncionesAPI";
import { useParams } from "react-router-dom";

export const ListaInstrumentos = () => {
  const { termino } = useParams();
  const [instrumentos, setInstrumentos] = useState<Instrumento[]>([]);

  const getInstrumentos = async () => {
    console.log("TERMINO " + termino);

    if (termino && termino != "") {
      let datos: Instrumento[] = await getInstrumentosPorBusqueda(termino);
      setInstrumentos(datos);
    } else {
      let datos: Instrumento[] = await getInstrumentosJSONFetch();

    setInstrumentos(datos);
    }
  };

  useEffect(() => {
    getInstrumentos();
  }, []);

  return (
    <>
      <Navigation></Navigation>
      <Container fluid="md" style={{ width: "50rem" }}>
        <Row>
          {instrumentos.map((instrumento: Instrumento) => (
            <Row key={instrumento.id}>
              <ItemInstrumento
                key={instrumento.id}
                id={instrumento.id}
                instrumento={instrumento.instrumento}
                imagen={instrumento.imagen}
                precio={instrumento.precio}
                costoEnvio={instrumento.costoEnvio}
                cantidadVendida={instrumento.cantidadVendida}
              ></ItemInstrumento>
            </Row>
          ))}
        </Row>
      </Container>
    </>
  );
};
