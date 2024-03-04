import { Image, Dropdown, CardTitle, Button, Stack } from "react-bootstrap";

import { FaCartPlus, FaTrashCan } from "react-icons/fa6";

import { useContext } from "react";

import { PetsContext } from "../../context/PetsContext";

import "./RentalCart.css";

export default function RentalCart() {
  const { pets, deleteCartItem } = useContext(PetsContext);
  const selectedPets = pets.filter((pet) => pet.selected);

  const handleDelete = (id) => {
    deleteCartItem(id);
  };

  return (
    <Dropdown className="rental-cart">
      <Dropdown.Toggle
        id="dropdown-button-dark-example1"
        variant="light"
        disabled={selectedPets.length === 0}
      >
        <Stack direction="horizontal" gap={3}>
          <FaCartPlus />
          <div>({selectedPets.length})</div>
        </Stack>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {selectedPets.map(({ id, imageUrl, name }) => (
          <Dropdown.Item key={id}>
            <Stack style={{ width: "300px" }} direction="horizontal" gap={3}>
              <Image src={imageUrl} width="80px" />
              <CardTitle>{name}</CardTitle>
              <Button
                className="ms-auto"
                variant="link"
                onClick={() => handleDelete(id)}
              >
                <FaTrashCan color="#dc3545" />
              </Button>
            </Stack>
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}
