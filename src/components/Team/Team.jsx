import {
  Container,
  Row,
  Col,
  Placeholder,
  Card,
  Stack,
  Badge,
} from "react-bootstrap";

import useFetch from "../../hooks/useFetch";

import "./Team.css";

const TeamPlaceholder = () => (
  <Card className="d-flex mb-3 p-2">
    <Card.Img src="/images/human-placeholder.png" />
    <Card.Body>
      <Stack direction="horizontal" gap={3}>
        <Placeholder as={Card.Title} xs={2} />
        <Placeholder.Button variant="primary" xs={1} />
        <Placeholder as={Card.Text} xs={3} />
        <Placeholder.Button className="ms-auto" variant="danger" xs={2} />
      </Stack>
    </Card.Body>
  </Card>
);

export default function Team() {
  const { data, loading } = useFetch("/team/data/list");

  const getColorByStatus = (rating) => {
    let color = "";

    switch (true) {
      case (rating <= 5 && rating >= 4.5):
        color = "success";
        break;
      case (rating < 4.5 && rating >= 3):
        color = "info";
        break;
      case (rating < 3):
        color = "danger";
        break;
      default:
        color = "secondary";
    }

    return color;
  };

  if (loading) {
    return (
      <Container className="p-5">
        <Row className="mb-3">
          <Col>
            {[
              TeamPlaceholder,
              TeamPlaceholder,
              TeamPlaceholder,
              TeamPlaceholder,
            ].map((Item, index) => (
              <Item key={index} />
            ))}
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container className="p-5">
      {data && data.length > 0 && (
        <Row>
          <Col>
            {data.map(
              ({ id, imageUrl, name, numberOfRentals, rating }) => (
                <Card className="d-flex mb-3 p-2" key={id}>
                  <Card.Img className="card-img" src={imageUrl} />
                  <Card.Body>
                    <Stack direction="horizontal" gap={3}>
                      <Card.Title>{name}</Card.Title>
                      <Badge pill bg="primary">
                        {numberOfRentals}
                      </Badge>
                      <Badge className="ms-auto" bg={getColorByStatus(rating)}>
                        rating: {rating}/5
                      </Badge>
                    </Stack>
                  </Card.Body>
                </Card>
              )
            )}
          </Col>
        </Row>
      )}
    </Container>
  );
}
