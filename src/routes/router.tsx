import { createBrowserRouter } from "react-router-dom";
import { HomeLayout, Error, Landing, About, Newsletter, Cocktail } from "@pages/index";
import { landingLoader, singleCocktailLoader } from "../loaders";
import SinglePageError from "@components/SinglePageError";
import { newsletterAction } from "../actions";
import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        loader: landingLoader,
        errorElement: <SinglePageError />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/newsletter",
        element: <Newsletter />,
        action: newsletterAction,
      },
      {
        path: "/cocktail/:id",
        element: <Cocktail />,
        errorElement: <SinglePageError />,
        loader: singleCocktailLoader,
      },
    ],
  },
]);
