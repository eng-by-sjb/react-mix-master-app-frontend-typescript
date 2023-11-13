// import axios from "axios";
import { type LoaderFunctionArgs } from "react-router-dom";
import { singleCocktailQuery } from "./singleCocktailQuery";
import { queryClient } from "../../routes/router";

type SingleCocktailLoaderType = ({ params }: LoaderFunctionArgs) => Promise<{
  id: string | undefined;
}>;

export const singleCocktailLoader: SingleCocktailLoaderType = async ({ params }) => {
  const { id } = params;

  await queryClient.ensureQueryData(singleCocktailQuery(id));

  return { id };
};
