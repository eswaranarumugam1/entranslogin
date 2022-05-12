import {
  Autocomplete,
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

export const SelectBox = forwardRef(
  (
    {
      name,
      type,
      onBlur,
      onChange,
      value,
      helperText,
      error,
      label,
      options,
      defaultValue,
      placeholder,
    },
    ref
  ) => {
    return (
      <Autocomplete
        // multiple
        limitTags={1}
        id="multiple-limit-tags"
        options={options}
        getOptionLabel={(option) => option.text}
        defaultValue={defaultValue}
        renderInput={(params) => (
          <TextField {...params} label={label} placeholder={placeholder} />
        )}
        sx={{ width: "100%" }}
      />
    );
  }
);
