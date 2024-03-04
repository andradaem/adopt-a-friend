import { createContext, useState } from "react";

export const PetsContext = createContext();

export const PetsProvider = ({ children }) => {
  const [pets, setPets] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("Pets are loading...");

  const loadPets = (data) => {
    setPets(data);
  };

  const selectPet = (id) => {
    setPets((prevState) =>
      prevState.map((pet) => (pet.id === id ? { ...pet, selected: true } : pet))
    );
  };

  const addNewPet = (pet) => {
    setPets((prevState) => {
      return [...prevState, pet];
    });
  };

  const deleteCartItem = (id) => {
    setPets((prevState) =>
      prevState.map((pet) =>
        pet.id === id ? { ...pet, selected: false } : pet
      )
    );
  };

  const deletePet = (id) => {
    setPets((prevState) => prevState.filter((pet) => pet.id !== id));
  };

  return (
    <PetsContext.Provider
      value={{
        pets,
        isLoading,
        loadingMessage,
        loadPets,
        setIsLoading,
        setLoadingMessage,
        selectPet,
        addNewPet,
        deleteCartItem,
        deletePet,
      }}
    >
      {children}
    </PetsContext.Provider>
  );
};
