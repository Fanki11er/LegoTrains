import { useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import { LogoutButton } from "../../Atoms/Buttons/Buttons.styles";
import { LogoutError, LogoutWrapper } from "./Logout.styles";

const Logout = () => {
  const [error, setError] = useState("");
  const { logOutUser } = useAuth();

  const handleLogout = () => {
    setError("");
    logOutUser().catch((err) => {
      setError(err.message);
    });
  };

  return (
    <LogoutWrapper>
      <LogoutButton onClick={() => handleLogout()}>Logout</LogoutButton>
      {error && <LogoutError>{error}</LogoutError>}
    </LogoutWrapper>
  );
};

export default Logout;
