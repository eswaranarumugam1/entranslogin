import { Box, Container, Grid, Toolbar, Typography } from "@mui/material";
import MainListItems from "../../components/listIterms";
import React, { Fragment, useContext } from "react";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import styled from "@emotion/styled";
import MuiAppBar from "@mui/material/AppBar";
import MuiDrawer from "@mui/material/Drawer";
import { Outlet, useNavigate } from "react-router-dom";
import { TitleContext } from "../hoc/titleWraper/TitleProvider";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../redux/actions";
import { INITIATE_LOGOUT } from "../../redux/types/auth";

import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

const Sidebar = (props) => {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const drawerWidth = 240;

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

  const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    "& .MuiDrawer-paper": {
      position: "relative",
      whiteSpace: "nowrap",
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: "border-box",
      ...(!open && {
        overflowX: "hidden",
        transition: theme.transitions.create("width", {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up("sm")]: {
          width: theme.spacing(9),
        },
      }),
    },
  }));

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginStatus = useSelector((state) => state.auth.isLoggedIn);

  const logout = () => {
    dispatch({ type: INITIATE_LOGOUT });
    if (!loginStatus || loginStatus) {
      navigate("/");
    }
  };

  // const dispatch = useDispatch();
  // const Logout = () => {
  //   localStorage.removeItem("logintoken");
  //   dispatch(authActions.logOut());
  // };
  const { title } = useContext(TitleContext);
  return (
    <Fragment>
      <Box sx={{ display: "flex" }}>
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>

            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              {title}
            </Typography>
            {/* <button onClick={logout}>logout</button> */}
            <IconButton color="inherit" onClick={logout}>
              <PowerSettingsNewIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            {/* <Image src="\assets\img\chettinad-logo.png" alt="logo" /> */}
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            <MainListItems />
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            // height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Outlet />
          </Container>
        </Box>
      </Box>
    </Fragment>
  );
};

export default Sidebar;
