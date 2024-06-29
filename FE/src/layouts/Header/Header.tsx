import { Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { AppBar } from "./styles";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useMemo } from "react";

type HeaderProps = {
  open?: boolean;
  handleDrawerOpen?: () => void;
};

const Header = (props: HeaderProps) => {
  const { open, handleDrawerOpen } = props;
  const { pathname } = useLocation();

  const isLandinPage = useMemo(() => pathname === "/landing", [pathname]);

  return (
    <Box flexGrow={1}>
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <Box display={"flex"} gap={2} flexGrow={1} alignItems={"center"}>
            {!isLandinPage && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{ mr: 2, ...(open && { display: "none" }) }}
              >
                <MenuIcon />
              </IconButton>
            )}
            <Box
              component="img"
              sx={{
                maxHeight: 60,
              }}
              alt="Jenkins Logo"
              src="../../../../public/Jenkins_logo.svg"
            />
            <Typography variant="h6" component="div">
              Jenkins Chatbot
            </Typography>
          </Box>
          <Box display={"flex"} gap={2}>
            <Button
              color="inherit"
              size="small"
              component={Link}
              to="https://summerofcode.withgoogle.com/"
            >
              GSoC
            </Button>
            <Button
              color="primary"
              variant="contained"
              size="small"
              component={Link}
              to="https://www.jenkins.io/"
            >
              Blog
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
