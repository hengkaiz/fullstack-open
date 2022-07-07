import { useState } from "react";

const Countries = ({ countries }) => {
  var [showCountry, setShowCountry] = useState([]);

  if (countries.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  }

  if (countries.length === 0) {
    return <p>No results found</p>;
  }

  var sortedCountries = countries.sort((a, b) => {
    var nameA = a["name"]["common"].toLowerCase();
    var nameB = b["name"]["common"].toLowerCase();

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  });

  const handleClick = (name) => {
    setShowCountry(showCountry.concat(name));
  };

  return (
    <div>
      {sortedCountries.map((c, i) => {
        if (!showCountry.includes(c["name"]["common"]))
          return (
            <SimpleCountry
              key={i + Math.random()}
              country={c}
              onClick={handleClick}
            />
          );
        else return <Country key={i + Math.random()} country={c} />;
      })}
    </div>
  );
};

const SimpleCountry = ({ country, onClick }) => {
  var commonName = country["name"]["common"];
  return (
    <div>
      <p>
        {commonName}{" "}
        <button
          onClick={() => {
            onClick(commonName);
          }}
        >
          show
        </button>
      </p>
    </div>
  );
};

const Country = ({ country }) => {
  var commonName = country["name"]["common"];
  var capital = country["capital"];
  var area = parseInt(country["area"]);
  var flagUrl = country["flags"]["png"];
  var languages = Object.values(country["languages"]).map((v, i) => v);

  return (
    <div>
      <h2>{commonName}</h2>
      <p>capital {capital.reduce((s, c) => s + " " + c, "")}</p>
      <p>area {area}</p>
      <p>
        <b>Languages:</b>
        <ul>
          {languages.map((l, i) => (
            <li key={i}>{l}</li>
          ))}
        </ul>
      </p>
      <img src={flagUrl} alt="No flag found" height="150" width="200" />
    </div>
  );
};

export default Countries;
