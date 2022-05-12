import {
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from "@mui/material";
import { forwardRef } from "react";
import React, { useState } from "react";

export const FormInput = forwardRef(
  ({ name, type, onBlur, onChange, value, helperText, error, label }, ref) => {
    return (
      <FormControl fullWidth>
        <TextField
          type={type}
          margin="normal"
          label={label}
          name={name}
          ref={ref}
          helperText={helperText}
          error={error}
          inputProps={{
            onBlur,
            onChange,
            value: value === undefined ? "" : value,
          }}
        />
      </FormControl>
    );
  }
);
