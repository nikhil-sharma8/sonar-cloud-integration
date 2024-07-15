import { Button, ButtonProps } from "@mui/material";

interface IBasicButtonProps extends ButtonProps {
  text: string;
}

export const BasicButton: React.FC<IBasicButtonProps> = ({
  text,
  variant = "contained",
  ...props
}) => {
  return (
    <Button {...props} variant={variant}>
      {text}
    </Button>
  );
};
