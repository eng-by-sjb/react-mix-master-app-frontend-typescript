import { CocktailListWrapper } from "../styles/CocktailList.styled";
import { type Drink } from "../types";
import CocktailCard from "./CocktailCard";

type CocktailListProps = {
  drinks: Drink[] | undefined;
};
// type Cocktail = (props: { drinks: Drink[] }) => JSX.Element;

const CocktailList = ({ drinks }: CocktailListProps) => {
  if (drinks === null) {
    return <h3 style={{ textAlign: "center", fontSize: "2rem" }}>No matching drinks found</h3>;
  }

  drinks?.map;

  return (
    <CocktailListWrapper>
      {drinks?.map((drink) => {
        return <CocktailCard key={drink.idDrink} {...drink}></CocktailCard>;
      })}
    </CocktailListWrapper>
  );
};
export default CocktailList;
