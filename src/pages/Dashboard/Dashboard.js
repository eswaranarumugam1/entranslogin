import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Paper,
  ImageList,
  ImageListItem,
  TextField,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { itemData } from "./ItemData";

export default function Home() {
  const [imageWidth, setImageWidth] = useState("150");
  const [imageHeight, setImageHeight] = useState("150");
  const [imageColumn, setImageColumn] = useState("6");
  const [imageZoomIn, setImageZoomIn] = useState("Zoom In");
  const [imageZoomState, setImageZoomState] = useState(true);
  const [pos, setPos] = useState({ x: 0, y: 0, scale: 1 });
  const handleOnChange = (event) => {
    event.preventDefault();
    if (event.currentTarget.name === "width") {
      setImageWidth(
        event.currentTarget.value > 0 ? event.currentTarget.value : "100"
      );
    } else {
      setImageHeight(
        event.currentTarget.value > 0 ? event.currentTarget.value : "150"
      );
    }
  };

  const onScroll = (e) => {
    const delta = e.deltaY * -0.01;
    console.log(delta);
    if (delta > 0) {
      setImageZoomIn("Zoom Out");
      setImageZoomState(false);
      setImageColumn("3");
    } else {
      setImageZoomIn("Zoom In");
      setImageZoomState(true);
      setImageColumn("6");
    }
  };

  const imageZooninfun = () => {
    if (imageZoomState) {
      setImageZoomIn("Zoom Out");
      setImageZoomState(false);
      setImageColumn("3");
    } else {
      setImageZoomIn("Zoom In");
      setImageZoomState(true);
      setImageColumn("6");
    }
  };

  return (
    <Container onWheelCapture={onScroll}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Button variant="contained" onClick={() => imageZooninfun()}>
            {imageZoomIn}
          </Button>
          <ImageList cols={imageColumn}>
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
