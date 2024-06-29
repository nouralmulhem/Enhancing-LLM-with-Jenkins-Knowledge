import Dashboard from "./pages/Dashboard";
import Landing from "./pages/Landing";

export type RouteSchema = {
  name: string;
  key: string;
  route: string;
  component?: React.FunctionComponent;
};

export const routes: RouteSchema[] = [
  {
    name: "Dashboard",
    key: "dashboard",
    route: "/dashboard/:chatId?",
    component: Dashboard,
  },
  {
    name: "Landging",
    key: "landing",
    route: "/landing",
    component: Landing,
  },
];
