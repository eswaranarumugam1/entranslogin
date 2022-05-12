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

export const MultiSelectBox = forwardRef(
  ({ options, defaultValue, placeholder, label }, ref) => {
    return (
      <Autocomplete
        multiple
        //   limitTags={9}
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
