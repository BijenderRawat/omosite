import { Outlet, useSearchParams } from "react-router-dom";
import HomePageHeader from "./HomePageHeader";
import SubNavigation from "../../navigation/js/SubNavigation";
import Careers from "../../careers/js/Careers";

const HomePage = () => {
  const [searchParams] = useSearchParams();
  const onHome = searchParams.get("/") === "home";
  return (
    <>
      <HomePageHeader />
      {onHome ? <Careers /> : <Outlet />}
      <SubNavigation />
    </>
  );
};

export default HomePage;
