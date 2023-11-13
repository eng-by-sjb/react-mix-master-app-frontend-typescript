import { type QueryClient } from "@tanstack/react-query";
import { type LoaderFunctionArgs, type LoaderFunction } from "react-router-dom";
import { searchCocktailQuery } from "./reactQuery";

export const landingLoader =
  (queryClient: QueryClient): LoaderFunction<LoaderFunctionArgs> =>
  async ({ request }) => {
    const url = new URL(request.url);

    const searchTerm = url.searchParams.get("search") ?? "";

    const data = await queryClient.ensureQueryData(searchCocktailQuery(searchTerm));

    return { searchTerm, data };
  };
