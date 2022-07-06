import { useState } from "react";

const Filter = (props) => {
  return (
    <div>
      filter shown with:{" "}
      <input value={props.filterValue} onChange={props.filterChange} />
    </div>
  );
};

const PersonForm = (props) => {
  return (
    <form onSubmit={props.formSubmit}>
      <div>
        name: <input value={props.nameValue} onChange={props.nameChange} />
      </div>
      <div>
        number:{" "}
        <input value={props.numberValue} onChange={props.numberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

const Persons = ({ persons }) =>
  persons.map((p, i) => (
    <p key={i}>
      {p.name} {p.number}
    </p>
  ));

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setNewFilter] = useState("");
  const [filteredPersons, setFilteredPersons] = useState(persons);

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    };

    setPersons(persons.concat(personObject));
    setNewName("");
    setNewNumber("");
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value);

    if (event.target.value !== "") {
      var newFilteredPersons = persons.filter((p) =>
        p.name.toLowerCase().includes(event.target.value)
      );

      setFilteredPersons(newFilteredPersons);
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter filterValue={newFilter} filterChange={handleFilterChange} />

      <h3>Add a new</h3>
      <PersonForm
        formSubmit={addPerson}
        nameValue={newName}
        nameChange={handleNameChange}
        numberValue={newNumber}
        numberChange={handleNumberChange}
      />

      <h3>Numbers</h3>
      <Persons persons={filteredPersons} />
    </div>
  );
};

export default App;
