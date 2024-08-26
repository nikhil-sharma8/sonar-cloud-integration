import { useAuth0 } from "@auth0/auth0-react";
import "./index.css";
import { Button } from "../BasicButtons";

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <>
      <div>
        <h1>
          Hi Welcome to the Person Management App! Please Login to Continue
        </h1>
        <Button onClick={() => loginWithRedirect()} text={"Login"}></Button>
      </div>
    </>
  );
};
