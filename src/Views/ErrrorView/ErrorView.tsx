import { useLocation } from "react-router-dom";
import ErrorFallback from "../../Components/Molecules/ErrorFallback/ErrorFallback";
import { paths } from "../../router/routerPaths";
import { ErrorViewWrapper, ReturnLink } from "./ErrorView.styles";
import useTrackPageView from "../../Hooks/useTrackPageView";

const ErrorView = () => {
  useTrackPageView("Error View");

  const location = useLocation();
  const message =
    location.state?.error || "Something went wrong. Please try again later.";
  return (
    <ErrorViewWrapper>
      <ErrorFallback message={message}>
        <ReturnLink to={paths.userDashboardRouterPath}>
          Return to dashboard
        </ReturnLink>
      </ErrorFallback>
    </ErrorViewWrapper>
  );
};

export default ErrorView;
