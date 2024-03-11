import "./Footer.css";
import { Nav } from "react-bootstrap";
import {
  Facebook,
  Telegram,
  Messenger,
  Pinterest,
} from "react-bootstrap-icons";

function Footer() {
  return (
    <footer className="petsFooter">
      <div className="footer-main">
        <div>
          <Nav className="header-nav">
            <Nav.Link href="https://www.facebook.com" target="_blank" >
              <Facebook color="white" size="32px" />
            </Nav.Link>
            <Nav.Link href="https://t.me" target="_blank">
              <Telegram color="white" size="32px" />
            </Nav.Link>
            <Nav.Link href="https://messenger.com" target="_blank">
              <Messenger color="white" size="32px" />
            </Nav.Link>
            <Nav.Link href="https://www.pinterest.com" target="_blank">
              <Pinterest color="white" size="32px" />
            </Nav.Link>
          </Nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
