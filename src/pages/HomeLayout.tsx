import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";
import { PageWrapper } from "../styles/Page.styled";

const HomeLayout = () => {
  const navigation = useNavigation();

  const isPageLoading = navigation.state === "loading";

  return (
    <>
      <Navbar></Navbar>
      <PageWrapper>
        {isPageLoading ? (
          <h1 style={{ textAlign: "center" }}>Loading...</h1>
        ) : (
          <Outlet></Outlet>
        )}
      </PageWrapper>
    </>
  );
};
export default HomeLayout;
