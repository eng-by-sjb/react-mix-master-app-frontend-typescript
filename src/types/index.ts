export type Drink = {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  strAlcoholic: string;
  strGlass: string;
  strInstructions?: string;
  strIngredient1?: string;
  strIngredient2?: string;
  strIngredient3?: string;
  strCategory?: string;
};

export type Drinks = Pick<
  Drink,
  "idDrink" | "strAlcoholic" | "strDrink" | "strDrinkThumb" | "strGlass"
>[];
