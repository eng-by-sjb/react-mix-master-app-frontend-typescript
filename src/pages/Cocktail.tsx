import { type Drink } from "../types";
import { useLoaderData, Link } from "react-router-dom";

type LoaderData = { data: { drinks: Array<Drink> }; id: string };

const Cocktail = () => {
  const { id, data } = useLoaderData() as LoaderData;

  console.log(id);
  console.log(data.drinks[0].strAlcoholic);

  return <div>Cocktail</div>;
};
export default Cocktail;
