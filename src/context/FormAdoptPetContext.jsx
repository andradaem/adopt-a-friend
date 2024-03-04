import { createContext, useReducer } from "react";

export const FormAdoptPetContext = createContext();

const initialValues = {
    validated: false,
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    phoneNumber: 0,
    description: "",
    cardColor: "#ffffff",
};

const adoptReducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_VALUE_BY_NAME":
            return { ...state, [action.payload.name]: action.payload.value };

        case "CHANGE_FORM_VALIDIY_1":
            return { ...state, validated: action.payload };

        case "RESET_FORM_VALUES_1":
            return initialValues;

        default:
            return state;
    }
};

export const FormAdoptPetProvider = ({ children }) => {
    const [adoptFormValues, dispatch] = useReducer(adoptReducer, initialValues);


    const changeValue = ({ name, value }) => {
        dispatch({
            type: "CHANGE_VALUE_BY_NAME",
            payload: { name, value },
        });
    };

    const reset = () => {
        dispatch({
            type: "RESET_FORM_VALUES_1",
        });
    };

    const changeValidity = (validated) => {
        dispatch({
            type: "CHANGE_FORM_VALIDIY_1",
            payload: validated,
        });
    };

    return (
        <FormAdoptPetContext.Provider value={{ adoptFormValues, changeValue, reset, changeValidity }}>
            {children}
        </FormAdoptPetContext.Provider>
    );
};

