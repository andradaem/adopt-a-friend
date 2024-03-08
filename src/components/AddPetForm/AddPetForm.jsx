import Offcanvas from "react-bootstrap/Offcanvas";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { useContext } from "react";
import { FormAddContext } from "../../context/FormAddPetContext";

import getRandomId from "../../utils/random-id";

import "./AddPetForm.css";

export default function AddPetForm({ isVisible, onCancel, onSave }) {

  const { formValues, changeValue, reset, changeValidity } =
    useContext(FormAddContext);

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
        ...formValues,
      });

      reset();

      onCancel();
    }

    changeValidity(true);
  };

  return (
    <Offcanvas className="pets-offcanvas" show={isVisible} placement="end">
      <Offcanvas.Header closeButton onHide={onCancel}>
        <Offcanvas.Title>Add new pet</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Form
          className="d-flex flex-column h-100"
          noValidate
          validated={formValues.validated}
          onSubmit={handleSubmit}
        >
          <Form.Group className="mb-3">
            <Form.Label>Image Url</Form.Label>
            <Form.Control
              type="url"
              size="lg"
              name="imageUrl"
              placeholder="Add a valid image url"
              required
              value={formValues.imageUrl}
              onChange={handleValueChange}
            />
            <Form.Control.Feedback type="invalid">
              The url is not valid
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              size="lg"
              name="name"
              placeholder="Add a pet name"
              value={formValues.name}
              onChange={handleValueChange}
              required
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              The name is required
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="number"
              size="lg"
              name="age"
              placeholder="Add an age"
              value={formValues.age}
              onChange={handleValueChange}
              min={1}
              max={100}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              The age should be a value between 0 and 100
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Gender</Form.Label>
            <Form.Control
              as="select"
              size="lg"
              name="gender"
              value={formValues.gender}
              onChange={handleValueChange}
              required
            >
              <option value="" disabled>Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="other">Other</option>
            </Form.Control>
            <Form.Control.Feedback type="invalid">
              The gender is required.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              size="lg"
              name="description"
              placeholder="Add a description"
              value={formValues.description}
              onChange={handleValueChange}
              rows={5}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Card Color</Form.Label>
            <Form.Control
              type="color"
              size="lg"
              name="cardColor"
              value={formValues.cardColor}
              onChange={handleValueChange}
            />
          </Form.Group>

          <Form.Group className="mb-3 mt-auto d-flex">
            <Button type="submit" size="lg" variant="primary">
              Add pet
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
