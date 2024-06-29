import { ListItem } from "@mui/material";
import { styled } from "@mui/material/styles";

interface ListItemProps {
  disablePadding?: boolean;
  contained?: string;
}

export const CustomListItem = styled(ListItem)<ListItemProps>(
  ({ theme, contained }) => ({
    backgroundColor:
      contained === "true" ? theme.palette.grey[900] : "transparent",
  })
);

export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "space-between",
}));
