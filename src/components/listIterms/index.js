import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link, useNavigate } from "react-router-dom";
import { MENUS } from "../../pages/layout/menus";
import { useSelector } from "react-redux";

import "../../styles/app.css";

import LoginPage from "../../pages/auth/login";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { useDispatch } from "react-redux";
import { INITIATE_LOGOUT } from "../../redux/types/auth";

export default function MainListItems() {
  const [open, setOpen] = React.useState(false);
  const [logOut, setLogOut] = React.useState(false);

  function handleClick() {
    setOpen(!open);
  }
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginStatus = useSelector((state) => state.auth.isLoggedIn);

  const logoutt = () => {
    dispatch({ type: INITIATE_LOGOUT });
    if (!loginStatus || loginStatus) {
      navigate("/");
    }

    // dispatch({ type: INITIATE_LOGOUT });
  };
  return (
    <React.Fragment>
      {MENUS.map(({ path, Icon, title }) => (
        <ListItemButton component={Link} to={path}>
          <ListItemIcon>
            <Icon />
          </ListItemIcon>
          <ListItemText primary={title} />
        </ListItemButton>
      ))}
      <ListItemButton onClick={logoutt}>
        <ListItemIcon>
          <PowerSettingsNewIcon />
        </ListItemIcon>
        <ListItemText primary="Log Out" />
      </ListItemButton>
    </React.Fragment>
  );
}
