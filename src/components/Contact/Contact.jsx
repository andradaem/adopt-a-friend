import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { TelephoneFill, EnvelopeFill, MapFill } from "react-bootstrap-icons";
import "./Contact.css"; // Import your custom styles for pink color
import { useNavigate } from "react-router-dom";

const Contact = () => {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/`;
    navigate(path);
  }
  return (
    <Container className="contact-container">
      <h1 className="contact-heading">Contact Information</h1>
      <p className="contact-description">
        If you have any questions or concerns, please feel free to contact us
        using the information below. Additionally, if you are interested in
        adopting a pet, we'd love to help you find your new furry friend!
      </p>
      <Row>
        <Col>
          <h3 className="contact-subheading">Contact Details</h3>
          <p>
            <strong>Phone:</strong>{" "}
            <TelephoneFill className="contact-icon" /> +444-44-4444
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <EnvelopeFill className="contact-icon" /> info@example.com
          </p>
          <p>
            <strong>Address:</strong>{" "}
            <MapFill className="contact-icon" /> 444 Strada Strada, Oras
          </p>
        </Col>
        <Col>
          <h3 className="contact-subheading">Animal Adoption</h3>
          <p>
            If you are interested in adopting a pet, please visit our adoption
            page or contact us directly for more information.
          </p>
          <Card className="contact-card">
            <Card.Body>
              <Card.Title className="contact-card-title">
                See Available Pets
              </Card.Title>
              {/* Display a list of available pets */}
              {/* Add your pet information here */}

              <Button variant="success" className="contact-adopt-button" onClick={routeChange()}>
                Adopt
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3 className="contact-subheading">Office Hours</h3>
          <p className="contact-hours">
            Monday-Friday: 9:00 AM - 5:00 PM
            <br />
            Saturday-Sunday: Closed
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3 className="contact-subheading">Connect with Us</h3>
          <p>
            Follow us on social media for updates and news:
            <br />
            {/* Add social media links here */}
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;