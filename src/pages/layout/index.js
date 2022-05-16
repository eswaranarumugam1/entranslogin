import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
  Redirect,
} from "react-router-dom";
import LogInSide from "../auth/login/";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../../components/sidebar";
import Titlewraper from "../../components/hoc/titleWraper/TitleWraper";
import { MENUS } from "./menus";
import { getToken, getUser } from "../../utilz/auth";
import { authActions } from "../../redux/actions";
import { useEffect, useMemo, useState } from "react";
import Dashboard from "../Dashboard/Dashboard";
// import { Redirect } from "react-router";

const AppLayout = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LogInSide></LogInSide>}></Route>

        <Route exact path="/" element={<Sidebar></Sidebar>}>
          {MENUS.map(({ Component, title, path }) => (
            <Route
              exact
              path={path}
              element={<Titlewraper title={title} Component={Component} />}
            />
          ))}
          <Route path="*" element={<p>No route found</p>}></Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default AppLayout;
