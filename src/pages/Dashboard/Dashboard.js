import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Paper,
  ImageList,
  ImageListItem,
  TextField,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { itemData } from "./ItemData";

export default function Home() {
  const [imageWidth, setImageWidth] = useState("150");
  const [imageHeight, setImageHeight] = useState("150");

  const handleOnChange = (event) => {
    event.preventDefault();
    if (event.currentTarget.name === "width") {
      setImageWidth(event.currentTarget.value);
    } else {
      setImageHeight(event.currentTarget.value);
    }
  };

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <ImageList cols={3}>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                  style={{
                    width: `${imageWidth}%`,
                    height: `${imageHeight}px`,
                  }}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Grid>
        <Grid xs={6}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="width"
            label="Enter Width"
            name="width"
            autoComplete="width"
            autoFocus
            onChange={handleOnChange}
            inputProps={{ maxLength: 2 }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="height"
            label="Enter height"
            name="height"
            autoComplete="height"
            autoFocus
            onChange={handleOnChange}
            inputProps={{ maxLength: 2 }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
