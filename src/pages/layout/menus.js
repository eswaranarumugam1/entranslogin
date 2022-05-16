import Dashboard from "../Dashboard/Dashboard";
import LogInSide from "../auth/login/";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

export const MENUS = [
  {
    path: "/dashboard",
    title: "Dashboard",
    Component: Dashboard,
    Icon: DashboardIcon,
  },
  // {
  //   path: "/",
  //   title: "LogOut",
  //   Component: LogInSide,
  //   Icon: PowerSettingsNewIcon,
  // },
];
