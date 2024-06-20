export type RouteSchema = {
  name: string;
  key: string;
  route: string;
  component?: React.FunctionComponent;
};

export const routes: RouteSchema[] = [
  {
    name: "Main",
    key: "main",
    route: "/main",
  },
  {
    name: "Landging",
    key: "landing",
    route: "/landing",
  },
];
