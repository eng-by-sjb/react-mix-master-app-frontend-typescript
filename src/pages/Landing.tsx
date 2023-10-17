import { useLoaderData } from "react-router-dom";
import CocktailList from "../components/CocktailList";
import type { Drink } from "../types";

type LoaderData = {
  drinks: Drink[];
  searchTerm: string;
};

const Landing = () => {
  const { drinks, searchTerm } = useLoaderData() as LoaderData; //have cast this "as LoaderData"

  console.log(searchTerm);

  return <CocktailList drinks={drinks}></CocktailList>;
};
export default Landing;
