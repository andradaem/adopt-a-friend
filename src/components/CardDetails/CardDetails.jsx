import { useParams } from "react-router-dom";

import {
  Container,
  Row,
  Col,
  Image,
  Placeholder,
  Carousel,
} from "react-bootstrap";

import useFetch from "../../hooks/useFetch";

const CardDetailsPlaceholder = () => (
  <Container className="p-5">
    <Row>
      <Col>
        <Image src="/images/placeholder.png" />
      </Col>
    </Row>
    <Row className="mb-3">
      <Col>
        <Placeholder as={"h1"} xs={6} size="lg" />
      </Col>
    </Row>
    <Row>
      <Col>
        <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />
        <Placeholder xs={6} /> <Placeholder xs={8} />
        <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />
        <Placeholder xs={6} /> <Placeholder xs={8} />
        <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />
        <Placeholder xs={6} /> <Placeholder xs={8} />
        <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />
        <Placeholder xs={6} /> <Placeholder xs={8} />
      </Col>
    </Row>
  </Container>
);

export default function CardDetails() {
  const { cardId } = useParams();
  const { data, loading } = useFetch("/pets/data/item/btId", cardId);

  if (loading) {
    return <CardDetailsPlaceholder />;
  }

  if (!data) {
    return <div>Pet not available!</div>;
  }

  return (
    <Container className="card-details p-5">
      {data.images.length > 0 && (
        <Row>
          <Col>
            <Carousel data-bs-theme="dark">
              {data.images.map((image) => (
                <Carousel.Item key={image}>
                  <Image src={image} fluid />
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      )}
      <Row className="mb-5">
        <h1 className="h1">{data.title}</h1>
      </Row>
      <Row className="mb-5">
        <Col>{data.description}</Col>
      </Row>
    </Container>
  );
}
