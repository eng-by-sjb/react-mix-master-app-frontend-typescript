import { Link } from "react-router-dom";
import { type Drink } from "../types";
import { CocktailCardWrapper } from "../styles/CocktailCard.styled";

const CocktailCard = (props: Drink) => {
  const {
    idDrink: id,
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: info,
    strGlass: glass,
  } = props;

  return (
    <CocktailCardWrapper>
      <div className="image-container">
        <img src={image} alt={`${name} image`} />
      </div>

      <div className="footer">
        <div className="drink-name">
          <h4>{name}</h4>
          <div className="underline-div"></div>
        </div>

        <h5>{glass}</h5>
        <p>{info}</p>
        <Link to={`/cocktail/${id}`} className="btn btn-primary">
          details
        </Link>
      </div>
    </CocktailCardWrapper>
  );
};
export default CocktailCard;
