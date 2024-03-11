import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";

import { GiDogHouse } from "react-icons/gi";

import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { PetsContext } from "../../context/PetsContext";
import { SharedContext } from "../../context/SharedContext";

import "./PetCard"
import "../../variables.css"

function PetCard({ id, imageUrl, name, age, gender, selected, cardColor }) {
  const [isConfirmationVisible, setIsConfirmationVisible] = useState(false);
  const navigate = useNavigate();
  const { deletePet } = useContext(PetsContext);
  const { changeAdoptPetVisibility } = useContext(SharedContext);

  const handleAdoptAction = () => {
    changeAdoptPetVisibility(true);
  };

  const handleOpenConfirmationModal = (event) => {
    event.stopPropagation();
    setIsConfirmationVisible(true);
  };

  const handleCardClick = () => {
    navigate(`/pets/${id}`);
  };

  const handleCancel = () => {
    setIsConfirmationVisible(false);
  };

  const handleConfirm = () => {
    deletePet(id);
    handleCancel();
  };



  return (
    <>
      <Card
        className="pets-card"
        style={{
          backgroundColor: cardColor,

        }}

      >
        <Card.Img width="100%" variant="top" src={imageUrl} alt={name} onClick={handleCardClick} />
        <Card.Body>
          <Card.Title className="mt-auto text-center">
            <h2 className="h2">{name}</h2>
          </Card.Title>
          <Card.Text className="mt-auto text-center">{age} years</Card.Text>
          <Card.Text className="mt-auto text-center">{gender} Gender</Card.Text>
          {!selected && (
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
          )}
          <Button variant="danger" style={{
            backgroundColor: "var(--pink)",
            border: "var(--pink)"
          }} onClick={handleOpenConfirmationModal}>
            Delete
          </Button>
        </Card.Body>
        <ConfirmationModal
          isVisible={isConfirmationVisible}
          title="Remove Pet Confirmation"
          description="Are you sure you want to remove this card? Once removed it can't be reverted!"
          confirmText="Yes"
          cancelText="No"
          onCancel={handleCancel}
          onConfirm={handleConfirm}
        />
      </Card >
    </>
  );
}

export default PetCard;
