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

  const getColorByStatus = (status) => {
    let color = "";

    switch (status) {
      case "office":
        color = "success";
        break;
      case "vacation":
        color = "info";
        break;
      case "inactive":
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
              ({ id, imageUrl, name, numberOfRentals, jobTitle, status }) => (
                <Card className="d-flex mb-3 p-2" key={id}>
                  <Card.Img src={imageUrl} />
                  <Card.Body>
                    <Stack direction="horizontal" gap={3}>
                      <Card.Title>{name}</Card.Title>
                      <Badge pill bg="primary">
                        {numberOfRentals}
                      </Badge>
                      <Card.Text>{jobTitle}</Card.Text>
                      <Badge className="ms-auto" bg={getColorByStatus(status)}>
                        {status}
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
