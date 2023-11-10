import { SearchFormWrapper } from "../styles/SearchForm.styled";
import { Form, useNavigation } from "react-router-dom";

type Props = { searchTerm: string };

const SearchForm = ({ searchTerm }: Props) => {
  const navigation = useNavigation();

  const isSearching = navigation.state === "submitting";

  return (
    <SearchFormWrapper>
      <Form className="form">
        <input type="search" name="search" className="form-input" defaultValue={searchTerm} />
        <button type="submit" disabled={isSearching} className="btn">
          {isSearching ? "searching..." : "search"}
        </button>
      </Form>
    </SearchFormWrapper>
  );
};
export default SearchForm;
