import { Container, Row } from "react-bootstrap";
import { Navigation } from "./Navigation";

export const Home = () => {
  return (
    <>
      <Navigation></Navigation>
      <Container fluid="md" style={{ width: "100rem" }}>
        <Row>
          <h1 style={{ color: "Blue", textAlign: "center" }}>
            Musical Hendrix
          </h1>
          <br />
        </Row>
        <Row>
          <br />
          <h2>
            Musical Hendrix es una tienda de instrumentos musicales con ya más
            de 15 años de experiencia. Tenemos el conocimiento y la capacidad
            como para informarte acerca de las mejores elecciones para tu compra
            musical.
          </h2>
        </Row>
      </Container>
    </>
  );
};
