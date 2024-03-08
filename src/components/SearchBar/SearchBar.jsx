import { React, useState, useContext } from "react"
import { InputGroup, Form } from "react-bootstrap"
import { PetsContext } from "../../context/PetsContext";

function SearchBar() {

    const [searchInput, setSearchInput] = useState("");
    const { filterPetsByName, getMainListPets } = useContext(PetsContext);

    const handleChange = async (event) => {
        event.preventDefault();
        setSearchInput(event.target.value);

        if (isEmpty(searchInput)) {
            handleEmpty();
        }
        else {
            filterPetsByName(searchInput.trim())
        }
    };

    function isEmpty(str) {
        if (str.trim().length === 0) {
            return true;
        }
        else {
            return false;
        }
    }

    const handleEmpty = () => {
        getMainListPets();
    }

    return (
        <div className="search-inputGroup">
            <InputGroup>
                <InputGroup.Text id="basic-addon1">Search Pet</InputGroup.Text>
                <Form.Control
                    placeholder="Name"
                    aria-label="Name"
                    aria-describedby="basic-addon1"
                    onChange={handleChange}
                    onEmptied={handleEmpty}
                    value={searchInput}
                />
            </InputGroup>
        </div>
    );
}

export default SearchBar;