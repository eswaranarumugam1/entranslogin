import * as React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import LoginForm from "../../../scenes/auth/loginForm";
import Box from "@mui/material/Box";

export default function logInSide() {
  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid item xs={12} sm={4} md={4} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 0,
            mx: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        ></Box>
      </Grid>
      <Grid item xs={12} sm={4} md={4} elevation={6} square>
        <Box
          sx={{
            my: 0,
            mx: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <LoginForm />
        </Box>
      </Grid>
      <Grid item xs={12} sm={4} md={4} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 0,
            mx: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        ></Box>
      </Grid>
    </Grid>
  );
}
