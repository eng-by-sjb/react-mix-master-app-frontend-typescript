import { CocktailListWrapper } from "../styles/CocktailList.styled";
import type { Drink } from "../types";
import CocktailCard from "./CocktailCard";

type CocktailListProps = {
  drinks: Drink[];
};

const CocktailList = ({ drinks }: CocktailListProps) => {
  return (
    <CocktailListWrapper>
      {drinks.map((drink) => {
        return <CocktailCard key={drink.idDrink} {...drink}></CocktailCard>;
      })}
    </CocktailListWrapper>
  );
};
export default CocktailList;
