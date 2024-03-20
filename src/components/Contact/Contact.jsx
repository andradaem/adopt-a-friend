import React from "react";
import { Card, Button, Carousel, Image } from "react-bootstrap";
import { TelephoneFill, EnvelopeFill, MapFill } from "react-bootstrap-icons";
import "./Contact.css"; // Import your custom styles for pink color
import { useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Breadcrumb from 'react-bootstrap/Breadcrumb';


function Contact() {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(`/`);
  };
  const images = ["https://www.aspca.org/sites/default/files/how-you-can-help_adoptions-tips_main-image-dog.jpg",
    "https://www.dandylandpetcarecenter.com/wp-content/uploads/service/doggie-daycare.jpg",
    "https://www.aspca.org/sites/default/files/how-you-can-help_adoptions-tips_main-image-dog.jpg",
    "https://ontariospca.ca/wp-content/uploads/2019/02/Adopting-shelter-dog-10-tips.jpg",
    "https://dogfriendlysanantonio.com/wp-content/uploads/2020/06/dog-adoption-san-antonio-image.png"
  ]

  return (

    <Container className="contact-container">
      <Container className="contact-title">
        <h1>Contact Information</h1>
      </Container>

      <Card style={{
        backgroundColor: "transparent",
        color: "var(--pink)",
        border: "2px solid var(--pink)",
        fontWeight: "bold"
      }}>
        <Card.Body className="text-center" >
          <Card.Title>Pet Adoption</Card.Title>
          <Card.Text>
            If you are interested in adopting a pet, please visit our adoption
            page or contact us directly for more information.
          </Card.Text>
          <Button className="mb-3" style={{
            backgroundColor: "var(--pink)",
            border: "var(--pink)"
          }} onClick={handleOnClick}>
            Check Pet List
          </Button>
        </Card.Body>

      </Card>
      <Card style={{
        backgroundColor: "transparent",
        color: "var(--pink)",
        border: "2px solid var(--pink)",
        fontWeight: "bold"
      }}>
        <Card.Body className="text-center">
          <Card.Title>Where you can find us</Card.Title>
          <Card.Text>
            If you are interested in adopting a pet, please visit our adoption
            page or contact us directly for more information.
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted text-centered">
          <Breadcrumb>
            <Breadcrumb.Item href="#"> <TelephoneFill className="contact-icon" /> +444-44-4444
            </Breadcrumb.Item>
            <Breadcrumb.Item href="https://yahoo.com">
              <EnvelopeFill className="contact-icon" /> info@example.com
            </Breadcrumb.Item>
            <Breadcrumb.Item href="https://www.google.com/maps/place/Pets+at+Home+Street/@51.1273343,-2.7587176,17z/data=!3m2!4b1!5s0x4872174a145a431d:0xe2c6c4d70dc18188!4m6!3m5!1s0x4872174a1528717d:0xacdb90cef479a45c!8m2!3d51.127331!4d-2.7561427!16s%2Fg%2F11d_bbh13p?entry=ttu"> <MapFill className="contact-icon" /> 444 Dogs Street</Breadcrumb.Item>
          </Breadcrumb></Card.Footer>
      </Card>
      <Carousel className="contact-carousel" data-bs-theme="dark">
        {images.map((image) => (
          <Carousel.Item key={image}>
            <Image src={image} fluid />
          </Carousel.Item>
        ))}
      </Carousel>

    </Container >

  );
}

export default Contact;