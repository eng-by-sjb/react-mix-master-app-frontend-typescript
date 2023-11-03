import {
  useRouteError,
  Link,
  isRouteErrorResponse,
  // type ErrorResponse,
} from "react-router-dom";
import img from "../assets/not-found.svg";
import { ErrorWrapper } from "../styles/Error.styled";

const Error = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error) && error.status === 404) {
    return (
      <ErrorWrapper>
        <div>
          <img src={img} alt={error.statusText} />
          <h3>Ohh!</h3>
          <p>We can't find the page you are looking for</p>
          <p>{error.statusText || error.data?.message}</p>
          <Link to="/">Return Home</Link>
        </div>
      </ErrorWrapper>
    );
  }

  return (
    <ErrorWrapper>
      <h3>Ops...</h3>
      <p>Something went wrong</p>
    </ErrorWrapper>
  );
};

export default Error;
