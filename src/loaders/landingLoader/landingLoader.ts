import { type LoaderFunctionArgs, type LoaderFunction } from "react-router-dom";

export const landingLoader: LoaderFunction<LoaderFunctionArgs> = async ({ request }) => {
  const url = new URL(request.url);

  const searchTerm = url.searchParams.get("search") ?? "";

  // const resp = await axios.get(`${cocktailSearchUrl}${searchTerm}`);

  return { searchTerm };
};
