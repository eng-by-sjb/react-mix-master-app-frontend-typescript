import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { PageWrapper } from "../styles/Page.styled";

const HomeLayout = () => {
  return (
    <>
      <Navbar></Navbar>
      <PageWrapper>
        <Outlet></Outlet>
      </PageWrapper>
    </>
  );
};
export default HomeLayout;
