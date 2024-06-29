import { Paper, styled } from "@mui/material";
import { drawerWidth } from "../../constants";

export const Container = styled(Paper)(({ theme }) => ({
  height: "100%",
  minWidth: "15%",
  margin: 30,
  backgroundColor: theme.palette.secondary.main,
  color: "white",
  display: "flex",
  flexDirection: "column",
  padding: 10,
  justifyContent: "center",
  alignItems: "center",
  gap: 20,
}));

export const Main = styled("main", {
  shouldForwardProp: (prop) => prop !== "open",
})<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  height: "85vh",
  width: "100%",
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));
