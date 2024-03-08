import { createContext, useState } from "react";


export const PetsContext = createContext();

export const PetsProvider = ({ children }) => {
  const [pets, setPets] = useState([]);
  const [copyListPets, setCopyListPets] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("Pets are loading...");

  const loadPets = (data) => {
    setPets(data);
    setCopyListPets(data);
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



  const deletePet = (id) => {
    setPets((prevState) => prevState.filter((pet) => pet.id !== id));
  };

  const filterPetsByName = (searchName) => {
    setPets((prevState) =>
      prevState.filter((pet) => pet.name.toLowerCase().match(searchName.toLowerCase())
      )
    );
  }

  const getMainListPets = () => {
    setPets(copyListPets);
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
        deletePet,
        getMainListPets,
        filterPetsByName,
      }}
    >
      {children}
    </PetsContext.Provider>
  );
};
