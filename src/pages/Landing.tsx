import { useLoaderData } from "react-router-dom";
import CocktailList from "@components/CocktailList";
import { type Drink } from "../types";
import SearchForm from "@components/SearchForm";

type LoaderData = {
  drinks: Drink[];
  searchTerm: string;
};

const Landing = () => {
  const { drinks, searchTerm } = useLoaderData() as LoaderData; //have cast this "as LoaderData"

  return (
    <>
      <SearchForm searchTerm={searchTerm}></SearchForm>
      <CocktailList drinks={drinks}></CocktailList>;
    </>
  );
};
export default Landing;
