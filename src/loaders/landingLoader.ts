import axios from "axios";

const cocktailSearchUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export const landingLoader = async () => {
  const searchTerm = "";

  const resp = await axios.get(`${cocktailSearchUrl}${searchTerm}`);

  return { drinks: resp.data.drinks, searchTerm };
};
