import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import UserDashboard from "../../Views/UserDashboard/UserDashboard";
import LegoSet from "../../Components/Organisms/LegoSet/LegoSet";
import AccountRegistrationView from "../../Views/AccountRegistrationView/AccountRegistrationView";
import { paths } from "../routerPaths";
import AccountLoginFormView from "../../Views/AccountLoginFormView/AccountLoginFormView";
import RequireAuthComponent from "../../Components/Molecules/RequireAuthComponent/RequireAuthComponent";
import ResetPasswordView from "../../Views/ResetPasswordView/ResetPasswordView";
import UpgradeAccountView from "../../Views/UpgradeAccountView/UpgradeAccountView";
import ErrorView from "../../Views/ErrrorView/ErrorView";
import LandingView from "../../Views/LandingView/LandingView";
import RedirectAuthenticatedUserComponent from "../../Components/Molecules/RedirectAuthenticatedUserComponent/RedirectAuthenticatedUserComponent";

const {
  userDashboardRouterPath,
  legoSetRouterPath,
  accountRegistrationPath,
  loginPath,
  resetPasswordPath,
  upgradeAccountPath,
  errorPath,
  rootPath,
} = paths;

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={rootPath} element={<LandingView />} />
        <Route
          path={accountRegistrationPath}
          element={<AccountRegistrationView />}
        />

        <Route element={<RedirectAuthenticatedUserComponent />}>
          <Route path={loginPath} element={<AccountLoginFormView />} />
          <Route path={resetPasswordPath} element={<ResetPasswordView />} />
        </Route>

        <Route element={<RequireAuthComponent />}>
          <Route path={userDashboardRouterPath} element={<UserDashboard />} />
          <Route path={upgradeAccountPath} element={<UpgradeAccountView />} />
          <Route path={legoSetRouterPath} element={<LegoSet />} />
        </Route>
        <Route path={errorPath} element={<ErrorView />} />
        <Route path="*" element={<Navigate to={rootPath} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
