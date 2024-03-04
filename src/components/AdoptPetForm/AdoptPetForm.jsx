import Offcanvas from "react-bootstrap/Offcanvas";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

import { useContext } from "react";
import { FormAdoptPetContext } from "../../context/FormAdoptPetContext";


import getRandomId from "../../utils/random-id";


export default function AdoptPetForm({ isVisible, onCancel, onSave }) {

    const { adoptFormValues, changeValue, reset, changeValidity } =
        useContext(FormAdoptPetContext);

    const handleValueChange = ({ target: { name, value } }) => {
        changeValue({ name, value });
    };

    const handleReset = (event) => {
        event.preventDefault();

        reset();
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        const isValid = form.checkValidity();

        if (isValid) {
            const id = getRandomId(20);

            onSave({
                id,
                ...adoptFormValues,
            });

            reset();

            onCancel();
        }

        changeValidity(true);
    };

    return (
        <Offcanvas className="pets-offcanvas" show={isVisible} placement="start">
            <Offcanvas.Header closeButton onHide={onCancel}>
                <Offcanvas.Title>Adopt pet</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Form
                    className="d-flex flex-column h-100"
                    noValidate
                    validated={adoptFormValues.validated}
                    onSubmit={handleSubmit}
                >
                    <Form.Group className="mb-3">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            type="text"
                            size="lg"
                            name="firstName"
                            placeholder="Inser first name"
                            required
                            value={adoptFormValues.firstName}
                            onChange={handleValueChange}
                        />
                        <Form.Control.Feedback type="invalid">
                            The first name is required.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            type="text"
                            size="lg"
                            name="lastName"
                            placeholder="Inser last name"
                            required
                            value={adoptFormValues.lastName}
                            onChange={handleValueChange}
                        />
                        <Form.Control.Feedback type="invalid">
                            The last name is required.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Date of birth</Form.Label>
                        <Form.Control
                            type="date"
                            size="lg"
                            name="dateOfBirth"
                            placeholder="Add date of Birth"
                            value={adoptFormValues.dateOfBirth}
                            onChange={handleValueChange}
                        ></Form.Control>
                        <Form.Control.Feedback type="invalid">
                            The age should be a value between 0 and 100
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control
                            type="number"
                            name="phoneNumber"
                            placeholder="Enter phone number"
                            value={adoptFormValues.PhoneNumber}
                            onChange={handleValueChange}
                            defaultCountry="RO"
                        />

                        <Form.Control.Feedback type="invalid">
                            The phone number is required.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            size="lg"
                            name="description"
                            placeholder="Add a description"
                            value={adoptFormValues.description}
                            onChange={handleValueChange}
                            rows={5}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3 mt-auto d-flex">
                        <Button type="submit" size="lg" variant="primary">
                            Adopt pet
                        </Button>

                        <Button
                            className="ms-auto"
                            type="button"
                            size="lg"
                            variant="secondary"
                            onClick={handleReset}
                        >
                            Reset
                        </Button>
                    </Form.Group>
                </Form>
            </Offcanvas.Body>
        </Offcanvas>
    );
}