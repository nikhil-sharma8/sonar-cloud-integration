import { useAuth0 } from "@auth0/auth0-react";
import "./index.css";
import { BasicButton } from "../BasicButtons";

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <>
      <div>
        <h1>
          Hi Welcome to the Person Management App! Please Login to Continue
        </h1>
        <BasicButton
          onClick={() => loginWithRedirect()}
          text={"Login"}
        ></BasicButton>
      </div>
    </>
  );
};
