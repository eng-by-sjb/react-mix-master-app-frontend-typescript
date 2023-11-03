import { CocktailListWrapper } from "../styles/CocktailList.styled";
import { type Drink } from "../types";
import CocktailCard from "./CocktailCard";

type CocktailListProps = {
  drinks: Drink[];
};
// type Cocktail = (props: { drinks: Drink[] }) => JSX.Element;

const CocktailList = ({ drinks }: CocktailListProps) => {
  if (drinks.length === 0) {
    return <p style={{ textAlign: "center" }}>No matching drinks found</p>;
  }

  return (
    <CocktailListWrapper>
      {drinks.map((drink) => {
        return <CocktailCard key={drink.idDrink} {...drink}></CocktailCard>;
      })}
    </CocktailListWrapper>
  );
};
export default CocktailList;
