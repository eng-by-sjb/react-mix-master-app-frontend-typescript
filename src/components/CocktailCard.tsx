import { Link } from "react-router-dom";
import type { Drink } from "../types";

const CocktailCard = (props: Drink) => {
  const {
    idDrink: id,
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: info,
    strGlass: glass,
  } = props;

  return (
    <div>
      <div className="image-container">
        <img src={image} alt={`${name} image`} />
      </div>

      <div className="footer">
        <h4>{name}</h4>
        <h5>{glass}</h5>
        <p>{info}</p>
      </div>
      <Link to={`/cocktail/${id}`} className="btn btn-primary">
        Details
      </Link>
    </div>
  );
};
export default CocktailCard;
