import React from "react";
import Button from "react-bootstrap/Button";

import { useContext } from "react";
import { SharedContext } from "../../context/SharedContext";
import { useLocation } from 'react-router-dom';

import "./Header.css";
import SearchBar from "../SearchBar/SearchBar";


function Header() {
  const { changeAddPetVisibility } = useContext(SharedContext);
  const location = useLocation();
  const isPetsPage = location.pathname === '/';

  const handleOpenAddPet = () => {
    changeAddPetVisibility(true);
  };

  return (
    <header>
      <div className="pets-header">
        <div className="header-start">
          <img className="header-img" src="https://i.ibb.co/sRBGT9s/logo.png" alt="Logo" />
        </div>
        <div className="header-title">
          <h1>Adopt a friend</h1>
        </div>
        <div>
          {isPetsPage && <SearchBar />}
        </div>
        <div className="header-button">
          {isPetsPage && <Button variant="light" onClick={handleOpenAddPet}>
            Add new pet
          </Button>}
        </div>
      </div>
    </header >
  );
}

export default Header;
