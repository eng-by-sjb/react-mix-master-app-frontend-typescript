import axios from "axios";
import { type LoaderFunction } from "react-router-dom";

const cocktailSearchUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export const landingLoader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);

  const searchTerm = url.searchParams.get("search") ?? "";

  console.log(searchTerm);

  const resp = await axios.get(`${cocktailSearchUrl}${searchTerm}`);

  return { drinks: resp.data.drinks, searchTerm };
};
