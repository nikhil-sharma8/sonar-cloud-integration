import React from "react";
import { TextField as MuiTextField } from "@mui/material";

interface IBasicTextFieldProps {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextField: React.FC<IBasicTextFieldProps> = ({
  label,
  value,
  onChange,
}) => {
  return (
    <MuiTextField
      label={label}
      value={value}
      onChange={onChange}
      required
      fullWidth
      margin="normal"
    />
  );
};

export default TextField;
