import { CocktailPageWrapper } from "../styles/CocktailPage.styled";
import { type Drink } from "../types";
import { useLoaderData, Link, Navigate } from "react-router-dom";

type LoaderData = {
  data: {
    drinks: Array<Drink>;
  };
  id: string;
};

const Cocktail = () => {
  const { data } = useLoaderData() as LoaderData;

  if (data.drinks === null) return <Navigate to="/"></Navigate>;

  const singleDrink = data.drinks[0];

  const {
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: info,
    strCategory: category,
    strGlass: glass,
    strInstructions: instructions,
  } = singleDrink;

  const ingredientsArr: [string, string][] = Object.entries(singleDrink).filter(([k, v]) => {
    return k.startsWith("strIngredient") && v !== null;
  });

  return (
    <CocktailPageWrapper>
      <header>
        <h1>{name}</h1>
        <div className="underline-div"></div>
      </header>

      <div className="drink">
        <img src={image} alt={`photo of ${name} drink`} className="img" />

        <div className="drink-info">
          <p>
            <span className="drink-data">name: </span>
            {name}
          </p>

          <p>
            <span className="drink-data">category: </span>
            {category}
          </p>

          <p>
            <span className="drink-data">info: </span>
            {info}
          </p>

          <p>
            <span className="drink-data">glass: </span>
            {glass}
          </p>

          <p>
            <span className="drink-data">ingredients: </span>
            {ingredientsArr.map((item, index) => {
              return (
                <span key={item[1]} className="ing">
                  {item[1]}
                  {index < ingredientsArr.length - 1 ? ", " : "."}
                </span>
              );
            })}
          </p>

          <p>
            <span className="drink-data">instructions: </span>
            {instructions}
          </p>
        </div>
      </div>

      <footer>
        <Link to="/" className="btn">
          Back Home
        </Link>
      </footer>
    </CocktailPageWrapper>
  );
};
export default Cocktail;
