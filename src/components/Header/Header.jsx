import React from "react";
import Button from "react-bootstrap/Button";
import { Nav } from "react-bootstrap";
import {
  TelephoneFill,
  EnvelopeFill,
  MapFill,
  Facebook,
  Telegram,
  Messenger,
  Pinterest,
} from "react-bootstrap-icons";
import { useContext } from "react";
import { SharedContext } from "../../context/SharedContext";

import "./Header.css";

function Header() {
  const { changeAddPetVisibility } = useContext(SharedContext);

  const handleOpenAddPet = () => {
    changeAddPetVisibility(true);
  };

  return (
    <header className="pets-header">
      <nav className="navbar navbar-expand-lg  ">
        <img src="./images/pawLogo.png" alt="Logo" style={{ width: '25px', height: '25px', margin: '20px' }} />
        <div className="container">
          <div className="header-info">
            <a className="navbar-brand" href="#">
              <TelephoneFill />
            </a>
            <a className="navbar-brand" href="#">
              Tel: +444-44-4444
            </a>
            <a className="navbar-brand" href="#">
              <EnvelopeFill />
            </a>
            <a className="navbar-brand" href="#">
              info@example.com
            </a>
            <a className="navbar-brand" href="#">
              <MapFill />
            </a>
            <a className="navbar-brand" href="#">
              444 Strada Strada, Oras
            </a>
          </div>
          <div className="icons">
            <Nav className="ml-auto">
              <Nav.Link href="https://www.facebook.com" target="_blank">
                <Facebook color="dark" />
              </Nav.Link>
              <Nav.Link href="https://t.me" target="_blank">
                <Telegram color="dark" />
              </Nav.Link>
              <Nav.Link href="https://messenger.com" target="_blank">
                <Messenger color="dark" />
              </Nav.Link>
              <Nav.Link href="https://www.pinterest.com" target="_blank">
                <Pinterest color="dark" />
              </Nav.Link>
              <Button className="ms-auto" variant="dark" onClick={handleOpenAddPet}>
                Add new pet
              </Button>
            </Nav>

          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
