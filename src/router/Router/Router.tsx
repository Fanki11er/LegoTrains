import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import UserDashboard from "../../Views/UserDashboard/UserDashboard";
import LegoSet from "../../Components/Organisms/LegoSet/LegoSet";
import AccountRegistrationView from "../../Views/AccountRegistrationView/AccountRegistrationView";
import { paths } from "../routerPaths";
import AccountLoginFormView from "../../Views/AccountLoginFormView/AccountLoginFormView";
import AuthComponent from "../../Components/Molecules/AuthComponent/AuthComponent";
import ResetPasswordView from "../../Views/ResetPasswordView/ResetPasswordView";
import UpgradeAccountView from "../../Views/UpgradeAccountView/UpgradeAccountView";
import ErrorView from "../../Views/ErrrorView/ErrorView";

const {
  userDashboardRouterPath,
  legoSetRouterPath,
  accountRegistrationPath,
  loginPath,
  resetPasswordPath,
  upgradeAccountPath,
  errorPath,
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
        <Route path={resetPasswordPath} element={<ResetPasswordView />} />
        <Route element={<AuthComponent />}>
          <Route path={userDashboardRouterPath} element={<UserDashboard />} />
          <Route path={upgradeAccountPath} element={<UpgradeAccountView />} />
          <Route path={legoSetRouterPath} element={<LegoSet />} />
        </Route>
        <Route path={errorPath} element={<ErrorView />} />
        <Route path="*" element={<Navigate to={loginPath} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
