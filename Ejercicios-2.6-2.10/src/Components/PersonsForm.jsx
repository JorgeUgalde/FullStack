import React from "react";
import Person from "./Person";

const PersonsForm = ({ handlePersonChange, newName, addPerson, newNumber, handleNumberChange }) => {
    return (
        <div>
            <form onSubmit={addPerson}>
                <div>
                    name: <input value={newName}
                        onChange={handlePersonChange} />
                </div>
                <div>
                    number: <input value={newNumber}
                        onChange={handleNumberChange} />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </div>

    );
}
export default PersonsForm


