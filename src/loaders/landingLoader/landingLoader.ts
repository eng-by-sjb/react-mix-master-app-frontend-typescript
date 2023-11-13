import { type LoaderFunctionArgs, type LoaderFunction } from "react-router-dom";
import { searchCocktailQuery } from "./searchCocktailQuery";
import { queryClient } from "../../routes/router";

export const landingLoader: LoaderFunction<LoaderFunctionArgs> = async ({ request }) => {
  const url = new URL(request.url);

  const searchTerm = url.searchParams.get("search") ?? "";

  await queryClient.ensureQueryData(searchCocktailQuery(searchTerm));

  return { searchTerm };
};
