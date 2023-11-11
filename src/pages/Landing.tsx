import { useLoaderData } from "react-router-dom";
import CocktailList from "@components/CocktailList";
import { type Drink } from "../types";
import SearchForm from "@components/SearchForm";
import { useQuery } from "@tanstack/react-query";
import { searchCocktailQuery } from "@loaders/landingLoader/reactQuery";

type LoaderData = {
  searchTerm: string;
};

const Landing = () => {
  const { searchTerm } = useLoaderData() as LoaderData; //have cast this "as LoaderData"

  const { data: drinks }: { data: Drink[] | undefined } = useQuery(searchCocktailQuery(searchTerm));

  return (
    <>
      <SearchForm searchTerm={searchTerm}></SearchForm>
      <CocktailList drinks={drinks}></CocktailList>
    </>
  );
};
export default Landing;
