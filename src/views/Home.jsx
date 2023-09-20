import { Container, Row, Col, Card } from 'react-bootstrap';
import { useContext } from 'react';
import { Context } from '../Context';
import Heart from '../componentes/Heart';

export default function Home() {
  const { fotos } = useContext(Context);

  console.log(fotos);

  const mostrarFotos = fotos.map((foto) => (
    <Col key={foto.id}>
      <Card className="text-white">
        <Card.Img src={foto.src} alt={foto.alt} />
        <Card.ImgOverlay>
          <Card.Text className="text-end">
            <Heart color={fotos.liked ? 'red' : 'white'} id={foto.id} />
          </Card.Text>
          <Card.Text>{foto.alt}</Card.Text>
        </Card.ImgOverlay>
      </Card>
    </Col>
  ));

  return (
    <>
      <Container>
        <h1 className="my-3">Natural Pic</h1>
        <Row xs={1} md={2} lg={4} className="g-3 mb-3">
          {mostrarFotos}
        </Row>
      </Container>
    </>
  );
}
