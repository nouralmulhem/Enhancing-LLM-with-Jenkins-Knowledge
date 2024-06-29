import Sidebar from "../layouts/Sidebar/Sidebar";
import Chatbot from "../layouts/Chatbot/Chatbot";

import { Box } from "@mui/material";
import { useState } from "react";
import Header from "../layouts/Header/Header";

const Dashboard = () => {
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box display={"flex"}>
      <Header open={open} handleDrawerOpen={handleDrawerOpen} />
      <Sidebar open={open} handleDrawerClose={handleDrawerClose} />
      <Chatbot open={open} />
    </Box>
  );
};

export default Dashboard;
