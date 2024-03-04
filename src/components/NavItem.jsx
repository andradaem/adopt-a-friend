import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "react-bootstrap";

function NavItem({ text, path, icon, handleToggle }) {
  return (
    <li className="cars-list-item">
      <Link to={path} onClick={handleToggle}>
        <Stack direction="horizontal" gap={3}>
          <div className="cars-list-item__icon">{icon}</div>
          <div className="cars-list-item__text">{text}</div>
        </Stack>
      </Link>
    </li>
  );
}

export default NavItem;