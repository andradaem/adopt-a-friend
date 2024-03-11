import { useParams } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Image,
  Placeholder,
  Carousel,
  Button,
  Toast
} from "react-bootstrap";

import useFetch from "../../hooks/useFetch";
import "./CardDetails.css"
import { GiDogHouse } from "react-icons/gi";
import { React, useContext, useState } from "react";
import { SharedContext } from "../../context/SharedContext";
import AdoptPetForm from "../AdoptPetForm/AdoptPetForm";

const CardDetailsPlaceholder = () => (
  <Container className="p-5">
    <Row>
      <Col>
        <Image src="/images/pet-place-holder.png" />
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
  const { data, loading } = useFetch("/pets/data/item/byId", cardId);
  const { changeAdoptPetVisibility, isAdoptPetVisible } = useContext(SharedContext);
  const [showSuccessNotification, setShowSuccessNotification] = useState(false);

  const handleCloseAdoptPet = () => {
    changeAdoptPetVisibility(false);
  }
  const handleSaveAdoptPet = () => {
    changeAdoptPetVisibility(false);
    setShowSuccessNotification(true);

    setTimeout(() => {
      setShowSuccessNotification(false);
    }, 5000);
  }


  const handleAdoptAction = () => {
    changeAdoptPetVisibility(true);
  };
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
        <h1 className="h1">{data.name}</h1>
      </Row>
      <Row className="mb-5">
        <Button
          className="mb-3"
          variant="success"
          onClick={handleAdoptAction}
          style={{
            backgroundColor: "transparent",
            color: "var(--pink)",
            border: "2px solid var(--pink)",
            fontWeight: "bold"
          }}
        >
          <GiDogHouse /> Adopt
        </Button>
      </Row>
      <Row className="mb-5">
        <Col>{data.description}</Col>
      </Row>
      <AdoptPetForm
        isVisible={isAdoptPetVisible}
        onCancel={handleCloseAdoptPet}
        onSave={handleSaveAdoptPet} />
      <Toast
        bg="success"
        show={showSuccessNotification}
        onClose={() => setShowSuccessNotification(false)}
        delay={5000} // Auto-hide after 5 seconds (adjust as needed)
        autohide
        style={{ position: "absolute", top: 0, right: 0 }}
      >
        <Toast.Header>
          <strong className="mr-auto">Success!</strong>
        </Toast.Header>
        <Toast.Body>Your adoption form is saved.</Toast.Body>
      </Toast>
    </Container>
  );
}
