import React from "react";
import { TextField } from "@mui/material";

interface IBasicTextFieldProps {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const BasicTextField: React.FC<IBasicTextFieldProps> = ({
  label,
  value,
  onChange,
}) => {
  return (
    <TextField
      label={label}
      value={value}
      onChange={onChange}
      required
      fullWidth
      margin="normal"
    />
  );
};

export default BasicTextField;
