import { createContext, useState } from "react";

export const SharedContext = createContext();

export const SharedProvider = ({ children }) => {
  const [isAddPetVisible, setIsAddPetVisible] = useState(false);
  const [isAdoptPetVisible, setIsAdoptPetVisible] = useState(false);

  const changeAdoptPetVisibility = (isVisible) => {
    setIsAdoptPetVisible(isVisible);
  };

  const changeAddPetVisibility = (isVisible) => {
    setIsAddPetVisible(isVisible);
  };

  return (
    <SharedContext.Provider value={{ isAddPetVisible, isAdoptPetVisible, changeAdoptPetVisibility, changeAddPetVisibility }}>
      {children}
    </SharedContext.Provider>
  );
};
