import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import UserDashboard from "../../Views/UserDashboard/UserDashboard";
import LegoSet from "../../Components/Organisms/LegoSet/LegoSet";
import AccountRegistrationView from "../../Views/AccountRegistrationView/AccountRegistrationView";
import { paths } from "../routerPaths";
import AccountLoginFormView from "../../Views/AccountLoginFormView/AccountLoginFormView";

const {
  userDashboardRouterPath,
  legoSetRouterPath,
  accountRegistrationPath,
  loginPath,
} = paths;

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={accountRegistrationPath}
          element={<AccountRegistrationView />}
        />
        <Route path={loginPath} element={<AccountLoginFormView />} />
        <Route path={userDashboardRouterPath} element={<UserDashboard />} />
        <Route path={legoSetRouterPath} element={<LegoSet />} />
        <Route path="*" element={<Navigate to={accountRegistrationPath} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
