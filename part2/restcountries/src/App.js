import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import getAllCountries from "./services/restCountriesApi";
import Countries from "./components/Countries";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getAllCountries({ filter: search })
      .then((response) => {
        setCountries(response);
      })
      .catch(() => {
        setCountries([]);
      });
  }, [search]);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div>
      <Filter searchValue={search} onChange={handleSearchChange} />
      <Countries countries={countries} />
    </div>
  );
};

export default App;
