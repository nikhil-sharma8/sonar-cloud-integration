import { Button as MuiButton, ButtonProps } from "@mui/material";

interface IBasicButtonProps extends ButtonProps {
  text: string;
}

export const Button: React.FC<IBasicButtonProps> = ({
  text,
  variant = "contained",
  ...props
}) => {
  return (
    <MuiButton {...props} variant={variant}>
      {text}
    </MuiButton>
  );
};
