import { useRouteError, isRouteErrorResponse } from "react-router-dom";

const SinglePageError = () => {
  const error = useRouteError();
  console.log(error);

  if (isRouteErrorResponse(error)) {
    return <div>SinglePageError</div>;
  }
  return <div>Some went wrong...</div>;
};
export default SinglePageError;
