import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import LoginPage from "../auth/login/";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import Sidebar from "../../components/sidebar";
import Titlewraper from "../../components/hoc/titleWraper/TitleWraper";
import { MENUS } from "./menus";

const AppLayout = () => {
  const loginStatus = useSelector((state) => state.auth.isLoggedIn);

  return (
    <Router>
      <LayoutWithoutLogin loginStatus={loginStatus} />
      <LayoutWithLogin loginStatus={loginStatus} />
    </Router>
  );
};

const LayoutWithoutLogin = ({ loginStatus }) => {
  let location = useLocation();
  if (!loginStatus) {
    if (location.pathname !== "/") {
      return <Navigate to="/" />;
    }
    return (
      <Routes>
        <Route exact path="/" element={<LoginPage />}></Route>
      </Routes>
    );
  } else {
    return <Fragment></Fragment>;
  }
};

const LayoutWithLogin = ({ loginStatus }) => {
  if (loginStatus) {
    return (
      <Fragment>
        <Routes>
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
      </Fragment>
    );
  } else {
    return <Fragment></Fragment>;
  }
};

export default AppLayout;
