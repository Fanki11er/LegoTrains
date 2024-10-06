import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { legoSetRouterPath, userDashboardRouterPath } from "../routerPaths";
import UserDashboard from "../../Views/UserDashboard/UserDashboard";
import LegoSet from "../../Components/Organisms/LegoSet/LegoSet";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={userDashboardRouterPath} element={<UserDashboard />} />
        <Route path={legoSetRouterPath} element={<LegoSet />} />
        <Route path="*" element={<Navigate to={userDashboardRouterPath} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
