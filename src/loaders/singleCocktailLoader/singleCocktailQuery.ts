import { type Drink } from "../../types";
import axios from "axios";

const cocktailSearchUrl = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

export const singleCocktailQuery = (id: string | undefined) => {
  return {
    queryKey: ["cocktail", id],
    queryFn: async (): Promise<Drink[]> => {
      const { data } = await axios.get(`${cocktailSearchUrl}${id}`);
      return data.drinks;
    },
  };
};
