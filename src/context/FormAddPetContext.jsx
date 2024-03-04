import { createContext, useReducer } from "react";

export const FormAddContext = createContext();

const initValues = {
  validated: false,
  imageUrl: "",
  name: "",
  age: 0,
  gender: "",
  description: "",
  cardColor: "#ffffff",
};

const petReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_VALUE_BY_NAME":
      return { ...state, [action.payload.name]: action.payload.value };

    case "CHANGE_FORM_VALIDIY":
      return { ...state, validated: action.payload };

    case "RESET_FORM_VALUES":
      return initValues;

    default:
      return state;
  }
};

export const FormProvider = ({ children }) => {
  const [formValues, dispatch] = useReducer(petReducer, initValues);

  const changeValue = ({ name, value }) => {
    dispatch({
      type: "CHANGE_VALUE_BY_NAME",
      payload: { name, value },
    });
  };

  const reset = () => {
    dispatch({
      type: "RESET_FORM_VALUES",
    });
  };

  const changeValidity = (validated) => {
    dispatch({
      type: "CHANGE_FORM_VALIDIY",
      payload: validated,
    });
  };

  return (
    <FormAddContext.Provider
      value={{ formValues, changeValue, reset, changeValidity }}
    >
      {children}
    </FormAddContext.Provider>
  );
};
