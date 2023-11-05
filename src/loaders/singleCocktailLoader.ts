import axios from "axios";
import { type LoaderFunctionArgs } from "react-router-dom";
import { type Drink } from "../types";

const cocktailSearchUrl = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

type SingleCocktailLoaderType = ({ params }: LoaderFunctionArgs) => Promise<{
  id: string | undefined;
  data: {
    drinks: Array<Drink>;
  };
}>;

export const singleCocktailLoader: SingleCocktailLoaderType = async ({ params }) => {
  const { id } = params;

  const { data } = await axios(`${cocktailSearchUrl}${id}`);

  return { id, data };
};
