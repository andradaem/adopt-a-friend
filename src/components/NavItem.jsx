import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "react-bootstrap";

function NavItem({ text, path, icon }) {
  return (
    <li className="pets-list-item">
      <Link to={path} >
        <Stack className="header-stack" direction="horizontal" gap={3}>
          <div className="pets-list-item__icon">{icon}</div>
          <div className="pets-list-item__text">{text}</div>
        </Stack>
      </Link>
    </li>
  );
}

export default NavItem;