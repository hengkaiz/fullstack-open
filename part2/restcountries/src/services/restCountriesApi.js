import axios from "axios";

const baseUrl = "https://restcountries.com/v3.1/";

const getCountries = async ({ filter }) => {
  var addOn = "";

  if (filter === "") {
    addOn = "all";
  } else {
    addOn = "name/" + filter;
  }

  const response = await axios.get(baseUrl + addOn);
  return response.data;
};

export default getCountries;
