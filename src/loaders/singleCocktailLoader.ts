import { type LoaderFunctionArgs } from "react-router-dom";
import { type Drink } from "../types";

import axios from "axios";

const cocktailSearchUrl = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

export const singleCocktailLoader = async ({
  params,
}: LoaderFunctionArgs): Promise<{
  id: string | undefined;
  data: { drinks: Array<Drink> };
}> => {
  const { id } = params;

  const { data } = await axios(`${cocktailSearchUrl}${id}`);

  return { id, data };
};
