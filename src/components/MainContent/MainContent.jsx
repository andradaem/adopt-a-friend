import { React, useState } from "react";
import PetCard from "../PetCard/PetCard";
import Toast from "react-bootstrap/Toast";
import AddPetForm from "../AddPetForm/AddPetForm";

import Card from "react-bootstrap/Card";
import Placeholder from "react-bootstrap/Placeholder";
import { useContext, useEffect } from "react";

import { PetsContext } from "../../context/PetsContext";
import { SharedContext } from "../../context/SharedContext";


import { fetchData } from "../../api/pets-api";

import AdoptPetForm from "../AdoptPetForm/AdoptPetForm";
import "./MainContent.css"

const CardPlaceholder = () => (
  <Card style={{ width: "18rem", height: "500px" }}>
    <Card.Img variant="top" src="/images/pet-place-holder.png" />
    <Card.Body>
      <Placeholder as={Card.Title} animation="glow">
        <Placeholder xs={6} />
      </Placeholder>
      <Placeholder as={Card.Text} animation="glow">
        <Placeholder xs={7} size="lg" /> <Placeholder xs={4} size="lg" />
      </Placeholder>
      <Placeholder.Button className="mb-3" variant="outline-primary" xs={12} />
      <Placeholder.Button variant="danger" xs={12} />
    </Card.Body>
  </Card >
);

const cardPlaceholders = [
  CardPlaceholder,
  CardPlaceholder,
  CardPlaceholder,
  CardPlaceholder,
];

export default function MainContent() {
  const { pets, isLoading, setIsLoading, loadPets, addNewPet } = useContext(PetsContext);
  const { isAddPetVisible, changeAddPetVisibility, isAdoptPetVisible, changeAdoptPetVisibility } = useContext(SharedContext);
  const [showSuccessNotification, setShowSuccessNotification] = useState(false);

  const handleCloseAdoptPet = () => {
    changeAdoptPetVisibility(false);
  };

  const getData = async () => {
    setIsLoading(true);
    const { isOk, data } = await fetchData();

    if (isOk) {
      loadPets(data);
      setIsLoading(false);
    }
  };

  const handleSaveAdoptPet = () => {
    changeAdoptPetVisibility(false);
    setShowSuccessNotification(true);

    setTimeout(() => {
      setShowSuccessNotification(false);
    }, 5000);
  }

  const handleCloseAddPet = () => {
    changeAddPetVisibility(false);
  };



  const handleAddNewPet = (pet) => {
    addNewPet(pet);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <main className="pets-main-content">
      {isLoading && cardPlaceholders.map((Item, index) => <Item key={index} />)}
      {!isLoading && (
        <>
          {pets.map((pet) => (
            <PetCard key={pet.id} {...pet} />
          ))}
          <AddPetForm
            isVisible={isAddPetVisible}
            onCancel={handleCloseAddPet}
            onSave={handleAddNewPet}
          />
        </>
      )}
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
    </main>
  );
}

