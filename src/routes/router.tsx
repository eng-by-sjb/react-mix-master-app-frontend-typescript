import { createBrowserRouter } from "react-router-dom";
import { HomeLayout, Error, Landing, About, Newsletter } from "../pages";
import { landingLoader } from "../loaders/landingLoader";
import Cocktail from "../pages/Cocktail";
import SinglePageError from "../components/SinglePageError";

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
      },
      {
        path: "/cocktail/:id",
        element: <Cocktail />,
      },
    ],
  },
]);
